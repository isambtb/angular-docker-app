export class Manufacturer {
  id: number;
  manufacturerCodeSystem: string;
  manufacturerExtension: string;
  manufacturerName: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
