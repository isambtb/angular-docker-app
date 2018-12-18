import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { MedicinalProduct } from "../../../core/models/medicinalProduct.model";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  private serviceUrl = "http://37.235.89.45:8080/api/medicinalProducts/search";

  constructor(private http: HttpClient) {}

  getUser(itemCode:string, version:string): Observable<MedicinalProduct[]> {
    if (itemCode != null && itemCode != ''){
      if (version != null && version != ''){
        return this.http.get<MedicinalProduct[]>(
          this.serviceUrl+"/"+itemCode+"/"+version
        );
      }
      else {
        return this.http.get<MedicinalProduct[]>(
          this.serviceUrl+"/"+itemCode+"/"
        );
      }
    }
  }
}
