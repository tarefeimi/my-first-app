import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy{
  ingredients:Ingredient[];
  private igCangeSub : Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.slService.getIngredients();
    this.igCangeSub= this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[])=>{
          this.ingredients=ingredients;
        }
    );
  }
  ngOnDestroy():void{
    this.igCangeSub.unsubscribe();
  }

}
