import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="meal-form row">
      <h3 class="create-meal">Create your meal!</h3>
        <input placeholder="Name" type="text" class="col-sm-8 input-md" #newName>
        <input placeholder="Meal-Description" type="text" class="col-sm-8 input-md" #newDescription>
        <input placeholder="Details" type="text" class="col-sm-8 input-md" #newDetails>
        <input placeholder="Calories" type="number" class="col-sm-8 input-md" #newCalories>
        <button (click)="addMeal(newName, newDescription, newDetails, newCalories)" class="btn btn-info">Add Meal</button>
    </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>
  public newMeal: String[];
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement,
          userDescription: HTMLInputElement,
          userDetails: HTMLInputElement,
          userCalories: HTMLInputElement) {
            this.newMeal = [userName.value,
                            userDescription.value,
                            userDetails.value,
                            userCalories.value];
    this.onSubmitNewMeal.emit(this.newMeal);
    userName.value="";
    userDescription.value="";
    userDetails.value="";
    userCalories.value="";
  }
}
