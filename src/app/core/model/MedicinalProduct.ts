export interface MedicinalProduct {
  id: number;
  code: string;
  codeSystem: string;
  validated:boolean;
  medicinalProductName: string;
  manufacturer: Manufacturer;
  ingredients: Ingredient[];
  asContent: AsContent;
  consumedIn: ConsumedIn;
  marketingAct: MarketingAct;
}

export interface AsContent {
  id: number;
  quantity: Quantity;
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
  formCode: FormCode;
  asContentSub: AsContentSub;
  asSpecializedKinds: AsSpecializedKind[]
  valuedItems: ValuedItem[];
  documents: Document[];
}

export interface AsContentSub {
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

export interface MarketingAct {
  id: number;
  statusCode: string;
  codeSystem: string;
  code: string;
  effectiveTimeLow: string;
  effectiveTimeHeigh: string;
}

export interface FormCode {
  id: number;
  codeSystem: string;
  code: string;
  displayName: string;
}

export interface ValuedItem {
  id: number;
  code: string;
  codeSystem: string;
  diplayName: string;
  effectiveTimeLow: string;
  effectiveTimeHeigh: string;
  valuedUnitItems: ValuedUnitItem[];
}

export interface ValuedUnitItem {
  id: number;
  code: string;
  codeSystem: string;
  currency: string;
  value: string;
  factorNumber: string;
}

export interface Document {
  id: number;
  code: string;
  codeSystem: string;
  title: string;
  effectiveTimeLow: string;
  characteristics: DocumentCharacteristic;
}

export interface DocumentCharacteristic {
  id: number;
  code: string;
  codeSystem: string;
  valueCode: string;
  valueCodeSystem: string;
  displayName: string;
  type: string;
  quantity: string;
}

export interface AsSpecializedKind {
  id: number;
  codeSystem: string;
  code: string;
  displayName: string;
  generalizedMaterialKind: GeneralizedMaterialKind;
}

export interface GeneralizedMaterialKind {
  id: number;
  codeSystem: string;
  code: string;
  displayName: string;
}
