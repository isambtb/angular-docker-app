import { Quantity } from "./quantity.model";
import { Substance } from "./substance.model";

export class Ingredient {
  id: number;
  classCode: string;
  quantity: Quantity;
  ingredientSubstance: Substance;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
