import { Component } from '@angular/core';

@Component({
  selector: 'app-join-event-button',
  templateUrl: './join-event-button.component.html',
  styleUrl: './join-event-button.component.less'
})
export class JoinEventButtonComponent {

  openJoinModal():void {
    const modal: HTMLDialogElement = document.getElementById("join-event-modal") as HTMLDialogElement;
    modal.showModal();
  }
}
