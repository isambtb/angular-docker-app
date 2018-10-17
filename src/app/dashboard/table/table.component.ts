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
  dataSource = new MatTableDataSource<Medicament>(ELEMENT_DATA);

  constructor(public rest:RestService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
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