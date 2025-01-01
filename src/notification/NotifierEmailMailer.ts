import { createTransport, Transporter } from 'nodemailer';
import Log from '../log/Log';
import NotifierEmail from './NotifierEmail';

export class NotifierEmailMailer implements NotifierEmail {
  private sender: string;
  private receivers: string[];
  private transporter: Transporter;

	constructor(sender: string, receivers: string[], smtpHost: string, smtpPort: number, smtpSecure: boolean,
    smtpUser: string, smtpPass: string) {

    this.sender = sender;
    this.receivers = receivers;
    this.transporter = createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass, 
      },
    });
	}

	async send(subject: string, bodyHtml: string, bodyText: string) {
    const mailOptions = {
      from: this.sender,
      to: this.receivers,
      subject: subject,
      text: bodyText,
      html: bodyHtml,
    };

		await new Promise((resolve: (v: void) => void, reject: (r: void) => void) => {
      this.transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
			    Log.error(`error from sending email: ${error}`);
        }
        else {
			    Log.info("email sent");
        }
        resolve();    // reject not called in any cases
      });
    });
	}
}
