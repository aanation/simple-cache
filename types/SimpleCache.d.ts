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
declare class SimpleCache {
    private age;
    private values;
    set(key: string, value: any): void;
    get(key: string): any;
    delete(key: string): void;
    constructor(options?: Options);
}
export { SimpleCache };
