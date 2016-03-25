import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-keg-details',
  inputs: ['meal'],
  template: `
    <div class="edit-for row">
      <h3>Edit the meal based on preferences:</h3>
        <input [(ngModel)]="meal.name" class="col-sm-8 input-lg"/>
        <input [(ngModel)]="meal.description" class="col-sm-8 input-lg"/>
        <input [(ngModel)]="meal.details" class="col-sm-8 input-lg"/>
        <input [(ngModel)]="meal.calories" class="col-sm-8 input-lg"/>
    </div>
  `
})

export class EditMealDetailsComponent {
  public meal: Meal;
}
