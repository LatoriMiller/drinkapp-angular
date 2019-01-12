import Drink from '../models/drink.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class DrinkService {

  api_url = 'http://localhost:3000';
  drinkUrl = `${this.api_url}/api/drinks`;

  constructor(private http: HttpClient) {}
//Builds the raw CRUD functionality to the model
//Create drink, takes a Drink Object (similar to the autowired in STS)

createDrink(drink: Drink): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.drinkUrl}`, drink);
  }
getDrinks(): Observable<Drink[]>{
    return this.http.get(this.drinkUrl)
    .pipe(map(res  => {
        //Maps the response object sent from the server
        //pipe the output of the first function to this success function
        return res["data"].docs as Drink[];
    }))
}
editDrink(drink:Drink){
    let editUrl = `${this.drinkUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, drink);
}
deleteDrink(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.drinkUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
        return res;
    }))
}
private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    // for demo purposes only
    return Promise.reject(error.message || error);
}

}