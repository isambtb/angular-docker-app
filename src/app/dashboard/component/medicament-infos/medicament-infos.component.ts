import { Component, OnInit } from '@angular/core';
import { DetailsService, MedicinalProduct } from './details.service';

@Component({
  selector: 'app-medicament-infos',
  templateUrl: './medicament-infos.component.html',
  styleUrls: ['./medicament-infos.component.css']
})
export class MedicamentInfosComponent implements OnInit {

  medicinalProduct: MedicinalProduct[];
  constructor(public rest:DetailsService) { }

  ngOnInit() {
    console.log(this.getMedicament())
  }
   
  getMedicament(){
    return this.rest.getmedicinalProduct('1');
  }

 

}
