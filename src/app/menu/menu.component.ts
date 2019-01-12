import { Response } from '@angular/http';
import { DrinkService } from '../services/drink.services';
import Drink from '../models/drink.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    constructor(private drinkService: DrinkService){}

    public newDrink: Drink = new Drink()

    drinksList: Drink[];
  
    ngOnInit(): void {
      //At component initialization the 
      this.drinkService.getDrinks()
        .subscribe(drinks => {
          //assign the drinkList property to the proper http response
          this.drinksList = drinks
          console.log(drinks)
        })
    }
}
