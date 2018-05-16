"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SimpleCache_1 = require("./SimpleCache");
const chai_1 = require("chai");
describe('simple cache', () => {
    it('get value', (done) => {
        const cache = new SimpleCache_1.SimpleCache();
        const testValue = {
            a: 3,
            s: 4
        };
        cache.set('test', testValue);
        chai_1.should().equal(cache.get('test'), testValue);
        setTimeout(() => {
            chai_1.should().equal(cache.get('test'), testValue);
            done();
        }, 700);
    });
    it('get expired value', (done) => {
        const cache = new SimpleCache_1.SimpleCache({ age: 500 });
        const testValue = 'abc';
        setTimeout(() => {
            chai_1.should().equal(cache.get('test'), undefined);
            done();
        }, 700);
    });
    it('delete value', () => {
        const cache = new SimpleCache_1.SimpleCache({ age: 500 });
        cache.set('test', 123);
        chai_1.should().equal(cache.get('test'), 123);
        cache.delete('test');
        chai_1.should().equal(cache.get('test'), undefined);
    });
});
//# sourceMappingURL=SimpleCache.spec.js.map