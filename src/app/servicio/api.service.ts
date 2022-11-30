import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public _http: HttpClient) {

   }
   getdata<T>(url: string)
   {
    url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
    return this._http.get<T[]>(url);
   }
}
