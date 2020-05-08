import { Component, Inject } from '@angular/core';
import { CalcService } from './CalcService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private calcService: CalcService) {
  }

  calc() {
    this.calcService.run(2500).then(val => {
      console.log(val);
    });
  }
}