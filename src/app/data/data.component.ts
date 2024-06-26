import { Component } from '@angular/core';
import { FakeService } from '../services/fake.service';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {

  serviceData: any;
  errorMessage: any;
  greeting: any;

  constructor(private fakeService: FakeService) {

  }

  ngOnInit(): void {
    this.getServiceData();
  }

  getServiceData() {
    this.fakeService.getDataV1().subscribe({
      next: data => {
        this.serviceData = data;
        this.setGreeting();
      },
      error: err => {
        this.errorMessage = err.statusText;
      },
      complete: () => {
        console.log('Finished');
      },
    })
  }

  setGreeting(){
    if (this.serviceData.time < 10){
      this.greeting = "Good Morning";
      } else if (this.serviceData.time < 20) {
      this.greeting = "Good Day";
      } else {
      this.greeting = "Good Evening";
    }
  }


}
