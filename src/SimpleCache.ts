import { EBUSY } from "constants";

export interface Options {
  age?: number;
} 

export interface Value {
  expired: Date;
  value: any;
} 

export interface Values {
  [key: string]: any;
}

class SimpleCache {
  private age: number;
  private values: Values = {};

  public set(key: string, value: any) {
    this.values[key] = {
      value,
      expired: isFinite(this.age) ? new Date(Date.now() + this.age) : Infinity
    }; 
  }

  public get(key: string) {
    const targetValue: Value = this.values[key];
    if (targetValue && !isFinite(this.age)) {
      return targetValue.value; 
    }
    if (targetValue && (+targetValue.expired > Date.now())) {
      return targetValue.value; 
    }
    // value expired
    if (targetValue && (+targetValue.expired < Date.now())) {
      this.delete(key);
    }
  }

  public delete(key: string) {
    delete this.values[key];
  }
  
  constructor(options?: Options) {
    this.age = (options && options.age) || Infinity;
  }
}

export { SimpleCache };
module.exports = { SimpleCache };
