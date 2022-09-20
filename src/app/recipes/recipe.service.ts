import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg',
      [new Ingredient('butter', 2), new Ingredient('olive', 3)]
    ),
    new Recipe(
      'Test Recipe 2',
      'This is a test 2',
      'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg',
      [new Ingredient('carrot', 2), new Ingredient('potato', 3)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipes() {
    // Use slice to create a copy of the array to prevent access from outside
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
