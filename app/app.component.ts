import { Component } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component ({
  selector: 'my-app',
  directives: [ MealListComponent],
  template:`
  <div class="jumbotron heading">
  <h1 id="page-title">Meal Tracker!</h1>
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
      new Meal("Greek Salad", "Tomatoes, cucumbers, and fresh onion, drizzled with vinegar and olive oil", "very healthy and fulfilling", 270, 0)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}
