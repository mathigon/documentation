// ================================================================================================
//                                  MATHIGON UTILITIES LIBRARY
// ================================================================================================
//
// Copyright (c) Mathigon / Philipp Legner, 2014
// WARNING: Adds prototypes to 'Array', 'String' and 'Number', but not to 'Object'.
//
// ================================================================================================


/* jshint curly: false */
/* global M */

var M = M || {};



// ================================================================================================
// GENERAL
// ================================================================================================

M.noop = function() {};

M.proto = function(obj, name, fn, enumerable) {
    Object.defineProperty(obj.prototype, name, {
        enumerable: enumerable || false,
        writable: true,
        value: fn
    });
};

M.each = function(collection, fn) {
    var result;
    var l = collection.length;
    if (l===0 || (l && collection.hasOwnProperty(l-1))) {
        result = [];
        for (var i=0; i<l; ++i) if (collection.hasOwnProperty(i)) result.push(fn(collection[i], i));
    } else {
        result = {};
        for (var i in collection) if (collection.hasOwnProperty(i)) result[i] = fn(collection[i], i);
    }
    return result;
};

// Extends the prototype of Objects
M.include = function(object, prototypes, enumerable) {
    if (!(prototypes instanceof Object)) return;
    M.each(prototypes, function(val, key) {
        M.proto(object, key, val, enumerable);
    });
};

M.extend = function(dest) {
    for (var j = 1, l = arguments.length; j < l; j++) {
        for (var i in arguments[j]) {
            dest[i] = arguments[j][i];
        }
    }
    return dest;
};

M.inherit = function(ChildClass, ParentClass) {
    ChildClass.prototype = new ParentClass();
    ChildClass.prototype.constructor = this;
};

M.run = function(obj, args, _this) {
    if (obj instanceof Function) {
        return obj.apply(_this || null, args);
    } else {
        return obj;
    }
};

M.merge = function() {
    var result = {};
    for (var i=0; i<arguments.length; ++i) {
        M.each(arguments[i], function(value, property) { result[property] = value; });
    }
    return result;
};



// ================================================================================================
// CLASSES
// ================================================================================================

M.Class = function() {
    this._events = {};
};

M.include(M.Class, {

    on: function(event, fn) {
        if (this._events[event]) {
            if (this._events[event].indexOf(fn) < 0) this._events[event].push(fn);
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
    },

    include: function(props) {
        M.include(this, props);
    }

}, true);

M.Class.extend = function(props) {

    var parent = this;

    var NewClass = function() {
        this._events = {};
        if (props.init) props.init.apply(this, arguments);
    };

    NewClass.prototype = {};
    for (var i in parent.prototype) NewClass.prototype[i] = parent.prototype[i];
    for (i in props) if (i !== 'init') NewClass.prototype[i] = props[i];
    NewClass.extend = M.Class.extend;
    NewClass.prototype.constructor = NewClass;
    NewClass.parent = parent;

    return NewClass;
};


// ================================================================================================
// ARRAY FUNCTIONS
// ================================================================================================

M.isArray = function(arr) {
    return (Object.prototype.toString.call(arr) === '[object Array]');
};

M.include(Array, {

    // Makes a 1-level depth copy of an array
    clone: function() {
        return this.slice(0);
    },

    // Returns first element in an array
    first: function() {
        return this[0];
    },

    // Returns last element in an array
    last: function() {
        return this.length ? this[this.length - 1] : undefined;
    },

    // Runs the function fn(element, index) for every element in an array
    each: function(fn) {
        var x = [];
        for (var i = 0, l = this.length; i < l; ++i)
            if (this.hasOwnProperty(i)) x[i] = fn(this[i], i);
        return x;
    },

    // Runs the function fn(element, index) for every element in an array
    eachReverse: function(fn) {
        var x = [];
        for (var i = this.length - 1; i >= 0; --i)
            if (this.hasOwnProperty(i)) x[i] = fn(this[i], i);
        return x;
    },

    min: function() {
        return Math.min.apply(Math, this);
    },

    max: function() {
        return Math.max.apply(Math, this);
    },

    // Sums all elements in an array
    total: function() {
        var total = 0;
        for (var i = 0, l = this.length; i < l; ++i)
            total += Number(this[i]) || 0;
        return total;
    },

    // Removes any null or undefined values in array
    clean: function() {
        var a = [];
        for (var i = 0, l = this.length; i < l; ++i)
            if (this[i] !== null && this[i] !== undefined)
                a.push(this[i]);
        return a;
    },

    // Removes duplicated elements in an array
    unique: function() {
        var a = [];
        for (var i = 0, l = this.length; i < l; ++i)
            if (a.indexOf(this[i]) === -1) a.push(this[i]);
        return a;
    },

    // Removes multiple occurrences of an element from an array
    without: function(el) {
        var a = [];
        for (var i = 0, l = this.length; i < l; ++i)
            if (this[i] !== el) a.push(this[i]);
        return a;
    },

    // Breaks an array into chunks of size at most n
    chunk: function(n) {
        var chunks = [];
        var lastChunk = [];
        var count = 0;

        for (var i=0, l=this.length; i<l; ++i) {
            lastChunk.push(this[i]);
            ++count;
            if (count >= n) {
                chunks.push(lastChunk);
                lastChunk = [];
                count = 0;
            }
        }

        if (lastChunk.length) chunks.push(lastChunk);
        return chunks;
    },

    // Rotates the elements of an array by offset
    rotate: function(offset) {
        var length = this.length;
        offset = ((offset % length) + length) % length; // offset could initially be negative...
        var start = this.slice(0, offset);
        var end = this.slice(offset);
        Array.prototype.push.apply(end, start);
        return end;
    },

    average: function() {
        return this.length ? this.total() / this.length : 0;
    },

    // Normalises the elements in an array so that they sum to 1
    normalise: function() {
        var a = [];
        var total = this.total();
        for (var i = 0; i < this.length; ++i)
            a.push(this[i]/total);
        return a;
    },

    variance: function() {
        var length = this.length;
        var mean = this.average();
        var squaredArr = [];
        for (var i = 0, l = this.length; i < l; ++i)
            squaredArr[i] = FM.square(this[i] - mean);
        return squaredArr.total() / length;
    },

    standardDev: function() {
        return Math.sqrt(this.variance());
    },

    median: function() {
        var sorted = this.clone();
        sorted.sort(function (a, b) { return a - b; });
        var length = sorted.length;
        var index = length / 2;
        if (index % 1 === 0) return 0.5 * sorted[index - 1] + 0.5 * sorted[index];
        return sorted[Math.floor(index)];
    },

    // Randomly shuffles the elements in an array
    shuffle: function() {
        var a = this.clone();
        var j, tmp;
        for (var i = a.length - 1; i; --i) {
            j = Math.floor(Math.random() * (i+1));
            tmp = a[j];
            a[j] = a[i];
            a[i] = tmp;
        }
        return a;
    },

    toNumbers: function() {
        return this.each(function(el) { return +el; });
    }

});

// Returns an array of numbers with customisable start and end values and step distance
M.list = function(start, end, step) {
    if (end == null) { end = start; start = 0; }
    step = step || 1;
    var a = [];
    for (var i = start; i <= end; i += step) a.push(i);
    return a;
};



// ================================================================================================
// STRING FUNCTIONS
// ================================================================================================

M.include(String, {

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

});



// ================================================================================================
// OBJECT FUNCTIONS
// ================================================================================================

M.isObject = function(obj) {
    return obj === Object(obj);
};

// Checks is an object has a given key
M.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
};

// Returns an array with all keys in an object
M.keys = function(obj) {
    if (!M.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) if (M.has(obj, key)) keys.push(key);
    return keys;
};

// Swaps keys and values for an object
M.invert = function(obj) {
    var result = {};
    var keys = M.keys(obj);
    for (var i = 0, l = keys.length; i < l; ++i) {
        result[obj[keys[i]]] = keys[i];
    }
    return result;
};

M.create = Object.create || (function () {
    function F() {}
    return function (proto) {
        F.prototype = proto;
        return new F();
    };
})();

M.isOneOf = function(x, value) {
    for (var i=1; i<arguments.length; ++i)
        if (x === arguments[i]) return true;
    return false;
};


// -------------------------------------------------------------------------------------------------
// OBJECT WATCHERS
// Based on https://gist.github.com/eligrey/384583 by Eli Grey, 2012-04-03

M.watch = function (obj, prop, handler) {
    var value = obj[prop];

    var getter = function () { return value; };
    var setter = function (newVal) {
        oldVal = value;
        value = newVal;
        return newVal = handler.call(this, newVal, oldVal);
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
}



// ================================================================================================
// NUMBER AND DATEFUNCTIONS
// ================================================================================================

M.include(Number, {

    // Adds ','s as thousands seperators to a number
    seperators: function() {
        var x = (this + '').split('.');
        var n = x[0];
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(n)) {
            n = n.replace(rgx, '$1' + ',' + '$2');
        }
        return n + (x.length > 1 ? '.' + x[1] : '');
    },

    // Rounds a number to d decimal places
    round: function(d) {
        var p = Math.pow(10,d);
        return Math.round(d*p)/p;
    },

    // Bounds a number between two limits
    bound: function(min, max) {
        return Math.min(max, Math.max(min, this));
    },

    between: function(a, b) {
        return this >= a && this <= b;
    },

});

M.toOrdinal = function(number) {
    if(this % 100 >= 11 && number % 100 <= 13)
        return number + 'th';

    switch(number % 10) {
        case 1: return number + 'st';
        case 2: return number + 'nd';
        case 3: return number + 'rd';
        default: return number + 'th';
    }
};

M.isInteger = function(n) {
    return n % 1 === 0;
};

M.isDate = function(o) {
    return '[object Date]' === Object.prototype.toString.call(o);
};

M.isNaN = function(o) {
    return o !== o;
};
