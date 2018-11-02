export class Route {
  id: number;
  code: string;
  codeSystem: string;
  displayName: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
