export enum Notification {
  TRADE_EXECUTED,
}

export interface NotificationParameters<T = any> {
  [key: string]: T;
}
