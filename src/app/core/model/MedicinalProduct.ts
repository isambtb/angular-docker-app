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

export interface AsContent {
  id: number;
  quantity:Quantity;
  characteristics: Characteristic;
  containerPackagedProduct: ContainerPackagedProduct;
}

export interface Characteristic {
  id: number;
  code: string;
  codeSystem: string;
  valueCode: string;
  valueCodeSystem: string;
  displayName: string;
  type: string;
}

export interface ConsumedIn {
  id: number;
  routes: Route;
}

export interface ContainerPackagedProduct {
  id: number;
  code: string;
  codeSystem: string;
  name: string;
  asContentSub: AsContentSub;
}

export interface AsContentSub{
  id: number;
  quantity: Quantity;
}
export interface Ingredient {
  id: number;
  classCode: string;
  quantity: Quantity;
  ingredientSubstance: Substance;
}

export interface Manufacturer {
  id: number;
  manufacturerCodeSystem: string;
  manufacturerExtention: string;
  manufacturerName: string;
}

export interface Quantity {
  id: number;
  nValue: string;
  nUnit: string;
  nDisplayName: string;
  dValue: string;
  dUnit: string;
  dDisplayName: string;
}

export interface Route {
  id: number;
  code: string;
  codeSystem: string;
  displayName: string;
}

export interface Substance {
  id: number;
  code: string;
  codeSystem: string;
  name: string;
  descr: string;
}
