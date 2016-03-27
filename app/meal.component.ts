import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div class="container">
      <div class="meal-entry">
        <h3>Name of Meal: {{ meal.name }}</h3>
        <p>Description of your meal: {{ meal.description }}</p>
        <li>Details: {{ meal.details }}</li>
        <li>Calories: {{ meal.calories }}</li>
      </div>
    </div>
  `
})

export class MealComponent {
  public meal: Meal;
}
