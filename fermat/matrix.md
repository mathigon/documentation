---
layout: page
nav_order: 5
parent: Fermat.js
---

# Matrix

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/matrix.ts#L117">matrix.ts#L117</a></div>

## determinant <span class="signature">(M: Matrix): number</span>

Calculates the determinant of a matrix M.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `M` | Matrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/matrix.ts#L17">matrix.ts#L17</a></div>

## fill <span class="signature">(value: number, x: number, y: number): Array&lt;Array&lt;number&gt;&gt;</span>

Fills a matrix of size x, y with a given value.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | number |  |  |
| `x` | number |  |  |
| `y` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/matrix.ts#L22">matrix.ts#L22</a></div>

## identity <span class="signature">(n: number): Array&lt;Array&lt;number&gt;&gt;</span>

Returns the identity matrix of size n.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number | 2 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/matrix.ts#L140">matrix.ts#L140</a></div>

## inverse <span class="signature">(M: Matrix): Array&lt;Array&lt;number&gt;&gt;</span>

Calculates the inverse of a matrix M.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `M` | Matrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/matrix.ts#L74">matrix.ts#L74</a></div>

## product <span class="signature">(matrices: Array&lt;Matrix&gt;): Matrix</span>

Calculates the matrix product of multiple matrices.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `matrices` | Array&lt;Matrix&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/matrix.ts#L38">matrix.ts#L38</a></div>

## reflection <span class="signature">(angle: number): Array&lt;Array&lt;number&gt;&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `angle` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/matrix.ts#L28">matrix.ts#L28</a></div>

## rotation <span class="signature">(angle: number): Array&lt;Array&lt;number&gt;&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `angle` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/matrix.ts#L69">matrix.ts#L69</a></div>

## scalarProduct <span class="signature">(M: Matrix, v: number): Array&lt;Array&lt;number&gt;&gt;</span>

Multiplies a matrix M by a scalar v.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `M` | Matrix |  |  |
| `v` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/matrix.ts#L34">matrix.ts#L34</a></div>

## shear <span class="signature">(lambda: number): Array&lt;Array&lt;number&gt;&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `lambda` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/matrix.ts#L49">matrix.ts#L49</a></div>

## sum <span class="signature">(matrices: Array&lt;Matrix&gt;): Matrix</span>

Calculates the sum of two or more matrices.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `matrices` | Array&lt;Matrix&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/matrix.ts#L104">matrix.ts#L104</a></div>

## transpose <span class="signature">(M: Matrix): Array&lt;Array&lt;number&gt;&gt;</span>

Calculates the transpose of a matrix M.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `M` | Matrix |  |  |


</div>