import { WebhookEvent, MessageEvent, LocationEventMessage } from "@line/bot-sdk";
import EventHandlerInterface from "../EventHandler/EventHandlerInterface";
import MessageEventHandler from "../EventHandler/MessageEventHandler";

export default class EventHandlerFactory {
  static getHandler(webhookEvent: WebhookEvent): EventHandlerInterface {
    let eventHandler = null;
    
    switch (webhookEvent.type) {
      case "message":
        eventHandler = new MessageEventHandler((webhookEvent as MessageEvent).message);
        break;
      default:
        throw new Error('Illegal webhook event. ' + JSON.stringify(eventHandler));
    }
    
    return eventHandler;
  }
}