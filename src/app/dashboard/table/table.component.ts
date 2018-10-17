import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { RestService } from './rest.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['code', 'medicamentName'];
  columns: string[];
  constructor(public rest:RestService) { }
  dataSource = new MatTableDataSource<Medicament>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getProducts();
  }

  getProducts() {
    this.rest.getMedicaments().subscribe((data: {}) => {
      this.dataSource.data = data['result'];
      console.log(this.dataSource)
    });
  }

  

}

export interface Medicament {
  code: string;
  medicamentName: string;
}
