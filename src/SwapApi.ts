import { Web3 } from 'web3';
import BigNumber from 'bignumber.js';

import TokenABI from './abis/Erc20ABI';
import PoolABI from './abis/PoolABI';
import QuoterABI from './abis/QuoterABI';
import SwapRouterABI from './abis/SwapRouterABI';

const MAX_UINT256 = BigInt("115792089237316195423570985008687907853269984665640564039457584007913129639935");

export class SwapApi {
  private web3: Web3;
  private poolContractAddr: string;
  private quoterContractAddr: string;
  private swapRouterContractAddr: string;

  constructor(walletPrivateKey: string, apiUrl: string, poolContractAddr: string,
    quoterContractAddr: string, swapRouterContractAddr: string) {

    this.web3 = new Web3(apiUrl);
    this.web3.eth.accounts.wallet.add(walletPrivateKey);

    this.poolContractAddr = poolContractAddr;
    this.quoterContractAddr = quoterContractAddr;
    this.swapRouterContractAddr = swapRouterContractAddr;
  }

  async getTokenDecimals(tokenAddr: string): Promise<bigint> {
    const tokenContract = new this.web3.eth.Contract(TokenABI.abi, tokenAddr);
    return await tokenContract.methods['decimals']().call();
  }

  private inverseOfSqrt(n: BigNumber): BigNumber {
    return BigNumber(1).dividedBy(n.sqrt());
  }

  async getTargetTokenAmountToTrade(targetPrice: number, priceTolerance: number): Promise<bigint> {
    const poolContract = new this.web3.eth.Contract(PoolABI.abi, this.poolContractAddr);

    const token0 = await poolContract.methods['token0']().call();
    console.log("getTargetTokenAmountToTrade: token0 = " + token0.toString());

    const token1 = await poolContract.methods['token1']().call();
    console.log("getTargetTokenAmountToTrade: token1 = " + token1.toString());

    const liquidityBigInt = await poolContract.methods['liquidity']().call();
    const liquidity = BigNumber(liquidityBigInt.toString());
    console.log("getTargetTokenAmountToTrade: liquidity = " + liquidity.toString());

    const slot0 = await poolContract.methods['slot0']().call();
    const sqrtPriceX96 = BigNumber(slot0.sqrtPriceX96.toString());
    console.log("getTargetTokenAmountToTrade: sqrtPriceX96 = " + sqrtPriceX96.toString());

    const inverseOfSqrt = (n: BigNumber) => BigNumber(1).dividedBy(n.sqrt());

    // Calculate current price (amount of base token for a single target token)
    const currentPrice = sqrtPriceX96.pow(2).dividedBy(BigNumber(2).pow(192));
    console.log("getTargetTokenAmountToTrade: currentPrice = " + currentPrice.toString());

    const lowerBoundary = BigNumber(targetPrice).times(1 - priceTolerance);
    console.log("getTargetTokenAmountToTrade: lowerBoundary = " + lowerBoundary.toString());
    if (lowerBoundary.comparedTo(currentPrice) > 0) {
      //const amountBn = liquidity.times(inverseOfSqrt(currentPrice).minus(inverseOfSqrt(BigNumber(targetPrice))));
      const amountBn = liquidity.times(inverseOfSqrt(currentPrice).minus(inverseOfSqrt(lowerBoundary)));
      return BigInt(amountBn.integerValue(BigNumber.ROUND_UP).toNumber());
    }

    const upperBoundary = BigNumber(targetPrice).times(1 + priceTolerance);
    console.log("getTargetTokenAmountToTrade: upperBoundary = " + upperBoundary.toString());
    if (upperBoundary.comparedTo(currentPrice) < 0) {
      //const amountBn = liquidity.times(inverseOfSqrt(currentPrice).minus(inverseOfSqrt(BigNumber(targetPrice))));
      const amountBn = liquidity.times(inverseOfSqrt(currentPrice).minus(inverseOfSqrt(upperBoundary)));
      return BigInt(amountBn.integerValue(BigNumber.ROUND_UP).toNumber());
    }

    return BigInt(0);
  }

  async getTokenBalance(tokenAddr: string): Promise<bigint> {
    const tokenContract = new this.web3.eth.Contract(TokenABI.abi, tokenAddr);

    const walletAddr = this.web3.eth.accounts.wallet.at(0)!.address;
    console.log("getTokenBalance: walletAddr = " + walletAddr);

    return await tokenContract.methods['balanceOf'](walletAddr).call();
  }

  async getAllowance(tokenAddr: string, spenderAddr: string): Promise<bigint> {
    const tokenContract = new this.web3.eth.Contract(TokenABI.abi, tokenAddr);

    const walletAddr = this.web3.eth.accounts.wallet.at(0)!.address;
    console.log("getAllowance: walletAddr = " + walletAddr);

    return await tokenContract.methods['allowance'](walletAddr, this.swapRouterContractAddr).call();
  }

  async approve(tokenAddr: string, amount: bigint): Promise<void> {
    const tokenContract = new this.web3.eth.Contract(TokenABI.abi, tokenAddr);

    const walletAddr = this.web3.eth.accounts.wallet.at(0)!.address;
    console.log("approve: walletAddr = " + walletAddr);

    const func = await tokenContract.methods['approve'](this.swapRouterContractAddr, amount);

    const estimatedGas = await func.estimateGas({ from: walletAddr });
    console.log("approve: estimatedGas = " + estimatedGas.toString());

    const tx = await func.send({
      from: walletAddr,
      gas: estimatedGas.toString(),
    });
    console.log("approve: txHash = " + tx.transactionHash);
  }

  async quoteExactInputSingle(tokenIn: string, tokenOut: string, poolFee: number, amountIn: bigint)
    : Promise<bigint> {

    const quoterContract = new this.web3.eth.Contract(QuoterABI.abi, this.quoterContractAddr);

    const result = await quoterContract.methods['quoteExactInputSingle']({
      tokenIn: tokenIn,
      tokenOut: tokenOut,
      amountIn: amountIn,
      fee: poolFee,
      sqrtPriceLimitX96: 0,
    }).call();

    return BigInt(result.amountOut);
  }

  async quoteExactOutputSingle(tokenIn: string, tokenOut: string, poolFee: number, amountOut: bigint)
    : Promise<bigint> {

    const quoterContract = new this.web3.eth.Contract(QuoterABI.abi, this.quoterContractAddr);

    const result = await quoterContract.methods['quoteExactOutputSingle']({
      tokenIn: tokenIn,
      tokenOut: tokenOut,
      amount: amountOut,
      fee: poolFee,
      sqrtPriceLimitX96: 0,
    }).call();

    return BigInt(result.amountIn);
  }

  async swapExactInputSingle(tokenIn: string, tokenOut: string, poolFee: number, amountIn: bigint,
    amountOutMin: bigint): Promise<void> {
    const swapRouterContract = new this.web3.eth.Contract(SwapRouterABI.abi, this.swapRouterContractAddr);

    const walletAddr = this.web3.eth.accounts.wallet.at(0)!.address;
    console.log("swapExactInputSingle: walletAddr = " + walletAddr);

    const allowance = await this.getAllowance(tokenIn, this.swapRouterContractAddr);
    console.log("allowance = " + allowance.toString());

    if (allowance < amountIn) {
      //await this.approve(tokenIn, amountIn);
      // To reduce the number of approvals (gas cost)
      await this.approve(tokenIn, MAX_UINT256);
    }

    const func = swapRouterContract.methods['exactInputSingle']({
      tokenIn: tokenIn,
      tokenOut: tokenOut,
      fee: poolFee,
      recipient: walletAddr,
      amountIn: amountIn,
      amountOutMinimum: amountOutMin,
      sqrtPriceLimitX96: 0
    });

    let estimatedGas: string;
    try {
      const funcResult = await func.estimateGas({ from: walletAddr });
      console.log("swapExactInputSingle: estimatedGas succeeded");
      estimatedGas = funcResult.toString();
    }
    catch (e: any) {
      console.log("swapExactInputSingle: estimatedGas failed");
      estimatedGas = '1000000';
    }
    console.log("swapExactInputSingle: estimatedGas = " + estimatedGas);

    const tx = await func.send({
      from: walletAddr,
      gas: estimatedGas,
    });
    console.log("swapExactInputSingle: txHash = " + tx.transactionHash);
  }

  async swapExactOutputSingle(tokenIn: string, tokenOut: string, poolFee: number, amountOut: bigint,
    amountInMax: bigint): Promise<void> {
    const swapRouterContract = new this.web3.eth.Contract(SwapRouterABI.abi, this.swapRouterContractAddr);

    const walletAddr = this.web3.eth.accounts.wallet.at(0)!.address;
    console.log("swapExactOutputSingle: walletAddr = " + walletAddr);

    const allowance = await this.getAllowance(tokenIn, this.swapRouterContractAddr);
    console.log("allowance = " + allowance.toString());

    if (allowance < amountInMax) {
      //await this.approve(tokenIn, amountInMax);
      // To reduce the number of approvals (gas cost)
      await this.approve(tokenIn, MAX_UINT256);
    }

    const func = swapRouterContract.methods['exactOutputSingle']({
      tokenIn: tokenIn,
      tokenOut: tokenOut,
      fee: poolFee,
      recipient: walletAddr,
      amountInMaximum: amountInMax,
      amountOut: amountOut,
      sqrtPriceLimitX96: 0
    });

    let estimatedGas: string;
    try {
      const funcResult = await func.estimateGas({ from: walletAddr });
      console.log("swapExactOutputSingle: estimatedGas succeeded");
      estimatedGas = funcResult.toString();
    }
    catch (e: any) {
      console.log("swapExactOutputSingle: estimatedGas failed");
      estimatedGas = '1000000';
    }
    console.log("swapExactOutputSingle: estimatedGas = " + estimatedGas);

    const tx = await func.send({
      from: walletAddr,
      gas: estimatedGas,
    });
    console.log("swapExactOutputSingle: txHash = " + tx.transactionHash);
  }
}
