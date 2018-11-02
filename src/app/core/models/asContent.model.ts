import { Characteristic } from "./characteristic.model";
import { ContainerPackagedProduct } from "./containerPackagedProduct.model";

export class AsContent {
  id: number;
  characteristics: Characteristic;
  containerPackagedProduct: ContainerPackagedProduct;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
  
}
