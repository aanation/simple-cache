# Simple cache object

## Usage example 

```javascript
const { SimpleCache } = require('simple-cache');

const cache = new SimpleCache({ age: 60 * 1000 }); // 1 minute cache 
cache.set('test1', 123);
cache.set('test2', {
    a: 3,
    b: 4
})
cache.set('test3', 'fdfd');

cache.get('test1'); // 123
cache.get('test2'); // { a: 3, b: 4 }
cahce.get('test3'); // 'fdfd'

// after 80 sec
setTimeout(() => {
    // values expired
    cache.get('test1'); // undefined
    cache.get('test2'); // undefined
    cahce.get('test3'); // undefined
}, 80 * 1000); 
```

## Options 

* ```age``` Max age in ms. By default ```Infinity```

