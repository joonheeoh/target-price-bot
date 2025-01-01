export interface SmtpEmailNotificationConfig {
  readonly smtpHost: string;
  readonly smtpPort: number;
  readonly smtpSecure: boolean;
  readonly smtpUser: string;
  readonly smtpPass: string;
}

export interface AwsEmailNotificationConfig {
  readonly awsRegion: string;
  readonly accessKeyId: string;
  readonly secretAccessKey: string;
}

export interface EmailNotificationConfig {
  readonly sender: string;
  readonly receivers: string[];
  readonly smtp?: SmtpEmailNotificationConfig;
  readonly aws?: AwsEmailNotificationConfig;
}

export interface NotificationConfig {
  readonly email: EmailNotificationConfig;
}
