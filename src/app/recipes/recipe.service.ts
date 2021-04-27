import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{

 private recipes:Recipe[] = [

    new Recipe(
      'A Test Recipe',
      'This is a test ',
      'https://static.timesofisrael.com/atlantajewishtimes/uploads/2021/03/Passover-Recipe_-Brisket_3-15-21.jpg',
      [
        new Ingredient('Meat',1),
        new Ingredient('Tomatos',1),
        new Ingredient('Bread',2)
      ]),

      new Recipe(
        'A Test Recipe',
        'This is a test ',
        'https://static.timesofisrael.com/atlantajewishtimes/uploads/2021/03/Passover-Recipe_-Brisket_3-15-21.jpg',
        [
          new Ingredient('Meat',1),
          new Ingredient('Tomatos',1),
          new Ingredient('Bread',2)
        ])
      ];

  constructor(private slService:ShoppingListService) {

  }

  getRecipes(){
    return this.recipes.slice();
  }
  getRecipe(index: number){
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);

  }
}
