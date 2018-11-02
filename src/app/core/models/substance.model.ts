export class Substance {
  id: number;
  code: string;
  codeSystem: string;
  name: string;
  descr: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
