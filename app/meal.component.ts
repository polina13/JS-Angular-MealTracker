import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div class="container">
      <div>
        <h2>Name of Meal: {{ meal.name }}</h2>
        <h3>Description of your meal: {{ meal.description }}</h3>
        <p>Details: {{ meal.details }}</p>
        <p>Calories: {{ meal.calories }}</p>
      </div>
    </div>
  `
})

export class MealComponent {
  public meal: Meal;
}
