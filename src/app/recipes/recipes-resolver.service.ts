import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { take } from "rxjs";
import * as RecipesActions from '../recipes/store/recipe.actions';
import { DataStorageService } from "../shared/data-storage.service";
import * as fromApp from '../store/app.reducer';
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]>{

  constructor(
    private dataStorageService: DataStorageService,
    private recipesService: RecipeService,
    private store: Store<fromApp.AppState>,
    private actions$: Actions
    ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // const recipes = this.recipesService.getRecipes();

    // if (recipes.length === 0) {
    //   return this.dataStorageService.fetchRecipes();
    // } else {
    //   return recipes;
    // }

    this.store.dispatch(new RecipesActions.FetchtRecipes());

    return this.actions$.pipe(ofType(RecipesActions.SET_RECIPES), take(1));

  }

}
