export default interface NotifierEmail {
  send(subject: string, bodyHtml: string, bodyText: string): Promise<void>;
}
