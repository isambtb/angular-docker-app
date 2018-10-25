export class MedicinalProduct {
  id: number;
  code: string;
  codeSystem: string;
  medicinalProductName: string;
  manufacturer: Manufacturer;
  ingredients: Ingredient[];
  asContent:AsContent;
  booleanCharacteristic: BooleanCharacteristic;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Manufacturer {
  id: number;
  manufacturerCodeSystem: string;
  manufacturerExtension: string;
  manufacturerName: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}


export class AsContent {
  id: number;
  characteristics:Characteristic;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}

export class Characteristic{
  id: number;
  code: string;
  codeSystem: string;
  valueCode:string;
  valueCodeSystem: string;
  displayName: string;
  type:string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
export class Ingredient{
  id: number;
  classCode: string;
  quantity:Quantity;
  ingredientSubstance: Substance;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}


export class Substance{
  id: number;
  code: string;
  codeSystem: string;
  name: string;
  descr: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}


export class Quantity{
  id: number;
  nValue: string;
  nUnit: string;
  nDisplayName: string;
  dValue: string;
  dUnit: string;
  dDisplayName: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class ConsumedIn {
  id: number;
  routes: Route;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Route {
  id: number;
  code: string;
  codeSystem: string;
  displayName: string;
  
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class ContainerPackagedProduct{
  id: number;
  code: string;
  codeSystem: string;
  name: string;
  
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
export class BooleanCharacteristic {
  extMedMgt: boolean;
  isPerfusion: boolean;
  isMultidose: boolean;
  isWaterScale: boolean;
  isSoluble: boolean;
  isPartionable: boolean;
  isFormulary: boolean;
  inUse: boolean;
  isSpeciality: boolean;
  prescriptionRequired: boolean;
  isNarotic: boolean;
  isForfait: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
