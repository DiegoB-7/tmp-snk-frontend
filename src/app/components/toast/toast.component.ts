import { Component } from '@angular/core';
import { NotificationTypes } from '../enums/toast.enums';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.less'
})
export class ToastComponent {
  public notificationMessage: string = "";
  public notificationType:string = ""

  constructor(){

  }
}
