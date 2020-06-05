import { Message } from "@line/bot-sdk";

export default interface EventHandlerInterface {
  getMessages(): Message;
}