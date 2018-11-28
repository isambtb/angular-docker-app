import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { MedicinalProduct } from "../../../core/models/medicinalProduct.model";
import { MatTableDataSource } from "@angular/material";
import { map } from "rxjs/operators";
import { Observable } from "rxjs/Rx";
import { of } from "rxjs/observable/of";
import { MedicinalProduct } from "../../../core/model/MedicinalProduct";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";  
import { Location } from '@angular/common';

import { MedicinalProductService } from "../../../core/services/medicinal-product.service";


@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent implements OnInit {
  medicinalProduct: MedicinalProduct;
  currentId: string;
  previousId: number;
  nextId: number;
  dataSource = new MatTableDataSource<MedicinalProduct>();

  constructor(
    private location: Location,
    public rest: MedicinalProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.currentId = param.get('id');
    });
    this.route.params.subscribe(params => {
      this.getMedicinalProduct(params["id"]);
    });
  }

  previousItem(){
    if(Number(this.currentId) >= 2 ){
      this.previousId = Number(this.currentId)-1;
      this.getMedicinalProduct(Number(this.previousId));
      this.currentId = String(this.previousId);
      let cururl = this.location.path().replace(this.currentId,  String(this.currentId));
      this.location.replaceState(cururl);
    }
  }

  nextItem(){
    this.nextId = Number(this.currentId)+1;
    this.getMedicinalProduct(Number(this.nextId));
    this.currentId = String(this.nextId);
    let cururl = this.location.path().replace(this.currentId,  String(this.nextId));
    console.log(cururl);
    this.location.go(cururl);
  }

  updateUrl(otherId: string){
    let cururl = this.location.path().replace(this.currentId, otherId );
    this.location.go(cururl);
  }


  getMedicinalProduct(id: number) {
    return this.rest.get(id).subscribe(data => {
      this.medicinalProduct = data
      console.log(this.medicinalProduct)
    });
  }
}