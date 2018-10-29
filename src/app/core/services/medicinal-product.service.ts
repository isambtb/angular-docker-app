import { Injectable } from '@angular/core';
import { MedicinalProduct} from '../models/medicinalProduct.model'
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicinalProductService {
  constructor(
    private http: HttpClient,
  ) {}


  get(id: number): Observable<any> {
    return this.http.get(environment.api_url+ id)
      .pipe(map(data => console.log(data)));
  }
}