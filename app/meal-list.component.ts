import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { Meal } from './meal.model';
import { MealCaloriesPipe } from './mealCalories.pipe';

@Component ({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [MealCaloriesPipe],
  directives: [MealComponent, NewMealComponent, EditMealDetailsComponent],
  template: `
    <select (change)="mealChange($event.target.value)" class="filter">
      <option value="">Show All</option>
      <option value="unhealthy">Unhealthy:cals>300</option>
      <option value="healthy">Healthy:cals<300</option>
    </select>
    <div *ngFor="#currentMeal of mealList | calories:filterCalories">
      <h3 (click)="mealClicked(currentMeal)" [class.selected]="currentMeal === selectedMeal">
        {{ currentMeal.name }}
      </h3>
      <meal-display [meal]="currentMeal" *ngIf="currentMeal === selectedMeal"></meal-display>
    </div>
    <div class="container">
      <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
    </div>
    <div class="container">
      <edit-meal-details *ngIf="selectedMeal"
      [meal]="selectedMeal">
      </edit-meal-details>
    </div>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterCalories: string="all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(mealArray: string): void {
    // try to create error message to show to enter corrent input
    this.mealList.push(
      new Meal(mealArray[0], mealArray[1], mealArray[2], Number(mealArray[3]), this.mealList.length)
    );
  }
  mealChange(filterOption) {
    this.filterCalories = filterOption;
  }
}
