import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <div class="edit-form row">
      <h3>Edit the meal based on preferences:</h3>
        <input [(ngModel)]="meal.name" class="col-sm-8 input-lg edit-form"/>
        <input [(ngModel)]="meal.description" class="col-sm-8 input-lg edit-form"/>
        <input [(ngModel)]="meal.details" class="col-sm-8 input-lg edit-form"/>
        <input [(ngModel)]="meal.calories" type="number" class="col-sm-8 input-lg edit-form"/>
    </div>
  `
})

export class EditMealDetailsComponent {
  public meal: Meal;
}
