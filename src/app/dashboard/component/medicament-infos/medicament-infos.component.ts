import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DetailsService } from "./details.service";
//import { MedicinalProduct } from "../../../core/models/medicinalProduct.model";
import { MatTableDataSource } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { Observable } from "rxjs/Rx";
import { of } from "rxjs/observable/of";
import { MedicinalProduct } from "../../../core/model/MedicinalProduct";

import { MedicinalProductService } from "../../../core/services/medicinal-product.service";

@Component({
  selector: "app-medicament-infos",
  templateUrl: "./medicament-infos.component.html",
  styleUrls: ["./medicament-infos.component.css"]
})

export class MedicamentInfosComponent implements OnInit {
  medicinalProduct: MedicinalProduct;
  dataSource = new MatTableDataSource<MedicinalProduct>();

  constructor(
    public rest: MedicinalProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getMedicinalProduct(params["id"]);
    });
  }

  getMedicinalProduct(id: number) {
    return this.rest.get(id).subscribe(data => {
      this.medicinalProduct = data
      console.log(this.medicinalProduct)
    });
  }
}
