import { Characteristic } from "./characteristic.model";
import { ContainerPackagedProduct } from "./containerPackagedProduct.model";

export interface AsContent {
  id: number;
  characteristics: Characteristic;
  containerPackagedProduct: ContainerPackagedProduct;
}
