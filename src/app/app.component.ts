import { Response } from '@angular/http';
import { DrinkService } from './services/drink.services';
import Drink from './models/drink.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

 constructor(private drinkService: DrinkService){ }

 public newDrink: Drink = new Drink()

 drinksList: Drink[];
 //sets it to any empty array to use .includes method
 editDrinks: Drink[] = [];

 ngOnInit(): void {
   //At component initialization the 
   this.drinkService.getDrinks()
     .subscribe(drinks => {
       //assign the drinklist property to the proper http response
       this.drinksList = drinks
       console.log(drinks)
     })
 }

 //BELOW CREATE, UPDATE & DESTROY FUNCTIONALITY NOT USED TO DISPLAY 
 //This method will get called on Create button event
 //create the new drink in db then pushes it to list and clears form
//  create() {
//    this.drinkService.createDrink(this.newDrink)
//      .subscribe((res) => {
//        this.drinksList.push(res.data)
//        this.newDrink = new Drink()
//      })
//  }
// //called on double click and the edit button
//  editDrink(drink: Drink) {
//    console.log(drink)
//    if(this.drinksList.includes(drink)){
//      if(!this.editDrinks.includes(drink)){
//        this.editDrinks.push(drink)
//      }else{
//        this.editDrinks.splice(this.editDrinks.indexOf(drink), 1)
//        this.drinkService.editDrink(drink).subscribe(res => {
//          console.log('Update Succesful')
//        }, err => {
//            this.editDrink(drink)
//            console.error('Update Unsuccesful')
//          })
//        }
//      }
//    }

//  submitDrink(event, drink:Drink){
//    if(event.keyCode ==13){
//      this.editDrink(drink)
//    }
//  }
//  deleteDrink(drink: Drink) {
//    this.drinkService.deleteDrink(drink._id).subscribe(res => {
//    this.drinksList.splice(this.drinksList.indexOf(drink), 1);
//    })
//  }
}


