import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.css',
})
export class TemperatureComponent {
  celsius: number | null = null;
  fahrenheit: number | null = null;

  celsiusInput() {
    this.celsius ? (this.fahrenheit = (this.celsius * 9) / 5 + 32) : '';
  }
  fahrenheitInput() {
    this.fahrenheit ? (this.celsius = ((this.fahrenheit - 32) * 5) / 9) : '';
  }
}
