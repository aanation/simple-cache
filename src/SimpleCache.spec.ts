
import { SimpleCache } from './SimpleCache';
import { should, assert, expect } from 'chai';

describe('simple cache', () => {
  it('get value', (done) => {
    const cache = new SimpleCache(); // Infinity age
    const testValue = {
      a: 3,
      s: 4
    }; 
    cache.set('test', testValue);
    should().equal(cache.get('test'), testValue);
    setTimeout(() => {
      should().equal(cache.get('test'), testValue);
      done();
    }, 700);
  });

  it('get expired value', (done) => {
    const cache = new SimpleCache({ age: 500 }); 
    const testValue = 'abc';
    setTimeout(() => {
      should().equal(cache.get('test'), undefined);
      done();
    }, 700);
  }); 

  it('delete value', () => {
    const cache = new SimpleCache({ age: 500 }); 
    cache.set('test', 123);
    should().equal(cache.get('test'), 123);
    cache.delete('test');
    should().equal(cache.get('test'), undefined);
  }); 
});


