import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Cat {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getAllCats(): Observable<Cat[]> {
    return this._http.get<Cat[]>('http://localhost:3000/api/data');
  }

  getCat(name: string): Observable<Cat> {
    return this._http.get<Cat>('http://localhost:3000/api/data/' + name);
  }

  insertCat(cat: Cat): Observable<Cat> {
    return this._http.post<Cat>('http://localhost:3000/api/data/', cat);
  }

  updateCat(cat: Cat): Observable<void> {
    return this._http.put<void>('http://localhost:3000/api/data/' + cat.name, cat);
  }

  deleteCat(name: string) {
    return this._http.delete('http://localhost:3000/api/data/' + name);
  }

}
