import { Quantity } from "./quantity.model";
import { Substance } from "./substance.model";

export interface Ingredient {
  id: number;
  classCode: string;
  quantity: Quantity;
  ingredientSubstance: Substance;
}
