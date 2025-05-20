import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Driving } from './models/driving.model';
import { DrivingListComponent } from './driving-list/driving-list.component';
import { Rent } from './models/rent.model';
import { RentedComponent } from './rented/rented.component';
import { RentlistComponent } from './rentlist/rentlist.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DrivingListComponent, RentedComponent, RentlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'Mezzi_automatici_http_Laguda';
  noleggi: Rent[] = []

  http: HttpClient
  obs!: Observable<Driving[]>
  loading!: boolean
  data!: object

  lista_brumbrum: Driving[] = []

  constructor(http: HttpClient){this.http = http}

  make_request(){
    this.loading = true
    this.obs = this.http.get<Driving[]>("https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi")
    this.obs.subscribe(this.getData)
  }

  getData = (d: Driving[]) =>{
    this.lista_brumbrum = d
    console.log(this.lista_brumbrum)
  }
  ngOnInit(){
    this.make_request()
  }
  
}
