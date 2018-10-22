import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class MedicinalService {

  private serviceUrl = 'http://localhost:8080/api/medicinalProducts/';
  
  constructor(private http: HttpClient) { }
  
  getUser(): Observable<MedicinalProduct[]> {
    return this.http.get<MedicinalProduct[]>(this.serviceUrl);
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
