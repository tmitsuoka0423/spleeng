import { Client } from "@line/bot-sdk";
import Authenticator from "./modules/Authenticator";
import EventHandlerFactory from "./modules/EventHandlerFactory";

export async function handler(event: any) {
  console.log(JSON.stringify(event));

  if (!Authenticator.verify(event.headers["X-Line-Signature"], event.body)) {
    return {
      statusCode: 401,
    };
  }

  const body = JSON.parse(event.body);
  console.log("body", JSON.stringify(body));

  const client = new Client({
    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.LINE_CHANNEL_SECRET,
  });

  const webhookEvent = body.events[0];
  const messages = await EventHandlerFactory.getHandler(webhookEvent).getMessages();
  await client.replyMessage(webhookEvent.replyToken, messages);

  return {
    statusCode: 200,
  };
}
