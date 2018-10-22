import {Component, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { RestService } from './rest.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: any;
  displayedColumns: string[] = ['select','code', 'medicamentName'];
  columns: string[];
  dataSource = new MatTableDataSource<Medicament>(ELEMENT_DATA);
  selection = new SelectionModel<Medicament>(true, []);

  constructor(public rest:RestService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  getMedicaments(){
    this.data =  this.rest.getMedicaments();
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  getRecord(row){
    console.log(row)
  }

}

export interface Medicament {
  code: string;
  medicamentName: string;
}

const ELEMENT_DATA: Medicament[] = [
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
  {code: '62840118', medicamentName: 'AZANTAC INJECTABLE 50 mg/2 ml, solution injectable en ampoule'},
];



