import {Injectable, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CoffeeType} from '../Model/coffee-type';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CoffeeShopService {

  private url = 'http://localhost:8081';
  constructor(private http: HttpClient) { }

  getCoffeeTypes(): Observable<CoffeeType[]> {
    return this.http.get<CoffeeType[]>(this.url + '/coffee-type');
  }

  addCoffeeType(coffeeType: CoffeeType): Observable<any> {
    return this.http.post<CoffeeType>(this.url + '/coffee-type', coffeeType, httpOptions);
  }
}
