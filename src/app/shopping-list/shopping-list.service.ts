import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 6)
  ];

  shoppingListUpdated = new EventEmitter<Ingredient[]>();

  getShoppingList() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    console.log('ingredients', this.ingredients);
    this.shoppingListUpdated.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // this.ingredients = [...this.ingredients, ...ingredients];
    this.ingredients.push(...ingredients);
    console.log('this.ingredients', this.ingredients);
    this.shoppingListUpdated.emit(this.ingredients.slice());
  }
}
