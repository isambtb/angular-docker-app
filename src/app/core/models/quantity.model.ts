export class Quantity {
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
