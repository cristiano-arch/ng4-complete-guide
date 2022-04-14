import { Recipe } from "./recipe.model";

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Chris', 'The great', 'https://images.pexels.com/photos/11143927/pexels-photo-11143927.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'),
    new Recipe('And', 'The goat', 'https://images.pexels.com/photos/7609840/pexels-photo-7609840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
