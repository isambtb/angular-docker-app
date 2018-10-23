import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import { MedicinalProduct } from './MedicinalProduct'
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class MedicinalService {

  private serviceUrl = 'http://37.235.89.45:8080/api/medicinalProducts/';
  
  constructor(private http: HttpClient) { }
  
  getUser(): Observable<MedicinalProduct[]> {
    return this.http.get<MedicinalProduct[]>(this.serviceUrl);
  }

}



