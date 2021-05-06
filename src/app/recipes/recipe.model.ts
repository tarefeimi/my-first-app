import { Ingredient } from './../shared/ingredient.model';
export class Recipe {
  public name: string;
  public descirption: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.descirption = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
