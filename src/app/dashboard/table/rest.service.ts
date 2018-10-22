import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { MedicamentInfosComponent } from '../component/medicament-infos/medicament-infos.component';


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


  getMedicaments(){
    return new Promise(resolve => {
      this.http.get<RootObject>(endpoint).subscribe(data => {
      resolve(data);
      console.log(data.medicaments)
    }, 
      err => {
      console.log(err);
      });
      });
  }

  getMedicinalProduct(id:string){
    return new Promise(resolve => {
      this.http.get<RootObject>(endpoint+id).subscribe(data => {
      resolve(data);
      console.log(data.medicaments)
    }, 
      err => {
      console.log(err);
      });
      });
  }

}

interface RootObject {
  medicaments: Medicament[];
}

interface Medicament{
  id:number;
  code: string;
  codeSystem:String 
  medicamentName: string;
  //manufactuer: Manufacturer
  //booleanCharacteristics: BooleanCharacteristics
}

interface Manufacturer{
  id: number;
  root: string;
  extension: string;
  name: string;
}

interface BooleanCharacteristics{
  id: number
  extMedMgt: boolean
  inUse: boolean
  prescriptionRequired: boolean
  perfusion: boolean
  multidose: boolean
  waterScale: boolean
  soluble: boolean
  partionable:boolean
  formulary:boolean
  speciality:boolean
  narotic:boolean
  forfait:boolean
}

interface Quantity{
  id:number
  nValue: string
  nUnit: string
  nDisplayName:string
  dValue: string
  dUnit: string
  dDisplayName: string
}

interface Ingredient {
  id: number
  classCode: string
  quantity:Quantity
}

