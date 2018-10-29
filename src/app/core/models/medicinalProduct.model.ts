import { Manufacturer } from "./manufacturer.model";
import { AsContent } from "./asContent.model";
import { Ingredient } from "./ingredient.model";
import { ConsumedIn } from "./consumedIn.model";

export interface MedicinalProduct {
  id: number;
  code: string;
  codeSystem: string;
  medicinalProductName: string;
  manufacturer: Manufacturer;
  ingredients: Ingredient[];
  asContent: AsContent;
  consumedIn: ConsumedIn;
}
