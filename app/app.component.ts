import { Component } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component ({
  selector: 'my-app',
  directives: [ MealListComponent],
  template:`
  <div class="jumbotron heading">
  <h1 id="page-title">Meal Tracker!
  <br>
    <p class="info">
      <li>eat healthy</li>
      <li>be happy</li>
    </p>
  </h1>
  </div>
  <div class="container">
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
      new Meal("Greek Salad", "Tomatoes, cucumbers, and fresh onion,vinegar and olive oil", "Very healthy and fulfilling", 270, 0),
      new Meal("Chicken Gyro", "Pita bread wrapped in chicken, tomatoes and tzaziki sause", "Delicious", 890, 1)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}
