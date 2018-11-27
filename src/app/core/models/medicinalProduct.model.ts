import { Manufacturer } from "./manufacturer.model";
import { AsContent } from "./asContent.model";
import { Ingredient } from "./ingredient.model";
import { ConsumedIn } from "./consumedIn.model";

export class MedicinalProduct {
  id: number;
  code: string;
  codeSystem: string;
  medicinalProductName: string;
  validated: string;
  manufacturer: Manufacturer;
  ingredients: Ingredient[];
  asContent: AsContent;
  consumedIn: ConsumedIn;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

