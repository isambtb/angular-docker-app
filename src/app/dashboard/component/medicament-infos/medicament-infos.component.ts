import { Component, OnInit } from "@angular/core";
import { DetailsService } from "./details.service";
import { MedicinalProduct } from "../../medicinal-products/MedicinalProduct";
import { MatTableDataSource } from "@angular/material";
import { ActivatedRoute } from '@angular/router';

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
    public rest: DetailsService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    
    this.route.params.subscribe( params => {
      this.getMedicinalProduct(params['id'])
    });
    console.log(this.medicinalProduct);
  }

  getMedicinalProduct(id:number) {
    this.rest.getUser().subscribe(todos => {
      for (let m of todos) {
        m = new MedicinalProduct(m);
        if (m.id == id) {
          Object.assign(this.medicinalProduct, m);
        }
      }
    });
  }
}