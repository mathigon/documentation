---
layout: page
nav_order: 4
parent: Fermat.js
---

# Index

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/matrix.ts#L1">fermat.js/src/matrix.ts#L1</a></div>

## Matrix

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/matrix.ts#L117">fermat.js/src/matrix.ts#L117</a></div>

### determinant <span class="signature">(M: Matrix): number</span>

Calculates the determinant of a matrix M.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `M` | Matrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/matrix.ts#L17">fermat.js/src/matrix.ts#L17</a></div>

### fill <span class="signature">(value: number, x: number, y: number): Array&lt;Array&lt;number&gt;&gt;</span>

Fills a matrix of size x, y with a given value.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | number |  |  |
| `x` | number |  |  |
| `y` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/matrix.ts#L22">fermat.js/src/matrix.ts#L22</a></div>

### identity <span class="signature">(n: number): Array&lt;Array&lt;number&gt;&gt;</span>

Returns the identity matrix of size n.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number | 2 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/matrix.ts#L140">fermat.js/src/matrix.ts#L140</a></div>

### inverse <span class="signature">(M: Matrix): Array&lt;Array&lt;number&gt;&gt;</span>

Calculates the inverse of a matrix M.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `M` | Matrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/matrix.ts#L74">fermat.js/src/matrix.ts#L74</a></div>

### product <span class="signature">(matrices: Array&lt;Matrix&gt;): Matrix</span>

Calculates the matrix product of multiple matrices.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `matrices` | Array&lt;Matrix&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/matrix.ts#L38">fermat.js/src/matrix.ts#L38</a></div>

### reflection <span class="signature">(angle: number): Array&lt;Array&lt;number&gt;&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `angle` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/matrix.ts#L28">fermat.js/src/matrix.ts#L28</a></div>

### rotation <span class="signature">(angle: number): Array&lt;Array&lt;number&gt;&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `angle` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/matrix.ts#L69">fermat.js/src/matrix.ts#L69</a></div>

### scalarProduct <span class="signature">(M: Matrix, v: number): Array&lt;Array&lt;number&gt;&gt;</span>

Multiplies a matrix M by a scalar v.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `M` | Matrix |  |  |
| `v` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/matrix.ts#L34">fermat.js/src/matrix.ts#L34</a></div>

### shear <span class="signature">(lambda: number): Array&lt;Array&lt;number&gt;&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `lambda` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/matrix.ts#L49">fermat.js/src/matrix.ts#L49</a></div>

### sum <span class="signature">(matrices: Array&lt;Matrix&gt;): Matrix</span>

Calculates the sum of two or more matrices.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `matrices` | Array&lt;Matrix&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/matrix.ts#L104">fermat.js/src/matrix.ts#L104</a></div>

### transpose <span class="signature">(M: Matrix): Array&lt;Array&lt;number&gt;&gt;</span>

Calculates the transpose of a matrix M.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `M` | Matrix |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/random.ts#L1">fermat.js/src/random.ts#L1</a></div>

## Random

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/random.ts#L68">fermat.js/src/random.ts#L68</a></div>

### bernoulli <span class="signature">(p: number): 1|0</span>

Generates a Bernoulli random variable.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | number | 0.5 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/random.ts#L73">fermat.js/src/random.ts#L73</a></div>

### binomial <span class="signature">(n: number, p: number): number</span>

Generates a Binomial random variable.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number | 1 |  |
| `p` | number | 0.5 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/random.ts#L115">fermat.js/src/random.ts#L115</a></div>

### cauchy <span class="signature">(): number</span>

Generates an Cauchy random variable.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/random.ts#L168">fermat.js/src/random.ts#L168</a></div>

### chiCDF <span class="signature">(chi: number, deg: number): number</span>

The chi CDF function.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `chi` | number |  |  |
| `deg` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/random.ts#L104">fermat.js/src/random.ts#L104</a></div>

### exponential <span class="signature">(l: number): number</span>

Generates an exponential random variable.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `l` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/random.ts#L36">fermat.js/src/random.ts#L36</a></div>

### find <span class="signature">(items: Array&lt;T&gt;): T</span>

Randomly selects an element from an array.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | Array&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/random.ts#L109">fermat.js/src/random.ts#L109</a></div>

### geometric <span class="signature">(p: number): undefined|number</span>

Generates a geometric random variable.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | number | 0.5 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/random.ts#L21">fermat.js/src/random.ts#L21</a></div>

### integer <span class="signature">(a: number, b: number): number</span>

Generates a random integer between 0 and a, or between a and b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `b` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/random.ts#L159">fermat.js/src/random.ts#L159</a></div>

### integrate <span class="signature">(fn: (x: number): number, xMin: number, xMax: number, dx: number): number</span>

Riemann-integrates fn(x) from xMin to xMax with an interval size dx.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (x: number): number |  |  |
| `xMin` | number |  |  |
| `xMax` | number |  |  |
| `dx` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/random.ts#L96">fermat.js/src/random.ts#L96</a></div>

### normal <span class="signature">(m: number, v: number): number</span>

Generates a normal random variable with mean m and variance v.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `m` | number | 0 |  |
| `v` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/random.ts#L130">fermat.js/src/random.ts#L130</a></div>

### normalPDF <span class="signature">(x: number, m: number, v: number): number</span>

Generates pdf(x) for the normal distribution with mean m and variance v.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `m` | number | 1 |  |
| `v` | number | 0 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/random.ts#L80">fermat.js/src/random.ts#L80</a></div>

### poisson <span class="signature">(l: number): number</span>

Generates a Poisson random variable.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `l` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/random.ts#L11">fermat.js/src/random.ts#L11</a></div>

### shuffle <span class="signature">(a: Array&lt;T&gt;): Array&lt;T&gt;</span>

Randomly shuffles the elements in an array a.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | Array&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/random.ts#L50">fermat.js/src/random.ts#L50</a></div>

### smart <span class="signature">(n: number, id: string): number</span>

Returns a random number between 0 and n, but avoids returning the same
number multiple times in a row.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |
| `id` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/random.ts#L91">fermat.js/src/random.ts#L91</a></div>

### uniform <span class="signature">(a: number, b: number): number</span>

Generates a uniform random variable.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number | 0 |  |
| `b` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/random.ts#L28">fermat.js/src/random.ts#L28</a></div>

### weighted <span class="signature">(weights: Array&lt;number&gt;): number</span>

Chooses a random index value from weights [2, 5, 3]

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `weights` | Array&lt;number&gt; |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/regression.ts#L1">fermat.js/src/regression.ts#L1</a></div>

## Regression

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/regression.ts#L160">fermat.js/src/regression.ts#L160</a></div>

### bestPolynomial <span class="signature">(data: Array&lt;Coordinate&gt;, threshold: number, maxOrder: number): undefined|{coefficients: Array&lt;number&gt;, fn: (x: number): number, order: number}</span>

Finds the most suitable polynomial regression for a given dataset.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | Array&lt;Coordinate&gt; |  |  |
| `threshold` | number | 0.85 |  |
| `maxOrder` | number | 8 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/regression.ts#L142">fermat.js/src/regression.ts#L142</a></div>

### coefficient <span class="signature">(data: Array&lt;Coordinate&gt;, fn: (x: number): number): number</span>

Finds the regression coefficient of a given data set and regression
function.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | Array&lt;Coordinate&gt; |  |  |
| `fn` | (x: number): number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/regression.ts#L53">fermat.js/src/regression.ts#L53</a></div>

### exponential <span class="signature">(data: Array&lt;Coordinate&gt;): Array&lt;number&gt;</span>

Finds an exponential regression that best approximates a set of data. The
result will be an array [a, b], where y = a * e^(bx).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | Array&lt;Coordinate&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/regression.ts#L27">fermat.js/src/regression.ts#L27</a></div>

### linear <span class="signature">(data: Array&lt;Coordinate&gt;, throughOrigin: boolean): Array&lt;number&gt;</span>

Finds a linear regression that best approximates a set of data. The result
will be an array [c, m], where y = m * x + c.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | Array&lt;Coordinate&gt; |  |  |
| `throughOrigin` | boolean | false |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/regression.ts#L76">fermat.js/src/regression.ts#L76</a></div>

### logarithmic <span class="signature">(data: Array&lt;Coordinate&gt;): Array&lt;number&gt;</span>

Finds a logarithmic regression that best approximates a set of data. The
result will be an array [a, b], where y = a + b * log(x).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | Array&lt;Coordinate&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/regression.ts#L119">fermat.js/src/regression.ts#L119</a></div>

### polynomial <span class="signature">(data: Array&lt;Coordinate&gt;, order: number): Array&lt;number&gt;</span>

Finds a polynomial regression of given `order` that best approximates a set
of data. The result will be an array giving the coefficients of the
resulting polynomial.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | Array&lt;Coordinate&gt; |  |  |
| `order` | number | 2 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/regression.ts#L97">fermat.js/src/regression.ts#L97</a></div>

### power <span class="signature">(data: Array&lt;Coordinate&gt;): Array&lt;number&gt;</span>

Finds a power regression that best approximates a set of data. The result
will be an array [a, b], where y = a * x^b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | Array&lt;Coordinate&gt; |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/complex.ts#L18">fermat.js/src/complex.ts#L18</a></div>

## <span class="pill">Class</span> Complex

Complex number class.

<div class="docs-item" markdown="1">

### constructor <span class="signature">(re: number, im: number): Complex</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `re` | number | 0 |  |
| `im` | number | 0 |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Property</span> .im <span class="signature">: number</span>

Default value: `0`

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Property</span> .re <span class="signature">: number</span>

Default value: `0`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/complex.ts#L26">fermat.js/src/complex.ts#L26</a></div>

### <span class="pill">Accessor</span> .argument <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/complex.ts#L30">fermat.js/src/complex.ts#L30</a></div>

### <span class="pill">Accessor</span> .conjugate <span class="signature">: Complex</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/complex.ts#L22">fermat.js/src/complex.ts#L22</a></div>

### <span class="pill">Accessor</span> .modulus <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/complex.ts#L52">fermat.js/src/complex.ts#L52</a></div>

### <span class="pill">Method</span> .add <span class="signature">(a: number|Complex): Complex</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|Complex |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/complex.ts#L64">fermat.js/src/complex.ts#L64</a></div>

### <span class="pill">Method</span> .divide <span class="signature">(a: number|Complex): Complex</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|Complex |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/complex.ts#L60">fermat.js/src/complex.ts#L60</a></div>

### <span class="pill">Method</span> .multiply <span class="signature">(a: number|Complex): Complex</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|Complex |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/complex.ts#L35">fermat.js/src/complex.ts#L35</a></div>

### <span class="pill">Method</span> .root <span class="signature">(n: number, i: number): Complex</span>

Returns the ith nth-root of this complex number.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |
| `i` | number | 0 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/complex.ts#L56">fermat.js/src/complex.ts#L56</a></div>

### <span class="pill">Method</span> .subtract <span class="signature">(a: number|Complex): Complex</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|Complex |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/complex.ts#L41">fermat.js/src/complex.ts#L41</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(precision: number): string</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `precision` | number | 2 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/complex.ts#L77">fermat.js/src/complex.ts#L77</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .difference <span class="signature">(c1: number|Complex, c2: number|Complex): Complex</span>

Calculates the difference of two complex numbers c1 and c2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c1` | number|Complex |  |  |
| `c2` | number|Complex |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/complex.ts#L111">fermat.js/src/complex.ts#L111</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .exp <span class="signature">(c: number|Complex): Complex</span>

Calculates e^c for a complex number c.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c` | number|Complex |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/complex.ts#L85">fermat.js/src/complex.ts#L85</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .product <span class="signature">(c1: number|Complex, c2: number|Complex): Complex</span>

Calculates the product of two complex numbers c1 and c2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c1` | number|Complex |  |  |
| `c2` | number|Complex |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/complex.ts#L95">fermat.js/src/complex.ts#L95</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .quotient <span class="signature">(c1: number|Complex, c2: number|Complex): Complex</span>

Calculates the quotient of two complex numbers c1 and c2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c1` | number|Complex |  |  |
| `c2` | number|Complex |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/complex.ts#L69">fermat.js/src/complex.ts#L69</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .sum <span class="signature">(c1: number|Complex, c2: number|Complex): Complex</span>

Calculates the sum of two complex numbers c1 and c2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c1` | number|Complex |  |  |
| `c2` | number|Complex |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/vector.ts#L12">fermat.js/src/vector.ts#L12</a></div>

## <span class="pill">Class</span> Vector

A n-dimensional Vector class.

Extends Array&lt;number&gt;

<div class="docs-item" markdown="1">

### constructor <span class="signature">(args: Array&lt;number&gt;): Vector</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `args` | Array&lt;number&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/documentation/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts#L314">documentation/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts#L314</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .[Symbol.species] <span class="signature">: ArrayConstructor</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/documentation/node_modules/typescript/lib/lib.es5.d.ts#L1224">documentation/node_modules/typescript/lib/lib.es5.d.ts#L1224</a></div>

### <span class="pill">Property</span> .length <span class="signature">: number</span>

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/vector.ts#L20">fermat.js/src/vector.ts#L20</a></div>

### <span class="pill">Accessor</span> .magnitude <span class="signature">: number</span>

Returns the magnitude of the Vector

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/vector.ts#L27">fermat.js/src/vector.ts#L27</a></div>

### <span class="pill">Accessor</span> .unitVector

Returns the unitVector of the Vector

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .[Symbol.iterator] <span class="signature">(): IterableIterator&lt;number&gt;</span>

Iterator

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .[Symbol.unscopables] <span class="signature">(): {copyWithin: boolean, entries: boolean, fill: boolean, find: boolean, findIndex: boolean, keys: boolean, values: boolean}</span>

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .at <span class="signature">(index: number): undefined|number</span>

Takes an integer value and returns the item at that index,
allowing for positive and negative integers.
Negative integers count back from the last item in the array.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `index` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .concat <span class="signature">(items: Array&lt;ConcatArray&lt;number&gt;&gt;): Array&lt;number&gt;</span>

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | Array&lt;ConcatArray&lt;number&gt;&gt; |  |  |


Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | Array&lt;number|ConcatArray&lt;number&gt;&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .copyWithin <span class="signature">(target: number, start: number, end: number): Vector</span>

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `target` | number |  |  |
| `start` | number |  |  |
| `end` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .entries <span class="signature">(): IterableIterator&lt;[number, number]&gt;</span>

Returns an iterable of key, value pairs for every entry in the array

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .every <span class="signature">(predicate: (value: number, index: number, array: Array&lt;number&gt;): value is S, thisArg: any): this is Array&lt;S&gt;</span>

Determines whether all the members of an array satisfy the specified test.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `predicate` | (value: number, index: number, array: Array&lt;number&gt;): value is S |  |  |
| `thisArg` | any |  |  |


Determines whether all the members of an array satisfy the specified test.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `predicate` | (value: number, index: number, array: Array&lt;number&gt;): unknown |  |  |
| `thisArg` | any |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .fill <span class="signature">(value: number, start: number, end: number): Vector</span>

Returns the this object after filling the section identified by start and end with value

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | number |  |  |
| `start` | number |  |  |
| `end` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .filter <span class="signature">(predicate: (value: number, index: number, array: Array&lt;number&gt;): value is S, thisArg: any): Array&lt;S&gt;</span>

Returns the elements of an array that meet the condition specified in a callback function.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `predicate` | (value: number, index: number, array: Array&lt;number&gt;): value is S |  |  |
| `thisArg` | any |  |  |


Returns the elements of an array that meet the condition specified in a callback function.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `predicate` | (value: number, index: number, array: Array&lt;number&gt;): unknown |  |  |
| `thisArg` | any |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .find <span class="signature">(predicate: (value: number, index: number, obj: Array&lt;number&gt;): value is S, thisArg: any): undefined|S</span>

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `predicate` | (value: number, index: number, obj: Array&lt;number&gt;): value is S |  |  |
| `thisArg` | any |  |  |


| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `predicate` | (value: number, index: number, obj: Array&lt;number&gt;): unknown |  |  |
| `thisArg` | any |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .findIndex <span class="signature">(predicate: (value: number, index: number, obj: Array&lt;number&gt;): unknown, thisArg: any): number</span>

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `predicate` | (value: number, index: number, obj: Array&lt;number&gt;): unknown |  |  |
| `thisArg` | any |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .flat <span class="signature">(depth: D): Array&lt;FlatArray&lt;A, D&gt;&gt;</span>

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `depth` | D |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .flatMap <span class="signature">(callback: (value: number, index: number, array: Array&lt;number&gt;): U|, thisArg: This): Array&lt;U&gt;</span>

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callback` | (value: number, index: number, array: Array&lt;number&gt;): U| |  |  |
| `thisArg` | This |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .forEach <span class="signature">(callbackfn: (value: number, index: number, array: Array&lt;number&gt;): void, thisArg: any): void</span>

Performs the specified action for each element in an array.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callbackfn` | (value: number, index: number, array: Array&lt;number&gt;): void |  |  |
| `thisArg` | any |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .from <span class="signature">(arrayLike: ArrayLike&lt;T&gt;): Array&lt;T&gt;</span>

Creates an array from an array-like object.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `arrayLike` | ArrayLike&lt;T&gt; |  |  |


Creates an array from an iterable object.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `arrayLike` | ArrayLike&lt;T&gt; |  |  |
| `mapfn` | (v: T, k: number): U |  |  |
| `thisArg` | any |  |  |


Creates an array from an iterable object.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `iterable` | Iterable&lt;T&gt;|ArrayLike&lt;T&gt; |  |  |


Creates an array from an iterable object.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `iterable` | Iterable&lt;T&gt;|ArrayLike&lt;T&gt; |  |  |
| `mapfn` | (v: T, k: number): U |  |  |
| `thisArg` | any |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .includes <span class="signature">(searchElement: number, fromIndex: number): boolean</span>

Determines whether an array includes a certain element, returning true or false as appropriate.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `searchElement` | number |  |  |
| `fromIndex` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .indexOf <span class="signature">(searchElement: number, fromIndex: number): number</span>

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `searchElement` | number |  |  |
| `fromIndex` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .isArray <span class="signature">(arg: any): arg is Array&lt;any&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `arg` | any |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .join <span class="signature">(separator: string): string</span>

Adds all the elements of an array into a string, separated by the specified separator string.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `separator` | string |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .keys <span class="signature">(): IterableIterator&lt;number&gt;</span>

Returns an iterable of keys in the array

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .lastIndexOf <span class="signature">(searchElement: number, fromIndex: number): number</span>

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `searchElement` | number |  |  |
| `fromIndex` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .map <span class="signature">(callbackfn: (value: number, index: number, array: Array&lt;number&gt;): U, thisArg: any): Array&lt;U&gt;</span>

Calls a defined callback function on each element of an array, and returns an array that contains the results.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callbackfn` | (value: number, index: number, array: Array&lt;number&gt;): U |  |  |
| `thisArg` | any |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .of <span class="signature">(items: Array&lt;T&gt;): Array&lt;T&gt;</span>

Returns a new array from a set of elements.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | Array&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .pop <span class="signature">(): undefined|number</span>

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .push <span class="signature">(items: Array&lt;number&gt;): number</span>

Appends new elements to the end of an array, and returns the new length of the array.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | Array&lt;number&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .reduce <span class="signature">(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Array&lt;number&gt;): number): number</span>

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callbackfn` | (previousValue: number, currentValue: number, currentIndex: number, array: Array&lt;number&gt;): number |  |  |


| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callbackfn` | (previousValue: number, currentValue: number, currentIndex: number, array: Array&lt;number&gt;): number |  |  |
| `initialValue` | number |  |  |


Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callbackfn` | (previousValue: U, currentValue: number, currentIndex: number, array: Array&lt;number&gt;): U |  |  |
| `initialValue` | U |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .reduceRight <span class="signature">(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Array&lt;number&gt;): number): number</span>

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callbackfn` | (previousValue: number, currentValue: number, currentIndex: number, array: Array&lt;number&gt;): number |  |  |


| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callbackfn` | (previousValue: number, currentValue: number, currentIndex: number, array: Array&lt;number&gt;): number |  |  |
| `initialValue` | number |  |  |


Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callbackfn` | (previousValue: U, currentValue: number, currentIndex: number, array: Array&lt;number&gt;): U |  |  |
| `initialValue` | U |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .reverse <span class="signature">(): Array&lt;number&gt;</span>

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/vector.ts#L32">fermat.js/src/vector.ts#L32</a></div>

### <span class="pill">Method</span> .scale <span class="signature">(q: number): Array&lt;number&gt;</span>

Scales this vector by a factor q.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `q` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .shift <span class="signature">(): undefined|number</span>

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .slice <span class="signature">(start: number, end: number): Array&lt;number&gt;</span>

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `start` | number |  |  |
| `end` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .some <span class="signature">(predicate: (value: number, index: number, array: Array&lt;number&gt;): unknown, thisArg: any): boolean</span>

Determines whether the specified callback function returns true for any element of an array.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `predicate` | (value: number, index: number, array: Array&lt;number&gt;): unknown |  |  |
| `thisArg` | any |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .sort <span class="signature">(compareFn: (a: number, b: number): number): Vector</span>

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `compareFn` | (a: number, b: number): number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .splice <span class="signature">(start: number, deleteCount: number): Array&lt;number&gt;</span>

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `start` | number |  |  |
| `deleteCount` | number |  |  |


Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `start` | number |  |  |
| `deleteCount` | number |  |  |
| `items` | Array&lt;number&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .toLocaleString <span class="signature">(): string</span>

Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

Returns a string representation of an array.

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .unshift <span class="signature">(items: Array&lt;number&gt;): number</span>

Inserts new elements at the start of an array, and returns the new length of the array.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | Array&lt;number&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .values <span class="signature">(): IterableIterator&lt;number&gt;</span>

Returns an iterable of values in the array

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/vector.ts#L62">fermat.js/src/vector.ts#L62</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .cross <span class="signature">(v1: Vector, v2: Vector): Vector</span>

Finds the cross product of two 3-dimensional vectors v1 and v2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `v1` | Vector |  |  |
| `v2` | Vector |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/vector.ts#L45">fermat.js/src/vector.ts#L45</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .difference <span class="signature">(v1: Vector, v2: Vector): Array&lt;number&gt;</span>

Calculates the difference of two vectors v1 and v2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `v1` | Vector |  |  |
| `v2` | Vector |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/vector.ts#L57">fermat.js/src/vector.ts#L57</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .dot <span class="signature">(v1: Vector, v2: Vector): number</span>

Calculates the dot product of two vectors v1 and v2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `v1` | Vector |  |  |
| `v2` | Vector |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/vector.ts#L72">fermat.js/src/vector.ts#L72</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .equals <span class="signature">(v1: Vector, v2: Vector): boolean</span>

Checks if two vectors are equal.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `v1` | Vector |  |  |
| `v2` | Vector |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/vector.ts#L51">fermat.js/src/vector.ts#L51</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .product <span class="signature">(v1: Vector, v2: Vector): Array&lt;number&gt;</span>

Calculates the element-wise product of two vectors v1 and v2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `v1` | Vector |  |  |
| `v2` | Vector |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/vector.ts#L39">fermat.js/src/vector.ts#L39</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .sum <span class="signature">(v1: Vector, v2: Vector): Array&lt;number&gt;</span>

Calculates the sum of two vectors v1 and v2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `v1` | Vector |  |  |
| `v2` | Vector |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/xnumber.ts#L16">fermat.js/src/xnumber.ts#L16</a></div>

## <span class="pill">Class</span> XNumber

Extended Number class.

<div class="docs-item" markdown="1">

### constructor <span class="signature">(num: number, den: number, unit: Suffix): XNumber</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `num` | number |  |  |
| `den` | number |  |  |
| `unit` | Suffix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/xnumber.ts#L18">fermat.js/src/xnumber.ts#L18</a></div>

### <span class="pill">Property</span> .den

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/xnumber.ts#L17">fermat.js/src/xnumber.ts#L17</a></div>

### <span class="pill">Property</span> .num <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Property</span> .unit <span class="signature">?: Suffix</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/xnumber.ts#L69">fermat.js/src/xnumber.ts#L69</a></div>

### <span class="pill">Accessor</span> .inverse <span class="signature">: XNumber</span>

Returns 1/x of this number.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/xnumber.ts#L75">fermat.js/src/xnumber.ts#L75</a></div>

### <span class="pill">Accessor</span> .negative <span class="signature">: XNumber</span>

Returns -x of this number.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/xnumber.ts#L57">fermat.js/src/xnumber.ts#L57</a></div>

### <span class="pill">Accessor</span> .sign <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/xnumber.ts#L62">fermat.js/src/xnumber.ts#L62</a></div>

### <span class="pill">Accessor</span> .simplified <span class="signature">: XNumber</span>

Simplifies fractions, e.g. 4/8 would become 1/2.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/xnumber.ts#L52">fermat.js/src/xnumber.ts#L52</a></div>

### <span class="pill">Accessor</span> .value <span class="signature">: number</span>

Returns the value of this number as a decimal. For example, 2/5 and 40%
would both return 0.4.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/xnumber.ts#L150">fermat.js/src/xnumber.ts#L150</a></div>

### <span class="pill">Method</span> .add <span class="signature">(a: number|XNumber): XNumber</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|XNumber |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/xnumber.ts#L143">fermat.js/src/xnumber.ts#L143</a></div>

### <span class="pill">Method</span> .clamp <span class="signature">(min: number, max: number): XNumber</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `min` | number |  |  |
| `max` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/xnumber.ts#L162">fermat.js/src/xnumber.ts#L162</a></div>

### <span class="pill">Method</span> .divide <span class="signature">(a: number|XNumber): XNumber</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|XNumber |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/xnumber.ts#L158">fermat.js/src/xnumber.ts#L158</a></div>

### <span class="pill">Method</span> .multiply <span class="signature">(a: number|XNumber): XNumber</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|XNumber |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/xnumber.ts#L154">fermat.js/src/xnumber.ts#L154</a></div>

### <span class="pill">Method</span> .subtract <span class="signature">(a: number|XNumber): XNumber</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|XNumber |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/xnumber.ts#L39">fermat.js/src/xnumber.ts#L39</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/xnumber.ts#L30">fermat.js/src/xnumber.ts#L30</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(precision: number): string</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `precision` | number | 4 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/xnumber.ts#L26">fermat.js/src/xnumber.ts#L26</a></div>

### <span class="pill">Method</span> .valueOf <span class="signature">(): number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/xnumber.ts#L189">fermat.js/src/xnumber.ts#L189</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .difference <span class="signature">(a: XNumber, b: number|XNumber): XNumber</span>

Calculates the difference of two numbers a and b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | XNumber |  |  |
| `b` | number|XNumber |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/xnumber.ts#L110">fermat.js/src/xnumber.ts#L110</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .fractionFromDecimal <span class="signature">(x: number, maxDen: number): XNumber</span>

Converts a decimal into the closest fraction with a given maximum denominator.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `maxDen` | number | 100 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/xnumber.ts#L82">fermat.js/src/xnumber.ts#L82</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .fromString <span class="signature">(s: string): undefined|XNumber</span>

Parses a number string, e.g. '1/2' or '20.7%'.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `s` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/xnumber.ts#L195">fermat.js/src/xnumber.ts#L195</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .product <span class="signature">(a: XNumber, b: number|XNumber): XNumber</span>

Calculates the product of two numbers a and b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | XNumber |  |  |
| `b` | number|XNumber |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/xnumber.ts#L211">fermat.js/src/xnumber.ts#L211</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .quotient <span class="signature">(a: XNumber, b: number|XNumber): XNumber</span>

Calculates the quotient of two fractions a and b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | XNumber |  |  |
| `b` | number|XNumber |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/xnumber.ts#L167">fermat.js/src/xnumber.ts#L167</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .sum <span class="signature">(a: XNumber, b: number|XNumber): XNumber</span>

Calculates the sum of two fractions a and b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | XNumber |  |  |
| `b` | number|XNumber |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/combinatorics.ts#L19">fermat.js/src/combinatorics.ts#L19</a></div>

## binomial <span class="signature">(n: number, k: number): number</span>

Calculates the binomial coefficient nCk of two numbers n and k.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |
| `k` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/arithmetic.ts#L217">fermat.js/src/arithmetic.ts#L217</a></div>

## clamp <span class="signature">(x: number, min: number, max: number): number</span>

Bounds a number between a lower and an upper limit.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `min` | number | -Infinity |  |
| `max` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/statistics.ts#L92">fermat.js/src/statistics.ts#L92</a></div>

## correlation <span class="signature">(aX: Array&lt;number&gt;, aY: Array&lt;number&gt;): number</span>

Calculates the correlation between the numbers in two arrays aX and aY.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `aX` | Array&lt;number&gt; |  |  |
| `aY` | Array&lt;number&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/statistics.ts#L85">fermat.js/src/statistics.ts#L85</a></div>

## covariance <span class="signature">(aX: Array&lt;number&gt;, aY: Array&lt;number&gt;): number</span>

Calculates the covariance of the numbers in two arrays aX and aY.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `aX` | Array&lt;number&gt; |  |  |
| `aY` | Array&lt;number&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/arithmetic.ts#L232">fermat.js/src/arithmetic.ts#L232</a></div>

## cube <span class="signature">(x: number): number</span>

Cubes a number.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/arithmetic.ts#L175">fermat.js/src/arithmetic.ts#L175</a></div>

## digits <span class="signature">(n: number): Array&lt;number&gt;</span>

Returns the digits of a number n.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/number-theory.ts#L118">fermat.js/src/number-theory.ts#L118</a></div>

## eulerPhi <span class="signature">(x: number): number</span>

Computes Euler's totient function (phi) for a given natural number x.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/combinatorics.ts#L8">fermat.js/src/combinatorics.ts#L8</a></div>

## factorial <span class="signature">(x: number): number</span>

Calculates the factorial of a number x.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/number-theory.ts#L11">fermat.js/src/number-theory.ts#L11</a></div>

## gcd <span class="signature">(numbers: Array&lt;number&gt;): number</span>

Calculates the greatest common divisor of multiple numbers.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `numbers` | Array&lt;number&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/number-theory.ts#L83">fermat.js/src/number-theory.ts#L83</a></div>

## generatePrime <span class="signature">(d: number): number</span>

Generates a random prime number with d digits, where 2 <= d <= 16.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `d` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/number-theory.ts#L97">fermat.js/src/number-theory.ts#L97</a></div>

## goldbach <span class="signature">(x: number): [number, number]</span>

Tries to write a number x as the sum of two primes.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/arithmetic.ts#L25">fermat.js/src/arithmetic.ts#L25</a></div>

## isBetween <span class="signature">(value: number, a: number, b: number, t: number): boolean</span>

Checks if a number x is between two numbers a and b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | number |  |  |
| `a` | number |  |  |
| `b` | number |  |  |
| `t` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/arithmetic.ts#L20">fermat.js/src/arithmetic.ts#L20</a></div>

## isInteger <span class="signature">(x: number, t: number): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `t` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/number-theory.ts#L31">fermat.js/src/number-theory.ts#L31</a></div>

## isPrime <span class="signature">(n: number): boolean</span>

Checks if a number n is prime.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/number-theory.ts#L23">fermat.js/src/number-theory.ts#L23</a></div>

## lcm <span class="signature">(numbers: Array&lt;number&gt;): number</span>

Calculates the lowest common multiple of multiple numbers.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `numbers` | Array&lt;number&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/arithmetic.ts#L222">fermat.js/src/arithmetic.ts#L222</a></div>

## lerp <span class="signature">(a: number, b: number, t: number): number</span>

Linear interpolation

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `b` | number |  |  |
| `t` | number | 0.5 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/number-theory.ts#L67">fermat.js/src/number-theory.ts#L67</a></div>

## listPrimes <span class="signature">(n: number): Array&lt;number&gt;</span>

Lists all prime numbers between 0 and n.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number | 100 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/arithmetic.ts#L246">fermat.js/src/arithmetic.ts#L246</a></div>

## log <span class="signature">(x: number, b: number): number</span>

Calculates the logarithm of `x` with base `b`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `b` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/statistics.ts#L12">fermat.js/src/statistics.ts#L12</a></div>

## mean <span class="signature">(values: Array&lt;number&gt;): number</span>

Calculates the mean of an array of numbers.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `values` | Array&lt;number&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/statistics.ts#L37">fermat.js/src/statistics.ts#L37</a></div>

## median <span class="signature">(values: Array&lt;number&gt;): number</span>

Calculates the median of an array of numbers.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `values` | Array&lt;number&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/arithmetic.ts#L241">fermat.js/src/arithmetic.ts#L241</a></div>

## mod <span class="signature">(a: number, m: number): number</span>

Calculates `a mod m`. The JS implementation of the % operator returns the
symmetric modulo. Both are identical if a >= 0 and m >= 0 but the results
differ if a or m < 0.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `m` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/statistics.ts#L45">fermat.js/src/statistics.ts#L45</a></div>

## mode <span class="signature">(values: Array&lt;number&gt;): undefined|number</span>

Calculates the mode of an array of numbers. Returns undefined if no mode
exists, i.e. there are multiple values with the same largest count.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `values` | Array&lt;number&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/arithmetic.ts#L14">fermat.js/src/arithmetic.ts#L14</a></div>

## nearlyEquals <span class="signature">(a: number, b: number, t: number): boolean</span>

Checks if two numbers are nearly equals.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `b` | number |  |  |
| `t` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/arithmetic.ts#L69">fermat.js/src/arithmetic.ts#L69</a></div>

## numberFormat <span class="signature">(n: number, places: number, separators: boolean): string</span>

Converts a number to a clean string, by rounding, adding power suffixes, and
adding thousands separators. `places` is the number of digits to show in the
result.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |
| `places` | number | 0 |  |
| `separators` | boolean | true |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/arithmetic.ts#L89">fermat.js/src/arithmetic.ts#L89</a></div>

## parseNumber <span class="signature">(str: string): number</span>

Converts a number to a string, including . or , decimal points and
thousands separators.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `str` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/combinatorics.ts#L35">fermat.js/src/combinatorics.ts#L35</a></div>

## permutations <span class="signature">(arr: Array&lt;T&gt;): Array&lt;Array&lt;T&gt;&gt;</span>

Returns an array of all possible permutations of an input array arr. In this
implementation, we always have permutations(arr)[0] == arr. From
http://stackoverflow.com/questions/9960908/permutations-in-javascript

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `arr` | Array&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/arithmetic.ts#L260">fermat.js/src/arithmetic.ts#L260</a></div>

## polynomial <span class="signature">(x: number, coefficients: Array&lt;number&gt;): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `coefficients` | Array&lt;number&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/number-theory.ts#L47">fermat.js/src/number-theory.ts#L47</a></div>

## primeFactorisation <span class="signature">(n: number): Array&lt;number&gt;</span>

Finds the prime factorisation of a number n.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/number-theory.ts#L62">fermat.js/src/number-theory.ts#L62</a></div>

## primeFactors <span class="signature">(n: number): Array&lt;number&gt;</span>

Finds all prime factors of a number n.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/arithmetic.ts#L251">fermat.js/src/arithmetic.ts#L251</a></div>

## quadratic <span class="signature">(a: number, b: number, c: number): Array&lt;number&gt;</span>

Solves the quadratic equation a x^2 + b x + c = 0

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `b` | number |  |  |
| `c` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/statistics.ts#L17">fermat.js/src/statistics.ts#L17</a></div>

## quantile <span class="signature">(values: Array&lt;number&gt;, p: number): number</span>

Finds the quantile of an array of numbers for the cumulative probability p.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `values` | Array&lt;number&gt; |  |  |
| `p` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/arithmetic.ts#L181">fermat.js/src/arithmetic.ts#L181</a></div>

## round <span class="signature">(n: number, precision: number): number</span>

Rounds a number `n` to `precision` decimal places.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |
| `precision` | number | 0 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/arithmetic.ts#L187">fermat.js/src/arithmetic.ts#L187</a></div>

## roundTo <span class="signature">(n: number, increment: number): number</span>

Round a number `n` to the nearest multiple of `increment`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |
| `increment` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/arithmetic.ts#L31">fermat.js/src/arithmetic.ts#L31</a></div>

## sign <span class="signature">(value: number, t: number): 1|0|-1</span>

Returns the sign of a number x, as +1, 0 or –1.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | number |  |  |
| `t` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/arithmetic.ts#L227">fermat.js/src/arithmetic.ts#L227</a></div>

## square <span class="signature">(x: number): number</span>

Squares a number.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/statistics.ts#L79">fermat.js/src/statistics.ts#L79</a></div>

## stdDev <span class="signature">(values: Array&lt;number&gt;): number</span>

Calculates the standard deviation of an array of numbers.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `values` | Array&lt;number&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/combinatorics.ts#L59">fermat.js/src/combinatorics.ts#L59</a></div>

## subsets <span class="signature">(array: Array&lt;T&gt;, length: number): Array&lt;Array&lt;T&gt;&gt;</span>

Returns an array of all possible subsets of an input array (of given length).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `array` | Array&lt;T&gt; |  |  |
| `length` | number | 0 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/arithmetic.ts#L195">fermat.js/src/arithmetic.ts#L195</a></div>

## toFraction <span class="signature">(decimal: number, precision: number): Array&lt;number&gt;</span>

Returns an [numerator, denominator] array that approximated a `decimal` to
`precision`. See http://en.wikipedia.org/wiki/Continued_fraction

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `decimal` | number |  |  |
| `precision` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/arithmetic.ts#L113">fermat.js/src/arithmetic.ts#L113</a></div>

## toOrdinal <span class="signature">(x: number): string</span>

Converts a number to an ordinal.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/arithmetic.ts#L152">fermat.js/src/arithmetic.ts#L152</a></div>

## toWord <span class="signature">(n: number): string</span>

Spells a number as an English word.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/statistics.ts#L70">fermat.js/src/statistics.ts#L70</a></div>

## variance <span class="signature">(values: Array&lt;number&gt;): undefined|number</span>

Calculates the variance of an array of numbers.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `values` | Array&lt;number&gt; |  |  |


</div>