
// ================================================================================================
//                                  MATHIGON UTILITIES LIBRARY
// ================================================================================================
//
// Copyright (c) Mathigon / Philipp Legner, 2014
//
// ================================================================================================


/* jshint curly: false */
/* global M */

(function(){

var FM = {};
window.FM = window.Fermat = FM;



// =================================================================================================
// PRIVATE HELPERS
// =================================================================================================

function toNumberArray(array) {
    var newArray = [];
    for (var i=0, n=array.length; i<n; ++i) newArray.push(+array[i]);
    return newArray;
}

function findInArray(array, x) {
    for (var i=0, n=array.length; i<n; ++i) if (array[i] === x) return i;
    return -1;
}

function concatArray(a1, a2) {
    return Array.prototype.concat.apply(a1, a2);
}



// =================================================================================================
// UTILITY FUNCTIONS
// =================================================================================================

(function() {

    function tabulateWith(fn, vals, args) {
        var result = [];
        if (args.length === 1) {
            for (var i=0; i<args[0]; ++i) result.push( fn.apply(null, vals.concat([i])) );
        } else {
            var newArgs = args.clone();
            var myX = newArgs.pop();
            for (var i=0; i<myX; ++i) result.push( tabulateWith(fn, vals.concat([i]), newArgs ) );
        }
        return result;
    }

    FM.tabulate = function(fn, x, y, z) {
        var indices = [];
        Array.prototype.push.apply(indices, arguments);
        indices.shift();
        return tabulateWith(fn, [], indices);
    };

})();


FM.range = function(a,b) {
    var arr = [];
    if (b == null && a >= 0) {
        for (var i=0; i<a; ++i) arr.push(i);
    } else if (b == null) {
        for (var i=0; i>a; --i) arr.push(i);
    } else if (a <= b) {
        for (var i=a; i<=b; ++i) arr.push(i);
    } else {
        for (var i=a; i>=b; --i) arr.push(i);
    }
    return arr;
};


// Shuffle an array using a Fischer-Yates shuffle
FM.shuffle = function(array) {
    array = [].slice.call(array, 0);

    for (var top = array.length; top > 0; top--) {
        var newEnd = Math.floor(Math.random() * top);
        var tmp = array[newEnd];
        array[newEnd] = array[top - 1];
        array[top - 1] = tmp;
    }

    return array;
};


FM.sort = function(array) {
    return array.slice(0).sort(function(a, b) {
        return a - b;
    });
};



// =================================================================================================
// BASIC NUMBER FUNCTIONS
// =================================================================================================


var TOLERANCE = 1e-9;


// Checks if a number or string representation thereof is an integer
FM.isInt = function(n) {
    return parseFloat(n) === parseInt(n, 10) && !isNaN(n);
};


FM.equals = function(x, y, tol) {
    return Math.abs(x - y) < (tol || TOLERANCE);
};


FM.sign = function(x) {
    return FM.equal(x, 0) ? 0 : Math.abs(x) / x;
};


FM.square = function(x) {
    return x * x;
};


FM.cube = function(x) {
    return x * x * x;
};


// Returns the array of the digits of a number n
// digits(376) = [6, 7, 3]
FM.digits = function(n) {
    if (n === 0) return [0];
    var digits = [];
    while (n > 0) {
        digits.push(n % 10);
        n = Math.floor(n / 10);
    }
    return digits;
};


// Returns the decimal digits of a number
// decimalDigits(3.456) = [4, 5, 6]
FM.decimalDigits= function(n) {
    var str = '' + Math.abs(n - Math.floor(n));
    return toNumberArray(str.split(''));
};


// Returns the number of digits after the decimal place
FM.decimalPlaces = function(n) {
    var str = '' + Math.abs(n);
    str = str.split('.');
    return str.length === 1 ? 0 : str[1].length;
};


FM.roundTowardsZero = function(x) {
    // Add 0.0001 because of floating points uncertainty
    return x < 0 ? Math.ceil(x - 0.0001) : Math.floor(x + 0.0001);
};


// Round a number to a certain number of decimal places
FM.round = function(n, precision) {
    var factor = Math.pow(10, precision || 0);
    return Math.round(n * factor) / factor;
};


// Round a number n to the nearest increment (or 1)
// round(70, 30) = 60, round(45,30) = 60, round(20.6) = 21
FM.roundTo = function(n, increment) {
    if (!increment) increment = 1;
    return Math.round(n / increment) * increment;
};


FM.toFixed = function(n, precision) {
    var fixed = n.toFixed(precision);
    return FM.equals(n, +fixed) ? fixed : '~ ' + fixed;
};


// Returns a [numerator, denominator] array rational representation of `decimal`
// See http://en.wikipedia.org/wiki/Continued_fraction for implementation details
// toFraction(4/8) => [1, 2]
// toFraction(0.66) => [33, 50]
// toFraction(0.66, 0.01) => [2/3]
FM.toFraction = function(decimal, maxDenominator) {
    maxDenominator = maxDenominator || 1000;

    var n = [1, 0], d = [0, 1];
    var a = Math.floor(decimal);
    var rem = decimal - a;

    while (d[0] <= maxDenominator) {
        if (FM.equal(n[0] / d[0], decimal)) return [n[0], d[0]];
        n = [a*n[0] + n[1], n[0]];
        d = [a*d[0] + d[1], d[0]];
        a = Math.floor(1 / rem);
        rem = 1/rem - a;
    }

    // Failed to find a nice rational representation so return an irrational "fraction"
    return [decimal, 1];
};



// =================================================================================================
// INTEGERS AND NUMBER THEORY
// =================================================================================================


var smallPrimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];


FM.gcd = function gcd(a, b) {
    if (arguments.length > 2) {
        var rest = [].slice.call(arguments, 1);
        return gcd(a, gcd.apply(null, rest));
    } else {
        var mod;
        a = Math.abs(a);
        b = Math.abs(b);
        while (b) {
            mod = a % b;
            a = b;
            b = mod;
        }

        return a;
    }
};


FM.lcm = function lcm(a, b) {
    if (arguments.length > 2) {
        var rest = [].slice.call(arguments, 1);
        return lcm(a, lcm.apply(null, rest));
    } else {
        return Math.abs(a * b) / FM.gcd(a, b);
    }
};


FM.isPrime = function(n) {
    if (n <= 1 || !FM.isInt(n)) return false;
    if (n < 101) return (findInArray(smallPrimes, n) >= 0);
    if (n % 2 === 0) return false;

    var sqrt = Math.sqrt(n);
    for (var i = 3; i <= sqrt; i += 2) {
        if (n % i === 0) return false;
    }

    return true;
};


FM.isOdd = function(n) {
    return n % 2 === 1;
};


FM.isEven = function(n) {
    return n % 2 === 0;
};


FM.primeFactorization = function fact(n) {
    if (n === 1) return [];
    if (FM.isPrime(n)) return [n];

    var maxf = Math.sqrt(n);
    for (var f = 2; f <= maxf; ++f) {
        if (n % f === 0) return concatArray(fact(f), fact(n / f));
    }
};


FM.getFactors = function(n) {
    return FM.primeFactorization(n).unique();
};


// Returns an array of all primes below n
FM.listPrimes = function(n) {
    if (n < 2) return [];
    var result = [2];

    for (var i = 3; i <= n; i++) {
        var notMultiple = false;
        for (var j in result) if (M.has(result, j)) notMultiple = notMultiple || (0 === i % result[j]);
        if (!notMultiple) result.push(i);
    }

    return result;
};


var SQRT5 = Math.sqrt(5);

FM.fibonacci = function(n) {
    return Math.round( Math.pow(1 + SQRT5, n) - Math.pow(1 - SQRT5, n) ) / ( Math.pow(2, n) * SQRT5 );
};



// =================================================================================================
// RANDOM NUMBER GENERATION
// =================================================================================================


FM.random = {};

FM.random.integer = function(n) {
    return Math.floor(n * Math.random());
};

/*
TODO
// Get an array of unique random numbers between min and max
randRangeUnique: function(min, max, count) {
    if (count == null) {
        return KhanUtil.randRange(min, max);
    } else {
        var toReturn = [];
        for (var i = min; i <= max; i++) {
            toReturn.push(i);
        }

        return KhanUtil.shuffle(toReturn, count);
    }
},

// Get a random integer between min and max with a perc chance of hitting
// target (which is assumed to be in the range, but it doesn't have to be).
randRangeWeighted: function(min, max, target, perc) {
    if (KhanUtil.random() < perc || (target === min && target === max)) {
        return target;
    } else {
        return KhanUtil.randRangeExclude(min, max, [target]);
    }
}
*/

FM.random.integerArray = function(n) {
    var a = [];
    for (var i=0; i<n; ++i) a.push(i);
    return a.shuffle();
};

// =================================================================================================

FM.random.uniformInt = function(a, b) {
    return Math.floor(a + (b-a+1) * Math.random());
};

FM.random.bernoulli = function(p) {
    p = Math.max(0,Math.min(1,p));
    return (Math.random() < p ? 1 : 0);
};

FM.random.binomial = function(n,p) {
    var t = 0;
    for (var i=0; i<n; ++i) t += FM.random.bernoulli(p);
    return t;
};

FM.random.poisson = function(l) {
    if (l <= 0) return 0;
    var L = Math.exp(-l), p = 1;
    for (var k = 0; p > L; ++k) p = p * Math.random();
    return k-1;
};

// =================================================================================================

FM.random.uniform = function(a, b) {
    return a + (b-a) * Math.random();
};

FM.random.normal = function() {
    var u1 = Math.random();
    var u2 = Math.random();
    return Math.sqrt( -2 * Math.log(u1) ) * Math.cos( 2 * Math.PI * u2 );
};

FM.random.exponential = function(l) {
    if (l <= 0) return 0;
    return -Math.log(Math.random()) / l;
};

FM.random.geometric = function(p) {
    if (p <= 0 || p > 0) return null;
    return Math.floor( Math.log(Math.random()) / Math.log(1-p) );
};

FM.random.cauchy = function() {
    var rr, v1, v2;
    do {
        v1 = 2 * Math.random() - 1;
        v2 = 2 * Math.random() - 1;
        rr = v1 * v1 + v2 * v2;
    } while (rr >= 1);
    return v1/v2;
};



// =================================================================================================
// COMBINATORICS
// =================================================================================================


FM.factorial = function factorial(x) {
    return x <= 1 ? (x || 1) : x * factorial(x - 1);
};


// Returns binomial coefficient (n choose k)
FM.binomial = function binomial(n, k) {
    if (k === 0) {
        return 1;
    } else if (2 * k > n) {
        return binomial(n, n - k);
    } else {
        var coeff = 1;
        for (var i = k; i > 0; --i) {
            coeff *= (n - i + 1);
            coeff /= i;
        }
        return coeff;
    }
};


// Returns an array of all the permutationsof arr.
// permutations(arr)[0] == arr
// http://stackoverflow.com/questions/9960908/permutations-in-javascript
FM.permutations = function(arr) {
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


(function(){

    function getSubsets(arr) {
        if (arr.length === 1) return [[], arr];
        var last = arr.pop();
        var subsets = getSubsets(arr);
        var result = [];
        for (var i=0; i<subsets.length; ++i) {
            var a2 = subsets[i].clone();
            a2.push(last);
            result.push(subsets[i], a2);
        }
        return result;
    }

    // Returns all subsets of arr (of given length)
    FM.subsets = function (arr, length) {
        var myArr = arr.clone();
        var subsets = getSubsets(myArr);
        if (length) subsets = subsets.filter(function(x) { return x.length === length; });
        return subsets.sort(function(a, b) { return a.length - b.length; });
        // FUTURE Sorting of Subsets Results
    };

})();


// Returns a string of n coin flips like 'HTTHTHTTHTT'
FM.coinFlips = function(n) {
    var str = '';
    for (var i=0; i<n; ++i) {
        str += (Math.random() >= 0.5) ? 'H' : 'T';
    }
    return str;
};



// =================================================================================================
// COMPUTATIONAL GEOMETRY
// =================================================================================================


FM.travellingSalesman = function(dist) {
    var n = dist.length
    var cities = FM.range(n);

    var minLength = Infinity;
    var minPath = null;

    FM.permutations(cities).each(function(path) {
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


FM.travellingSalesmanGreedy = function(dist) {
    // FUTURE
};


FM.travellingSalesman2Opt = function(dist) {
    // FUTURE
};



// =================================================================================================
// PROBABILITY AND STATISTICS
// =================================================================================================


FM.sum = function(values) {
    var sum = 0;
    for (var i=0, n=values.length; i<n; ++i) sum += values[i] || 0;
    return sum;
};


FM.mean = function(values) {
    return FM.sum(values) / values.length;
};


FM.median = function(values) {
    var sortedInts = FM.sort(values);

    if (values.length % 2 === 0) {
        return (sortedInts[(values.length / 2) - 1] + sortedInts[values.length / 2]) / 2;
    } else {
        return sortedInts[Math.floor(values.length / 2)];
    }
};


// Returns 'null' if no mode exists (multiple values with the same largest count)
FM.mode = function(values) {
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
    for (var i = 0; i < numInstances.length; i++) {
        if (numInstances[i]) {
            if (i !== mode && numInstances[i] >= modeInstances) {
                return null;
            }
        }
    }

    return mode;
};


FM.variance = function(values) {
    var mean = FM.mean(values);
    var n = values.length;

    var sum = 0;
    for (var i=0; i<n; ++i) sum += FM.square(values[i] - mean);

    return sum / (n - 1);
};


FM.stdDev = function(values) {
    return Math.sqrt(FM.variance(values));
};


// Determines the covariance of the numbers in two arrays aX and aY
FM.covariance = function(aX, aY) {
    if (aX.length !== aY.length) throw new Error('Array length mismatch');
    var n = aX.length;
    var total = 0;
    for (var i = 0; i < n; i++) total += aX[i] * aY[i];
    return (total - aX.total() * aY.total() / n) / n;
};


FM.correlation = function(aX, aY) {
    if (aX.length !== aY.length) throw new Error('Array length mismatch');
    var covarXY = FM.covariance(aX, aY);
    var stdDevX = aX.standardDev();
    var stdDevY = aY.standardDev();
    return covarXY / (stdDevX * stdDevY);
};


FM.rSquared = function(source, regression) {

    var residualSumOfSquares = source.each(function(d, i) {
        return FM.square(d - regression[i]);
    }).sum();


    var totalSumOfSquares = source.each(function(d) {
        return FM.square(d - source.average());
    }).sum();

    return 1 - (residualSumOfSquares / totalSumOfSquares);
};


FM.linearRegression = function(aX, aY) {
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


FM.normalPDF = function(mean, stddev, x) {
    return (1 / Math.sqrt(2 * Math.PI * stddev * stddev)) *
        Math.exp(-((x - mean) * (x - mean)) / (2 * stddev * stddev));
};



// =================================================================================================
// FERMAT.COMPLEX CLASS
// =================================================================================================


FM.Complex = function(re, im) {
    this.re = re;
    this.im = im;
};


M.extend(FM.Complex, {

    add: function(addend) {
        return new FM.complex(this.re + addend.re, this.im + addend.im);
    },

    subtract: function(subtrahend) {
        return new FM.complex(this.re - subtrahend.im, this.im - subtrahend.im);
    },

    multiply: function(multiplier) {
        var re = this.re * multiplier.re - this.im * multiplier.im;
        var im = this.im * multiplier.re + this.re * multiplier.im;
        return new FM.complex(re, im);
    },

    divide: function(divisor) {
        var denominator = divisor.re * divisor.re + divisor.im * divisor.im;
        var re = (this.re * divisor.re + this.im * divisor.im) / denominator;
        var im = (this.im * divisor.re - this.re * divisor.im) / denominator;
        return new FM.complex(re, im);
    },

    magnitude: function () {
        return Math.sqrt(this.re * this.re + this.im * this.im);
    },

    phase: function () {
        return Math.atan2(this.im, this.re);
    }

});



// =================================================================================================
// FERMAT.POLYNOMIAL CLASS
// =================================================================================================


// FUTURE Polynomials Class



// =================================================================================================
// FERMAT.VECTOR CLASS
// =================================================================================================


FM.vector = {};

FM.vector.add = function(x, y) {
    return [x[0] + y[0], x[1] + y[1]];
};

FM.vector.diff = function(x, y) {
    return [x[0] - y[0], x[1] - y[1]];
};

FM.vector.mult = function(x, m) {
    return [x[0] * m, x[1] * m];
};

FM.vector.dot = function(x, y) {
    if (x.length !== y.length) throw new Error('Vector length mismatch');
    var result = 0;
    for (var i = 0; i < x.length; i++) result += x[i] * y[i];
    return result;
};

FM.vector.cross = function(x, y) {
    return x[0] * y[1] - x[1] * y[0];
};

FM.vector.length = function(x) {
    return Math.sqrt(FM.square(x[0]) + FM.square(x[1]));
};

FM.vector.normalise = function(x) {
    return FM.vector.mult(x, 1/FM.vector.length(x));
};

// FUTURE More Vector Functions, higher dimensions



// =================================================================================================
// FERMAT.MATRIX CLASS
// =================================================================================================


FM.Matrix = function(array) {
    for (var i=0; i<array.length; ++i) this[i] = array[i];
    this.rows = array.length;
    this.cols = array[0].length;
    // FUTURE Check all Matrix cols have the same length
};

FM.Matrix.prototype.isSquare = function() {
    return this.rows === this.cols;
};

FM.Matrix.prototype.transpose = function() {
    var result = [];

    for (var i = 0; i < this.rows; i++) {
        result[i] = [];
        for (var j = 0; j < this.cols; j++) {
            result[i][j] = this.array[j][i];
        }
    }

    return new FM.matrix(result);
};

FM.Matrix.prototype.determinant = function() {
    var det = 0;
    var row, col;
    var diagLeft, diagRight;

    if (!this.isSquare()) throw new Error('Not a square matrix.');

    if (this.rows === 1) {
        return this[0][0];
    } else if (this.rows === 2) {
        return this[0][0] * this[1][1] - this[0][1] * this[1][0];
    }

    for (col = 0; col < this.cols; col++) {
        diagLeft  = this[0][col];
        diagRight = this[0][col];

        for( row=1; row < this.rows; row++ ) {
            diagRight *= this[row][(((col + row) % this.cols) + this.cols) % this.cols];
            diagLeft  *= this[row][(((col - row) % this.cols) + this.cols) % this.cols];
        }

        det += diagRight - diagLeft;
    }

    return det;
};

FM.Matrix.prototype.scalarMultiply = function(val) {
    var result = [];
    for (var i = 0; i < this.rows; i++) {
        result[i] = [];
        for (var j = 0; j < this.cols; j++) {
            result[i][j] = val * this[i][j];
        }
    }
    return new FM.matrix(result);
};

// Create an identity matrix of dimension n x n
FM.identityMatrix = function(n) {
    var result = [];

    for (var i = 0; i < n ; i++) {
        result[i] = [];
        for (var j = 0; j < n; j++) result[i][j] = (i === j) ? 1 : 0;
    }

    return new FM.matrix(result);
};

FM.matrixAddition = function(m1, m2) {
    if (m1.rows !== m2.rows || m1.cols !== m2.cols) throw new Error('Matrix size mismatch');

    var result = [];

    for (var i = 0; i < m1.length; ++i) {
        result[i] = [];
        for (var j = 0; j < m1[i].length; ++j) {
            result[i][j] = m1[i][j] + m2[i][j];
        }
    }

    return new FM.matrix(result);
};

FM.matrixMultiplication = function(m1, m2) {
    if (m1.cols !== m2.rows) throw new Error('Matrix size mismatch');

    var result = [];
    for (var x = 0; x < m1.rows; x++) result[x] = [];

    var m2Transpose = m2.transpose();

    for (var i = 0; i < m1.rows; i++) {
        for (var j = 0; j < m2.cols; j++) {
            result[i][j] = FM.dotproduct(m1[i], m2Transpose[j]);
        }
    }

    return FM.matrix(result);
};

// FUTURE More Matrix Functions



// =================================================================================================
// GEOMETRY
// =================================================================================================


FM.geo = {};

FM.geo.distance = function(p1, p2) {
    return Math.sqrt(FM.square(p1[0]-p2[0]) + FM.square(p1[1]-p2[1]));
};

FM.geo.manhatten = function(p1, p2) {
    return Math.abs(p1[0]-p2[0]) + Math.abs(p1[1]-p2[1]);
};

FM.geo.intersect = function(a1, a2, b1, b2) {

    var da = FM.vector.diff(a2, a1);
    var db = FM.vector.diff(b2, b1);
    var ab = FM.vector.diff(a1, b1);

    var denominator = FM.vector.cross(db, da);
    if (denominator === 0) return;  // -> colinear

    var numeratorA = db[1] * ab[0] - db[0] * ab[1];
    var numeratorB = da[1] * ab[0] - da[0] * ab[1];

    var A = numeratorA / denominator;
    var B = numeratorB / denominator;

    if (A.between(0,1) && B.between(0,1)) {
        var intersectionX = a1[0] + A * (a2[0] - a1[0]);
        var intersectionY = a1[1] + B * (a2[1] - a1[1]);
        return [intersectionX, intersectionY];
    }
};

// FUTURE More Geometry Functions



// =================================================================================================
// CRYPTOGRAPHY
// =================================================================================================


var LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz';
var UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var ENGLISH_FREQUENCY = {
    a: 0.08167, b: 0.01492, c: 0.02782, d: 0.04253, e: 0.12702, f: 0.02228, g: 0.02015,
    h: 0.06094, i: 0.06966, j: 0.00154, k: 0.00772, l: 0.04024, m: 0.02406, n: 0.06749,
    o: 0.07507, p: 0.01929, q: 0.00095, r: 0.05987, s: 0.06327, t: 0.09056, u: 0.02758,
    v: 0.00978, w: 0.02360, x: 0.00150, y: 0.01974, z: 0.00074
};


FM.caesarCypher = function(msg, shift) {
    var cipher = '';

    for (var i = 0, len = msg.length; i < len; i++) {
        if (msg[i] >= "a" && msg[i] <= "z") {
            cipher = cipher + LOWER_CASE[(LOWER_CASE.indexOf(msg[i]) + shift) % 26];
        } else if (msg[i] >= "A" && msg[i] <= "Z") {
            cipher = cipher + UPPER_CASE[(UPPER_CASE.indexOf(msg[i]) + shift) % 26];
        } else {
            cipher = cipher + msg[i];
        }
    }

    return cipher;
};


// Apply Vigenere cipher shift to a string,
FM.vigenereCypher = function(msg, key) {

    var cipher = "";
    var shift = 0;
    var count = 0;  // Don't count spaces when iterating the key word
    var k = key.toLowerCase();

    for (var i = 0, len = msg.length, keyLen = k.length; i < len; i++) {
        // Grab shift for the current sequence of the key word
        shift = LOWER_CASE.indexOf(k[count % keyLen]);

        if (msg[i] >= "a" && msg[i] <= "z") {
            cipher = cipher + LOWER_CASE[(LOWER_CASE.indexOf(msg[i]) + shift) % 26];
            count++;
        }
        else if (msg[i] >= "A" && msg[i] <= "Z") {
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
FM.letterFreqency = function(letter) {
    return ENGLISH_FREQUENCY[letter.toLowerCase()];
};


// Count Cipher letter frequency
FM.cipherLetterFreq = function(cipher) {
    var msg = cipher.toLowerCase();
    var freq = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    for (var i = 0, len = msg.length; i < len; ++i) {
        if (msg[i] >= "a" && msg[i] <= "z") {
            freq[LOWER_CASE.indexOf(msg[i])]++;
        }
    }

    return freq;
};



// =================================================================================================
// NUMBERIC MATHEMATICS
// =================================================================================================


// FM.bisect(function(x){ return Math.cos(x/2); }, 10) => Pi
FM.bisect = function(fn, precision, l, h) {

    if (precision == null) precision = 3;
    var p = Math.pow(10, -precision);
    var q = Math.pow(10,  precision);

    if (!l) l = 0;
    var lf = fn(l);
    var ls = Math.sign(lf);
    if (ls === 0) return l;

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

        var c = (l + h)/2
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



// =================================================================================================
// UNITS AND FINANCE
// =================================================================================================


// FUTURE Units and Finance



})();

