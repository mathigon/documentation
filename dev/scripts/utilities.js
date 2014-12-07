// Core JavaScript Tools
// (c) 2014, Mathigon / Philipp Legner
// MIT License (https://github.com/Mathigon/core.js/blob/master/LICENSE)

 (function() {
var M = { core: true };

var _arrayPush = Array.prototype.push;
var _arraySlice = Array.prototype.slice;
var _arrayShift = Array.prototype.shift;
var _arrayJoin = Array.prototype.join;

// Node module pattern loaders, including Browserify
if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = M;
    global.M = M;

// AMD module
} else if (typeof define === 'function' && define.amd) {
    define(M);

// Global variable
} else {
    window.M = M;
}


// =================================================================================================


M.noop = function() {};

M.trueop = function(){ return true; };

M.run = function(obj, args, _this) {
    if (obj instanceof Function) return obj.apply(_this || null, args);
    return obj;
};

// Checks if x is strictly equal to any one of the following arguments
M.isOneOf = function(x, values) {
    for (var i=1; i<arguments.length; ++i)
        if (x === arguments[i]) return true;
    return false;
};

(function() {

    // ---------------------------------------------------------------------------------------------
    // Object Functions

    M.object = {};

    // Checks is an object has a given key
    M.has = function(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
    };

    // Returns an array with all keys in an object
    M.object.keys = Object.keys || function(obj) {
        var keys = [];
        for (var key in obj) if (M.has(obj, key)) keys.push(key);
        return keys;
    };

    // Swaps keys and values for an object
    M.object.invert = function(obj) {
        var result = {};
        var keys = M.keys(obj);
        for (var i = 0, l = keys.length; i < l; ++i) {
            result[obj[keys[i]]] = keys[i];
        }
        return result;
    };

    M.object.create = Object.create || (function () {
        function F() {}
        return function (proto) {
            F.prototype = proto;
            return new F();
        };
    })();


    // ---------------------------------------------------------------------------------------------
    // Object/Array Iterators

    // Executes fn for every value in an array or an object, and returns the map
    M.each = function(collection, fn) {
        var result, i;
        var l = collection.length;
        if (l === 0 || (l && collection.hasOwnProperty(l-1))) {
            result = [];
            for (i=0; i<l; ++i) if (M.has(collection, i)) result.push(fn(collection[i], i));
        } else {
            result = {};
            for (i in collection) if (M.has(collection, i)) result[i] = fn(collection[i], i);
        }
        return result;
    };

    // Executes fn for every value in an array or an object, until the function returns a
    // non-undefined value. Then the loop stops and M.some returns that value;
    M.some = function(collection, fn) {
        var i, x;
        var l = collection.length;
        if (l === 0 || (l && collection.hasOwnProperty(l-1))) {
            for (i=0; i<l; ++i) if (M.has(collection, i)) {
                x = fn(collection[i], i);
                if (x !== undefined) return x;
            }
        } else {
            for (i in collection) if (M.has(collection, i)) {
                x = fn(collection[i], i);
                if (x !== undefined) return x;
            }
        }
    };



    // ---------------------------------------------------------------------------------------------
    // Object Extend

   function makePrototype(obj, name, fn) {
        Object.defineProperty(obj, name, {
            enumerable: false,
            writable: true,
            value: fn
        });
    }

    M.extend = function(obj, properties, nonEnumerable) {
        for (var p in properties) {
            if (M.has(properties, p)) {
                if (properties[p] === undefined) {
                    delete obj[p];
                } else if (nonEnumerable) {
                    makePrototype(obj, p, properties[p]);
                } else {
                    obj[p] = properties[p];
                }
            }
        }
    };

    // Merges multiple objects into a single one
    M.merge = function() {
        var result = {};
        for (var i=0; i<arguments.length; ++i) {
            M.each(arguments[i], function(value, property) { result[property] = value; });  // jshint ignore:line
        }
        return result;
    };


    // ---------------------------------------------------------------------------------------------
    // Object Watchers
    // https://gist.github.com/eligrey/384583

    M.watch = function(obj, prop, handler) {
        var value = obj[prop];

        var getter = function () { return value; };
        var setter = function (newVal) {
            var oldVal = value;
            value = newVal;
            return newVal = handler.call(this, newVal, oldVal);  // jshint ignore:line
        };

        if (delete obj[prop]) { // can't watch constants
            Object.defineProperty(obj, prop, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true
            });
        }
    };

    M.unwatch = function(obj, prop) {
        var val = obj[prop];
        delete obj[prop]; // remove accessor
        obj[prop] = val;
    };

})();

(function() {

    var typeCache = {};
    var typeRegexp = /\s([a-zA-Z]+)/;

    M.typeof = function(obj) {

        // Matches null and undefined
        if (obj == null) return '' + obj;

        // Matches NaN (different to number)
        if (M.isNaN(obj)) return 'nan';

        // Matches all other types
        var type = toString.call(obj);
        return typeCache[type] || (typeCache[type] = type.match(typeRegexp)[1].toLowerCase());
    };

    // ---------------------------------------------------------------------------------------------

    M.isType = function(x, type) {
        return M.typeof(x) === type;
    };

    M.isString = function(x) {
        return (x instanceof String) || (typeof x === 'string');
    };

    M.isArray = Array.isArray || function(x) {
        return Object.prototype.toString.call(x) === '[object Array]';
    };

    M.isNumber = function(x) {
        return (x instanceof Number) || (typeof x === 'number');
    };

    M.isInteger = function(x) {
        return x % 1 === 0;
    };

    M.isDate = function(x) {
        return Object.prototype.toString.call(x) === '[object Date]';
    };

    M.isNaN = function(x) {
        return x !== x;
    };

    M.isFunction = function(x) {
        return x instanceof Function;
    };

    M.isBoolean = function(x) {
        return (x instanceof Boolean) || (typeof x === 'boolean');
    };

    M.isObject = function(x) {
        return x === Object(x);
    };

})();

(function() {

    // ---------------------------------------------------------------------------------------------
    // Copy

    M.shallowCopy = function(obj) {
        /*jshint -W053 */

        // Handle (simple) strings, numbers, booleans, null and undefined
        var type = typeof obj;
        if (obj == null || M.isOneOf(type, 'number', 'string', 'boolean')) return obj;

        // Hande other type objects
        if (obj instanceof Number)  return new Number(obj.valueOf());
        if (obj instanceof String)  return new String(obj.valueOf());
        if (obj instanceof Boolean) return new Boolean(obj.valueOf());
        if (obj instanceof Date)    return new Date(obj.valueOf());
        if (obj instanceof RegExp)  return new RegExp(obj);

        // Handle Arrays and Objects
        return M.each(obj, function(val) { return val; });
    };

    // ---------------------------------------------------------------------------------------------

    var deepCopyStore = [];

    function deepCopyStoreLookup(obj) {
        for (var i=0; i<deepCopyStore.length; ++i)
            if (deepCopyStore[i][0] === obj) return deepCopyStore[i][1];
        return null;
    }

    function deepCopyHelper(obj) {
        /*jshint -W053 */

        // Handle (simple) strings, numbers, booleans, null and undefined
        var type = typeof obj;
        if (obj == null || M.isOneOf(type, 'number', 'string', 'boolean')) return obj;

        // Hande other type objects
        if (obj instanceof Number)  return new Number(obj.valueOf());
        if (obj instanceof String)  return new String(obj.valueOf());
        if (obj instanceof Boolean) return new Boolean(obj.valueOf());
        if (obj instanceof Date)    return new Date(obj.valueOf());
        if (obj instanceof RegExp)  return new RegExp(obj);

        // Avoids Recursive Loops
        var x = deepCopyStoreLookup(obj);
        if (x) return x;

        var copy = obj;

        // Handle Arrays
        if (M.isArray(obj)) {
            copy = [];
            deepCopyStore.push([obj, copy]);
            for (var i = 0, l = obj.length; i < l; ++i) copy[i] = deepCopyHelper(obj[i]);

        // Handle Objects
        } else if (obj instanceof Object) {
            copy = {};
            deepCopyStore.push([obj, copy]);
            for (var attr in obj) if (M.has(obj, attr)) copy[attr] = deepCopyHelper(obj[attr]);
        }

        return copy;
    }

    M.deepCopy = function(obj) {
        deepCopyStore = [];
        var copy = deepCopyHelper(obj);
        deepCopyStore = [];
        return copy;
    };


    // ---------------------------------------------------------------------------------------------
    // Equals

    M.shallowEquals = function(obj1, obj2) {
        // TODO
    };

    // ---------------------------------------------------------------------------------------------

    M.deepEquals = function(obj1, obj2) {
        // TODO
    };

})();

(function() {

    M.inherit = function(ChildClass, ParentClass) {
        ChildClass.prototype = new ParentClass;  // jshint ignore:line
        ChildClass.prototype.constructor = this;
    };

    M.Class = function() {
        this._events = {};
    };

    M.extend(M.Class.prototype, {

        on: function(event, fn) {
            if (this._events[event]) {
                if (!this._events[event].has(fn)) this._events[event].push(fn);
            } else {
                this._events[event] = [fn];
            }
        },

        off: function(event, fn) {
            if (!this._events[event]) return;
            var index = this._events[event].indexOf(fn);
            if (index >= 0) this._events.splice(index, 1);
        },

        trigger: function(event, args) {
            if (!this._events[event]) return;
            var _this = this;
            M.each(this._events[event], function(fn) { fn.call(_this, args); });
        }

    });

    M.Class.extend = function(props) {

        var parent = this;

        var NewClass = function() {
            this._events = {};
            if (props.init) props.init.apply(this, arguments);
        };

        NewClass.prototype = {};
        for (var i in parent.prototype) NewClass.prototype[i] = parent.prototype[i];  // jshint ignore:line
        for (i in props) if (i !== 'init') NewClass.prototype[i] = props[i];
        NewClass.extend = M.Class.extend;
        NewClass.prototype.constructor = NewClass;
        NewClass.parent = parent;

        return NewClass;
    };

})();

(function() {

    M.extend(String.prototype, {

        endsWith: function(search) {
            var end = this.length;
            var start = end - search.length;
            return (this.substring(start, end) === search);
        },

        strip: function() {
            return this.replace(/^\s+/, '').replace(/\s+$/, '');
        },

        collapse: function() {
            return this.trim().replace(/\s+/g, ' ');
        },

        toTitleCase: function() {
            return this.replace(/\S+/g, function(a){
                return a.charAt(0).toUpperCase() + a.slice(1);
            });
        },

        words: function() {
            return this.strip().split(/\s+/);
        }

    }, true);

    if ( !String.prototype.contains ) {
        M.extend(String.prototype, {

            contains: function() {
                return String.prototype.indexOf.apply( this, arguments ) !== -1;
            }
        }, true);
    }

})();

(function() {

    function getLength(array) {
        return array.length;
    }


    // ---------------------------------------------------------------------------------------------
    // Array Generators

    function tabulateWith(fn, vals, args) {
        if (!args.length) return M.run(fn, vals);

        var newArgs = _arraySlice.call(args, 0);
        var x = newArgs.shift();

        var result = [];
        for (var i=0; i<x; ++i) result.push(tabulateWith(fn, vals.concat([i]), newArgs));
        return result;
    }

    M.tabulate = function(fn, x, y, z) {
        var indices = M.toArray(arguments);
        _arrayShift.call(indices);
        return tabulateWith(fn, [], indices);
    };

    M.list = function(a, b, step) {
        if (!step) step = 1;
        var arr = [], i;

        if (b == null && a >= 0) {
            for (i=0; i<a; i += step) arr.push(i);
        } else if (b == null) {
            for (i=0; i>a; i -= step) arr.push(i);
        } else if (a <= b) {
            for (i=a; i<=b; i += step) arr.push(i);
        } else {
            for (i=a; i>=b; i -= step) arr.push(i);
        }

        return arr;
    };


    // ---------------------------------------------------------------------------------------------
    // Array Functions

    // For types that cannot be converted to an array, toArray() returns a 1 item array containing
    // the passed-in object.

    var unsliceable = ['undefined', 'null', 'number', 'boolean', 'string', 'function'];

    M.toArray = function(obj) {
        return unsliceable.has(M.typeof(obj)) ? [obj] : Array.prototype.slice.call(obj, 0);
    };

    M.map = function(fn) {
        var arrays = M.toArray(arguments);
        _arrayShift.call(arrays);

        var maxLength = Math.max.apply(Math, M.each(arrays, getLength));

        return M.tabulate(function(i) {
            return fn.apply(null, M.each(arrays, function(x) { return x[i]; }));
        }, maxLength);
    };


    // ---------------------------------------------------------------------------------------------
    // Array Prototype

    M.extend(Array.prototype, {

        // Runs the function fn(element, index) for every element in an array
        each: function(fn, reverse) {
            var x = [], i;
            var n = this.length;

            if (reverse) {
                for (i = n - 1; i >= 0; --i)
                    if (M.has(this, i)) x[i] = fn(this[i], i);
            } else {
                for (i = 0; i < n; ++i)
                    if (M.has(this, i)) x[i] = fn(this[i], i);
            }

            return x;
        },

        has: function(x) {
            return this.indexOf(x) !== -1;
        },

        total: function() {
            var total = 0, n = this.length;
            for (var i=0; i < n; ++i) total += (+this[i] || 0);
            return total;
        },

        first: function() {
            return this[0];
        },

        last: function() {
            return this[this.length - 1];
        },

        // Finds the minimum of all values in an array a
        min: function() {
            return Math.min.apply(Math, this);
        },

        // Finds the maximum of all values in an array a
        max: function() {
            return Math.max.apply(Math, this);
        },

        // Finds the smallest and the largest value in the arra a
        range: function() {
            return [this.min(), this.max()];
        },

        // Removes any null or undefined values in array a
        clean: function() {
            var b = [], n = this.length;
            for (var i = 0; i < n; ++i)
                if (this[i] != null) b.push(this[i]);
            return b;
        },

        // Removes duplicates in an array a
        unique: function() {
            var b = [], n = this.length;
            for (var i = 0; i < n; ++i)
                if (b.indexOf(this[i]) === -1) b.push(this[i]);
            return b;
        },

        // Removes all occurrences of x from the array a
        without: function(x) {
            var b = [], n = this.length;
            for (var i = 0; i < n; ++i)
                if (this[i] !== x) b.push(this[i]);
            return b;
        },

        // Breaks an array a into chunks of size at most n
        chunk: function(n) {
            var chunks = [];
            var lastChunk = [];
            var count = 0, l = this.length;

            for (var i = 0; i < l; ++i) {
                lastChunk.push(this[i]);
                ++count;
                if (count >= n) {
                    chunks.push(lastChunk);
                    lastChunk = [];
                    count = 0;
                }
            }

            if (lastChunk.length) _arrayPush.call(chunks, lastChunk);
            return chunks;
        },

        // Rotates the elements of an array by offset
        rotate: function(offset) {
            var n = this.length;
            offset = ((offset % n) + n) % n; // offset could initially be negative...
            var start = this.slice(0, offset);
            var end = this.slice(offset);
            _arrayPush.apply(end, start);
            return end;
        },

        // Flatten a multi dimensional array, put all elements in a one dimensional array
        flatten: function() {
            var flat = _arraySlice.call(this, 0);

            while (M.isArray(flat[0])) {
                var next = [];
                for (var i = 0, n = flat.length; i < n; ++i) {
                    next = next.concat.apply(next, flat[i]);
                }
                flat = next;
            }

            return flat;
        },

        sortBy: function(p) {
            return this.sort(function(a, b) { return a[p] - b[p]; });
        }

    }, true);

})();

(function() {

    M.Queue = function() {
        this._toResolve = 0;
        this._flushing = false;
        this._stack = [];
    };

    M.Queue.prototype.require = function(fn) {
        var _this = this;
        this._toResolve += 1;
        fn.call(this, function() {
            _this._toResolve -= 1;
            if (_this._toResolve <= 0) _this.flush();
        });
    };

    M.Queue.prototype.unrequire = function(fn) {
        // TODO
    };

    M.Queue.prototype.timeout = function(t) {
        this.require(function(resolve) {
            setTimeout(function() { resolve(); }, t);
        });
    };

    M.Queue.prototype.untimeout = function(fn) {
        // TODO
    };

    M.Queue.prototype.flush = function() {
        if (this._flushing) return;
        this._flushing = true;
        for (var i=0; i<this._stack.length; ++i) this._stack[i]();
        this._stack = [];
        this._flushing = false;
    };

    M.Queue.prototype.wait = function(fn) {
        if (this._flushing || this._toResolve <= 0) {
            fn();
        } else {
            this._stack.push(fn);
        }
    };

    M.Queue.prototype.unwait = function(fn) {
        // TODO
    };

    M.Queue.prototype.clear = function() {
        // TODO
    };

})();


})();
// Fermat Mathematics Tools
// (c) 2014, Mathigon / Philipp Legner
// MIT License (https://github.com/Mathigon/fermat.js/blob/master/LICENSE)

 (function() {
if (typeof M !== 'object' || !M.core) throw new Error('fermat.js requires core.js.');
M.fermat = true;

// Epsilon/tolerance value used by default
var EPS = 0.000001;

// Constants
M.PHI = 1.618033988749895;
M.SQRT2 = 1.4142135623730951;

M.setPrecision = function(eps) {
    EPS = eps || 0.000001;
};

var _arrayJoin = Array.prototype.join;
var _arrayPush = Array.prototype.push;
var _arraySlice = Array.prototype.slice;

// The function remembers previously evaluated values, avoiding repetitive calculations
// http://blog.thejit.org/2008/09/05/memoization-in-javascript/
function caching(fn) {
    if (fn.memo) return fn.memo;
    var cache = {};

    fn.memo = function() {
        var key = _arrayJoin.call(arguments);
        return (cache[key] !== undefined) ? cache[key] : cache[key] = fn.apply(this, arguments);
    };

    return fn.memo;
}

// This function tries to convert all elements in an array to a number
function toNumberArray(array) {
    var newArray = [];
    for (var i=0, n=array.length; i<n; ++i) newArray.push(+array[i]);
    return newArray;
}

function findInArray(array, x) {
    for (var i=0, n=array.length; i<n; ++i) if (array[i] === x) return i;
    return -1;
}

function concatArrays(a1, a2) {
    return Array.prototype.concat.apply(a1, a2);
}

(function() {

    // ---------------------------------------------------------------------------------------------
    // Simple Functions

    M.nearlyEquals = function(x, y, tolerance) {
        return Math.abs(x - y) < (tolerance || EPS);
    };

    M.sign = Math.sign || function(x) {
        return x > 0 ? 1 : x < 0 ? -1 : 0;
    };

    M.square = function(x) {
        return x * x;
    };

    M.cube = function(x) {
        return x * x * x;
    };

    M.bound = function(x, min, max) {
        if (max == null) max = Infinity;
        if (min == null) min = -Infinity;
        return Math.min(max, Math.max(min, x));
    };

    M.between = function(x, a, b) {
        return x >= a && x <= b;
    };


    // ---------------------------------------------------------------------------------------------
    // String Conversion

    // Adds ','s as thousands seperators to a number
    M.numberFormat = function(x) {
        x = ('' + x).split('.');
        var n = x[0];
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(n)) {
            n = n.replace(rgx, '$1' + ',' + '$2');
        }
        return n + (x.length > 1 ? '.' + x[1] : '');
    };

    M.toOrdinal = function(x) {
        if(Math.abs(x) % 100 >= 11 && Math.abs(x) % 100 <= 13)
            return x + 'th';

        switch(x % 10) {
            case 1: return x + 'st';
            case 2: return x + 'nd';
            case 3: return x + 'rd';
            default: return x + 'th';
        }
    };


    // ---------------------------------------------------------------------------------------------
    // Rounding, Decimals and Decimals

    // Returns the array of the integer digits of a number n
    // digits(376) = [6, 7, 3]
    M.digits = function(n) {
        if (n === 0) return [0];
        var digits = [];
        while (n > 0) {
            digits.push(n % 10);
            n = Math.floor(n / 10);
        }
        return digits;
    };

    // Returns the fractional digits of a number
    // decimalDigits(3.456) = [4, 5, 6]
    M.fractionalDigits= function(n) {
        var str = '' + Math.abs(n - Math.floor(n));
        return toNumberArray(str.split(''));
    };

    // Returns the number of digits after the decimal place
    M.decimalPlaces = function(n) {
        var str = '' + Math.abs(n);
        str = str.split('.');
        return str.length === 1 ? 0 : str[1].length;
    };

    // Round a number to a certain number of decimal places
    M.round = function(n, precision) {
        var factor = Math.pow(10, precision || 0);
        return Math.round(n * factor) / factor;
    };

    // Round a number n to the nearest increment (or 1)
    // round(70, 30) = 60, round(45,30) = 60, round(20.6) = 21
    M.roundTo = function(n, increment) {
        if (!increment) increment = 1;
        return Math.round(n / increment) * increment;
    };

    M.roundTowardsZero = function(x) {
        // Add 0.00001 because of floating points uncertainty
        // TODO use x|0;
        return x < 0 ? Math.ceil(x - 0.00001) : Math.floor(x + 0.00001);
    };

    // Returns a [numerator, denominator] array rational representation of `decimal`
    // See http://en.wikipedia.org/wiki/Continued_fraction for implementation details
    M.toFraction = function(decimal, precision) {
        precision = precision || 0.0001;

        var n = [1, 0], d = [0, 1];
        var a = Math.floor(decimal);
        var rem = decimal - a;

        while (d[0] <= 1/precision) {
            if (M.nearlyEquals(n[0] / d[0], precision)) return [n[0], d[0]];
            n = [a*n[0] + n[1], n[0]];
            d = [a*d[0] + d[1], d[0]];
            a = Math.floor(1 / rem);
            rem = 1/rem - a;
        }

        // Failed to find a nice rational representation so return an irrational "fraction"
        return [decimal, 1];
    };


    // ---------------------------------------------------------------------------------------------
    // Operations

    M.add = function() {
        var sum = 0;
        for (var i=0; i<arguments.length; ++i) sum += (+arguments[i] || 0);
        return sum;
    };

    M.mult = function() {
        var sum = 0;
        for (var i=0; i<arguments.length; ++i) sum *= (+arguments[i] || 1);
        return sum;
    };

    M.subtr = function(a, b) {
        return a - b;
    };

    M.div = function(a, b) {
        return a / b;
    };

    // The JS implementation of the % operator returns the symmetric modulo.
    // Both are identical if a >= 0 and m >= 0 but the results differ if a or m < 0.
    M.mod = function(a, m) {
        return ((a % m) + a) % m;
    };

    M.log = function(x, b) {
        return M.isNumber(b) ? Math.log(x) / Math.log(b) : Math.log(x);
    };

    M.log10 = Math.log10 || function (x) {
        return Math.log(x) / Math.log(10);
    };

    M.log2 = Math.log2 || function (x) {
        return Math.log(x) / Math.log(2);
    };

    M.cosh = Math.cosh || function (x) {
        return (Math.exp(x) + Math.exp(-x)) / 2;
    };

    M.sinh = Math.sinh || function (x) {
        return (Math.exp(x) - Math.exp(-x)) / 2;
    };

})();

(function() {

    var smallPrimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];


    M.gcd = function gcd(a, b) {
        if (arguments.length > 2) {
            var rest = [].slice.call(arguments, 1);
            return gcd(a, gcd.apply(null, rest));
        }

        var mod;
        a = Math.abs(a);
        b = Math.abs(b);

        while (b) {
            mod = a % b;
            a = b;
            b = mod;
        }

        return a;
    };


    M.lcm = function lcm(a, b) {
        if (arguments.length > 2) {
            var rest = [].slice.call(arguments, 1);
            return lcm(a, lcm.apply(null, rest));
        }

        return Math.abs(a * b) / M.gcd(a, b);
    };


    M.isPrime = function(n) {
        if (n <= 1 || !M.isInt(n)) return false;
        if (n < 101) return (findInArray(smallPrimes, n) >= 0);
        if (n % 2 === 0) return false;

        var sqrt = Math.sqrt(n);
        for (var i = 3; i <= sqrt; i += 2) {
            if (n % i === 0) return false;
        }

        return true;
    };


    M.isOdd = function(n) {
        return n % 2 === 1;
    };


    M.isEven = function(n) {
        return n % 2 === 0;
    };


    M.primeFactorization = function fact(n) {
        if (n === 1) return [];
        if (M.isPrime(n)) return [n];

        var maxf = Math.sqrt(n);
        for (var f = 2; f <= maxf; ++f) {
            if (n % f === 0) return concatArrays(fact(f), fact(n / f));
        }
    };


    M.primeFactors = function(n) {
        return M.primeFactorization(n).unique();
    };


    // Returns an array of all primes below n
    M.listPrimes = function(n) {
        if (n < 2) return [];
        var result = [2];

        for (var i = 3; i <= n; i++) {
            var notMultiple = false;
            for (var j in result) {
                if (M.has(result, j)) notMultiple = notMultiple || (0 === i % result[j]);
            }
            if (!notMultiple) result.push(i);
        }

        return result;
    };

})();

(function() {

    M.factorial = caching(function(x) {
        if (x < 0) return NaN;
        if (x === 0) return 1;
        if (x <= 1) return x;
        return x * M.factorial(x - 1);
    });


    // Returns binomial coefficient (n choose k)
    M.binomial = caching(function(n, k) {
        if (k === 0) {
            return 1;
        } else if (2 * k > n) {
            return M.binomial(n, n - k);
        } else {
            var coeff = 1;
            for (var i = k; i > 0; --i) {
                coeff *= (n - i + 1);
                coeff /= i;
            }
            return coeff;
        }
    });

    /*
    if (k > n || k < 0) return NaN;

    k = Math.round(k);
    n = Math.round(n);

    if (k === 0 || k === n) return 1;

    var b = 1;

    for (var i = 0; i < k; i++) {
        b *= (n - i);
        b /= (i + 1);
    }

    return b;
    */


    // Returns an array of all the permutationsof arr.
    // permutations(arr)[0] == arr
    // http://stackoverflow.com/questions/9960908/permutations-in-javascript
    M.permutations = function(arr) {
        var permArr = [];
        var usedChars = [];
        function permute(input) {
            for (var i = 0; i < input.length; i++) {
                var term = input.splice(i, 1)[0];
                usedChars.push(term);
                if (input.length === 0) {
                    permArr.push(usedChars.slice());
                }
                permute(input);
                input.splice(i, 0, term);
                usedChars.pop();
            }
            return permArr;
        }
        return permute(arr);
    };


    function getSubsets(arr) {
        if (arr.length === 1) return [[], arr];
        var last = arr.pop();
        var subsets = getSubsets(arr);
        var result = [];
        for (var i=0; i<subsets.length; ++i) {
            var a2 = _arraySlice.call(subsets[i], 0);
            a2.push(last);
            result.push(subsets[i], a2);
        }
        return result;
    }

    // Returns all subsets of arr (of given length)
    M.subsets = function(arr, length) {
        var myArr = _arraySlice.call(arr, 0);
        var subsets = getSubsets(myArr);
        if (length) subsets = subsets.filter(function(x) { return x.length === length; });
        return subsets;
        // FUTURE Sorting of Subsets Results
    };


    // Returns a string of n coin flips like 'HTTHTHTTHTT'
    M.coinFlips = function(n) {
        var str = '';
        for (var i=0; i<n; ++i) {
            str += (Math.random() >= 0.5) ? 'H' : 'T';
        }
        return str;
    };

})();

(function() {

    M.random = {};


    // ---------------------------------------------------------------------------------------------
    // Simple Random Number Generators

    M.random.integer = function(a, b) {
        return (b == null ? 0 : a) +  Math.floor((b == null ? a : b - a + 1) * Math.random());
    };

    M.random.integerArray = function(n) {
        var a = [];
        for (var i=0; i<n; ++i) a.push(i);
        return M.shuffle(a);
    };

    // Choses a random value from weights [2, 5, 3] or { a: 2, b: 5, c: 3 }
    // Total is optional to specify the total of the weights, if the function is called repeatedly
    M.random.weighted = function(obj, setTotal) {
        var total = 0;
        if (setTotal == null) {
            M.each(obj, function(x) { total += (+x); });
        } else {
            total = setTotal;
        }

        var rand = Math.random() * total;
        var curr = 0;

        return M.some(obj, function(x, i) {
            curr += obj[i];
            if (rand <= curr) return i;
        });
    };


    // ---------------------------------------------------------------------------------------------
    // Array Shuffle

    // Randomly shuffles the elements in an array
    M.shuffle = function(a) {
        a = _arraySlice.call(a, 0); // create copy
        var j, tmp;
        for (var i = a.length - 1; i; --i) {
            j = Math.floor(Math.random() * (i+1));
            tmp = a[j];
            a[j] = a[i];
            a[i] = tmp;
        }
        return a;
    };


    // ---------------------------------------------------------------------------------------------
    // Discrete Distribution

    M.random.bernoulli = function(p) {
        if (p == null) p = 0.5;
        p = Math.max(0,Math.min(1,p));
        return (Math.random() < p ? 1 : 0);
    };

    M.random.binomial = function(n,p) {
        if (n == null) n = 1;
        if (p == null) p = 0.5;
        var t = 0;
        for (var i=0; i<n; ++i) t += M.random.bernoulli(p);
        return t;
    };

    M.random.poisson = function(l) {
        if (l == null) l = 1;
        if (l <= 0) return 0;
        var L = Math.exp(-l), p = 1;
        for (var k = 0; p > L; ++k) p = p * Math.random();
        return k - 1;
    };


    // ---------------------------------------------------------------------------------------------
    // Continuous Distribution

    M.random.uniform = function(a, b) {
        if (a == null) a = 0;
        if (b == null) b = 1;
        return a + (b-a) * Math.random();
    };

    M.random.normal = function(m, v) {
        if (m == null) m = 0;
        if (v == null) v = 1;

        var u1 = Math.random();
        var u2 = Math.random();
        var rand = Math.sqrt( -2 * Math.log(u1) ) * Math.cos( 2 * Math.PI * u2 );

        return rand * Math.sqrt(v) + m;
    };

    M.random.exponential = function(l) {
        if (l == null) l = 1;
        return l <= 0 ? 0 : -Math.log(Math.random()) / l;
    };

    M.random.geometric = function(p) {
        if (p == null) p = 0.5;
        if (p <= 0 || p > 1) return null;
        return Math.floor( Math.log(Math.random()) / Math.log(1-p) );
    };

    M.random.cauchy = function() {
        var rr, v1, v2;
        do {
            v1 = 2 * Math.random() - 1;
            v2 = 2 * Math.random() - 1;
            rr = v1 * v1 + v2 * v2;
        } while (rr >= 1);
        return v1/v2;
    };


    // ---------------------------------------------------------------------------------------------
    // PDFs

    M.normalPDF = function(x, m, v) {
        return Math.exp(-M.square(x - m) / (2 * v)) / Math.sqrt(2 * Math.PI * v);
    };

})();

(function() {

    M.mean = M.average = function(a) {
        return a.length ? M.total(a) / a.length : 0;

    };

    M.median = function(values) {
        var n = values.length;
        if (!n) return 0;

        var sorted = values.slice(0).sort();
        return (n % 2 === 1) ? sorted[Math.floor(n/2)] : (sorted[n/2 - 1] + sorted[n/2]) / 2;
    };


    // Returns 'null' if no mode exists (multiple values with the same largest count)
    M.mode = function(values) {
        var numInstances = [];
        var modeInstances = -1;

        var mode;
        for (var i = 0; i < values.length; i++) {
            if (!numInstances[values[i]]) {
                numInstances[values[i]] = 1;
            } else {
                numInstances[values[i]] += 1;
                if (numInstances[values[i]] > modeInstances) {
                    modeInstances = numInstances[values[i]];
                    mode = values[i];
                }
            }
        }

        // iterate again to check for 'no mode'
        for (i = 0; i < numInstances.length; i++) {
            if (numInstances[i]) {
                if (i !== mode && numInstances[i] >= modeInstances) {
                    return null;
                }
            }
        }

        return mode;
    };


    M.variance = function(values) {
        var n = values.length;
        if (!n) return 0;

        var mean = M.mean(values);

        var sum = 0;
        for (var i=0; i<n; ++i) sum += M.square(values[i] - mean);

        return sum / (n - 1);
    };


    M.stdDev = function(values) {
        return Math.sqrt(M.variance(values));
    };


    // Determines the covariance of the numbers in two arrays aX and aY
    M.covariance = function(aX, aY) {
        if (aX.length !== aY.length) throw new Error('Array length mismatch');
        var n = aX.length;
        var total = 0;
        for (var i = 0; i < n; i++) total += aX[i] * aY[i];
        return (total - aX.total() * aY.total() / n) / n;
    };


    M.correlation = function(aX, aY) {
        if (aX.length !== aY.length) throw new Error('Array length mismatch');
        var covarXY = M.covariance(aX, aY);
        var stdDevX = aX.standardDev();
        var stdDevY = aY.standardDev();
        return covarXY / (stdDevX * stdDevY);
    };


    M.rSquared = function(source, regression) {

        var residualSumOfSquares = source.each(function(d, i) {
            return M.square(d - regression[i]);
        }).sum();

        var totalSumOfSquares = source.each(function(d) {
            return M.square(d - source.average());
        }).sum();

        return 1 - (residualSumOfSquares / totalSumOfSquares);
    };


    M.linearRegression = function(aX, aY) {
        var n = aX.length;

        var sumX = aX.sum();
        var sumY = aY.sum();
        var sumXY = aX.each(function(d, i) { return d * aY[i]; }).sum();
        var sumXSquared = aX.each(function(d) { return d * d; }).sum();

        var meanX = aX.average();
        var meanY = aY.average();

        var b = (sumXY - 1 / n * sumX * sumY) / (sumXSquared - 1 / n * (sumX * sumX));
        var a = meanY - b * meanX;

        return function(x) { return a + b * x; };
    };


})();

(function() {


    M.Complex = function(re, im) {
        this.re = re || 0;
        this.im = im || 0;
    };


    M.extend(M.Complex.prototype, {

        toString: function() {
            if (!this.real) return this.imaginary + 'i';
            if (!this.imaginary) return this.real;
            return this.real + ' + ' + this.imaginary + 'i';
        },

        magnitude: function () {
            return Math.sqrt(this.re * this.re + this.im * this.im);
        },

        phase: function () {
            return Math.atan2(this.im, this.re);
        },

        conjugate: function() {
            return new M.complex(this.re, -this.im);
        }

    }, true);


    M.complex = {};

    M.complex.add = function(c1, c2) {
        if (!(c1 instanceof M.Complex)) c1 = new M.Complex(c1, 0);
        if (!(c2 instanceof M.Complex)) c2 = new M.Complex(c2, 0);
        return new M.Complex(c1.re + c2.re, c1.im + c2.im);
    };

    M.complex.subtr = function(c1, c2) {
        if (!(c1 instanceof M.Complex)) c1 = new M.Complex(c1, 0);
        if (!(c2 instanceof M.Complex)) c2 = new M.Complex(c2, 0);
        return new M.Complex(c1.re - c2.re, c1.im - c2.im);
    };

    M.complex.mult = function(c1, c2) {
        if (!(c1 instanceof M.Complex)) c1 = new M.Complex(c1, 0);
        if (!(c2 instanceof M.Complex)) c2 = new M.Complex(c2, 0);
        var re = c1.re * c2.re - c1.im * c2.im;
        var im = c1.im * c2.re + c1.re * c2.im;
        return new M.complex(re, im);
    };

    M.complex.div = function(c1, c2) {
        if (!(c1 instanceof M.Complex)) c1 = new M.Complex(c1, 0);
        if (!(c2 instanceof M.Complex)) c2 = new M.Complex(c2, 0);

        if (Math.abs(c2.re) < EPS && Math.abs(c2.im) < EPS)
            return new M.Complex(Infinity, Infinity);

        var denominator = c2.re * c2.re + c2.im * c2.im;
        var re = (c1.re * c2.re + c1.im * c2.im) / denominator;
        var im = (c1.im * c2.re - c1.re * c2.im) / denominator;
        return new M.Complex(re, im);
    };


})();

(function() {

    var setPrototype = Object.setPrototypeOf ||
                       function(obj, proto) { obj.__proto__ = proto; }; // jshint ignore:line


    // M.Vector([1, 2, 3]) = [1, 2, 3]
    // M.Vector(3) = [null, null, null]
    // M.Vector(3, 1) = [1, 1, 1]

    // M.Vector is a subclass of the native JS Array type and contains all usual Arraymethods.
    // For very long or very large numbers of vectors, native Arrays perform significantly better.
    // All functions in M.vector work with M.Vector objects as well as native arrays

    M.Vector = function(a, b) {

        var array;

        if (Array.isArray(a)) {
            // Reduces performance, but we don't want to modify arguments passed in:
            array = a.slice(0);
        } else {
            array = [];
            if (b === undefined) b = null;
            for (var i=0; i<a; ++i) array.push(b);
        }

        // Reduces performance and violates JS best practices, but seems to be neccessary:
        setPrototype(array, M.Vector.prototype);

        return array;
    };

    M.Vector.prototype = new Array; // jshint ignore:line

    /* Alternate Array Subclass (doesn't use Object.setPrototypeOf but is slower):
       var M.Vector = function(array) { this.push.apply(this, array); };
       M.Vector.prototype = Object.create(Array.prototype);
       M.Vector.prototype.constructor = M.Vector; */

    M.extend(M.Vector.prototype, {

        total: function() {
            return M.total(this);
        },

        average: function() {
            return this.total() / this.length;
        },

        norm: function() {
            var n = 0;
            for (var i=0; i<this.length; ++i) n += M.square(this[i]);
            return Math.sqrt(n);
        },

        normalize: function() {
            var a = [], n = this.length;
            var total = this.norm();
            for (var i = 0; i < n; ++i) a.push(this[i]/total);
            return M.Vector(a);
        },

        toString: function() {
            return '(' + _arrayJoin.call(this, ', ') + ')';
        }

    }, true);

    // ---------------------------------------------------------------------------------------------

    M.vector = {};

    M.vector.dot = function(v1, v2) {
        var n = Math.max(v1.length, v2.length);
        var d = 0;
        for (var i=0; i<n; ++i) d += (v1[i] || 0) * (v2[i] || 0);
        return d;
    };

    M.vector.cross2D = function(x, y) {
        return x[0] * y[1] - x[1] * y[0];
    };

    M.vector.cross = function(v1, v2) {
        return M.Vector([v1[1] * v2[2] - v1[2] * v2[1],
                         v1[2] * v2[0] - v1[0] * v2[2],
                         v1[0] * v2[1] - v1[1] * v2[0]]);
    };

    M.vector.mult = function(v, s) {
        return M.Vector(M.map(function(x) { return x * s; }, v));
    };

})();

(function() {

    // M.Matrix([[1,2],[3,4]]) = [[1,2],[3,4]];
    // M.Matrix(2) = [[0,0],[0,0]];
    // M.Matrix(2,3) = [[0,0,0],[0,0,0]]
    // M.Matrix(2,3,1) = [[1,1,1],[1,1,1]]

    M.Matrix = function(a, b, c) {
        if (!(this instanceof M.Matrix)) return new M.Matrix(a, b, c);

        var isArray = M.isArray(a);
        this.rows = isArray ? a.length : a;
        this.columns = isArray ? Math.max.call(Math, a.map(function(x) { return x.length; }))
                               : (b != null) ? b : a;

        for (var i=0; i<this.rows; ++i) {
            this[i] = [];
            for (var j=0; j<this.columns; ++j) {
                var val = isArray ? a[i][j] : c;
                this[i][j] = (val != null) ? val : null;
            }
        }
    };

    // ---------------------------------------------------------------------------------------------

    M.Matrix.prototype.isSquare = function() {
        return this.rows === this.cols;
    };

    M.Matrix.prototype.row = function(i) {
        return new M.Vector(this[i]);
    };

    M.Matrix.prototype.column = function(j) {
        var c = [];
        for (var i=0; i<this.rows; ++i) c.push(this[i][j]);
        return new M.Vector(c);
    };

    M.Matrix.prototype.transpose = function() {
        var newMatrix = [];

        for (var i=0; i<this.columns; ++i) {
            this[i] = [];
            for (var j=0; j<this.rows; ++j) {
                newMatrix[i][j] = this[j][i];
            }
        }

        return new M.Matrix(newMatrix);
    };

    M.Matrix.prototype.determinant = function() {
        if (!this.isSquare()) throw new Error('Not a square matrix.');
        var n = this.rows, det = 0;

        if (n === 1) {
            return this[0][0];
        } else if (n === 2) {
            return this[0][0] * this[1][1] - this[0][1] * this[1][0];
        }

        for (var col = 0; col < this.cols; ++col) {
            var diagLeft  = this[0][col];
            var diagRight = this[0][col];

            for(var row=1; row < rows; ++row) {
                diagRight *= this[row][M.mod(col + row, n)];
                diagLeft  *= this[row][M.mod(col - row, n)];
            }

            det += diagRight - diagLeft;
        }

        return det;
    };

    M.Matrix.prototype.scalarMultiply = function(val) {
        var result = [];
        for (var i = 0; i < this.rows; i++) {
            result[i] = [];
            for (var j = 0; j < this.columns; j++) {
                result[i][j] = val * this[i][j];
            }
        }
        return M.Matrix(result);
    };

    M.Matrix.prototype.inverse = function() {
        // TODO
    };

    // ---------------------------------------------------------------------------------------------

    M.matrix = {};

    // Create an identity matrix of dimension n x n
    M.matrix.identity = function() {
        var x = new M.Matrix(n, n, 0);
        for (var i = 0; i < n; ++i) x[i][i] = 1;
        return x;
    };

    M.matrix.add = function(m1, m2) {
        if (m1.rows !== m2.rows || m1.cols !== m2.cols) throw new Error('Matrix size mismatch');

        var result = [];

        for (var i = 0; i < m1.length; ++i) {
            result[i] = [];
            for (var j = 0; j < m1[i].length; ++j) {
                result[i][j] = m1[i][j] + m2[i][j];
            }
        }

        return M.Matrix(result);
    };

    M.matrix.rotation = function(angle) {
        // TODO
    };

    M.matrix.shear = function() {
        // TODO
    };

    M.matrix.reflection = function() {
        // TODO
    };

    // Orthogonal Projection
    M.matrix.projection = function() {
        // TODO
    };

    var vMultM = function(v, m) {
        return mMultV(m.transpose(), v);
    };

    var mMultV = function(m, v) {
        // TODO
    };

    var mMultM = function(m1, m2) {
        // TODO
    };

    M.matrix.mult = function(a, b) {
        if (a instanceof M.Vector && b instanceof M.Matrix) {
            return vMultM(a, b);
        } else if (a instanceof M.Matrix && b instanceof M.Vector) {
            return mMultV(a, b);
        } else if (a instanceof M.Matrix && b instanceof M.Matrix) {
            return mMultM(a, b);
        } else {
            throw new Error('Can\'t multiply two vectors; use .dot or .cross instead.');
        }
    };

})();

(function() {

    M.geo = {};

    // TODO  M.geo.Curve class (length, area)
    // TODO circle-circle and circle-polygon intersections
    // TODO Advanced projections functions


    // ---------------------------------------------------------------------------------------------
    // Types

    M.geo.Point = function(x, y) {
        this.x = this[0] = (+x || 0);
        this.y = this[1] = (+y || 0);
        this.length = 2;
    };

    // Defines a line that goes through two M.Points p1 and p2
    M.geo.Line = function(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    };

    // Defines a cubic bezier curve from p1 to p2 with control points q1 and q2
    M.geo.Curve = function(p1, p2, q1, q2) {
        if (q1 == null) q1 = p1;
        if (q2 == null) q1 = p2;

        this.p1 = p1;
        this.p2 = p2;
        this.q1 = q1;
        this.q2 = q2;
    };

    // Defines a circle
    M.geo.Circle = function(c, r) {
        this.c = (r == null) ? new M.Point(0,0) : c;
        this.r = (r == null) ? 1 : r;
    };

    // Defines a rectangle
    M.geo.Rect = function(x, y, w, h) {
        this.x = x || 0;
        this.y = y || 0;
        this.w = (w == null) ? w : 1;
        this.h = (h == null) ? h : 1;
    };

    // Defines a polygon
    M.geo.Polygon = function(points) {
        this.points = points;
    };

    var getGeoType = function(x) {
        if (x instanceof M.geo.Point) return 'point';
        if (x instanceof M.geo.Line) return 'line';
        if (x instanceof M.geo.Circle) return 'circle';
        if (x instanceof M.geo.Rect) return 'rect';
        if (x instanceof M.geo.Polygon) return 'polygon';
        return '';
    };


    // ---------------------------------------------------------------------------------------------
    // Basic Properties

    M.geo.angle = function (a, b, c) {
        var phiA = Math.atan2(a.y - b.y, a.x - b.x);
        var phiC = Math.atan2(c.y - b.y, c.x - b.x);
        var phi = phiC - phiA;

        if (phi < 0) phi += 2 * Math.PI;
        return phi;
    };

    M.geo.Rect.prototype.toPolygon = function() {
        var a = new M.geo.Point(this.x, this.y);
        var b = new M.geo.Point(this.x + this.w, this.y);
        var c = new M.geo.Point(this.x + this.w, this.y + this.h);
        var d = new M.geo.Point(this.x, this.y + this.h);
        return new M.geo.Polygon([a, b, c, d]);
    };

    M.geo.isParallel = function(l1, l2) {
        var x1 = l1.p2.x - l1.p1.x;
        var y1 = l1.p2.y - l1.p1.y;
        var x2 = l2.p2.x - l2.p1.x;
        var y2 = l2.p2.y - l2.p1.y;

        return (x1 === 0 && x2 === 0) || (y1 === 0 && y2 === 0) || M.nearlyEquals(y1/x1, y2/x2);
    };

    M.geo.Line.prototype.contains = function(p) {
        var grad1 = (this.p2.y - this.p1.y) / (this.p2.x - this.p1.x);
        var grad2 = (p.y - this.p1.y) / (p - this.p1.x);
        return M.nearlyEquals(grad1, grad2);
    };

    M.geo.Line.prototype.normalVector = function() {
        var l = this.length();
        var x = (this.p2.x - this.p1.x) / l;
        var y = (this.p2.y - this.p1.y) / l;
        return new M.Point(x, y);
    };

    M.geo.project = function(p, l) {
        var k = M.vector.dot(M.vector.subtr(p, l.p1), l.normalVector());
        return new M.geo.Point(l.p1.x + k.x, l.p1.y + k.y);
    };

    M.geo.lineToPointDistance = function(p, l) {
        return M.geo.distance(p, M.geo.project(p, l));
    };

    M.geo.Polygon.prototype.centroid = function() {
        // TODO
    };


    // ---------------------------------------------------------------------------------------------
    // Interpolation

    M.geo.Line.prototype.at = function(t) {
        var x = t * this.p1.x + (1-t) * this.p2.x;
        var y = t * this.p1.y + (1-t) * this.p2.y;
        return new M.geo.Point(x, y);
    };

    M.geo.Circle.prototype.at = function() {
        // TODO
    };

    M.geo.Rect.prototype.at = function() {
        // TODO
    };

    M.geo.Polygon.prototype.at = function() {
        // TODO
    };

    M.geo.Curve.prototype.at = function(t) {
        var x = M.cube(1-t)*this.p1.x + 3*t*(1-t)*(1-t)*this.q1.x +
                    3*t*t*(1-t)*this.q2.x + M.cube(t)*this.p2.x;
        var y = M.cube(1-t)*this.p1.y + 3*t*(1-t)*(1-t)*this.q1.y +
                    3*t*t*(1-t)*this.q2.y + M.cube(t)*this.p2.y;
        return new M.geo.Point(x, y);
    };


    // ---------------------------------------------------------------------------------------------
    // Distances

    M.geo.distance = function(p1, p2) {
        return Math.sqrt(M.square(p1.x - p2.x) + M.square(p1.y - p2.y));
    };

    M.geo.manhatten = function(p1, p2) {
        return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
    };

    M.geo.Line.prototype.length = function() {
        return M.geo.distance(this.p1, this.p2);
    };

    M.geo.Curve.prototype.length = function() {
        // TODO
    };

    M.geo.Circle.prototype.circumference = function() {
        return 2 * Math.PI * this.r;
    };

    M.geo.Rect.prototype.circumference = function() {
        return 2 * this.w + 2 * this.h;
    };

    M.geo.Polygon.prototype.circumference = function() {
        var C = 0, p = this.points, n = p.length;
        for (var i = 1; i < n; ++i) C += M.geo.distance(p[i - 1], p[i]);
        C += M.geo.distance(p[n-1], p[0]);
        return C;
    };


    // ---------------------------------------------------------------------------------------------
    // Areas

    M.geo.Circle.prototype.area = function() {
        return Math.PI * M.square(this.r);
    };

    M.geo.Rect.prototype.area = function() {
        return Math.abs(this.w * this.h);
    };

    // Polygon has to be non-intersecting
    M.geo.Polygon.prototype.area = function() {
        var p = this.points;
        var n = p.length;
        var A = p[0].x * p[n - 1].y - p[n - 1].x * p[0].y;

        for (var i = 1; i < n; ++i)
            A += p[i - 1].x * p[i].y - p[i].x * p[i - 1].y;

        return Math.abs(A/2);
    };


    // ---------------------------------------------------------------------------------------------
    // Equivalence Checks

    var same = {

        point: function(p1, p2) {
            return M.nearlyEquals(p1.x, p2.x) && M.nearlyEquals(p1.y, p2.y);
        },

        line: function(l1, l2, unoriented) {
            return (same.point(l1.p1, l2.p1) && same.point(l1.p2, l2.p2)) ||
                   (unoriented && same.point(l1.p1, l2.p2) && same.point(l1.p2, l2.p1));
        },

        rect: function(r1, r2, unoriented) {
            // TODO
        },

        circle: function(c1, c2, unoriented) {
            // TODO
        },

        polygon: function(p1, p2, unoriented) {
            // TODO
        }

    };

    M.geo.same = function same(a, b, unOriented) {
        var type = getGeoType(a);
        if (type !== getGeoType(b)) return false;
        var sameFn = same[type];
        if (sameFn) return sameFn(a, b, unOriented);
    };


    // ---------------------------------------------------------------------------------------------
    // Transformations

    var scalePoint = function(p, sx, sy) {
        return new M.geo.Point(p.x * sx, p.y * sy);
    };

    M.geo.scale = function(x, sx, sy) {
        if (sy == null) sy = sx;

        if (x instanceof M.geo.Rect) x = x.toPolygon();
        var type = getGeoType(x);

        switch (type) {
            case 'point':   return scalePoint(x, sx, sy);
            case 'line':    return new M.geo.Line(scalePoint(x.p1, sx, sy),
                                                  scalePoint(x.p2, sx, sy));
            case 'circle':  return new M.geo.Circle(scalePoint(x.c, sx, sy), x.r * (sx + sy) / 2);
            case 'polygon': return new M.geo.Polygon(x.points.map(function(p) {
                                                                return scalePoint(p, sx, sy); }));
        }
    };

    // Finds the reflection of a point p in a line l
    var reflectPoint = function(p, l) {
        var v = l.p2.x - l.p1.x;
        var w = l.p2.y - l.p1.y;

        var x0 = p.x - l.p1.x;
        var y0 = p.y - l.p1.y;

        var mu = (v * y0 - w * x0) / (v * v + w * w);

        var x = p.x + 2 * mu * w;
        var y = p.y - 2 * mu * v;
        return new M.geo.Point(x, y);
    };

    M.geo.reflection = function(x, l) {
        if (x instanceof M.geo.Rect) x = x.toPolygon();
        var type = getGeoType(x);

        switch (type) {
            case 'point':   return reflectPoint(x, l);
            case 'line':    return new M.geo.Line(reflectPoint(x.p1, l), reflectPoint(x.p2, l));
            case 'circle':  return new M.geo.Circle(reflectPoint(x.c, l), x.r);
            case 'polygon': return new M.geo.Polygon(x.points.map(function(p) {
                                                                return reflectPoint(p, l); }));
        }
    };

    // Finds the rotation of a point p around a center c by an angle phi
    var rotatePoint = function(p, c, phi) {
        var x0 = p.x - c.x;
        var y0 = p.y - c.y;

        var cos = Math.cos(phi);
        var sin = Math.sin(phi);

        var x = x0 * cos - y0 * sin + c.x;
        var y = x0 * sin + y0 * cos + c.y;
        return new M.geo.Point(x, y);
    };

    M.geo.rotation = function(x, c, phi) {
        if (x instanceof M.geo.Rect) x = x.toPolygon();
        var type = getGeoType(x);

        switch (type) {
            case 'point':   return rotatePoint(x, c, phi);
            case 'line':    return new M.geo.Line(rotatePoint(x.p1, c, phi),
                                                  rotatePoint(x.p2, c, phi));
            case 'circle':  return new M.geo.Circle(rotatePoint(x.c, c, phi),  x.r);
            case 'polygon': return new M.geo.Polygon(x.points.map(function(p) {
                                                            return rotatePoint(p, c, phi); }));
        }
    };


    // ---------------------------------------------------------------------------------------------
    // Constructions

    // Calculates the angle bisector of the angle a, b, c.
    // The result is a line which goes through b
    M.geo.angleBisector = function(a, b, c) {
        var phiA =  Math.atan2(a.y - b.y, a.x - b.x);
        var phiC =  Math.atan2(c.y - b.y, c.x - b.x);
        var phi = (phiA + phiC) / 2;

        if (phiA > phiC) phi += Math.PI;

        var x = Math.cos(phi) + b.x;
        var y = Math.sin(phi) + b.y;
        return new M.geo.Point(x, y);
    };

    // Finds a perpendicular to the line l which goes through a point p.
    M.geo.perpendicular = function(l, p) {
        var dx, dy;

        // Special case: point is the first point of the line
        if (M.geo.same(p, l.p1)) {
            dx = l.p2.y - l.p1.y;
            dy = l.p1.x - l.p2.x;

        // Special case: point is the second point of the line
        } else if (M.geo.same(p === l.p2)) {
            dx = l.p1.y - l.p2.y;
            dy = l.p2.x - l.p1.x;

        // special case: point lies somewhere else on the line
        } else if (l.contains(p)) {
            dx = l.p1.y - p.y;
            dy = p.x - l.p1.x;

        // general case: point does not lie on the line
        } else {
            var b = M.geo.project(p, l);
            dx = b.x;
            dy = b.y;
        }

        return new M.geo.Line(new M.geo.Point(p.x, p.y), new M.geo.Point(p.x + dx, p.y + dy));
    };

    // TODO More Constructions


    // ---------------------------------------------------------------------------------------------
    // Computational Geometry

    M.geo.sortVertices = function() {
        // TODO
    };

    M.geo.convexHull = function() {
        // TODO
    };

    M.geo.travellingSalesman = function(dist) {
        var n = dist.length;
        var cities = M.list(n);

        var minLength = Infinity;
        var minPath = null;

        M.permutations(cities).each(function(path) {
            var length = 0;
            for (var i=0; i<n-1; ++i) {
                length += dist[path[i]][path[i+1]];
                if (length > minLength) return;
            }
            if (length < minLength) minLength = length;
            minPath = path;
        });

        return { path: minPath, length: minLength };
    };


    // ---------------------------------------------------------------------------------------------
    // Intersections and Overlaps

    var pointPointIntersect = function(p1, p2) {
        return M.geo.same(p1, p2) ? [new M.geo.Point(p1.x, p2.x)] : [];
    };

    var pointLineIntersect = function(p, l) {
        // TODO check that p lies on l
    };

    var pointRectIntersect = function(p, r) {
        // TODO
    };

    var pointCircleIntersect = function(p, c) {
        // TODO
    };

    var pointPolygonIntersect = function(p1, p2) {
        // TODO
    };

    var lineLineIntersect = function(l1, l2) {

        var d1 = M.map(M.subtr, l1.p2, l1.p1);
        var d2 = M.map(M.subtr, l2.p2, l2.p1);
        var d  = M.map(M.subtr, l2.p1, l1.p1);

        var denominator = M.vector.cross2D(d2, d1);
        if (denominator === 0) return;  // -> colinear

        var n1 = M.vector.cross2D(d1, d);
        var n2 = M.vector.cross2D(d2, d);

        var x = n2 / denominator;
        var y = n1 / denominator;

        if (M.bound(x,0,1) && M.bound(y,0,1)) {
            var intersectionX = l1.p1.x + x * (l1.p2.x - l1.p1.x);
            var intersectionY = l1.p1.y + y * (l1.p2.y - l1.p1.y);
            return [intersectionX, intersectionY];
        }
    };

    var lineCircleIntersect = function(l, c) {
        // TODO
    };

    var linePolygonIntersect = function(l, c) {
        // TODO
    };

    var rectRectIntersect = function() {
        // TODO
    };

    var polygonPolygonIntersect = function() {
        // TODO
    };

    M.geo.intersect = function(x, y) {

        if (arguments.length > 2) {
            var rest = _arraySlice.call(arguments, 1);
            return M.geo.intersect(x, M.geo.intersect.apply(null, rest));
        }

        // Handle Rectangles
        if (x instanceof M.geo.Rect && y instanceof M.geo.Rect) return rectRectIntersect(x, y);
        if (x instanceof M.geo.Rect) x = x.toPolygon();
        if (y instanceof M.geo.Rect) y = y.toPolygon();

        switch (getGeoType(x) + '-' + getGeoType(y)) {
            case 'line-line':       return lineLineIntersect(x, y);
            case 'line-circle':     return lineCircleIntersect(x, y);
            case 'line-polygon':    return linePolygonIntersect(x, y);
            case 'circle-line':     return lineCircleIntersect(y, x);
            case 'polygon-line':    return linePolygonIntersect(y, x);
            case 'polygon-polygon': return polygonPolygonIntersect(x, y);
        }

        throw new Error('Can\'t intersect ' + getGeoType(x) + 's and ' + getGeoType(y) + '.');
    };

})();

(function() {

    var LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz';
    var UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var ENGLISH_FREQUENCY = {
        a: 0.08167, b: 0.01492, c: 0.02782, d: 0.04253, e: 0.12702, f: 0.02228, g: 0.02015,
        h: 0.06094, i: 0.06966, j: 0.00154, k: 0.00772, l: 0.04024, m: 0.02406, n: 0.06749,
        o: 0.07507, p: 0.01929, q: 0.00095, r: 0.05987, s: 0.06327, t: 0.09056, u: 0.02758,
        v: 0.00978, w: 0.02360, x: 0.00150, y: 0.01974, z: 0.00074
    };


    M.caesarCypher = function(msg, shift) {
        var cipher = '';

        for (var i = 0, len = msg.length; i < len; i++) {
            if (msg[i] >= 'a' && msg[i] <= 'z') {
                cipher = cipher + LOWER_CASE[(LOWER_CASE.indexOf(msg[i]) + shift) % 26];
            } else if (msg[i] >= 'A' && msg[i] <= 'Z') {
                cipher = cipher + UPPER_CASE[(UPPER_CASE.indexOf(msg[i]) + shift) % 26];
            } else {
                cipher = cipher + msg[i];
            }
        }

        return cipher;
    };


    // Apply Vigenere cipher shift to a string,
    M.vigenereCypher = function(msg, key) {

        var cipher = '';
        var shift = 0;
        var count = 0;  // Don't count spaces when iterating the key word
        var k = key.toLowerCase();

        for (var i = 0, len = msg.length, keyLen = k.length; i < len; i++) {
            // Grab shift for the current sequence of the key word
            shift = LOWER_CASE.indexOf(k[count % keyLen]);

            if (msg[i] >= 'a' && msg[i] <= 'z') {
                cipher = cipher + LOWER_CASE[(LOWER_CASE.indexOf(msg[i]) + shift) % 26];
                count++;
            }
            else if (msg[i] >= 'A' && msg[i] <= 'Z') {
                cipher = cipher + UPPER_CASE[(UPPER_CASE.indexOf(msg[i]) + shift) % 26];
                count++;
            }
            else {
                cipher = cipher + msg[i];
            }
        }

        return cipher;
    };


    // Returns the probability of a given letter in english
    M.letterFreqency = function(letter) {
        return ENGLISH_FREQUENCY[letter.toLowerCase()];
    };


    // Count Cipher letter frequency
    M.cipherLetterFreq = function(cipher) {
        var msg = cipher.toLowerCase();
        var freq = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        for (var i = 0, len = msg.length; i < len; ++i) {
            if (msg[i] >= 'a' && msg[i] <= 'z') {
                freq[LOWER_CASE.indexOf(msg[i])]++;
            }
        }

        return freq;
    };

})();

(function() {


    // M.bisect(function(x){ return Math.cos(x/2); }, 10) => Pi
    M.bisect = function(fn, precision, l, h) {

        if (precision == null) precision = 3;
        var p = Math.pow(10, -precision);
        var q = Math.pow(10,  precision);

        if (!l) l = 0;
        var lf = fn(l);
        var ls = Math.sign(lf);
        if (ls === 0) return l;
        var hf, hs;

        if (h == null) {
            h = 0.5;
            do {
                h *= 2;
                hf = fn(h);
                hs = Math.sign(hf);
            } while (hs === ls);
            if (hs === 0) return h;
        }

        var x = 0;
        while (Math.abs(lf) > p && x < 200) {

            var c = (l + h) / 2;
            var cf = fn(c);
            var cs = Math.sign(cf);
            if (cs === 0) return c;

            if (cs === ls) {
                l = c;
                lf = cf;
            } else {
                h = c;
                hf = cf;
            }

            ++x;
        }

        return Math.round(l*q)*p;
    };


})();

(function() {

    // ---------------------------------------------------------------------------------------------
    // Configuration

    var prefixes = {
        da: { name: 'deca',  value: 1e1 },
        h:  { name: 'hecto', value: 1e2 },
        k:  { name: 'kilo',  value: 1e3 },
        M:  { name: 'mega',  value: 1e6 },
        G:  { name: 'giga',  value: 1e9 },
        T:  { name: 'tera',  value: 1e12 },
        P:  { name: 'peta',  value: 1e15 },
        E:  { name: 'exa',   value: 1e18 },
        Z:  { name: 'zetta', value: 1e21 },
        Y:  { name: 'yotta', value: 1e24 },

        d:  { name: 'deci',  value: 1e-1 },
        c:  { name: 'centi', value: 1e-2 },
        m:  { name: 'milli', value: 1e-3 },
        u:  { name: 'micro', value: 1e-6 },
        n:  { name: 'nano',  value: 1e-9 },
        p:  { name: 'pico',  value: 1e-12 },
        f:  { name: 'femto', value: 1e-15 },
        a:  { name: 'atto',  value: 1e-18 },
        z:  { name: 'zepto', value: 1e-21 },
        y:  { name: 'yocto', value: 1e-24 }
    };

    var baseUnits = {
        length: 'm',
        surface: 'm2',
        volume: 'm3',
        mass: 'kg',
        time: 's',
        angle: 'rad',
        current: 'a',
        temperature: 'K',
        substance: 'mol',
        force: 'N',
        bit: 'b'
    };

    var units = {

        // Length
        m:  { name: 'meter',    type: 'length', value: 1 },
        in: { name: 'inch',     type: 'length', value: 0.0254 },
        ft: { name: 'foot',     type: 'length', value: 0.3048 },
        yd: { name: 'yard',     type: 'length', value: 0.9144 },
        mi: { name: 'mile',     type: 'length', value: 1609.344 },
        AA: { name: 'angstrom', type: 'length', value: 1e-10 },

        // Surface
        m2:    { name: 'm2',    type: 'surface', power: 2, value: 1 },
        sqin:  { name: 'sqin',  type: 'surface', power: 2, value: 0.00064516 },
        sqft:  { name: 'sqft',  type: 'surface', power: 2, value: 0.09290304 },
        sqyd:  { name: 'sqyd',  type: 'surface', power: 2, value: 0.83612736 },
        sqmi:  { name: 'sqmi',  type: 'surface', power: 2, value: 2589988.110336 },

        // Volume
        m3:     { name: 'm3',     type: 'volume', value: 1 },
        l:      { name: 'litre',  type: 'volume', value: 0.001 },
        cup:    { name: 'cup',    type: 'volume', value: 0.0002365882 },
        pint:   { name: 'pint',   type: 'volume', value: 0.0004731765 },
        quart:  { name: 'quart',  type: 'volume', value: 0.0009463529 },
        gallon: { name: 'gallon', type: 'volume', value: 0.003785412},
        barrel: { name: 'barrel', type: 'volume', value: 0.1589873 },

        // Mass
        g:   { name: 'gram',  type: 'mass', value: 0.001 },
        ton: { name: 'ton',   type: 'mass', value: 907.18474 },
        oz:  { name: 'ounce', type: 'mass', value: 28.349523125e-3 },
        lbm: { name: 'pound', type: 'mass', value: 453.59237e-3 },

        // Time
        s:   { name: 'second', type: 'time', value: 1 },
        min: { name: 'minute', type: 'time', value: 60 },
        h:   { name: 'hour',   type: 'time', value: 3600 },
        d:   { name: 'day',    type: 'time', value: 86400 },
        w:   { name: 'week',   type: 'time', value: 604800 },
        mon: { name: 'month',  type: 'time', value: 2629740 },
        y:   { name: 'year',   type: 'time', value: 31556900 },

        // Angle
        rad:  { name: 'rad',   type: 'angle', value: 1 },
        deg:  { name: 'deg',   type: 'angle', value: 0.017453292519943295769236907684888 },
        grad: { name: 'grad',  type: 'angle', value: 0.015707963267948966192313216916399 },
        cyc:  { name: 'cycle', type: 'angle', value: 6.2831853071795864769252867665793 },

        // Electric Current
        A: {name: 'ampere', type: 'current', value: 1 },

        // Temperature
        K:    { name: 'kelvin',     type: 'temperature', value: 1 },
        degC: { name: 'celsius',    type: 'temperature', value: 1, offset: 273.15 },
        degF: { name: 'fahrenheit', type: 'temperature', value: 1/1.8, offset: 459.67 },

        // Amount of Substance
        mol: { name: 'mole', type: 'substance', value: 1 },

        // Force
        N:   { name: 'newton',     type: 'force', value: 1 },
        lbf: { name: 'poundforce', type: 'force', value: 4.4482216152605 },

        // Binary
        b: {name: 'bits',  type: 'data', value: 1 },
        B: {name: 'bytes', type: 'data', value: 8 }
    };


    // ---------------------------------------------------------------------------------------------
    // Create Regex

    M.unit = {};

    var prefixRegexp = M.object.keys(prefixes).join('|');
    var unitRegexp = M.object.keys(units).join('|');
    var regexp = new RegExp('^(' + prefixRegexp + ')?(' + unitRegexp + ')$');

    M.unit.to = function(val, from, to) {

        var f = from.match(regexp);
        var prefix = f[1];
        var unit = f[2];

        var prefixValue = prefix ? (prefixes[prefix].value || 0) : 1;
        var unitValue = units[unit].value || 1;
        var unitOffset = units[unit].offset || 0;

        var newVal = (val * unitValue + unitOffset) * prefixValue;
        if (to == null) return newVal;

        f = to.match(regexp);
        prefix = f[1];
        unit = f[2];

        prefixValue = prefix ? (prefixes[prefix].value || 0) : 1;
        unitValue = units[unit].value || 1;
        unitOffset = units[unit].offset || 0;

        return (newVal / prefixValue - unitOffset) / unitValue;
    };

    // ---------------------------------------------------------------------------------------------

    M.unit.define = function(unit) {
        unit = unit.match(regexp);
        var prefix = unit[1] ? prefixes[unit[1]].name : '';
        var name = units[unit[2]].name;
        return prefix + name;
    };

})();

(function() {

    // TODO fix parser errors + test
    // TODO + and * with multiple arguments
    // TODO Simplify expressions
    // TODO More error messages: 1(1), "str"(10), %(x)

    // ---------------------------------------------------------------------------------------------
    // Expression Parser

    var brackets = { '(': ')', '[': ']', '{': '}', '|': '|' };

    function bracketsMatch(a, b) {
        return brackets[a] === b || brackets[b] === a;
    }

    function ExpressionParser() {
        this.current = '';
        this.result = [];

        this.currentParser = null;
        this.currentBracket = null;
        this.currentFn = null;
    }

    // Pushes a new letter to the expression parser
    ExpressionParser.prototype.send = function(x) {

        // Handle Strings
        if (this.currentBracket === '"' && x !== '"') {
            this.current += x;

        // Closing Strings
    } else if (!this.currentBracket && x === '"') {
            this.pushCurrent();
            this.currentBracket = '"';

        // Opening Strings
    } else if (this.currentBracket === '"' && x === '"') {
            this.result.push(new Expression('"', [this.current]));

        // Handle Invalid Characters
        } else if (('@&\\?<>=~`±§').contains(x)) {
            throw new Error('Unexpected "' + x + '".');

        // Handle Content for CHild parsers
        } else if (this.currentParser) {

            if ((')]}|').contains(x) && this.currentParser.isReady()) {

                if (!bracketsMatch(x,this.currentBracket))
                    throw new Error('Unexpected "' + x + '".');

                var completed = this.currentParser.complete();
                if (this.currentFn) {
                    this.result.push(new ExpressionFn(this.currentFn, completed));
                } else if (x === ']') {
                    this.result.push(new ExpressionFn('[]', completed));
                } else if (x === '|') {
                    this.result.push(new ExpressionFn('abs', completed));
                } else {
                    if (completed.length !== 1) throw new Error('Unexpected ",".');
                    this.result.push(new ExpressionVal(completed[0]));
                }
                this.current = '';
                this.currentBracket = this.currentParser = this.currentFn = null;

            } else {
                this.currentParser.send(x);
            }

        // Handle Open Brackets
        } else if (('([{|').contains(x)) {
            if (x === '(' && isNaN(+this.current) && !('+-*/!^%,').contains(this.current)) {
                this.currentFn = this.current;
                this.current = '';
            } else {
                this.pushCurrent();
            }
            this.currentParser = new ExpressionParser();
            this.currentBracket = x;

        } else if (('+-*/!^%,').contains(x)) {
            this.pushCurrent();
            if (x !== ',') this.result.push(x);

        } else if (x.match(/\s\n\t/)) {
            this.pushCurrent();

        } else {
            this.current += x.trim();
        }
    };

    ExpressionParser.prototype.isReady = function() {
        return this.currentParser == null;
    };

    // Adds a new letter, number or expression to the results object
    ExpressionParser.prototype.pushCurrent = function() {
        if (!this.current) return;
        var num = +this.current;
        this.result.push(new ExpressionVal(num === num ? num : this.current));
        this.current = '';
    };

    // Completes the expression and returns a new expression
    ExpressionParser.prototype.complete = function(x) {

        this.pushCurrent();
        var i;

        // Handle Factorials and Percentages
        for (i=0; i<this.result.length; ++i) {
            if (this.result[i] === '!') {
                this.result.splice(i-1, 2, new ExpressionFn('!', [this.result[i-1]]));
                i -= 1;
            } else if (this.result[i] === '%') {
                this.result.splice(i-1, 2, new ExpressionFn('/', [this.result[i-1], 100]));
                i -= 1;
            }
        }

        // Handle Powers
        for (i=0; i<this.result.length; ++i) {
            if (this.result[i] === '^') {
                this.result.splice(i-1, 3, new ExpressionFn('^', [this.result[i-1], this.result[i+1]]));
                i -= 2;
            }
        }

        // Handle Leading -
        if (this.result[0] === '-') this.result.splice(0, 2, new ExpressionFn('-', [this.result[1]]));

        // Handle Multiplication and Division
        for (i=0; i<this.result.length; ++i) {
            if (this.result[i] === '/') {
                this.result.splice(i-1, 3, new ExpressionFn('/', [this.result[i-1], this.result[i+1]]));
                i -= 2;
            } else if (this.result[i] === '*') {
                this.result.splice(i-1, 3, new ExpressionFn('*', [this.result[i-1], this.result[i+1]]));
                i -= 2;
            }
        }

        // Handle Addition and Subtraction
        for (i=0; i<this.result.length; ++i) {
            if (this.result[i] === '-') {
                this.result.splice(i-1, 3, new ExpressionFn('-', [this.result[i-1], this.result[i+1]]));
                i -= 2;
            } else if (this.result[i] === '+') {
                this.result.splice(i-1, 3, new ExpressionFn('+', [this.result[i-1], this.result[i+1]]));
                i -= 2;
            }
        }

        return this.result;
    };


    // ---------------------------------------------------------------------------------------------
    // Expressions

    function ExpressionFn(fn, args) {
        this.fn = fn;
        this.args = args;
    }

    ExpressionFn.prototype.simplify = function() {
        // TODO !!!
        return this;
    };

    ExpressionFn.prototype.toString = function() {
        var newArgs = [];
        for (var i=0; i<this.args.length; ++i) newArgs.push(this.args[i].toString());

        var fn = strings[this.fn];
        return fn ? fn.apply(null, newArgs) : this.fn + '(' + this.args.join(', ') + ')';
    };

    ExpressionFn.prototype.evaluate = function(vars) {
        if (vars == null) vars = {};

        var newArgs = [];
        for (var i=0; i<this.args.length; ++i) {
            var newArg = this.args[i].evaluate();
            if (newArg instanceof Expression) return this;
            newArgs.push(newArg);
        }

        var fn = vars[this.fn] || functions[this.fn] || Math[this.fn] || M[this.fn];
        return (fn instanceof Function) ? fn.apply(null, newArgs) : this;
    };


    function ExpressionVal(val) {
        this.val = val;
    }

    ExpressionVal.prototype.simplify = function() {
        return this;
    };

    ExpressionVal.prototype.toString = function() {
        return this.val.toString();
    };

    ExpressionVal.prototype.evaluate = function(vars) {
        if (vars == null) vars = {};
        // TODO return numbers if possible?
        return (vars[this.val] === undefined) ? this.val : vars[this.val];
    };


    // ---------------------------------------------------------------------------------------------
    // Expression Functions

    var functions = {
        '+': function(a, b) { return a + b; },
        '-': function(a, b) { return (b === undefined) ? -a : a - b; },
        '*': function(a, b) { return a * b; },
        '/': function(a, b) { return a / b; },
        '!': function(n) { return M.factorial(n); },
        '^': function(a, b) { return Math.pow(a, b); },
        '[]': function() { return arguments; },
        '"': function(str) { return '' + str; },
        'mod': function(a, b) { return M.mod(a, b); }
    };

    var strings = {
        '+': function() { return M.toArray(arguments).join(' + '); },
        '-': function(a, b) { return (b === undefined) ? '-' + a : a + ' - ' + b; },
        '*': function() { return M.toArray(arguments).join(' * '); },
        '/': function(a, b) { return a + ' / ' + b; },
        '!': function(n) { return n + '!'; },
        '^': function(a, b) { return a + ' ^ ' + b; },
        '[]': function() { return '[' + M.toArray(arguments).join(', ') + ']'; },
        '"': function(str) { return '"' + str + '"'; },
        'mod': function(a, b) { return a + ' mod ' + b; }
    };


    // ---------------------------------------------------------------------------------------------
    // Public Interface

    M.expression = {};

    M.expression.parse = function(str) {

        var parser = new ExpressionParser();

        var n = str.length;
        for (var i=0; i<n; ++i) parser.send(str[i]);

        return parser.complete()[0].simplify();
    };

})();


})();
// Boost Browser and DOM Tools
// (c) 2014, Mathigon / Philipp Legner
// MIT License (https://github.com/Mathigon/boost.js/blob/master/LICENSE)

 (function() {
if (typeof M !== 'object' || !M.core || !M.fermat)
	throw new Error('boost.js requires core.js and fermat.js.');
M.boost = true;


(function() {

	var ua = window.navigator.userAgent;
	var isIE = (ua.indexOf('MSIE ') >= 0) || !!ua.match(/Trident.*rv\:11\./);

	M.browser = {
	    width:    window.innerWidth,
	    height:   window.innerHeight,

	    isMobile: /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i
					.test(navigator.userAgent.toLowerCase()),
	    isRetina: ((window.devicePixelRatio || 1) > 1),
	    isTouch:  ('ontouchstart' in window) || (window.DocumentTouch && document instanceof window.DocumentTouch),
	    imgExt:   ((window.devicePixelRatio || 1) > 1.25) ? '@2x' : '',

	    isChrome: ua.toLowerCase().indexOf('chrome') >= 0,
	    isIE: isIE,

	    hasHistory: window.history && window.history.pushState && (!isIE || ua.indexOf('MSIE 1') >= 0),
	    hasClipPath: document.body.style.clipPath != null && document.body.style.webkitClipPath != null && !isIE,

	    speechRecognition: ('webkitSpeechRecognition' in window)
	};

	M.redraw = function() {
		/*jshint -W030 */
	    document.body.offsetHeight;
	};

	M.now = Date.now || function getTime () { return new Date().getTime(); };

	M.toCamelCase = function(str) {
	    return str.toLowerCase().replace(/^-/,'').replace(/-(.)/g, function(match, g) {
	        return g.toUpperCase();
	    });
	};

	// Generates a random ID string
	M.uid = function(){
	    return Math.random().toString(36).substr(2,10);
	};


	// ---------------------------------------------------------------------------------------------
	// ONLOAD EVENTS

	var loadQueue = [];
	var loaded = false;

	function afterLoad() {
		if (loaded) return;
		loaded = true;
		for (var i=0; i<loadQueue.length; ++i) loadQueue[i]();
	}

	window.onload = function() {
		afterLoad();
		if (M.resize()) M.resize();
	};

	document.addEventListener('DOMContentLoaded', function(event) {
		afterLoad();
	});

	M.onload = function(fn) {
		if (loaded) {
			fn();
		} else {
			loadQueue.push(fn);
		}
	};


	// ---------------------------------------------------------------------------------------------
	// CSS

	M.cssTimeToNumber = function(cssTime) {
	    var regex = /^([\-\+]?[0-9]+(\.[0-9]+)?)(m?s)$/;
	    var matches = regex.exec(cssTime.trim());
	    if (matches === null) return null;
	    return (+matches[1]) * (matches[3] === 's' ? 1000 : 1);
	};


	M.addCSSRule = function(selector, rules) {
	    var css = document.styleSheets[document.styleSheets.length-1];
	    var index = css.cssRules.length - 1;
	    if(css.insertRule) {
	        css.insertRule(selector + '{' + rules + '}', index);
	    } else {
	        css.addRule(selector, rules, index);
	    }
	};

    var cache = {};
    var style;
    var prefixes = {'webkit': 'webkit', 'moz': 'Moz', 'ms': 'ms'};

	// document.body doesn't exist if this file is included in the <head> of an html file
	M.onload(function(){ style = document.body.style; });

    var findCssPrefix = function(name) {
        var rule = M.toCamelCase(name);
        if (style[rule] != null) return name;
        rule = rule.toTitleCase();
        for (var v in prefixes) {
            if (style[prefixes[v] + rule] != null) return '-' + v + '-' + name;
        }
        return name;
    };

    M.prefix = function(name) {
        if (cache[name]) return cache[name];
        var rule = findCssPrefix(name);
        cache[name] = rule;
        return rule;
    };

})();

// -------------------------------------------------------------------------------------------------
// String Conversions

M.toQueryString = function(data) {
    var pairs = [];

    M.each(data, function(value, key) {
        key = encodeURIComponent(key);
        if (value == null) { pairs.push(key); return; }
        value = M.isArray(value) ? value.join(',') : '' + value;
        value = value.replace(/(\r)?\n/g, '\r\n');
        value = encodeURIComponent(value);
        value = value.replace(/%20/g, '+');

        pairs.push(key + '=' + value);
    });

    return pairs.join('&');
};

M.fromQueryString = function(string) {
    string = string.replace(/^[?,&]/,'');
    var pairs = decodeURIComponent(string).split('&');
    var result = {};
    pairs.each(function(pair) {
        var x = pair.split('=');
        result[x[0]] = x[1];
    });
    return result;
};


// -------------------------------------------------------------------------------------------------
// AJAX

M.ajax = function(url, options) {

    if (!options) options = {};
    var xhr = new XMLHttpRequest();

    var respond = function() {
        var status = xhr.status;

        if (!status && xhr.responseText || status >= 200 && status < 300 || status === 304) {
            if (!options.success) return;

            if (options.dataType === 'html') {
                var doc = document.implementation.createHTMLDocument('');
                doc.documentElement.innerHTML = xhr.responseText;
                //doc.open();
                //doc.write(xhr.responseText);
                //doc.close();
                /* TODO Scripts in Ajax DOM
                $T('script', doc).each(function(script){
                    var s = $N('script', { html: script.html() });
                    document.body.appendChild(s.$el);
                });
                */
                options.success($(doc));
            } else if (options.dataType === 'json') {
                options.success(JSON.parse(xhr.responseText));
            } else {
                options.success(xhr.responseText);
            }

        } else {
            if (options.error) options.error(xhr);
        }
    };

    if (xhr.onload) {
        xhr.onload = xhr.onerror = respond;
    } else {
        xhr.onreadystatechange = function() { if (xhr.readyState === 4) respond(); };
    }

    // Default URL
    if (!options.url) options.url = window.location.toString();

    // GET Data
    if (options.method === 'GET' || options.method === 'HEAD') {
        url += (url.indexOf('?') >= 0 ? '&' : '?');
        if (options.data) url += M.toQueryString(options.data) + '&';
        if (options.cache === false) url += '_nocache=' + Date.now();
    }

    // Open XHR Request
    if (options.async == null) options.async = 'true';
    xhr.open(options.method ? options.method.toUpperCase() : 'GET',
             url, options.async, options.user, options.password);

    // Additional headers
    if (options.headers && xhr.setRequestHeader)
        M.each(options.headers, function(header, value) {
			xhr.setRequestHeader(header, value);
		});

    // Check for crossDomain
    if (options.crossDomain == null) options.crossDomain =
        /^([\w-]+:)?\/\/([^\/]+)/.test(options.url) && RegExp.$2 !== window.location.host;
    if (options.crossDomain) xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    // POST Data
    var postData = null;
    if (options.processData == null) options.processData = true;
    if (options.contentType == null) options.contentType = 'application/x-www-form-urlencoded';

    if (options.data && (options.method === 'POST' || options.method === 'PUT')) {
        var postDataInstances = [ArrayBuffer, Blob, Document, FormData];
        if (!options.processData || postDataInstances.indexOf(options.data.constructor) >= 0) {
            postData = options.data;
        } else {
            // NOTE Check Ajax Post Data
            var boundary = '---------------------------' + Date.now().toString(16);
            if (options.contentType === 'multipart\/form-data') {
                xhr.setRequestHeader('Content-Type', 'multipart\/form-data; boundary=' + boundary);
            } else {
                xhr.setRequestHeader('Content-Type', options.contentType);
            }
            postData = '';
            var _data = M.toQueryString(options.data);
            if (options.contentType === 'multipart\/form-data') {
                boundary = '---------------------------' + Date.now().toString(16);
                _data = _data.split('&');
                var _newData = [];
                for (var i = 0; i < _data.length; i++) {
                    _newData.push('Content-Disposition: form-data; name="' +
						_data[i].split('=')[0] + '"\r\n\r\n' + _data[i].split('=')[1] + '\r\n');
                }
                postData = '--' + boundary + '\r\n' + _newData.join('--' + boundary + '\r\n') +
					'--' + boundary + '--\r\n';
            } else {
                postData = options.contentType === 'application/x-www-form-urlencoded' ?
					_data : _data.replace(/&/g, '\r\n');
            }
        }
    }

    // Send XHR Request
    xhr.send(postData);
};


// -------------------------------------------------------------------------------------------------
// Request Wrappers

M.get = function (url, data, success) {
    return M.ajax(url, {
        method: 'GET',
        dataType: 'html',
        data: typeof data === 'function' ? null : data,
        success: typeof data === 'function' ? data : success
    });
};

M.post = function (url, data, success) {
    return M.ajax(url, {
        method: 'POST',
        dataType: 'html',
        data: typeof data === 'function' ? null : data,
        success: typeof data === 'function' ? data : success
    });
};

M.getJSON = function (url, data, success) {
    return M.ajax(url, {
        method: 'GET',
        dataType: 'json',
        data: typeof data === 'function' ? null : data,
        success: typeof data === 'function' ? data : success
    });
};

M.getScript = function(src, success, error) {
    var script = document.createElement('script');
    script.type = 'text/javascript';

    if (error) script.onerror = error;
    if (success) script.onload = success;

    document.head.appendChild(script);
    script.src = src;
};

(function() {

	M.colour = {
	    red:    '#D90000',
	    orange: '#F15A24',
	    yellow: '#edd200',
	    lime:   '#b2d300',
	    green:  '#00B200',
	    cyan:   '#29ABE2',
	    blue:   '#006DD9',
	    violet: '#662D91',
	    purple: '#9d0069',
	    pink:   '#ED1E79'
	};

	M.colour.parse = function(c) {
	    if (c[0] === '#') {
	        return [ parseInt(c.substr(1,2),16), parseInt(c.substr(3,2),16), parseInt(c.substr(5,2),16) ];
	    } else if (c.indexOf('rgb') >= 0) {
	        return c.replace('rgb(','').replace('rgba(','').replace(')','').split(',')
	                .each(function(x){ return +x; });
	    }
	    return null;
	};

    var pad2 = function(str) {
        return str.length === 1 ? '0' + str : str;
    };

    var makeHex = function(colour) {
        var c = M.colour.parse(colour);
        return '#' + c.each(function(x) { return pad2(Math.round(x).toString(16)); }).join('');
    };

    var makeRgb = function(c) {
        var alpha = (c[3] || (c[3] === 0));
        return 'rgb' + (alpha ? 'a(' : '(') + c.slice(0,3).each(function(x) {
			return Math.round(x); }).join(',') + (alpha ? ',' + c[3] : '') + ')';
    };

    M.colour.toRgb = function(c) {
        return makeRgb(M.colour.parse(c));
    };

    M.colour.toHex = function(c) {
        return makeHex(M.colour.parse(c));
    };

    M.colour.interpolate = function(c1, c2, p) {
        p = M.bound(p, 0,1);

        c1 = M.colour.parse(c1);
        c2 = M.colour.parse(c2);
        var alpha = (c1[3] != null || c2[3] != null);
        if (c1[3] == null) c1[3] = 1;
        if (c2[3] == null) c2[3] = 1;

        return makeRgb([
            p*c1[0]+(1-p)*c2[0],
            p*c1[1]+(1-p)*c2[1],
            p*c1[2]+(1-p)*c2[2],
            alpha ? p*c1[3]+(1-p)*c2[3] : null
        ]);
    };

	// Gets the colour of a multi-step gradient at a given percentage p
	M.colour.getColourAt = function(gradient, p) {
	    p = M.bound(p, 0, 0.999);
	    var r = Math.floor(p * (gradient.length - 1));
	    var q = p * (gradient.length - 1) - r;
	    return M.colour.interpolate(gradient[r+1], gradient[r], q);
	};

    // Colour Schemes from http://www.sron.nl/~pault/colourschemes.pdf

    var rainbow = ['#D92120', '#E6642C', '#E68E34', '#D9AD3C', '#B5BD4C', '#7FB972', '#63AD99',
	               '#55A1B1', '#488BC2', '#4065B1', '#413B93', '#781C81'];
    M.colour.rainbow = function(steps) {
        var scale = M.bound(0.4 + 0.15 * steps, 0, 1);
        return M.tabulate(function(x){ return M.colour.getColourAt(rainbow, scale*x/(steps-1)); }, steps);
    };

    var temperature = ['#3D52A1', '#3A89C9', '#77B7E5', '#B4DDF7', '#E6F5FE', '#FFFAD2', '#FFE3AA',
                       '#F9BD7E', '#ED875E', '#D24D3E', '#AE1C3E'];
    M.colour.temperature = function(steps) {
        var scale = M.bound(0.1 * steps, 0, 1);
        return M.tabulate(function(x){
            return M.colour.getColourAt(temperature, (1-scale)/2 + scale*x/(steps-1) ); }, steps);
    };

    var solar = ['#FFFFE5', '#FFF7BC', '#FEE391', '#FEC44F', '#FB9A29', '#EC7014', '#CC4C02',
                 '#993404', '#662506'];
    M.colour.solar = function(steps) {
        return M.tabulate(function(x){ return M.colour.getColourAt(solar, x/(steps-1)); }, steps);
    };

})();

M.cookie = {

    get: function get(name) {
        return M.cookie.has(name) ? M.cookie.list()[name] : null;
    },

    has: function has(name) {
        return new RegExp('(?:;\\s*|^)' + encodeURIComponent(name) + '=').test(document.cookie);
    },

    list: function list() {
        var pairs = document.cookie.split(';'), pair, result = {};
        for (var i = 0, n = pairs.length; i < n; ++i) {
            pair = pairs[i].split('=');
            pair[0] = pair[0].replace(/^\s+|\s+$/, '');
            result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return result;
    },

    remove: function remove(name, options) {
        if (!options) options = {};
        options.expires = new Date(0);
        options.maxAge = -1;
        return M.cookie.set(name, null, options);
    },

    // Possible optional options:
    // path     Specify path within the current domain, for example '/'
    // domain   Specify the (sub)domain the cookie pertains to. Can range from the root domain
    //          ('mathigon.org') up to the current subdomain ('test.world.mathigon.org').
    // maxAge   Specify, in seconds, the lifespan of the cookie.
    // expires  Set cookie expiry using an absolute GMT date/time string with an RFC2822 format
    //          (e.g. 'Tue, 02 Feb 2010 22:04:47 GMT')or a JS Date object.
    // secure   Specify whether the cookie should only be passed through HTTPS connections.
    set: function set(name, value, options) {
        options = options || {};
        var cookie = [encodeURIComponent(name) + '=' + encodeURIComponent(value)];
        if (options.path)    cookie.push('path=' + options.path);
        if (options.domain)  cookie.push('domain=' + options.domain);
        if (options.maxAge)  cookie.push('max-age=' + options.maxAge);
        if (options.expires) cookie.push('expires=' + (M.isDate(options.expires) ?
			                 	         options.expires.toUTCString() : options.expires));
        if (options.secure)  cookie.push('secure');
        document.cookie = cookie.join(';');
    }

};

(function() {

    var hasHistory = M.browser.hasHistory;
    var id = 0;

    var root = window.location.origin + window.location.port;
    var path = window.location.pathname.replace(root, '');
    var hash = window.location.hash.replace(/^#/, '');

    var History = M.Class.extend({

        back: function() {
            if(hasHistory) window.history.back();
        },

        forward : function() {
            if (hasHistory) window.history.forward();
        },

        go: function(n) {
            if (hasHistory) window.history.go(n);
        },

        push: function(url, state) {
            ++id;
            if (!state) state = { url: url };
            if (hasHistory) window.history.pushState({id: id, state: state }, '', url);
        },

        replace: function(url, state) {
            if (!state) state = { url: url };
            if (hasHistory) window.history.replaceState(state, '', url);
        }

    });

    M.history = new History();

    Object.defineProperty(M.history, 'hash', {
        enumerable: true,
        configurable : true,
        get: function() {
            return hash;
        },
        set: function(newHash) {
            ++id;
            hash = newHash;
            if (hasHistory) {
                window.history.pushState({id: id, state: {}}, '', path + '#' + hash);
            } else {
                window.location.hash = '#' + hash;
            }
        }
    });

    var popped = ('state' in window.history);
    var initialURL = location.href;

    window.addEventListener('popstate', function(e){
        var validPop = popped || location.href === initialURL;
        popped = true;
        if (!validPop) return;

        path = window.location.pathname;
        hash = window.location.hash.replace(/^#/, '');

        if (!e.state) return;
        var newId = e.state.id;
        M.history.trigger('change', e.state.state);
        if (newId < id) M.history.trigger('back', e.state.state);
        if (newId > id) M.history.trigger('forward', e.state.state);
        id = newId;
    });

})();

(function() {

	M.storage = {};

	M.storage.set = function(key, value) {

	    var keys = (key||'').split('.');
	    var storage = JSON.parse(window.localStorage.getItem('M') || '{}');
	    var path = storage;

	    for (var i=0; i<keys.length-1; ++i) {
	        if (path[keys[i]] == null) path[keys[i]] = {};
	        path = path[keys[i]];
	    }

	    path[keys.last()] = value;

	    window.localStorage.setItem('M', JSON.stringify(storage));
	};

	M.storage.get = function(key) {

	    var keys = (key||'').split('.');
	    var storage = JSON.parse(window.localStorage.getItem('M') || '{}');
	    var path = storage;

	    for (var i=0; i<keys.length-1; ++i) {
	        if (path[keys[i]] == null) return null;
	        path = path[keys[i]];
	    }

	    return key ? path[keys.last()] : path;
	};

	M.storage.clear = function(key) {
	    if (key) {
	        M.storage.set(key, null);
	    } else {
	        window.localStorage.setItem('M', '');
	    }
	};

})();

(function() {

	M.$ = function ($el) {
		this._data   = $el ? ($el._mdata   || ($el._mdata   = {})) : {};
		this._events = $el ? ($el._mevents || ($el._mevents = {})) : {};
		this.$el = $el;
		this._isWindow = M.isOneOf($el, window, document.body, document.documentElement);
	};


	// ---------------------------------------------------------------------------------------------
	// Constructors and Query Selectors

	// Creates a single M.$ element from an arbitrary query string or a Node element
	window.$ = function(selector, context) {
	    if (typeof selector === 'string') {
	        context = context ? (context.$el || context) : document;
			var $el = context.querySelector(selector);
			return $el ? new M.$($el) : null;
	    } else if (selector instanceof Node || selector === window) {
	        return new M.$(selector);
	    }
	};

	// Returns a single M.$ element by id
	window.$I = function(selector, context) {
	    context = (context && context.$el.getElementById) ? context.$el : document;
		var $el = context.getElementById(selector);
		return $el ? new M.$($el) : null;
	};

	// Returns a single M.$ element by class name
	window.$C = function(selector, context) {
	    context = context ? (context.$el || context) : document;
	    var $els = context.getElementsByClassName(selector);
	    return $els.length ? new M.$($els[0]) : null;
	};

	// Returns a single M.$ element by tag name
	window.$T = function(selector, context) {
	    context = context ? (context.$el || context) : document;
	    var $els = context.getElementsByTagName(selector);
		return $els.length ? new M.$($els[0]) : null;
	};

	// Returns an array of M.$ elements based on an arbitrary query string
	window.$$ = function(selector, context) {
	    context = context ? (context.$el || context) : document;
	    var $els = context.querySelectorAll(selector);
	    return M.each($els, function($el) { return new M.$($el); });
	};

	// Returns an array of M.$ elements with a given class name
	window.$$C = function(selector, context) {
		context = context ? (context.$el || context) : document;
		var $els = context.getElementsByClassName(selector);
		return M.each($els, function($el) { return new M.$($el); });
	};

	// Returns an array of M.$ elements with a given tag name
	window.$$T = function(selector, context) {
		context = context ? (context.$el || context) : document;
		var $els = context.getElementsByTagName(selector);
		return M.each($els, function($el) { return new M.$($el); });
	};

	// Creates a new DOM node and M.$ element
	window.$N = function(tag, attributes, parent) {
	    var t = document.createElement(tag);

	    for (var a in attributes) {
	        if (a === 'id') {
	            t.id = attributes.id;
	        } else if (a === 'class') {
	            t.className = attributes.class;
	        } else if (a === 'html') {
	            t.innerHTML = attributes.html;
	        } else {
	            t.setAttribute(a, attributes[a]);
	        }
	    }

	    var $el = new M.$(t);
	    if (parent) parent.append($el);
	    return $el;
	};

	// Converts an arbitrary html string into an array of M.$ elements
	window.$$N = function(html) {
	    var tempDiv = $N('div', { html: html });
	    return tempDiv.children();
	};


	// ---------------------------------------------------------------------------------------------
	// Basic Functionality

	function _addClass($el, className) {
		if ($el.$el.classList) {
			$el.$el.classList.add(className);
		} else if (!$el.hasClass(className)) {
			$el.$el.className += ' ' + className;
		}
	}

	M.$.prototype.addClass = function(className) {
	    var classes = className.trim().split(' ');
	    for (var i = 0; i < classes.length; ++i) {
	        _addClass(this, classes[i]);
	    }
	};

	function _removeClass($el, className) {
		if ($el.$el.classList) {
			$el.$el.classList.remove(className);
		} else if ($el.hasClass(className)) {
			$el.$el.className = (' ' + $el.$el.className + ' ').replace(' ' + className + ' ', ' ');
		}
	}

	M.$.prototype.removeClass = function(className) {
	    var classes = className.trim().split(' ');
	    for (var i = 0; i < classes.length; ++i) {
	        _removeClass(this, classes[i]);
	    }
	};

	M.$.prototype.hasClass = function(className) {
	    return (' ' + this.$el.className + ' ').indexOf(' ' + className.trim() + ' ') >= 0;
	};

	function _toggleClass($el, className) {
		if ($el.$el.classList) {
			$el.$el.classList.toggle(className);
		} else if ($el.hasClass(className)) {
			$el.addClass(className);
		} else {
			$el.removeClass(className);
		}
	}

	M.$.prototype.toggleClass = function(className) {
	    var classes = className.trim().split(' ');
	    for (var i = 0; i < classes.length; ++i) {
	        _toggleClass(this, classes[i]);
	    }
	};

	M.$.prototype.setClass = function(className, condition) {
	    if (condition) {
	        this.addClass(className);
	    } else {
	        this.removeClass(className);
	    }
	};

	M.$.prototype.attr = function(attr, value) {
	    if (value == null) {
	        return this.$el.getAttribute(attr);
	    } else if (value === null) {
	        this.$el.removeAttribute(attr);
	    } else {
	        this.$el.setAttribute(attr, value);
	    }
	};

	M.$.prototype.data = function(key, value) {
	    if (value == null) {
	        var dataAttr = this.$el.getAttribute('data-' + key);
	        return dataAttr ? dataAttr : (this._data ? this._data[key] : undefined);
	    } else {
	        this._data[key] = value;
	    }
	};

	M.$.prototype.value = function(value) {
	    if (value == null) {
	        return this.$el.value;
	    } else {
	        this.$el.value = value;
	    }
	};

	M.$.prototype.html = function(html) {
	    if (html == null) {
	        return this.$el.innerHTML;
	    } else {
	        this.$el.innerHTML = html;
	    }
	};

	M.$.prototype.text = function(text) {
	    if (text == null) {
	        return this.$el.textContent.trim();
	    } else {
	        this.$el.textContent = text;
	    }
	};


	// ---------------------------------------------------------------------------------------------
	// Dimensions

	// Includes border and padding
	M.$.prototype.width = function() {
		if (this._isWindow) return window.innerWidth;
	    return this.$el.offsetWidth;
	};

	// Doesn't include border and padding
	M.$.prototype.innerWidth = function() {
		if (this._isWindow) return window.innerWidth;
		return this.$el.clientWidth - parseFloat(this.css('padding-left')) - parseFloat(this.css('padding-right'));
	};

	// Includes Margins
	M.$.prototype.outerWidth = function() {
		if (this._isWindow) return window.outerWidth;
		return this.$el.offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));
	};

	M.$.prototype.scrollWidth = function() {
		if (this._isWindow) return M.$body.$el.scrollWidth;
		return this.$el.scrollWidth;
	};

	// Includes border and padding
	M.$.prototype.height = function() {
		if (this._isWindow) return window.innerHeight;
	    return this.$el.offsetHeight;
	};

	// Doesn't include border and padding
	M.$.prototype.innerHeight = function() {
		if (this._isWindow) return window.innerHeight;
		return this.$el.clientHeight - parseFloat(this.css('padding-bottom')) - parseFloat(this.css('padding-top'));
	};

	// Includes Margins
	M.$.prototype.outerHeight = function() {
		if (this._isWindow) return window.outerHeight;
		return this.$el.offsetHeight + parseFloat(this.css('margin-top')) + parseFloat(this.css('margin-bottom'));
	};

	M.$.prototype.scrollHeight = function() {
		if (this._isWindow) return M.$body.$el.scrollHeight;
		return this.$el.scrollHeight;
	};

	M.$.prototype.offset = function($parent) {

	    if ($parent === 'parent') $parent = this.parent();
	    if ($parent === 'body') $parent = M.$body;
		var box;

	    // Get offset from immediate parent
	    if ($parent && $parent.$el === this.$el.offsetParent) {
	        var top = this.$el.offsetTop + $parent.$el.clientTop;
	        var left = this.$el.offsetLeft + $parent.$el.clientLeft;
	        var bottom = top +  this.$el.offsetHeight;
	        var right = left + this.$el.offsetWidth;
	        return { top: top, left: left, bottom: bottom, right: right };

	    // Get offset based on any other element including $(document.body)
	    } else if ($parent) {
	        var parentBox = $parent.$el.getBoundingClientRect();
	        box = this.$el.getBoundingClientRect();
	        return { top:    box.top    - parentBox.top, left:  box.left  - parentBox.left,
	                 bottom: box.bottom - parentBox.top, right: box.right - parentBox.left };

	    // Get offset based on viewport
	    } else {
	        box = this.$el.getBoundingClientRect();
	        return { top: box.top, left: box.left, bottom: box.bottom, right: box.right };
	    }
	};

	M.$.prototype.scrollTop = function(y) {
		if (y == null) {
			return this._isWindow ? window.pageYOffset : this.$el.scrollTop;
		} else {
			if (this._isWindow) {
				document.body.scrollTop = document.documentElement.scrollTop = y;
			} else {
				this.$el.scrollTop = y;
			}
		}
	};

	M.$.prototype.scrollLeft = function(x) {
		if (x == null) {
			return this._isWindow ? window.pageXOffset : this.$el.scrollLeft;
		} else {
			if (this._isWindow) {
				document.body.scrollLeft = document.documentElement.scrollLeft = x;
			} else {
				this.$el.scrollLeft = x;
			}
		}
	};


	// ---------------------------------------------------------------------------------------------
	// Styles

	M.$.prototype.css = function(props, value) {
	    if (arguments.length === 1) {
	        if (typeof props === 'string') {
	            return window.getComputedStyle(this.$el, null).getPropertyValue(props);
	        } else {
	            for (var prop in props) if (M.has(props, prop)) this.$el.style[prop] = props[prop];
	        }
	    } else if (arguments.length === 2 && typeof props === 'string') {
	        this.$el.style[M.toCamelCase(props)] = value;
	    }
	};

	M.$.prototype.transition = function(property, duration, curve) {
		if (arguments.length === 1) this.$el.style[M.prefix('transition')] = property;
	    if (typeof duration !== 'string') duration = duration + 'ms';
	    this.$el.style[M.prefix('transition')] = property + ' ' + duration + (curve ? ' ' + curve : '');
	};

	M.$.prototype.transform = function(transform) {
	    this.$el.style[M.prefix('transform')] = (transform || '');
	};

	M.$.prototype.translateX = function(x) {
	    x = Math.round(+x || 0);
	    this.$el.style[M.prefix('transform')] = 'translate(' + x + 'px,0)';
	};

	M.$.prototype.translateY = function(y) {
	    y = Math.round(+y || 0);
	    this.$el.style[M.prefix('transform')] = 'translate(0px,'+y+'px)';
	};

	M.$.prototype.hide = function() {
	    this.css('display', 'none');
	    this.css('visibility', 'hidden');
	};

	M.$.prototype.show = function() {
	    this.css('display', 'block');
	    this.css('visibility', 'visible');
	};


	// ---------------------------------------------------------------------------------------------
	// DOM Manipulation

    // Removes an element from the DOM for more performant node manipulation. The element
    // is placed back into the DOM at the place it was taken from.
    M.$.prototype.manipulate = function(fn){
      	var next = this.$el.nextSibling;
        var parent = this.$el.parentNode;
        var frag = document.createDocumentFragment();
        frag.appendChild(this.$el);
        var returned = fn.call(this) || this.$el;
      	if (next) {
			parent.insertBefore(returned, next);
		} else {
			parent.appendChild(returned);
		}
    };

	M.$.prototype.is = function(selector) {
	    var compareWith = document.querySelectorAll(selector);
	    for (var i = 0, l = compareWith.length; i < l; ++i)
	        if (compareWith[i] === this.$el) return true;
	    return false;
	};

	M.$.prototype.index = function() {
	    var i = 0;
	    var child = this.$el;
	    while ((child = child.previousSibling) !== null) i++;
	    return i;
	};

	M.$.prototype.append = function(newChild) {
	    var _this = this;
	    if (typeof newChild === 'string') {
	        var newChildren = $$N(newChild);
	        newChildren.each(function(child) {
	            _this.$el.appendChild(child.$el);
	        });
	    } else {
	        this.$el.appendChild(newChild.$el);
	    }
	};

	M.$.prototype.prepend = function(newChild) {
	    if (typeof newChild === 'string') {
	        var newChildren = $$N(newChild);
	        for (var j = newChildren.length - 1; j >= 0; j--) {
	            this.$el.insertBefore(newChildren[j], this.$el.childNodes[0]);
	        }
	    } else {
	        this.$el.insertBefore(newChild.$el, this.$el.childNodes[0]);
	    }
	};

	M.$.prototype.insertBefore = function(newChild) {
	    var _this = this;
	    var parent = this.parent();

	    if (typeof newChild === 'string') {
	        var newChildren = $$N(newChild);
	        for (var j = newChildren.length - 1; j >= 0; j--) {
	            parent.$el.insertBefore(newChildren[j].$el, _this.$el);
	        }
	    } else {
	        parent.$el.insertBefore(newChild.$el, _this.$el);
	    }
	};

	M.$.prototype.insertAfter = function(newChild) {
	    var _this = this;
	    var parent = this.parent();

	    if (typeof newChild === 'string') {
	        var newChildren = $$N(newChild);
	        newChildren.each(function(child) {
	            parent.$el.insertAfter(_this.$el, child.$el);
	        });
	    } else {
	        var next = _this.$el.nextSibling;
	        if (next) {
	            parent.$el.insertBefore(newChild.$el, next);
	        } else {
	            parent.$el.appendChild(newChild.$el);
	        }
	    }
	};

	M.$.prototype.wrap = function(wrapper) {
	    if (typeof wrapper === 'string') wrapper = $(document.createElement(wrapper));
	    this.insertBefore(wrapper);
	    this.remove();
	    wrapper.append(this);
	};

	M.$.prototype.moveTo = function(newParent, before) {
	    this.remove();
	    if (before) {
	        newParent.prepend(this);
	    } else {
	        newParent.append(this);
	    }
	};

	M.$.prototype.next = function () {
	    var next = this.$el.nextSibling;
	    return next ? $(next) : null;
	};

	M.$.prototype.prev = function () {
	    var prev = this.$el.previousSibling;
	    return prev ? $(prev) : null;
	};

	M.$.prototype.find = function(selector) {
	    return $$(selector, this);
	};

	M.$.prototype.parent = function() {
	    var parent = this.$el.parentNode;
	    return parent ? $(parent) : null;
	};

	M.$.prototype.parents = function(selector) {
	    var parents = [];
	    var parent = this.parent();
	    while (parent) {
	        if (!selector || parent.is(selector)) parents.push(parent);
	        parent = parent.parent();
	    }
	    return parents;
	};

	M.$.prototype.children = function(selector) {
	    var childNodes = this.$el.children;

	    if (!childNodes) {
	        childNodes = [];
	        var nodes = this.$el.childNodes;
	        M.each(nodes, function(n) {
	            if (!n.data || n.data.trim()) childNodes.push(n);
	        });
	    }

	    if (typeof selector === 'number') {
	        return $(childNodes[selector]);
	    } else {
	        var children = [];
	        for (var i = 0, l = childNodes.length; i < l; ++i)
	            if (!selector || $(childNodes[i]).is(selector))
	                children.push($(childNodes[i]));
	        return children;
	    }
	};

	M.$.prototype.remove = function () {
	    if (this.$el.parentNode) this.$el.parentNode.removeChild(this.$el);
	};

	M.$.prototype.delete = function () {
	    this.remove();
	    this.$el = null;
	};

	M.$.prototype.clear = function () {
	    var _this = this;
	    this.children().each(function($el) {
	        _this.$el.removeChild($el.$el);
	    });
	};

	M.$.prototype.replace = function(newEl) {
	    this.insertAfter(newEl);
	    this.remove();
	};


	// ---------------------------------------------------------------------------------------------
	// Special Elements

	M.$body = $(document.body);
	M.$html = $T('html');
	M.$window = $(window);
	M.$doc = $(window.document.documentElement);

	M.$html.addClass( M.browser.isTouch ? 'is-touch' : 'not-touch' );
	M.$html.addClass( M.browser.isMobile ? 'is-mobile' : 'not-mobile' );

})();

(function() {

    M.animationFrame = (function() {
        var rAF = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.msRequestAnimationFrame     ||
            function (callback) { return window.setTimeout(callback, 20); };
        return function(fn) { return rAF(fn); };
    })();

    M.cancelAnimationFrame = (function(){
          var cAF = window.cancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.mozCancelAnimationFrame    ||
            window.msCancelAnimationFrame     ||
            window.clearTimeout;
          return function(id) { return cAF(id); };
    })();

    M.animate = function(callback, duration) {
        var startTime = +new Date();
        var time = 0;
		var running = true;

        function getFrame() {
            if (running && (!duration || time <= duration)) M.animationFrame(getFrame);
            time = +new Date() - startTime;
            callback(duration ? time/duration : time);
        }

        getFrame();

		return {
			cancel: function() { running = false; }
		};
    };


    // ---------------------------------------------------------------------------------------------
    // Element Animations (CSS)

    M.$.prototype.getTransitions = function() {
        var s = window.getComputedStyle(this.$el);
        var delay    = s.getPropertyValue('transition-delay').split(',');
        var duration = s.getPropertyValue('transition-duration').split(',');
        var property = s.getPropertyValue('transition-property').split(',');
        var timing   = s.getPropertyValue('transition-timing-function')
                        .match(/[^\(\),]+(\([^\(\)]*\))?[^\(\),]*/g);

        var result = [];
        for (var i=0; i<property.length; ++i) {
            result.push({
                css:      property[i].trim(),
                delay:    M.cssTimeToNumber(delay[i]),
                duration: M.cssTimeToNumber(duration[i]),
                timing:   timing[i]
            });
        }

        return result;
    };

    M.$.prototype.setTransitions = function(transitions) {
        var css = [];

        M.each(transitions, function(options) {
            css.push([
                options.css,
                (options.duration || 1000) + 'ms',
                options.timing || 'linear',
                (options.delay || 0) + 'ms'
            ].join(' '));
        });

        this.css('transition', css.join(', '));
    };

    M.$.prototype.animate = function(props, callback) {
        var _this = this;
        if (!M.isArray(props)) props = [props];

        // Set start property values of elements
        var s = window.getComputedStyle(this.$el);
        M.each(props, function(options) {
            if (options.css === 'height') this.css('height', parseFloat(s.getPropertyValue('height')));
            if (options.css === 'width') this.css('width',  parseFloat(s.getPropertyValue('width')));
            if (options.from != null) _this.css(options.css, options.from);
        });

        // Set transition values of elements
        var oldTransition = s.getPropertyValue(M.prefix('transition'));
        this.setTransitions(M.merge(this.getTransitions(), props));
        M.redraw();

        // Set end property values of elements
        M.each(props, function(options) {
            _this.css(options.css, options.to);
        });

        // Remove new transition values
        this.transitionEnd(function() {
            _this.css(M.prefix('transition'), oldTransition);
            M.redraw();
            if (callback) callback.call(_this);
        });
    };


    // ---------------------------------------------------------------------------------------------
    // Element Animations (Enter/Exit)

    M.$.prototype.getStrokeLength = function() {
        if (this.$el.getTotalLength) {
            return this.$el.getTotalLength();
        } else {
            var dim = this.$el.getBoundingClientRect();
            return 2 * dim.height + 2 * dim.width;
        }
    };

    M.$.prototype.enter = function(effect, time, delay) {
        this.css('visibility', 'visible');
        if (!time) return;
        if (!effect) effect = 'fade';

        if (effect === 'fade') {
            this.animate({ css: 'opacity', from: 0, to: 1, duration: time });

        } else if (effect === 'pop') {
            this.css('opacity', '1');
            this.animate({
                css: M.prefix('transform'),
                from: 'scale(0)', to: 'scale(1)', delay: delay,
                duration: time, timing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            });

        } else if (effect === 'draw') {
            var l = this.getStrokeLength();
            this.css('stroke-dasharray', l + ' ' + l);
            this.animate({ css: 'stroke-dashoffset', from: l, to: 0, delay: delay, duration: time });
        }
    };

    M.$.prototype.exit = function(effect, time, delay) {
        var _this = this;
        if (!time) { this.css('visibility', 'hidden'); return; }
        if (!effect) effect = 'fade';

        if (effect === 'fade') {
            this.animate({ css: 'opacity', from: 1, to: 0, duration: time },
                         function() { _this.css('visibility', 'hidden'); });
        } else if (effect === 'draw') {
            var l = this.getStrokeLength();
            this.css('stroke-dasharray', l + ' ' + l);
            this.animate({ css: 'stroke-dashoffset', from: 0, to: l, delay: delay, duration: time });
        }
    };

    M.$.prototype.fadeIn = function(time) {
        this.show();
        this.animate({ css: 'opacity', from: 0, to: 1, duration: time });
    };

    M.$.prototype.fadeOut = function(time) {
        this.animate({ css: 'opacity', from: 1, to: 0, duration: time },
            function() { this.hide(); });
    };

    // Requires css transition: height, no padding or margin
    M.$.prototype.slideUp = function(callback) {
        var _this = this;
        this._data.sliding = 'up';
        this.css('height', this.height() + 'px');
        M.redraw();
        this.css('height', '0px');

        this.transitionEnd(function() {
            if (_this._data.sliding === 'up' && callback) callback();
        });
    };

    // Requires css transition: height, no padding or margin, single wrapper child
    M.$.prototype.slideDown = function(callback) {
        var _this = this;
        this._data.sliding = 'down';
        this.css('height', this.children(0).outerHeight() + 'px');

        this.transitionEnd(function() {
            if (_this._data.sliding === 'down') {
                _this.css('height', 'auto');
                if (callback) callback();
            }
        });
    };


    // ---------------------------------------------------------------------------------------------
    // Animated Effects

    var effects = ['pulseDown', 'pulseUp', 'flash', 'bounceUp', 'bounceRight'];

    effects.each(function(name){
        M.$.prototype[name] = function() {
            var _this = this;
            _this.animationEnd(function(){
                _this.removeClass('effects-'+name);
            });
            _this.addClass('effects-'+name);
        };
    });


    // ---------------------------------------------------------------------------------------------
    // Easing

    function easeIn(type, t, s) {
        switch (type) {

            case 'quad':   return t * t;
            case 'cubic':  return t * t * t;
            case 'quart':  return t * t * t * t;
            case 'quint':  return t * t * t * t * t;
            case 'circ':   return 1 - Math.sqrt(1 - t * t);
            case 'sine':   return 1 - Math.cos(t * Math.PI / 2);
            case 'exp':    return (t <= 0) ? 0 : Math.pow(2, 10 * (t - 1));

            case 'back':
                if (s == null) s = 1.70158;
                return t * t * ((s + 1) * t - s);

            case 'elastic':
                if (s == null) s = 0.3;
                return - Math.pow(2, 10 * (t - 1)) * Math.sin(((t - 1) * 2 / s - 0.5) * Math.PI );

            case 'bounce':
                if (t < 1/11) return 1/64 - 7.5625 * (0.5/11 - t) * (0.5/11 - t);  // 121/16 = 7.5625
                if (t < 3/11) return 1/16 - 7.5625 * (  2/11 - t) * (  2/11 - t);
                if (t < 7/11) return 1/4  - 7.5625 * (  5/11 - t) * (  5/11 - t);
                              return 1    - 7.5625 * (     1 - t) * (     1 - t);

            default:
                return t;
        }
    }

    M.easing = function(type, t, s) {

        if (t === 0) return 0;
        if (t === 1) return 1;
        type = type.split('-');

        if (type[1] === 'in')  return     easeIn(type[0], t, s);
        if (type[1] === 'out') return 1 - easeIn(type[0], 1 - t, s);
        if (t <= 0.5)          return     easeIn(type[0], 2 * t,     s) / 2;
                               return 1 - easeIn(type[0], 2 * (1-t), s) / 2;
    };

})();

(function() {

	// =============================================================================================
	// EVENT UTILITIES

	M.events = {};

	M.events.isSupported = function(event) {
	    event = 'on' + event;
	    var $el = $N('div');
	    var isSupported = (event in $el.$el);
	    if (!isSupported) {
	        $el.attr(event, 'return;');
	        isSupported = (typeof $el.$el[event] === 'function');
	    }
	    $el.delete();
	    return isSupported;
	};

	M.events.pointerOffset = function(event, parent) {
	    if (event.offsetX) {
	        return [event.offsetX, event.offsetY];
	    } else {
	        parent = parent ? parent.$el : event.target;
	        var parentXY = parent.getBoundingClientRect();
	        var eventX = event.touches ? event.touches[0].clientX : event.clientX;
	        var eventY = event.touches ? event.touches[0].clientY : event.clientY;
	        return [eventX-parentXY.left, eventY-parentXY.top];
	    }
	};

	M.events.pointerPosition = function(e) {
	    return {
	        x: e.touches ? e.touches[0].clientX : e.clientX,
	        y: e.touches ? e.touches[0].clientY : e.clientY
	    };
	};

	M.events.getWheelDelta = function(e) {
	    var delta = 0;
	    if (e.wheelDelta) delta = e.wheelDelta / 40;
	    if (e.detail) delta = -e.detail / 3.5;
	    return delta;
	};

	M.events.stop = function(e) {
	    e.preventDefault();
	    e.stopPropagation();
	};


	// =============================================================================================
	// CLICK EVENTS
	// TODO Add ability to remove click events

	function makeClickEvent($el) {
		if ($el._events._click) return;
		$el._events._click = true;

	    var waitForEvent = false;
	    var startX, startY;
	    var preventMouse = false;

	    $el.$el.addEventListener('click', function(e){
	        e.preventDefault();
	    });

	    $el.$el.addEventListener('mousedown', function(e){
	        if (preventMouse) return;
	        waitForEvent = true;
	        startX = e.clientX;
	        startY = e.clientY;
	    });

	    $el.$el.addEventListener('mouseup', function(e){
	        if (preventMouse) {
	            preventMouse = false;
	            return;
	        }
	        if (waitForEvent) {
	            var endX = e.clientX;
	            var endY = e.clientY;
	            if (Math.abs(endX - startX) < 2 && Math.abs(endY - startY) < 2) {
	                $el.trigger('click', e);
	            }
	        }
	        waitForEvent = false;
	    });

	    $el.$el.addEventListener('touchstart', function(e){
	        preventMouse = true;
	        if (e.touches.length === 1) {
	            waitForEvent = true;
	            startX = e.changedTouches[0].clientX;
	            startY = e.changedTouches[0].clientY;
	        }
	    });

	    $el.$el.addEventListener('touchend', function(e){
	        if (waitForEvent && e.changedTouches.length === 1) {
	            var endX = e.changedTouches[0].clientX;
	            var endY = e.changedTouches[0].clientY;
	            if (Math.abs(endX - startX) < 5 && Math.abs(endY - startY) < 5) {
	                $el.trigger('click', e);
	            }
	        }
	        waitForEvent = false;
	    });

	    $el.$el.addEventListener('touchcancel', function(){
	        waitForEvent = false;
	    });
	}


	// =============================================================================================
	// POINTER EVENTS
	// TODO Make pointer more efficient more efficient using *enter and *leave
	// TODO Add ability to remove pointer events

	var checkInside = function($el, event) {
		var c = M.events.pointerPosition(event);
		return ($el.$el === document.elementFromPoint(c.x, c.y));
	};

	function makePointerPositionEvents($el) {
		if ($el._events._pointer) return;
		$el._events._pointer = true;

		var $parent = $($el.$el.offsetParent);
		var isInside = null;
		$parent.on('pointerEnd', function(e) { isInside = null; });

		$parent.on('pointerMove', function(e) {
			var wasInside = isInside;
			isInside = checkInside($el, e);
			if (wasInside != null && isInside && !wasInside) $el.trigger('pointerEnter', e);
			if (!isInside && wasInside) $el.trigger('pointerLeave', e);
			if (isInside) $el.trigger('pointerOver', e);
		});
	}


	// =============================================================================================
	// SCROLL EVENTS
	// TODO Add ability to remove scroll events

	M.$.prototype.fixOverflowScroll = function() {
		if (this._events.fixOverflowScroll) return;
		this._events.fixOverflowScroll = true;

		var _this = this;

		this.$el.addEventListener('touchstart', function(){
			// This ensures that overflow bounces happen within container
			var top = _this.scrollTop();
			var bottom = _this.$el.scrollHeight - _this.height();

			if(top <= 0) _this.scrollTop(1);
			if(top >= bottom) _this.scrollTop(bottom - 1);
		});
	};

	M.$.prototype.scrollTo = function(pos, time, easing) {
		var _this = this;

		if (pos < 0) pos = 0;
		if (time == null) time = 1000;
		if (!easing) easing = 'cubic';

		var startPosition = this.scrollTop();
		var distance = pos - startPosition;

		var callback = function(t) {
			var x = startPosition + distance * M.easing(easing, t);
			_this.scrollTop(x);
			_this.trigger('scroll', { top: x });
		};

		_this.trigger('scrollstart', {});
		var animation = M.animate(callback, time);

		// TODO cancel scroll events
		// this.on('scroll', function() { animation.cancel(); });
		// this.on('touchstart', function() { animation.cancel(); });
	};

	function makeScrollEvents($el) {
		if ($el._events._scroll) return;
		$el._events._scroll = true;

		var scrollTimeout = null;
		var scrolling = false;
		var scrollAnimation;
		var scrollTop;

		function onScroll() {
			var newScrollTop = $el.scrollTop();

			if (Math.abs(newScrollTop - scrollTop) > 1) {
				if (scrollTimeout) window.clearTimeout(scrollTimeout);
				scrollTimeout = null;
				$el.trigger('scroll', { top: newScrollTop });
				scrollTop = newScrollTop;
			} else if (!scrollTimeout) {
				scrollTimeout = window.setTimeout(end, 100);
			} else {
			}
		}

		function start() {
			if (scrolling) return;
			scrolling = true;
			scrollTop = $el.scrollTop();
			scrollAnimation = M.animate(onScroll);
			$el.trigger('scrollstart', {});
		}

		function move() {
			if (!scrolling) start();
		}

		function end() {
			scrolling = false;
			scrollAnimation.cancel();
			$el.trigger('scrollend', {});
		}

		function touchStart() {
			window.addEventListener('touchmove', move);
			window.addEventListener('touchend', touchEnd);
		}

		function touchEnd() {
			window.removeEventListener('touchmove', move);
			window.removeEventListener('touchend', touchEnd);
		}

		$el.fixOverflowScroll();

		var $target = ($el.$el === M.$body.$el) ? M.$window.$el : $el.$el;
		$target.addEventListener('wheel', move);
		$target.addEventListener('mousewheel', move);
		$target.addEventListener('DOMMouseScroll', move);

		$el.$el.addEventListener('touchstart', touchStart);
	}


	// =============================================================================================
	// CUSTOM EVENTS

	var customEvents = {

		pointerStart: 'mousedown touchstart',
		pointerMove:  'mousemove touchmove',
		pointerEnd:   'mouseup touchend mousecancel touchcancel',

		change: 'propertychange keyup input paste',

		scrollwheel: 'DOMMouseScroll mousewheel',

		click: makeClickEvent,  // no capture!

		pointerEnter: makePointerPositionEvents,  // no capture!
		pointerLeave: makePointerPositionEvents,  // no capture!
		pointerOver: makePointerPositionEvents,  // no capture!

		scrollStart: makeScrollEvents,  // no capture!
		scroll: makeScrollEvents,  // no capture!
		scrollEnd: makeScrollEvents  // no capture!
	};

	var shortcuts = ('click scroll change').split(' ');

	shortcuts.each(function(event) {
		M.$.prototype[event] = function(callback) {
			if (callback == null) {
				this.trigger(event);
			} else {
				this.on(event, callback);
			}
		};
	});

	M.$.prototype.transitionEnd = function(fn) {
		this.one('webkitTransitionEnd oTransitionEnd transitionend', fn);
	};

	M.$.prototype.animationEnd = function(fn) {
		this.one('webkitAnimationEnd oAnimationEnd animationend', fn);
	};


	// =============================================================================================
	// EVENT BINDINGS

	function createEvent($el, event, fn, useCapture) {
		var custom = customEvents[event];

		if (M.isString(custom)) {
			$el.on(custom, fn, useCapture);
		} else if (custom) {
			custom($el);
		} else {
			$el.$el.addEventListener(event, fn, !!useCapture);
		}

		if ($el._events[event]) {
            if (!$el._events[event].has(fn)) $el._events[event].push(fn);
        } else {
            $el._events[event] = [fn];
        }
	}

	function removeEvent($el, event, fn, useCapture) {
		var custom = customEvents[event];

		if (M.isString(custom)) {
			$el.off(custom, fn, useCapture);
			return;
		} else if (!custom) {
			$el.$el.removeEventListener(event, fn, !!useCapture);
		}

		if ($el._events[event]) $el._events[event] = $el._events[event].without(fn);
	}

	M.$.prototype.on = function(type, fn, useCapture) {
		var _this = this;
		if (arguments.length > 1) {
			type.words().each(function(event) {
				createEvent(_this, event, fn, useCapture);
			});
		} else {
			M.each(type, function(callback, event) {
				createEvent(_this, event, callback);
			});
		}
	};

	M.$.prototype.one = function(events, fn, useCapture) {
		var _this = this;
		function callback() {
			_this.off(events, callback, useCapture);
			fn(arguments);
		}
		this.on(events, callback, useCapture);
	};

	M.$.prototype.off = function(type, fn, useCapture) {
		var _this = this;
		type.words().each(function(event) {
			removeEvent(_this, event, fn, useCapture);
		});
	};

	M.$.prototype.trigger = function(event, args) {
		if (!this._events[event]) return;
		var _this = this;
		M.each(this._events[event], function(fn) { fn.call(_this, args); });
	};

	// var evt;
	// try {
	//     evt = new CustomEvent(eventName, {detail: eventData, bubbles: true, cancelable: true});
	// } catch (e) {
	//     evt = document.createEvent('Event');
	//     evt.initEvent(eventName, true, true);
	//     evt.detail = eventData;
	// }
	// this.$el.dispatchEvent(evt);


	// =============================================================================================
	// KEYBOARD EVENTS
	// TODO Make keyboard events follow .on syntax

	M.activeInput = function() {
	    return document.activeElement === document.body ? undefined : document.activeElement;
	};

	// Executes fn if any one of [keys] is pressed
	M.keyboardEvent = function(keys, fn) {
	    if (!(keys instanceof Array)) keys = [keys];
	    document.addEventListener('keydown', function(e){
	        var k = e.keyCode || e.which;
	        for (var i=0; i<keys.length; ++i) {
	            if (k === keys[i] && !M.activeInput()) {
	                e.preventDefault();
	                fn(e);
	            }
	        }
	    });
	};

	// Executes fn1 if key1 is pressed, and fn2 if key2 is aready pressed
	M.keyboardMultiEvent = function(key1, key2, fn1, fn2) {
	    var key2down = false;

	    document.addEventListener('keydown', function(e){
	        var k = e.keyCode || e.which;

	        if (k === key2) {
	            key2down = true;
	        } else if (key2down && k === key1 && !M.activeInput()) {
	            e.preventDefault();
	            fn2(e);
	        } else if (k === key1 && !M.activeInput()) {
	            e.preventDefault();
	            fn1(e);
	        }
	    });

	    document.addEventListener('keyup', function(e){
	        var k = e.keyCode || e.which;
	        if (k === key2) key2down = false;
	    });
	};


	// =============================================================================================
	// RESIZE EVENTS
	// TODO Add ability to remove resize events
	// TODO Use M.Queue to store resize events

	// Multiple queues, to allow ordering of resize events
	var events = [[], [], []];

	var trigger = function() {
		var size = [window.innerWidth, window.innerHeight];
		events.each(function(queue) {
			queue.each(function(fn) {
				fn.call(null, size);
			});
		});
	};

	M.resize = function(fn, queue) {
		if (fn) {
			events[queue||0].push(fn);
		} else {
			trigger();
		}
	};

	var timeout = null;
	M.$window.on('resize', function() {
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			trigger();
		}, 50);
	});

})();


})();
// Boost Browser and DOM Tools
// (c) 2014, Mathigon / Philipp Legner
// MIT License (https://github.com/Mathigon/slate.js/blob/master/LICENSE)

 (function() {
M.audio = {
    files: {},
    playing: null,
    load: function(src, id) {
        M.audio.files[id] = new Audio(src);
        M.audio.files[id].load();
        M.audio.files[id].addEventListener('timeupdate', function() {
            if (M.audio.playing) M.audio.playing.update();
        });
        return M.audio.files[id];
    }
};

M.audio.Chunk = M.Class.extend({

    init: function(file, times) {
        if (M.isString(times)) times = M.map(parseFloat, times.split('|'));
        this.times = times;
        this.currentTime = times[0];
        this.duration = times[1] - times[0];
        this.player = M.audio.files[file] || M.audio.load(file, Math.floor(Math.random()*10000));
        this.ended = false;
    },

    play: function() {
        var _this = this;

        if (this.player.readyState < 2) {
            $(this.player).one('canplay seeked', function() { _this.play(); });
            return;
        }

        if (M.audio.playing) M.audio.playing.pause();
        M.audio.playing = this;

        this.ended = false;
        this.player.currentTime = this.currentTime;
        this.player.play();
        this.trigger('play', { p: (this.currentTime - this.times[0]) / this.duration, t: this.currentTime });
    },

    pause: function() {
        if (M.audio.playing === this) this.player.pause();
        this.trigger('pause');
    },

    setTime: function(time) {
        if (this.player.readyState) this.player.currentTime = time;
        this.trigger('timeupdate', { p: (time - this.times[0]) / this.duration, t: time });
    },

    reset: function() {
        if (M.audio.playing === this) this.player.pause();
        if (this.player.readyState) this.currentTime = this.times[0];
        this.ended = true;
        this.trigger('reset');
    },

    update: function() {
        if (this.ended) return;

        if (M.audio.playing === this)
            this.currentTime = this.player.currentTime;

        if (this.currentTime >= this.times[1]) {
            this.ended = true;
            this.pause();
            this.trigger('end');
            return;
        }

        this.trigger('timeupdate', { p: (this.currentTime - this.times[0]) / this.duration, t: this.currentTime });
    }

});

// =================================================================================================

M.speechRecognition = function() {

    if (!M.browser.speechRecognition) {
        return {
            start: function() { rec.start(); },
            stop: function() { rec.stop(); },
            addCommand: function(){},
            removeCommand: function(){},
            available: false
        };
    }

    var rec = new window.webkitSpeechRecognition();
    rec.continuous = true;
    rec.language = 'en-US';
    //rec.interimResults = true;

    var commands = {};

    var processCommand = function(name) {
        name = name.toLowerCase().trim();
        if (commands[name]) commands[name]();
    };

    rec.onresult = function(event) {
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            console.debug('Voice Input: ', event.results[i][0].transcript);
            processCommand(event.results[i][0].transcript);
        }
    };

    //rec.onstart = function() { ... }
    //rec.onerror = function(event) { ... }
    //rec.onend = function() { ... }

    var addCommand = function(name, fn) {
        if (!(name instanceof Array)) name = [name];
        for (var i=0; i<name.length; ++i) commands[name[i].toLowerCase()] = fn;
    };

    var removeCommand = function(name) {
        if (!(name instanceof Array)) name = [name];
        for (var i=0; i<name.length; ++i) commands[name[i].toLowerCase()] = undefined;
    };

    return {
        start: function() { rec.start(); },
        stop: function() { rec.stop(); },
        addCommand: addCommand,
        removeCommand: removeCommand,
        available: true
    };
};

M.Popup = function($popup, chapter) {

    // TODO onopen(), onclose() functions

    var _this = this;

    var $bubble = $C('popup-bubble',$popup);
    if (!$bubble) return;

    var $bubbleBox = $C('bubble-box',$bubble);
    $N('span', {'class': 'bubble-arrow'}, $bubble);

    _this.open = function() {

        if (chapter.activePopup) chapter.activePopup.close();
        $bubble.css('display', 'block');

        // In off state, $bubble is scaled to 0.5 of the size. We have to adjust the top offset:
        var bounds = $bubble.$el.getBoundingClientRect();
        var top = bounds.top - bounds.height;
        var left = bounds.left - bounds.width/2;
        var right = bounds.right + bounds.width/2;

        var pageLeft = chapter.$container.offset().left;
        var pageRight = M.browser.width;

        if (left < pageLeft + 10)
            $bubbleBox.translateX(pageLeft + 10 - left);

        if (right > pageRight - 54)
            $bubbleBox.translateX(pageRight - 54 - right);

        M.redraw();
        if (top < 27 ) { chapter.scrollBy(top - 27); }

        $popup.addClass('on');
        chapter.activePopup = _this;
    };

    _this.close = function() {
        $popup.removeClass('on');
        chapter.activePopup = null;
        setTimeout( function(){ $bubble.css('display', 'none'); }, 200);
    };

    _this.delete = function() { $popup.off('click', click); };

    var click = function(e) {
        e.preventDefault();
        e.stopPropagation();

        if ($popup.hasClass('on')) {
            _this.close();
        } else {
            _this.open();
        }
    };

    $bubble.click(function(e){ e.stopPropagation(); });
    $popup.click(click);
};

M.Gallery = function($panel, options) {
    if (!options) options = {};

    var $wrapper = $N('div', { class: 'gallery-wrapper' });
    var $box = $N('div', { class: 'gallery-box' });
    $panel.wrap($wrapper);
    $wrapper.wrap($box);
    var $slides = $panel.children();

    var slidesCount = $slides.length;
    var staticSlideWidth = $panel.attr('data-slide-width') || null;

    var width, slidesPerPage, slideWidth;
    var activeIndex = 0;
    var translateX = 0;

    //$N('div', { class: 'gallery-shadow-left' }, $box);
    //$N('div', { class: 'gallery-shadow-right' }, $box);

    var $next = $N('div', { class: 'gallery-next' }, $box);
    var $back = $N('div', { class: 'gallery-back' }, $box);
    $N('div', { class: 'icon' }, $next);
    $N('div', { class: 'icon' }, $back);

    var $dotsBox = $N('div', { class: 'gallery-dots' }, $box);
    var $dots = [];

    $slides.each(function($s) {
        $s.addClass('gallery-slide');
        $dots.push($N('div', { class: 'gallery-dot' }, $dotsBox));
    });

    // RESIZE EVENTS -------------------------------------------------------------------------------

    var setPosition = function(offset) {
        translateX = offset;
        $panel.translateX(offset);
        /*if (options.opacity) $slides.each(function($s, i) {
            var x = ((i+1)*slideWidth + offset) / slideWidth;
            $s.css('opacity', M.easing('quad', 0.4 + 0.6 * M.bound(x, 0,1) ));
        });*/
    };

    var makeActive = function(newIndex) {
        activeIndex = newIndex;
        $dots.each(function($d, i) {
            $d.setClass('on', i >= newIndex && i < newIndex + slidesPerPage);
        });
        if (options.callback) options.callback(newIndex);
        $next.setClass('disabled', newIndex === slidesCount - slidesPerPage);
        $back.setClass('disabled', newIndex === 0);
    };

    var resize = function() {
        width = $wrapper.width('border');
        slidesPerPage = staticSlideWidth ? Math.ceil(width/staticSlideWidth) : 1;
        slideWidth = width / slidesPerPage;

        $slides.each(function($slide) { $slide.css('width', slideWidth+'px'); });
        $panel.css('width', slidesCount*slideWidth+'px');
        setPosition(-activeIndex * slideWidth);
        makeActive(activeIndex);
    };

    // AUTOMATIC SCROLLING -------------------------------------------------------------------------

    var animTiming = 'quad';
    var animDuration = 500;
    var animT, animStart, animDistance, animStartTime;
    var animCancel = false;

    var animSetPosition = function() {
        animT = M.now() - animStartTime;
        setPosition(animStart + animDistance * M.easing(animTiming, animT / animDuration));
    };

    var animRender = function() {
        if (!animCancel && animT < animDuration) M.animationFrame(animRender);
        animSetPosition();
    };

    var startAnimationTo = function(newIndex) {
        animCancel = false;
        animT = 0;
        animStart = translateX;
        animDistance = -newIndex * slideWidth - translateX;
        animStartTime = M.now();
        makeActive(newIndex);
        animRender();
    };

    var next = function() {
        animTiming = 'quad';
        if (activeIndex < slidesCount - slidesPerPage) {
            $next.pulseDown();
            startAnimationTo(activeIndex+1);
        }
    };

    var back = function() {
        animTiming = 'quad';
        if (activeIndex > 0) {
            $back.pulseDown();
            startAnimationTo(activeIndex-1);
        }
    };

    $next.click(next);
    $back.click(back);

    // TOUCH AND MOUSE EVENTS ----------------------------------------------------------------------

    var motionStartPosn = null;
    var pointerStart = null;
    var previousMotionX = null;
    var lastMotionX = null;

    var motionStart = function(e) {
        M.$body.on('mousemove touchmove', motionMove);
        M.$body.on('mouseup mouseleave touchend touchcancel', motionEnd);
        animCancel = true;
        motionStartPosn = translateX;
        pointerStart = event.touches ? event.touches[0].clientX : event.clientX;
        lastMotionX = previousMotionX = pointerStart;
    };

    var motionMove = function(e) {
        e.preventDefault();

        var x = event.touches ? event.touches[0].clientX : event.clientX;
        previousMotionX = lastMotionX;
        lastMotionX = x;
        var newPosition = motionStartPosn - pointerStart + x;
        var maxScroll = -(slidesCount - slidesPerPage) * slideWidth;

        // Add resistance at ends of slider
        if (newPosition > 0) {
            setPosition(newPosition/4);
        } else if (newPosition < maxScroll) {
            setPosition(maxScroll + (newPosition - maxScroll)/4);
        } else {
            setPosition(newPosition);
        }
    };

    var motionEnd = function(e) {
        M.$body.off('mousemove touchmove', motionMove);
        M.$body.off('mouseup mouseleave touchend touchcancel', motionEnd);

        var x = event.touches ? event.touches[0].clientX : event.clientX;
        var lastDiff = lastMotionX - previousMotionX;
        var shift = lastDiff > 12 ? 1 : lastDiff < -12 ? -1 : 0;

        animTiming = 'quad-out';
        M.bound(startAnimationTo(Math.round(-translateX/slideWidth - shift), 0, slidesCount - slidesPerPage));
    };

    $wrapper.on('mousedown touchstart', motionStart);

    // ---------------------------------------------------------------------------------------------

    resize();
    M.resize(resize);

    return {
        next: next,
        back: back
    };
};

M.Frame = M.Class.extend({
    init: function($el) {
        var width = $el.width('border');
        var height = $el.height('border');
        var ratio = height/width;

        var $wrap = $N('div', { class: 'frame-wrap'});
        $el.wrap($wrap);

        function resize() {
            var w = $wrap.width('border');
            var h = w * ratio;
            $wrap.css('height', h+'px');
            $el.transform('scale(' + w/width + ') translateZ(0)');
        }

        M.resize(resize);
    }
});

M.Lightbox = function($container, chapter) {

    var $lightbox        = $N('div', {'class': 'lightbox-overlay' }, $container);
    var $lightboxImg     = $N('div', {'class': 'lightbox-img' }, $lightbox);
    var $lightboxCaption = $N('div', {'class': 'lightbox-caption' }, $lightbox);
    var transform = {};

    function add($img) {
        var src = $img.attr('src');
        var $wrap = $N('div', { class: 'lightbox' });
        $img.wrap($wrap);
        $N('div', {'class': 'lightbox-zoom' }, $wrap);
        $wrap.click(function() { open($wrap, src); });
    }

    var activeImg;

    function open($img, src) {
        activeImg = $img;
        $lightbox.css('display', 'block');

        var newX = $img.$el.getBoundingClientRect();
        var oldX = $lightboxImg.$el.getBoundingClientRect();

        var X = newX.left + newX.width /2 - oldX.left - oldX.width /2;
        var Y = newX.top  + newX.height/2 - oldX.top  - oldX.height/2;
        var S = Math.max(newX.width/oldX.width, newX.height/oldX.height);
        transform = {X: X, Y: Y, S: S};

        $lightboxImg.css('background-image', 'url('+src.replace(/\.(?=[^.]*$)/, '-large.')+'), url('+src+')');
        $lightboxImg.transform('translate('+X+'px,'+Y+'px) scale('+S+')');
        // TODO caption text

        M.redraw();
        $lightboxImg.addClass('transitions');
        M.redraw();

        $img.css('visibility', 'hidden');
        chapter.$toolbar.addClass('off');
        $lightbox.addClass('on');
        $lightboxImg.transform('scale(1) translate(0,0)');
    }

    function close() {
        $lightbox.removeClass('on');
        $lightboxImg.transform('translate('+transform.X+'px,'+transform.Y+'px) scale('+transform.S+')');
        chapter.$toolbar.removeClass('off');

        setTimeout( function() {
            activeImg.css('visibility', 'visible');
            $lightbox.css('display', 'none');
            $lightboxImg.transform('none');
            $lightboxImg.transform('none');
            $lightboxImg.removeClass('transitions');
        }, 400);
    }

    $lightbox.click(function(){ close(); });

    return {
        add: add,
        open: open,
        close: close
    };
};

// M.scrollReveal($$('[scroll-reveal]'));

M.scrollReveal = function($els) {

    if (M.browser.isMobile && M.browser.width < 800 && M.browser.height < 800) return;

    // Viewport height reference
    var viewportHeight;
    function getHeight() { viewportHeight = window.innerHeight; }
    M.resize(getHeight);
    getHeight();

    // Scroll position reference;
    var viewportScroll;
    function getScroll() { viewportScroll = window.pageYOffset; }

    // Check if an element is visible
    function isInViewport($el, factor) {
        var elTop = $el.$el.offsetTop;
        var elHeight = $el.$el.offsetHeight;
        return (elTop + elHeight) >= viewportScroll +    factor  * viewportHeight &&
                elTop             <= viewportScroll + (1-factor) * viewportHeight;
    }

    // Initialise element and
    function makeElement($el) {
        var isShown = true;
        var options = ($el.attr('data-scroll') || '').split('|');

        var axis      = M.isOneOf(options[0], 'left', 'right') ? 'X' : 'Y';
        var direction = M.isOneOf(options[0], 'top', 'left') ? '-' : '';
        var factor    = M.isNaN(+options[1]) ? 0.2 : +options[1];
        var distance  = options[2] || '40px';
        var duration  = options[3] || '.5s';
        var delay     = options[4] || '0s';

        function show() {
            isShown = true;
            $el.css('opacity', '1');
            $el.transform('translate' + axis + '(0)');
        }

        function hide() {
            isShown = false;
            $el.css('opacity', '0');
            $el.transform('translate' + axis + '(' + direction + distance + ')');
        }

        $el.transition(['opacity', duration, delay, ',', M.prefix('transform'), duration, delay].join(' '));

        return function() {
            if (!isShown && isInViewport($el, factor)) show();
            if ( isShown && !isInViewport($el, 0)) hide();
        };
    }

    // Initialise Elements
    var updateFns = $els.each(function($el){ return makeElement($el); });
    var n = updateFns.length;

    // Trigger Updates
    function updatePage() { getScroll(); for (var i=0; i<n; ++i) updateFns[i](); }
    M.$body.scroll(updatePage);
    M.resize(updatePage);
    updatePage();
    setTimeout(function() { updatePage(); }, 500);

};

M.Draggable = M.Class.extend({

    init: function($el, $parent, direction, margin) {

        var _this = this;
        var moveX = (direction !== 'y');
        var moveY = (direction !== 'x');

        var position = [0, 0];
        var dragStart = [null, null];
        var width, height;

        var getPosn = function(e) {
            return [ event.touches ? e.touches[0].clientX : e.clientX,
                     event.touches ? e.touches[0].clientY : e.clientY ];
        };

        var draw = function(x, y) {
            if (moveX) $el.css('left', Math.round(x) + 'px');
            if (moveY) $el.css('top', Math.round(y) + 'px');
            _this.trigger('change', { x: x, y: y, width: width, height: height });
        };

        this.set = function(x, y) {
            draw(x, y);
            position = [x, y];
        };

        this.get = function() {
            return { x: position[0], y: position[1], width: width, height: height };
        };

        var motionStart = function(e) {
            M.$body.on('mousemove touchmove', motionMove);
            M.$body.on('mouseup mouseleave touchend touchcancel', motionEnd);
            dragStart = getPosn(e);
            _this.trigger('start');
        };

        var motionMove = function(e) {
            e.preventDefault();
            var newPosition = getPosn(e);
            var x = (position[0] + newPosition[0] - dragStart[0]).bound(0, width);
            var y = (position[1] + newPosition[1] - dragStart[1]).bound(0, height);
            draw(x, y);
        };

        var motionEnd = function(e) {
            M.$body.off('mousemove touchmove', motionMove);
            M.$body.off('mouseup mouseleave touchend touchcancel', motionEnd);
            var newPosition = getPosn(e);
            if (newPosition[0] === dragStart[0] && newPosition[1] === dragStart[1]) {
                _this.trigger('click');
            } else {
                var x = (position[0] + newPosition[0] - dragStart[0]).bound(0, width);
                var y = (position[1] + newPosition[1] - dragStart[1]).bound(0, height);
                position = [x, y];
                _this.trigger('end');
            }
        };

        $el.on('mousedown touchstart', motionStart);

        var resize = function() {
            var oldWidth = width;
            var oldHeight = height;
            width = $parent.width('border') - margin * 2;
            height = $parent.height('border') - margin * 2;
            _this.set(width/(oldWidth||width)*position[0], height/(oldHeight||height)*position[1]);
        };

        resize();
        M.resize(resize);
    }
});

// =================================================================================================

M.Slider = M.Class.extend({

    init: function($track, steps) {

        var _this = this;

        $track.addClass('slider-track');
        var $knob = $N('div', { class: 'slider-knob' }, $track);
        $N('div', { class: 'icon' }, $knob);

        var slider = new M.Draggable($knob, $track, 'x', 4);
        var active;

        slider.on('start', function() {
            cancelPlay = true;
        });

        slider.on('change', function(e) {
            var n = Math.floor(e.x / e.width * steps);
            if (n !== active) {
                _this.trigger('move', n);
            }
            active = n;
        });

        var cancelPlay = false;
        slider.on('click', function(){ _this.play(); });

        var animRender = function() {
            var dim = slider.get();
            if (!cancelPlay && dim.x < dim.width) M.animationFrame(animRender);
            slider.set( dim.x + 2 );
        };

        this.play = function() {
            cancelPlay = false;
            $knob.pulse();
            animRender();
        };

        slider.set(0,0);
    }

});

// =================================================================================================

M.ImageSequence = M.Class.extend({

    init: function($el) {

        var _this = this;
        var $wrap = $N('div');
        $el.wrap($wrap);

        var url = $el.attr('data-src');
        var pages = Number($el.attr('data-pages')) - 1;

        var $track = $N('div', {}, $wrap);
        var slider = new M.Slider($track, pages);

        var images = [];
        for (var i=1; i<pages; ++i) {
            images[i] = new Image();
            images[i].src = url.replace('#', i);
        }

        slider.on('move', function(n) {
            $el.attr('src', url.replace('#', n));
            //if (n === pages-1) _this.trigger('last', {});
            //if (n === 0) _this.trigger('first', {});
        });
        slider.trigger('move', 0);
    }

});

M.makeVariable = function($i, section) {
    /*jshint evil: true */

    var vars = section.varValues;

    var fn = new Function('_vars', 'with(_vars){ return '+$i.html()+'; }');
    var v = { $el: $i, fn: fn};

    var callbackAttr = $i.attr('data-fn');
    var callback = callbackAttr ? new Function('_vars','with(_vars){ ' + callbackAttr + ' }') : null;

    section.varEvals.push(v);
    if( !$i.attr('data-var') ) return;

    $i.addClass('var');
    var t = $i.attr('data-var').split('|');
    var name = t[0], init = t[1], type = t[2];
    var info = t[3] ? t[3].split(',') : [];
    $i.html('');

    if( type === 'slider' ) {     // info = [min,max,step]

        vars[name] = Number(init);
        $i.addClass('var-slider');
        info[0] = Number(info[0]);
        info[1] = Number(info[1]);
        info[2] = Number(info[2]);

        v.$el = $N('span', {'class': 'var-slider-text'}, $i);
        $N('span', {'class': 'left'}, $i);
        $N('span', {'class': 'right'}, $i);
        var $bubble   = $N('span', {'class': 'var-slider-bubble'}, $i);
        var $box      = $N('span', {'class': 'var-slider-bubble-box '}, $bubble);
        var $progress = $N('span', {'class': 'var-slider-progress'}, $box);
        $N('span', {'class': 'var-slider-bubble-arrow'}, $bubble);
        $progress.css('width', 116 * (vars[name]-info[0]) / (info[1]-info[0]) + 'px');

        var startPosition = 0;
        var startValue = 0;
        var distance = 0;
        var sense = Math.sqrt( info[2] / (info[1] - info[0] ) * 1000 ) + (M.browser.isTouch?10:2);

        var slideStart = function(event){
            event.stopPropagation();
            event.preventDefault();
            startPosition = event.pageX || event.originalEvent.touches[0].pageX;
            startValue = vars[name];
            $bubble.css('display', 'block');
            M.redraw();
            $bubble.addClass('on');
            M.$body.on('touchmove mousemove', slideMove);
            M.$body.on('touchend touchcancel mouseup', slideEnd);
        };

        var slideMove = function(event){
            event.stopPropagation();
            event.preventDefault();
            distance = (event.pageX || event.originalEvent.touches[0].pageX) - startPosition;
            var old = vars[name];
            vars[name] = Math.round(Math.max(info[0],
                Math.min(info[1], startValue + distance/sense))/info[2] ) * info[2];
            $progress.css('width', 116 * (vars[name]-info[0]) / (info[1]-info[0]) + 'px');
            if (old !== vars[name]) {
                section.evalVariables();
                if (callback) callback(section.varValues);
            }
        };

        var slideEnd = function(event){
            $bubble.removeClass('on');
            setTimeout( function() { $bubble.css('display', 'none'); }, 200);
            M.$body.off('touchmove mousemove', slideMove);
            M.$body.off('touchend touchcancel mouseup', slideEnd);
        };

        $i.on('touchstart mousedown', slideStart);

    } else if( type === 'bolean' ) {     // info = []

        vars[name] = !!Number(init);
        $i.click(function(){
            vars[name] = !!vars[name];
            section.evalVariables();
            if (callback) callback(section.varValues);
        });

    } else if( type === 'switch' ) {     // info = [val1,val2,val3,...]

        vars[name] = init;
        var activeSwitch = 0;
        var maxSwitch = info.length-1;
        $i.click(function(){
            if (activeSwitch<maxSwitch) { ++activeSwitch; } else { activeSwitch = 0; }
            vars[name] = info[activeSwitch];
            section.evalVariables();
            if (callback) callback(section.varValues);
        });

    }

    return callback || null;
};

M.svg = {};

M.svg.el = function(type, attributes, parent) {
    var _this = this;
    var svgns = 'http://www.w3.org/2000/svg';
    this.$el = document.createElementNS(svgns, type);
    this.data = {};
    M.each(attributes, function(val, key){ _this.$el.setAttribute(key, val); });
    if (parent) parent.append(this);
};

M.inherit(M.svg.el, M.$);

M.svg.el.prototype.setPoints = function(p) {
    this.attr('d', p.length ? 'M' + p.each(function(x){ return x.join(','); }).join('L') : '' );
    this.points = p;
};

M.svg.el.prototype.addPoint = function(p) {
    this.attr('d', this.attr('d') + ' L '+p.join(',') );
    this.points.push(p);
};

M.svg.el.prototype.getPoints = function() {
    var points = this.$el.attr('d').replace('M','').split('L');
    return points.each(function(x){ return x.split(',').toNumbers(); });
};

M.piechart = function(percentage, radius, colour) {
    var str;

    if (percentage >= 1) {

        str = [
            '<svg width="',2*radius,'" height="',2*radius,'">',
            '<path fill="',colour,'" stroke="none" d="M',
            radius,',0C',radius*0.5,',0,0,',radius*0.5,',0,',radius,'s',
            radius*0.5,',',radius,',',radius,',',radius,'s',
            radius,'-',radius*0.5,',',radius,'-',radius,'S',radius*1.5,',0,',radius,',0',
            'z M',radius*44.6/50,',',radius*76.1/50,'L',radius*19.2/50,',',radius*48.8/50,
            'l',radius*4/50,'-',radius*4.2/50,'l',radius*19.8/50,',',radius*11.9/50,'l',
            radius*34.2/50,'-',radius*32.6/50,'l',radius*3.5/50,',',radius*3.5/50,'L',
            radius*44.6/50,',',radius*76.1/50,'z"/>','</svg>'
        ].join('');

    } else {

        var x = radius + radius * Math.sin(percentage * 2 * Math.PI);
        var y = radius - radius * Math.cos(percentage * 2 * Math.PI);

        str = [
            '<svg width="',2*radius,'" height="',2*radius,'">',
            '<circle cx="',radius,'" cy="',radius,'" r="',radius-0.5,'" stroke="',colour,
            '" stroke-width="1" fill="transparent"/>','<path d="M ',radius,' ',radius,' L ',radius,
            ' 0 A ',radius,' ',radius,' 0 '+(percentage>0.5?'1':'0')+' 1 '+x+' '+y+' Z" fill="',
            colour,'"/>','</svg>'
        ].join('');

    }

    return str;
};

M.Draw = function($svg, options) {

    var _this = this;

    $svg.addClass('m-draw-pointer');
    _this.options = options;
    _this.drawing = false;
    _this.paths = [];
    _this.p = null;
    var activePath = null;

    _this.start = function(p) {
        if (_this.p && M.geo.distance(_this.p, p) < 20) {
            activePath.addPoint(p);

        } else {
            if (options.onStart) options.onStart(p);
            activePath = new M.svg.el('path', {
                'class': 'm-draw-path',
                'd': 'M '+p.join(',')
            }, options.paths || $svg);
            activePath.points = [p];
            _this.paths.push(activePath);
        }

        _this.drawing = true;
        _this.p = p;
    };

    _this.addPoint = function(p) {
        if (M.geo.manhatten(_this.p, p) > 4) {
            activePath.addPoint(p);
            _this.p = p;
            if (options.onIntersect) _this.checkForIntersects();
        }
    };

    if (!options.noStart) {
        $svg.on('mousedown touchstart', function(e) {

            e.preventDefault();
            e.stopPropagation();

            var p = M.events.pointerOffset(event, $svg);
            _this.start(p);
        });
    }

    $svg.on('mousemove touchmove', function(e) {
        if (!_this.drawing) return;

        e.preventDefault();
        e.stopPropagation();

        var p = M.events.pointerOffset(event, $svg);
        _this.addPoint(p);
    });

    $svg.on('mouseup touchend mouseleave touchleave', function() {
        _this.drawing = false;
    });
};

M.Draw.prototype.checkForIntersects = function() {

    if (this.paths.length <= 1) return;
    var path = this.paths.last();
    var a1 = path.points[path.points.length-2];
    var a2 = path.points[path.points.length-1];

    for (var i=0; i<this.paths.length-1; ++i) {
        var l = this.paths[i].points.length;
        for (var j=1; j<l-2; ++j) {
            var t = M.geo.intersect(a1, a2, this.paths[i].points[j], this.paths[i].points[j+1]);
            if (t) {
                this.options.onIntersect(t, path, this.paths[i]);
                return;
            }
        }
    }
};

M.Draw.prototype.stop = function() {
    this.drawing = false;
    this.p = null;
};

M.Draw.prototype.clear = function() {
    this.paths.each(function(path) { path.remove(); });
    this.paths = [];
};


})();