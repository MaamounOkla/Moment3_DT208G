import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-measurement',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './measurement.component.html',
  styleUrl: './measurement.component.css'
})
export class MeasurementComponent {
  //properties
  meters : number | null =  null;
  feet : number  | null =  null;
   
  //Methods
  metersInput(){
    this.meters? this.feet = this.meters / 0.3048 : "";
    
  }
  feetInput(){
    this.feet? this.meters = this.feet * 0.3048 : "";
  }
}
