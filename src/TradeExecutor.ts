import Log from './log/Log';
import { TradeAction } from './TradeAction';
import { SwapApi } from './SwapApi';
import { Notification } from './notification/Notification';
import { NotificationManager } from './notification/NotificationManager';

export class TradeExecutor {
  private swapApi: SwapApi;
  private notiMan: NotificationManager;
  private baseToken: string;
  private targetToken: string;
  private poolFee: number;

  constructor(swapApi: SwapApi, notiMan: NotificationManager, baseToken: string, targetToken: string,
    poolFee: number) {

    this.swapApi = swapApi;
    this.notiMan = notiMan;
    this.baseToken = baseToken;
    this.targetToken = targetToken;
    this.poolFee = poolFee;
  }

  async execute(tradeAction: TradeAction | null) {
    if (!tradeAction) return;

    const slippage = 10;

    if (tradeAction!.isSell) {
      Log.info(`About to sell target token`);
      const amountIn = tradeAction!.tradeAmount;
      const amountOutEst = await this.swapApi.quoteExactInputSingle(this.targetToken, this.baseToken,
        this.poolFee, amountIn);
      const amountOutMin = amountOutEst * BigInt(100 - slippage) / BigInt(100);
      Log.info(`amountIn = ${amountIn.toString()}, amountOutEst = ${amountOutEst.toString()}, ` +
        `amountOutMin = ${amountOutMin.toString()}`);

      await this.swapApi.swapExactInputSingle(this.targetToken, this.baseToken, this.poolFee,
        amountIn, amountOutMin);
    }
    else {
      Log.info(`About to buy target token`);
      const amountOut = tradeAction!.tradeAmount;
      const amountInEst = await this.swapApi.quoteExactOutputSingle(this.baseToken, this.targetToken,
        this.poolFee, amountOut);
      const amountInMax = amountInEst * BigInt(100 + slippage) / BigInt(100);
      Log.info(`amountOut = ${amountOut.toString()}, amountInEst = ${amountInEst.toString()}, ` +
        `amountInMax = ${amountInMax.toString()}`);

      await this.swapApi.swapExactOutputSingle(this.baseToken, this.targetToken, this.poolFee,
        amountOut, amountInMax);
    }

    await this.notiMan.notify(Notification.TRADE_EXECUTED, {
      isSell: tradeAction!.isSell,
      amount: tradeAction!.tradeAmount,
    });
  }
}
