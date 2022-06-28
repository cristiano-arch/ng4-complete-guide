import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService
    ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://ng4-complete-guide-37479-default-rtdb.firebaseio.com/recipes.json', recipes)
    .subscribe(response => {
      console.log(response);
    });
  }

  fetchRecipes() {
    this.http.get<Recipe[]>('https://ng4-complete-guide-37479-default-rtdb.firebaseio.com/recipes.json')
    .subscribe(recipes => {
      this.recipeService.setRecipes(recipes);
    });
  }
}
