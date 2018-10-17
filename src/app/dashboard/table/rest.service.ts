import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const endpoint = 'http://localhost:8080/api/medicaments/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http: HttpClient ) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getMedicaments(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }

  getMedicament(id: String){
    return this.http.get(endpoint + id).pipe(
      map(this.extractData));
  }

}
