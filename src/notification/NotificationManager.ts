import { NotificationConfig } from './NotificationConfig';
import { Notification, NotificationParameters } from './Notification';

import NotifierEmail from './NotifierEmail';
import { NotifierEmailMailer } from './NotifierEmailMailer';
import { EmailNotificationDetails } from './EmailNotificationDetails';

export class NotificationManager {
  private emailNotifier: NotifierEmail | null = null;

  constructor(notificationConfig: NotificationConfig | null) {
    if (notificationConfig) {
      if (notificationConfig.email) {
        if (notificationConfig.email.smtp) {
          this.emailNotifier = new NotifierEmailMailer(
            notificationConfig.email.sender,
            notificationConfig.email.receivers,
            notificationConfig.email.smtp.smtpHost,
            notificationConfig.email.smtp.smtpPort,
            notificationConfig.email.smtp.smtpSecure,
            notificationConfig.email.smtp.smtpUser,
            notificationConfig.email.smtp.smtpPass,
          );
        }
      }
    }
  }

  public async notify(notificationId: Notification, params: NotificationParameters) {
    if (this.emailNotifier) await this.notifyViaEmail(notificationId, params);
  }


  //----------------------------------------------------------------------------------------
  // Internal Implementation Details
  //----------------------------------------------------------------------------------------

  private async notifyViaEmail(notificationId: Notification, params: NotificationParameters) {
    const details = EmailNotificationDetails.getDetails(notificationId, params);
    if (details) {
      await this.emailNotifier!.send(details.subject, details.bodyHtml, details.bodyText);
    }
  }
}
