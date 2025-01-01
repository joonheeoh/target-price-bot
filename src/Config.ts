import fs from 'fs';
import Log from './log/Log';
import { NotificationConfig } from './notification/NotificationConfig';

export class Config {
  private static taskPeriodInMs: number;
  private static walletPrivateKey: string;
  private static chainApiUrl: string;
  private static baseToken: string;
  private static targetToken: string;
  private static poolFee: number;
  private static poolContractAddr: string;
  private static quoterContractAddr: string;
  private static swapRouterContractAddr: string;
  private static targetPrice: number;
  private static priceTolerance: number;
  private static notificationConfig: NotificationConfig | null;

  private static lastLoadTime: number;


  ///////////////////////////////////////////////////////////////////////////////
  //
  // External APIs
  //
  ///////////////////////////////////////////////////////////////////////////////

  public static getTaskPeriodInMs(): number {
    return Config.taskPeriodInMs;
  }

  public static getWalletPrivateKey(): string {
    return Config.walletPrivateKey;
  }

  public static getChainApiUrl(): string {
    return Config.chainApiUrl;
  }

  public static getBaseToken(): string {
    return Config.baseToken;
  }

  public static getTargetToken(): string {
    return Config.targetToken;
  }

  public static getPoolFee(): number {
    return Config.poolFee;
  }

  public static getPoolContractAddr(): string {
    return Config.poolContractAddr;
  }

  public static getQuoterContractAddr(): string {
    return Config.quoterContractAddr;
  }

  public static getSwapRouterContractAddr(): string {
    return Config.swapRouterContractAddr;
  }

  public static getTargetPrice(): number {
    return Config.targetPrice;
  }

  public static getPriceTolerance(): number {
    return Config.priceTolerance;
  }

  public static getNotificationConfig(): NotificationConfig | null {
    return Config.notificationConfig;
  }

  public static getLastLoadTime(): number {
    return Config.lastLoadTime;
  }

  public static load(configFileName: string): boolean {
    const configData = Config.readJsonFromFile(configFileName);
    if (!configData) return false;

    if (typeof configData.taskPeriodInMs != 'number') {
      Log.error("invalid task period in the config");
      return false;
    }
    Config.taskPeriodInMs = configData.taskPeriodInMs;

    if (typeof configData.walletPrivateKey != 'string') {
      Log.error("invalid wallet private key in the config");
      return false;
    }
    Config.walletPrivateKey = configData.walletPrivateKey;

    if (typeof configData.chainApiUrl != 'string') {
      Log.error("invalid chain API URL in the config");
      return false;
    }
    Config.chainApiUrl = configData.chainApiUrl;

    if (typeof configData.baseToken != 'string') {
      Log.error("invalid base token in the config");
      return false;
    }
    Config.baseToken = configData.baseToken;

    if (typeof configData.targetToken != 'string') {
      Log.error("invalid target token in the config");
      return false;
    }
    Config.targetToken = configData.targetToken;

    if (typeof configData.poolFee != 'number') {
      Log.error("invalid pool fee in the config");
      return false;
    }
    Config.poolFee = configData.poolFee;

    if (typeof configData.poolContractAddr != 'string') {
      Log.error("invalid pool contract address in the config");
      return false;
    }
    Config.poolContractAddr = configData.poolContractAddr;

    if (typeof configData.quoterContractAddr != 'string') {
      Log.error("invalid quoter contract address in the config");
      return false;
    }
    Config.quoterContractAddr = configData.quoterContractAddr;

    if (typeof configData.swapRouterContractAddr != 'string') {
      Log.error("invalid swap router contract address in the config");
      return false;
    }
    Config.swapRouterContractAddr = configData.swapRouterContractAddr;

    if (typeof configData.targetPrice != 'number') {
      Log.error("invalid target price in the config");
      return false;
    }
    Config.targetPrice = configData.targetPrice;

    if (typeof configData.priceTolerance != 'number') {
      Log.error("invalid price tolerance in the config");
      return false;
    }
    Config.priceTolerance = configData.priceTolerance;

    if (typeof configData.notificationConfig != 'object') Config.notificationConfig = null;
    else Config.notificationConfig = configData.notificationConfig;

    Config.lastLoadTime = Date.now();
    return true;
  }


  ///////////////////////////////////////////////////////////////////////////////
  //
  // Internal Functions
  //
  ///////////////////////////////////////////////////////////////////////////////

  private static readJsonFromFile(path: string): any {
    try {
      Log.info("readJsonFromFile: path = " + path);
      const data = fs.readFileSync(path, 'utf8');
      const parsed = JSON.parse(data.toString());
      Log.info("readJsonFromFile: parsed = " + JSON.stringify(parsed));
      return parsed;
    }
    catch (e) {
      Log.error("readJsonFromFile: exception = " + e);
      return null;
    }
  }
}
