import { Component } from '@angular/core';

@Component({
  selector: 'app-measurement',
  standalone: true,
  imports: [],
  templateUrl: './measurement.component.html',
  styleUrl: './measurement.component.css'
})
export class MeasurementComponent {
  //properties
  num1 : number = 0 ;
  num2 : number  = 0;
  result : number = 0;
}
