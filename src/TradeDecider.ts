import BigNumber from 'bignumber.js';

import Log from './log/Log';
import { TradeAction } from './TradeAction';
import { SwapApi } from './SwapApi';
import { NotificationManager } from './notification/NotificationManager';

export class TradeDecider {
  private swapApi: SwapApi;
  private notiMan: NotificationManager;
  private baseToken: string;
  private targetToken: string;
  private poolFee: number;
  private targetPrice: number;
  private priceTolerance: number;

  constructor(swapApi: SwapApi, notiMan: NotificationManager, baseToken: string, targetToken: string,
    poolFee: number, targetPrice: number, priceTolerance: number) {

    this.swapApi = swapApi;
    this.notiMan = notiMan;
    this.baseToken = baseToken;
    this.targetToken = targetToken;
    this.poolFee = poolFee;
    this.targetPrice = targetPrice;
    this.priceTolerance = priceTolerance;
  }

  async decide(): Promise<TradeAction | null> {
    const tradeAmount = await this.swapApi.getTargetTokenAmountToTrade(this.targetPrice, this.priceTolerance);
    Log.info(`decide: tradeAmount = ${tradeAmount.toString()}`);

    // No need to trade
    if (tradeAmount == BigInt(0)) return null;

    const tradeAmountBn = BigNumber(tradeAmount.toString());

    // To make sure the final price will fall within the range (lowerBound..upperBound).
    const adjustedPoolFee = this.poolFee * 1.1;
    Log.debug(`decide: adjustedPoolFee = ${adjustedPoolFee.toString()}`);

    // adjustedAmount shall be always positive
    const adjustedAmount = tradeAmountBn.dividedBy(1 - adjustedPoolFee / 1000000);
    Log.info(`decide: adjustedAmount = ${adjustedAmount.toString()}`);

    return {
      isSell: tradeAmount < 0 ? true : false,
      tradeAmount: BigInt(adjustedAmount.integerValue(BigNumber.ROUND_UP).abs().toNumber()),
    };
  }
}
