// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })

// export class AppComponent implements OnInit {
//   ngOnInit() {
//   }  
// }

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

//   constructor(
//     //Private todoservice will be injected into the component by Angular Dependency Injector
//     private drinkService: DrinkService
//   ) { }

//   //Declaring the new todo Object and initilizing it
//   public newDrink: Drink = new Drink()

//   //An Empty list for the visible todo list
//   drinksList: Drink[];


//   ngOnInit(): void {

//     //At component initialization the 
//     this.drinkService.getDrinks()
//       .subscribe(drinks => {
//         //assign the drinklist property to the proper http response
//         this.drinksList = drinks
//         console.log(drinks)
//       })
//   }
// }

 //Private todoservice will be injected into the component by Angular Dependency Injector
 constructor(private drinkService: DrinkService){}

 //Declaring the new todo Object and initilizing it
 public newDrink: Drink = new Drink()

 //An Empty list for the visible todo list
 drinksList: Drink[];
 //sets it to any empty array to use .includes method
 editDrinks: Drink[] = [];


 ngOnInit(): void {
   //At component initialization the 
   this.drinkService.getDrinks()
     .subscribe(drinks => {
       //assign the todolist property to the proper http response
       this.drinksList = drinks
       console.log(drinks)
     })
 }
 //This method will get called on Create button event
 //create the new todo in db then pushes it to list and clears form
 create() {
   this.drinkService.createDrink(this.newDrink)
     .subscribe((res) => {
       this.drinksList.push(res.data)
       this.newDrink = new Drink()
     })
 }
//called on double click and the edit button
 editDrink(drink: Drink) {
   console.log(drink)
   if(this.drinksList.includes(drink)){
     if(!this.editDrinks.includes(drink)){
       this.editDrinks.push(drink)
     }else{
       this.editDrinks.splice(this.editDrinks.indexOf(drink), 1)
       this.drinkService.editDrink(drink).subscribe(res => {
         console.log('Update Succesful')
       }, err => {
           this.editDrink(drink)
           console.error('Update Unsuccesful')
         })
       }
     }
   }

 submitDrink(event, drink:Drink){
   if(event.keyCode ==13){
     this.editDrink(drink)
   }
 }
 deleteDrink(drink: Drink) {
   this.drinkService.deleteDrink(drink._id).subscribe(res => {
   this.drinksList.splice(this.drinksList.indexOf(drink), 1);
   })
 }
}


