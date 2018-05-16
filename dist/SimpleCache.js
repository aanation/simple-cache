"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleCache {
    constructor(options) {
        this.values = {};
        this.age = (options && options.age) || Infinity;
    }
    set(key, value) {
        this.values[key] = {
            value,
            expired: isFinite(this.age) ? new Date(Date.now() + this.age) : Infinity
        };
    }
    get(key) {
        const targetValue = this.values[key];
        if (targetValue && !isFinite(this.age)) {
            return targetValue.value;
        }
        if (targetValue && (+targetValue.expired > Date.now())) {
            return targetValue.value;
        }
        if (targetValue && (+targetValue.expired < Date.now())) {
            this.delete(key);
        }
    }
    delete(key) {
        delete this.values[key];
    }
}
exports.SimpleCache = SimpleCache;
module.exports = { SimpleCache };
//# sourceMappingURL=SimpleCache.js.map