import { Notification, NotificationParameters } from './Notification';

export class EmailNotificationDetails {
  public subject: string;
  public bodyHtml: string;
  public bodyText: string;

  constructor(subject: string, bodyHtml: string, bodyText: string) {
    this.subject = subject;
    this.bodyHtml = bodyHtml;
    this.bodyText = bodyText;
  }

  public static getDetails(notificationId: Notification, params: NotificationParameters)
    : EmailNotificationDetails | null {

    if (notificationId == Notification.TRADE_EXECUTED) {
      return new EmailNotificationDetails(
        `Trade Executed (${params.isSell ? 'SELL' : 'BUY'})`,
        `<p>Trade Amount: ${params.amount ? params.amount : 0}</p>`,
        `Trade Amount: ${params.amount ? params.amount : 0}`,
      );
    }

    // Unknown notification ID (shall not happen)
    return null;
  }
}
