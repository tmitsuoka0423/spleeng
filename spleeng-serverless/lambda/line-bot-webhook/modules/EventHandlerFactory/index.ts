import { WebhookEvent, MessageEvent } from "@line/bot-sdk";
import EventHandlerInterface from "../EventHandler/EventHandlerInterface";
import MessageEventHandler from "../EventHandler/MessageEventHandler";

export default class EventHandlerFactory {
  static getHandler(webhookEvent: WebhookEvent): EventHandlerInterface {
    let eventHandler = null;
    if ((webhookEvent as MessageEvent).message) {
      eventHandler = new MessageEventHandler((webhookEvent as MessageEvent).message);
    }

    if (!eventHandler) {
      throw new Error('Illegal webhook event. ' + JSON.stringify(eventHandler));
    }

    return eventHandler;
  }
}