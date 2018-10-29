import { Component, OnInit } from "@angular/core";
import { DetailsService } from "./details.service";
import { MedicinalProduct } from "../../medicinal-products/MedicinalProduct";
import { MatTableDataSource } from "@angular/material";
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import {MedicinalProductService} from '../../../core/services/medicinal-product.service'

@Component({
  selector: "app-medicament-infos",
  templateUrl: "./medicament-infos.component.html",
  styleUrls: ["./medicament-infos.component.css"]
})
export class MedicamentInfosComponent implements OnInit {
  medicamentName: string = "";
  dataSource = new MatTableDataSource<MedicinalProduct>();
  medicinalProduct: MedicinalProduct = new MedicinalProduct();
  constructor(
    public rest: MedicinalProductService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.getMedicinalProduct(params['id'])
    });
  }

  getMedicinalProduct(id:number) {
    this.rest.get(id).pipe(
      map(data => console.log(data))
    );
  }
}