import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe ({
  name: "calories",
  pure: false
})

export class MealCaloriesPipe implements PipeTransform {
  transform(input: Meal[], args){
    var desiredMealLevel = args[0];
    if(desiredMealLevel === "unhealthy") {
      return input.filter((meal) => {
        if(meal.calories >=300) {
          return true;
        }
      });
    } else if(desiredMealLevel === "healthy") {
      return input.filter((meal) => {
        if(meal.calories < 300) {
          return true;
        }
      });
    } else {
      return input;
    }
  }
}
