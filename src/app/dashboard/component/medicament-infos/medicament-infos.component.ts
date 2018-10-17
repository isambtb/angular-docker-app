import { Component, OnInit } from '@angular/core';
import { RestService } from '../../table/rest.service';

@Component({
  selector: 'app-medicament-infos',
  templateUrl: './medicament-infos.component.html',
  styleUrls: ['./medicament-infos.component.css']
})
export class MedicamentInfosComponent implements OnInit {
  
  dataSource:any = [];
  medicamentName:String;
  medicamentCode:String;
  displayedColumns: string[] = ['code', 'Medicament Name', "detail"];
  columns: string[];
  constructor(public rest:RestService) { }

  ngOnInit() {
    this.getProducts();
  }
   
  getProducts() {
    this.dataSource = [];
    this.columns =  ["code", "medicamentName", 'details']
    this.rest.getMedicament("1").subscribe((data: {}) => {
      this.medicamentName = data["medicamentName"];
      this.medicamentCode = data["code"];
      this.dataSource = data["code"];
    });
  }

 

}
