import { Config } from './Config';
import Log from './log/Log';

import { SwapApi } from './SwapApi';
import { NotificationManager } from './notification/NotificationManager';

import { TradeDecider } from './TradeDecider';
import { TradeExecutor } from './TradeExecutor';

const configFileName = process.argv[2];

let swapApi: SwapApi;
let notiMan: NotificationManager;

let tradeDecider: TradeDecider;
let tradeExecutor: TradeExecutor;

async function runTask() {
  Log.info("runTask: begin");

  while (true) {
    const tradeAction = await tradeDecider.decide();
    if (!tradeAction) break;

    await tradeExecutor.execute(tradeAction);
  }
  Log.info("runTask: end");
}

async function runTaskRepeatedly() {
  try {
    await runTask();
  }
  catch (e) {
    Log.error("runTaskRepeatedly: exception = " + e);
  }
  setTimeout(runTaskRepeatedly, Config.getTaskPeriodInMs());
}

async function main() {
  try {
    if (!configFileName || !Config.load(configFileName)) {
      Log.error("main: failed to load the config");
      // return without scheduling for next run, terminate the process
      return;
    }

    swapApi = new SwapApi(
      Config.getWalletPrivateKey(),
      Config.getChainApiUrl(),
      Config.getPoolContractAddr(),
      Config.getQuoterContractAddr(),
      Config.getSwapRouterContractAddr(),
    );
    notiMan = new NotificationManager(Config.getNotificationConfig());

    tradeDecider = new TradeDecider(swapApi, notiMan, Config.getBaseToken(), Config.getTargetToken(),
      Config.getPoolFee(), Config.getTargetPrice(), Config.getPriceTolerance());

    tradeExecutor = new TradeExecutor(swapApi, notiMan, Config.getBaseToken(), Config.getTargetToken(),
      Config.getPoolFee());

    await runTaskRepeatedly();
  }
  catch (e) {
    Log.error("main: exception = " + e);
  }
}

main();
