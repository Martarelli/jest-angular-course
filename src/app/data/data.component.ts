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

  constructor(private fakeService: FakeService) {

  }

  ngOnInit(): void {
    this.getServiceData();
  }

  getServiceData() {
    this.fakeService.getDataV1().subscribe({
      next: data => {
        this.serviceData = data;
      },
      error: err => {
        this.errorMessage = err.statusText;
      },
      complete: () => {
        console.log('Finished');
      },
    })
  }

}
