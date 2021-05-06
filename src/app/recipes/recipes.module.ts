import { RecipesRoutingModule } from './recipes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipStartComponent } from './recip-start/recip-start.component';
import { RecipesDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipes-list/recipe-item/recipe-item.component';
import { RecipesListComponent } from './recipes-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
    RecipStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    RouterModule,

    SharedModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
  ],
})
export class RecipesModule {}
