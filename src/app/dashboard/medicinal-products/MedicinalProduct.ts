
export class MedicinalProduct{
    id:number
    code: string
    codeSystem: string
    medicinalProductName: string
    manufacturer: Manufacturer
    booleanCharacteristic: BooleanCharacteristic
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }
  
  export class Manufacturer{
    id:number 
    manufacturerCodeSystem: string 
    manufacturerExtension:string 
    manufacturerName: string

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }

  }

  export class BooleanCharacteristic{
    extMedMgt: boolean;
    isPerfusion: boolean;
    isMultidose: boolean;
    isWaterScale: boolean;
    isSoluble: boolean;
    isPartionable:boolean;
    isFormulary:boolean;
    inUse: boolean;
    isSpeciality: boolean;
    prescriptionRequired: boolean;
    isNarotic:boolean;
    isForfait:boolean;

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }

  }