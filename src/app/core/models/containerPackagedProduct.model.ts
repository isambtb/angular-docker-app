export class ContainerPackagedProduct {
  id: number;
  code: string;
  codeSystem: string;
  name: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
