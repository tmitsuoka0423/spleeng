import * as crypto from "crypto";

export default class Authenticator {
  static verify(xLineSignature: string, body: string): boolean {
    if (!xLineSignature || !body) {
      return false;
    }

    const signature = crypto
      .createHmac("SHA256", process.env.LINE_CHANNEL_SECRET)
      .update(body)
      .digest("base64");

    return xLineSignature === signature;
  }
}
