import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";

const initialState = {
  ingredients: [
    new Ingredient('Apples', 4),
    new Ingredient('Banana', 6)
  ]
};

export function ShoppingListReducer(state = initialState, action: ShoppingListActions.AddIngredient) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
    return {
      ...state,
      ingredients: [...state.ingredients, action.payload]
    };
    default:
      return state;
  }
}
