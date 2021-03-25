---
layout: page
nav_order: 7
parent: Fermat.js
---

# Random

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/random.ts#L68">random.ts#L68</a></div>

## bernoulli <span class="signature">(p: number): 0|1</span>

Generates a Bernoulli random variable.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | number | 0.5 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/random.ts#L73">random.ts#L73</a></div>

## binomial <span class="signature">(n: number, p: number): number</span>

Generates a Binomial random variable.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number | 1 |  |
| `p` | number | 0.5 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/random.ts#L115">random.ts#L115</a></div>

## cauchy <span class="signature">(): number</span>

Generates an Cauchy random variable.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/random.ts#L169">random.ts#L169</a></div>

## chiCDF <span class="signature">(chi: number, deg: number): number</span>

The chi CDF function.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `chi` | number |  |  |
| `deg` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/random.ts#L104">random.ts#L104</a></div>

## exponential <span class="signature">(l: number): number</span>

Generates an exponential random variable.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `l` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/random.ts#L36">random.ts#L36</a></div>

## find <span class="signature">(items: Array&lt;T&gt;): T</span>

Randomly selects an element from an array.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | Array&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/random.ts#L109">random.ts#L109</a></div>

## geometric <span class="signature">(p: number): undefined|number</span>

Generates a geometric random variable.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | number | 0.5 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/random.ts#L21">random.ts#L21</a></div>

## integer <span class="signature">(a: number, b: number): number</span>

Generates a random integer between 0 and a, or between a and b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `b` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/random.ts#L159">random.ts#L159</a></div>

## integrate <span class="signature">(fn: (x: number): number, xMin: number, xMax: number, dx: number): number</span>

Riemann-integrates fn(x) from xMin to xMax with an interval size dx.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (x: number): number |  |  |
| `xMin` | number |  |  |
| `xMax` | number |  |  |
| `dx` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/random.ts#L96">random.ts#L96</a></div>

## normal <span class="signature">(m: number, v: number): number</span>

Generates a normal random variable with mean m and variance v.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `m` | number | 0 |  |
| `v` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/random.ts#L130">random.ts#L130</a></div>

## normalPDF <span class="signature">(x: number, m: number, v: number): number</span>

Generates pdf(x) for the normal distribution with mean m and variance v.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `m` | number | 1 |  |
| `v` | number | 0 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/random.ts#L80">random.ts#L80</a></div>

## poisson <span class="signature">(l: number): number</span>

Generates a Poisson random variable.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `l` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/random.ts#L11">random.ts#L11</a></div>

## shuffle <span class="signature">(a: Array&lt;T&gt;): Array&lt;T&gt;</span>

Randomly shuffles the elements in an array a.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | Array&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/random.ts#L50">random.ts#L50</a></div>

## smart <span class="signature">(n: number, id: string): number</span>

Returns a random number between 0 and n, but avoids returning the same
number multiple times in a row.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |
| `id` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/random.ts#L91">random.ts#L91</a></div>

## uniform <span class="signature">(a: number, b: number): number</span>

Generates a uniform random variable.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number | 0 |  |
| `b` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/random.ts#L28">random.ts#L28</a></div>

## weighted <span class="signature">(weights: Array&lt;number&gt;): number</span>

Chooses a random index value from weights [2, 5, 3]

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `weights` | Array&lt;number&gt; |  |  |


</div>