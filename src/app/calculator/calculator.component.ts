import { Component } from '@angular/core';
import { MeasurementComponent } from '../measurement/measurement.component';
import { TemperatureComponent } from '../temperature/temperature.component';
 
@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [MeasurementComponent, TemperatureComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

}
