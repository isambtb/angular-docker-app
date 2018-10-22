
export class MedicinalProduct{
    id:number
    code: string
    codeSystem: string
    medicinalProductName: string
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }
  