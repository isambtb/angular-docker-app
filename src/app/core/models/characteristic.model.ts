export class Characteristic {
  id: number;
  code: string;
  codeSystem: string;
  valueCode: string;
  valueCodeSystem: string;
  displayName: string;
  type: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
