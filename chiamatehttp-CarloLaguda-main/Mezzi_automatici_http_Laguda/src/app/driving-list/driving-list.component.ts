import { Component, Input } from '@angular/core';
import { Driving } from '../models/driving.model';
import { Rent } from '../models/rent.model';

@Component({
  selector: 'app-driving-list',
  imports: [],
  templateUrl: './driving-list.component.html',
  styleUrl: './driving-list.component.css'
})
export class DrivingListComponent {
  @Input() macchina! :Driving
  @Input() noleggi!: Rent[]
  noleggio!: Rent
  messaggio!: string


  noleggia(giorni: HTMLInputElement)
  {
    let giorno = Number(giorni.value)
    if(giorno>0){
      console.log("Mezzo prenotato: " + this.macchina.tipo + " Tariffa: " + this.macchina.tariffa + " Descrizione: " + this.macchina.descrizione + " Valutazione: " + this.macchina.valutazionemedia + " Per quanti giorni è stata prenotata: " + giorni.value)
      this.noleggi.push(new Rent(giorno, this.macchina.tipo))
      this.messaggio = ""
      giorni.value = ""
    }else{
      this.messaggio = "Non più prenotare un veicolo per meno di un giorno"
      giorni.value = ""
    } 
    
  }

}
