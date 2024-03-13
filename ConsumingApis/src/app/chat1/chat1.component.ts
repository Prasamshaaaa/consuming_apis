import { Component, OnInit } from '@angular/core';
import { ChatService } from '../shared-kernel/chat.service';
import { Subscription } from 'rxjs';
import { chats } from '../model/chat';

@Component({
  selector: 'app-chat1',
  templateUrl: './chat1.component.html',
  styleUrls: ['./chat1.component.css']
})
export class Chat1Component implements OnInit {
  message: string = '';

  messages = new Array<chats>();

  chat1Subscription = new Subscription();
  constructor(private _chatService: ChatService) { }

  sendMessage() {
    if (this.message.trim() !== '') {
      this._chatService.sendMessageFromChat1(this.message);
      const chat = new chats();
      chat.from = "chat1";
      chat.message = this.message;
      this.messages.push(chat);
      this.HandleEnterEvent('chat1');
      this.message = '';
    }
  }

  HandleEnterEvent(id: string): void {
    if (id) {
      const elem = document.getElementById(id);
      if (elem) {
        elem.focus();
      }
    }
  }

  ngOnInit() {

    this.InitializeSubscription();
  }

  InitializeSubscription() {
    this.chat1Subscription.add(this._chatService.getMessageFromChat2().subscribe((message: string) => {
      this.handleReceivedMessage(message);
    }));
  }
  handleReceivedMessage(message: string) {
    if (message && message.trim()) {
      const chat = new chats();
      chat.from = "chat2";
      chat.message = message;
      this.messages.push(chat);
    }
  }

  ngOnDestroy(): void {
    this.chat1Subscription.unsubscribe();
  }

}
