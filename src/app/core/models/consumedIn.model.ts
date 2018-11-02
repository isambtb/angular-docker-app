import { Route } from "./route.model";

export class ConsumedIn {
  id: number;
  routes: Route;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  } 
  
}
