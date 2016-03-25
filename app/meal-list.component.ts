import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, NewMealComponent],
  template: `
    <select (change)="mealChange($event.target.value)" class="filter">
      <option value="">Show All</option>
      <option value="Unhealthy">Unhealthy:cals>300</option>
      <option value="Healthy">Healthy:cals<300</option>
    </select>
    <meal-display *ngFor="#currentMeal of mealList | meal:filterMeal"
      (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
    </meal-display>
    <div class="container"><new-meal (onSubmitNewMeal)="createMeal($event)">
    </new-meal></div>
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
  public filterMeal: string="all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(mealArray: string[]): void {
    // try to create error message to show to enter corrent input
    this.mealList.push(
      new Meal(mealArray[0], mealArray[1], mealArray[2], Number(mealArray[3]), this.mealList.length)
    );
  }
  onChange(filterOption) {
    this.filterMeal = filterOption;
  }
}
