import { Message, EventMessage, TextEventMessage } from "@line/bot-sdk";
import EventHandlerInterface from "../EventHandlerInterface";

export default class MessageEventHandler implements EventHandlerInterface {
  private textEventMessage: TextEventMessage;
  
  constructor(eventMessage: EventMessage) {
    this.textEventMessage = <TextEventMessage>eventMessage;
  }

  getMessages(): Message {
    const message: Message = {
      type: "text",
      text: "",
    }

    switch (true) {
      case /睡眠予報/.test(this.textEventMessage.text):
        message.text = '今日は蒸し暑い夜になるでしょう。タオルケットをかけて寝ましょう。'
        break;
    }

    return message;
  }
}