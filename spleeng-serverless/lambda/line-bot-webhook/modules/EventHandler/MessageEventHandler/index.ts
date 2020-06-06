import { Message, EventMessage, TextEventMessage, LocationEventMessage } from "@line/bot-sdk";
import EventHandlerInterface from "../EventHandlerInterface";

export default class MessageEventHandler implements EventHandlerInterface {
  private eventMessage: EventMessage;
  
  constructor(eventMessage: EventMessage) {
    this.eventMessage = eventMessage;
  }

  getMessages(): Message {
    const message: Message = {
      type: "text",
      text: "",
    }

    if (this.eventMessage.type === 'text') {
      const textEventMessage = this.eventMessage as TextEventMessage;
      switch (true) {
        case /睡眠予報/.test(textEventMessage.text):
          message.text = '今日は蒸し暑い夜になるでしょう。タオルケットをかけて寝ましょう。'
          break;
      }
    } else if (this.eventMessage.type === 'location') {
      const locationEventMessage = this.eventMessage as LocationEventMessage;
      
    }

    return message;
  }
}