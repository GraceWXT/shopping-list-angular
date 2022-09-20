import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // In "new" mode, the id is "undefined"
      this.editMode = params.hasOwnProperty('id');
      // console.log('params.id: ', params.id);
      if (this.editMode) this.id = parseInt(params.id);
    });
  }
}
