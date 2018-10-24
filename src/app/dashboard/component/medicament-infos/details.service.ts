import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  
  public serviceUrl = 'http://37.235.89.45:8080/api/medicinalProducts/';
  
  constructor(public http: HttpClient) { }
  
  getmedicinalProduct(id: number):any {
    return this.http.get(this.serviceUrl + id);
  }

}


export class MedicinalProduct{
  id:number
  code: string
  codeSystem: string
  medicinalProductName: string
  price: string

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Manufacturer{
  id:number 
  manufacturerCodeSystem: string 
  manufacturerExtension:string 
  manufacturerName: string
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}