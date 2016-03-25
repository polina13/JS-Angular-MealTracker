import { Component } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { NewMealComponent } from './new-meal.component';
import { Meal } from './meal.model';

@Component ({
  selector: 'my-app',
  directives: [ MealListComponent, NewMealComponent],
  template:`
  <div class="container">
    <h1>Meal Tracker!</h1>
    <meal-list
      [mealList]="meals"
      (onMealSelect)="mealWasSelected($event)">
    </meal-list>
  </div>
    `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Chicken Gyro", "Grilled Cut it into pieces chicken, tomatoes, onion, tsaziki sauce wrapped with pita bread", "I only eat half", 800, 0),
      new Meal("Greek Salad", "Tomatoes, cucumbers, and fresh onion, drizzled with vinegar and olive oil", "very healthy and fulfilling", 270, 1)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}
