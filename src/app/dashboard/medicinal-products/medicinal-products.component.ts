import { Component, OnInit, ViewChild } from "@angular/core";
import { MedicinalService } from "./medicinal.service";
import { MedicinalProduct } from "../../core/models/medicinalProduct.model";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-medicinal-products",
  templateUrl: "./medicinal-products.component.html",
  styleUrls: ["./medicinal-products.component.css"]
})
export class MedicinalProductsComponent implements OnInit {
  selectedRowIndex: number = -1;
  liste: MedicinalProduct[] = [];
  dataSource = new MatTableDataSource<MedicinalProduct>();
  displayedColumns: string[] = [
    "select",
    "id",
    "code",
    "codeSystem",
    "medicinalProductName",
    "isValidated"
  ];

  tableLength: number = 0;
  pageIndex: number = 0;
  pageSize: number = 0;

  selection = new SelectionModel<MedicinalProduct>(true, []);

  constructor(private router: Router, private rest: MedicinalService) {}

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.rest.getUser().subscribe(todos => {
      this.dataSource.data = todos;
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  onClickView() {
    const m = new MedicinalProduct(this.selection.selected[0]);
    this.router.navigate(["/dashboard/medicinal-products/details/" + m.id]);
  }
  getRecord(row) {
    this.selectedRowIndex = row.id;
    console.log(row);
  }

  highlight(row) {
    this.selectedRowIndex = row.id;
  }
}