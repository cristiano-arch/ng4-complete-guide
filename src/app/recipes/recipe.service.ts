import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Chris', 'The great', 'https://images.pexels.com/photos/11143927/pexels-photo-11143927.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', [new Ingredient('Hair', 1), new Ingredient('Hands', 2)]),
    new Recipe( 'And', 'The goat', 'https://images.pexels.com/photos/7609840/pexels-photo-7609840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', [new Ingredient('Army', 2), new Ingredient('Leg', 2)])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
