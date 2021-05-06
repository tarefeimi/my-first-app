import { AuthService } from './../auth/auth.service';
import { Ingredient } from './ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { exhaustMap, map, take, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipeService,
    private shoppingService: ShoppingListService,
    private authService: AuthService
  ) {}
  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http
      .put(
        'https://ng--complete-guid-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://ng--complete-guid-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipesService.setRecipes(recipes);
        })
      );
  }

  storeIngredients() {
    const ingredients = this.shoppingService.getIngredients();
    this.http
      .put(
        'https://ng--complete-guid-default-rtdb.firebaseio.com/recipes.json',
        ingredients
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchIngredients() {
    this.http
      .get<Ingredient[]>(
        'https://ng--complete-guid-default-rtdb.firebaseio.com/recipes.json'
      )
      // .pipe(map(ingredients=>{
      //   return ingredients.map(ingredients=>{
      //     return {
      //       ...ingredients,
      //       ingredients: ingredients. ? recipe.ingredients : []
      //     };
      //   });
      // }))
      .subscribe((ingredients) => {
        this.shoppingService.setIngredients(ingredients);
      });
  }
}
