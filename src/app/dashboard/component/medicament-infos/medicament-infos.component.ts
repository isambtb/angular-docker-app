import { Component, OnInit } from '@angular/core';
import { DetailsService, MedicinalProduct } from './details.service';

@Component({
  selector: 'app-medicament-infos',
  templateUrl: './medicament-infos.component.html',
  styleUrls: ['./medicament-infos.component.css']
})
export class MedicamentInfosComponent implements OnInit {

  medicamentName: string ="";
  
  medicinalProduct: Object;
  constructor(public rest:DetailsService) { }

  ngOnInit() {
   this.getMedicinalProduct();
   console.log(this.medicinalProduct)
  }
   
  getMedicinalProduct(){
    this.rest.http.get(this.rest.serviceUrl + 1).subscribe(data =>{
      this.medicinalProduct = data;
    })
  }

}
