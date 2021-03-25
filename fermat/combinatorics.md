---
layout: page
nav_order: 2
parent: Fermat.js
---

# Combinatorics

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/combinatorics.ts#L19">combinatorics.ts#L19</a></div>

## binomial <span class="signature">(n: number, k: number): number</span>

Calculates the binomial coefficient nCk of two numbers n and k.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |
| `k` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/combinatorics.ts#L8">combinatorics.ts#L8</a></div>

## factorial <span class="signature">(x: number): number</span>

Calculates the factorial of a number x.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/combinatorics.ts#L35">combinatorics.ts#L35</a></div>

## permutations <span class="signature">(arr: Array&lt;T&gt;): Array&lt;Array&lt;T&gt;&gt;</span>

Returns an array of all possible permutations of an input array arr. In this
implementation, we always have permutations(arr)[0] == arr. From
http://stackoverflow.com/questions/9960908/permutations-in-javascript

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `arr` | Array&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/combinatorics.ts#L59">combinatorics.ts#L59</a></div>

## subsets <span class="signature">(array: Array&lt;T&gt;, length: number): Array&lt;Array&lt;T&gt;&gt;</span>

Returns an array of all possible subsets of an input array (of given length).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `array` | Array&lt;T&gt; |  |  |
| `length` | number | 0 |  |


</div>