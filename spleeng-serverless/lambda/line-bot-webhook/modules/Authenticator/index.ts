const crypto = require('crypto');

const channelSecret = '...'; // Channel secret string
const body = '...'; // Request body string
const signature = crypto
  .createHmac('SHA256', channelSecret)
  .update(body).digest('base64');
// Compare X-Line-Signature request header and the signature

export default class Authenticator {
  public static verify(signature: string): boolean {
    return true;
  }
}