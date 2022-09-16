import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg'
    ),
    new Recipe(
      'Test Recipe 2',
      'This is a test 2',
      'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg'
    )
  ];
  @Output('recipeSelected') recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
