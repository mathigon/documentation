---
layout: page
nav_order: 5
parent: Fermat.js
---

# Matrix

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/matrix.ts#L116">matrix.ts#L116</a></div>

## determinant <span class="signature">(M: Matrix): number</span>

Calculates the determinant of a matrix M.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `M` | Matrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/matrix.ts#L16">matrix.ts#L16</a></div>

## fill <span class="signature">(value: number, x: number, y: number): Array&lt;Array&lt;number&gt;&gt;</span>

Fills a matrix of size x, y with a given value.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | number |  |  |
| `x` | number |  |  |
| `y` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/matrix.ts#L21">matrix.ts#L21</a></div>

## identity <span class="signature">(n: number): Array&lt;Array&lt;number&gt;&gt;</span>

Returns the identity matrix of size n.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number | 2 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/matrix.ts#L139">matrix.ts#L139</a></div>

## inverse <span class="signature">(M: Matrix): Array&lt;Array&lt;number&gt;&gt;</span>

Calculates the inverse of a matrix M.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `M` | Matrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/matrix.ts#L73">matrix.ts#L73</a></div>

## product <span class="signature">(matrices: Array&lt;Matrix&gt;): Matrix</span>

Calculates the matrix product of multiple matrices.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `matrices` | Array&lt;Matrix&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/matrix.ts#L37">matrix.ts#L37</a></div>

## reflection <span class="signature">(angle: number): Array&lt;Array&lt;number&gt;&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `angle` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/matrix.ts#L27">matrix.ts#L27</a></div>

## rotation <span class="signature">(angle: number): Array&lt;Array&lt;number&gt;&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `angle` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/matrix.ts#L68">matrix.ts#L68</a></div>

## scalarProduct <span class="signature">(M: Matrix, v: number): Array&lt;Array&lt;number&gt;&gt;</span>

Multiplies a matrix M by a scalar v.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `M` | Matrix |  |  |
| `v` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/matrix.ts#L33">matrix.ts#L33</a></div>

## shear <span class="signature">(lambda: number): Array&lt;Array&lt;number&gt;&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `lambda` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/matrix.ts#L48">matrix.ts#L48</a></div>

## sum <span class="signature">(matrices: Array&lt;Matrix&gt;): Matrix</span>

Calculates the sum of two or more matrices.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `matrices` | Array&lt;Matrix&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/matrix.ts#L103">matrix.ts#L103</a></div>

## transpose <span class="signature">(M: Matrix): Array&lt;Array&lt;number&gt;&gt;</span>

Calculates the transpose of a matrix M.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `M` | Matrix |  |  |


</div>