import { Component, OnInit, ViewChild } from "@angular/core";
import { SearchService } from './search.service'
import { MedicinalProduct } from "../../../core/models/medicinalProduct.model";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
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
  itemCode:string;
  versionNumber:string;

  constructor(private router: Router,private searchService: SearchService) { }


  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.itemCode+"/"+ this.versionNumber)
    this.searchService.getUser(this.itemCode, this.versionNumber).subscribe(todos => {
      console.log(todos)
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
}
