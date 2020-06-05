import { WebhookEvent } from "@line/bot-sdk";
import EventHandlerInterface from "../EventHandler/EventHandlerInterface";
import MessageEventHandler from "../EventHandler/MessageEventHandler";

export default class EventHandlerFactory {
  static getHandler(lineEvent: WebhookEvent): EventHandlerInterface {
    return new MessageEventHandler();
  }
}