import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  
  private serviceUrl = 'http://localhost:8080/api/medicinalProducts/';
  
  constructor(private http: HttpClient) { }
  
  getmedicinalProduct(id: string): Observable<MedicinalProduct[]> {
    return this.http.get<MedicinalProduct[]>(this.serviceUrl + id);
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