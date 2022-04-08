import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{

  @Output() clickedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Chris', 'The great', 'https://images.pexels.com/photos/11143927/pexels-photo-11143927.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'),
    new Recipe('And', 'The goat', 'https://images.pexels.com/photos/7609840/pexels-photo-7609840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
  ];

  constructor(){}

  ngOnInit(): void {
  }

  onDisplay(recipe: Recipe) {
    this.clickedRecipe.emit(recipe);
  }

}
