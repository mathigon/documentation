---
layout: page
nav_order: 8
parent: Fermat.js
---

# Regression

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/regression.ts#L160">regression.ts#L160</a></div>

## bestPolynomial <span class="signature">(data: Array&lt;Coordinate&gt;, threshold: number, maxOrder: number): undefined|{coefficients: Array&lt;number&gt;, fn: (x: number): number, order: number}</span>

Finds the most suitable polynomial regression for a given dataset.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | Array&lt;Coordinate&gt; |  |  |
| `threshold` | number | 0.85 |  |
| `maxOrder` | number | 8 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/regression.ts#L142">regression.ts#L142</a></div>

## coefficient <span class="signature">(data: Array&lt;Coordinate&gt;, fn: (x: number): number): number</span>

Finds the regression coefficient of a given data set and regression
function.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | Array&lt;Coordinate&gt; |  |  |
| `fn` | (x: number): number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/regression.ts#L53">regression.ts#L53</a></div>

## exponential <span class="signature">(data: Array&lt;Coordinate&gt;): Array&lt;number&gt;</span>

Finds an exponential regression that best approximates a set of data. The
result will be an array [a, b], where y = a * e^(bx).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | Array&lt;Coordinate&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/regression.ts#L27">regression.ts#L27</a></div>

## linear <span class="signature">(data: Array&lt;Coordinate&gt;, throughOrigin: boolean): Array&lt;number&gt;</span>

Finds a linear regression that best approximates a set of data. The result
will be an array [c, m], where y = m * x + c.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | Array&lt;Coordinate&gt; |  |  |
| `throughOrigin` | boolean | false |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/regression.ts#L76">regression.ts#L76</a></div>

## logarithmic <span class="signature">(data: Array&lt;Coordinate&gt;): Array&lt;number&gt;</span>

Finds a logarithmic regression that best approximates a set of data. The
result will be an array [a, b], where y = a + b * log(x).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | Array&lt;Coordinate&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/regression.ts#L119">regression.ts#L119</a></div>

## polynomial <span class="signature">(data: Array&lt;Coordinate&gt;, order: number): Array&lt;number&gt;</span>

Finds a polynomial regression of given `order` that best approximates a set
of data. The result will be an array giving the coefficients of the
resulting polynomial.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | Array&lt;Coordinate&gt; |  |  |
| `order` | number | 2 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/regression.ts#L97">regression.ts#L97</a></div>

## power <span class="signature">(data: Array&lt;Coordinate&gt;): Array&lt;number&gt;</span>

Finds a power regression that best approximates a set of data. The result
will be an array [a, b], where y = a * x^b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | Array&lt;Coordinate&gt; |  |  |


</div>