import { Component } from '@angular/core';

@Component({
  selector: 'app-asynchronous',
  standalone: true,
  imports: [],
  templateUrl: './asynchronous.component.html',
  styleUrl: './asynchronous.component.css'
})
export class AsynchronousComponent {

  timeoutResponse: string = 'test';

  checkSetTimeout(){
    setTimeout(() => {
      console.log('Inside setTimeout');
      this.timeoutResponse = "setTimeoutCheck";
    }, 1000);
  }

}
