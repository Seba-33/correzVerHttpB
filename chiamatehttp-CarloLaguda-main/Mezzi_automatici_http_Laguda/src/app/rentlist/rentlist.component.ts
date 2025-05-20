import { Component, Input } from '@angular/core';
import { Rent } from '../models/rent.model';

@Component({
  selector: 'app-rentlist',
  imports: [],
  templateUrl: './rentlist.component.html',
  styleUrl: './rentlist.component.css'
})
export class RentlistComponent {
  @Input() noleggio!: Rent

}
