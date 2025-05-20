import { Component, Input } from '@angular/core';
import { Rent } from '../models/rent.model';

@Component({
  selector: 'app-rented',
  imports: [],
  templateUrl: './rented.component.html',
  styleUrl: './rented.component.css'
})
export class RentedComponent {
  @Input() noleggio!: Rent
}
