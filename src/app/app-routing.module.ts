import { RecipesDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipStartComponent } from './recipes/recip-start/recip-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const appRoutes: Routes = [
  { path:'', redirectTo:'/recipes', pathMatch:'full'},
  { path: 'recipes', component:RecipesComponent , children:[
    {path:'', component:RecipStartComponent},
    {path:':id', component: RecipesDetailComponent}
  ]},
  { path: 'shopping-list', component:ShoppingListComponent }
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
