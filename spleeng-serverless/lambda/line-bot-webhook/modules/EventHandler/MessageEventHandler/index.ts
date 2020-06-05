import { Message } from "@line/bot-sdk";
import EventHandlerInterface from "../EventHandlerInterface";

export default class MessageEventHandler implements EventHandlerInterface {
  getMessages(): Message {
    const message: Message = {
      type: "text",
      text: "タオルケットで寝ましょう",
    }
    return message;
  }
}