import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MedicinalProduct } from '../../../core/models/medicinalProduct.model'
import { map, catchError, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  
  private serviceUrl = 'http://37.235.89.45:8080/api/medicinalProducts/';
  
  constructor(private http: HttpClient) { }
  
  getUser(): Observable<MedicinalProduct[]> {
    console.log(this.http.get<MedicinalProduct[]>(this.serviceUrl));
    return this.http.get<MedicinalProduct[]>(this.serviceUrl);
  }

}

