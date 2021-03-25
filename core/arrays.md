---
layout: page
nav_order: 1
parent: Core.js
---

# Arrays

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L162">arrays.ts#L162</a></div>

## <span class="pill">Interface</span> LinkedListItem

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L164">arrays.ts#L164</a></div>

### <span class="pill">Property</span> .next

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L163">arrays.ts#L163</a></div>

### <span class="pill">Property</span> .val <span class="signature">: T</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L122">arrays.ts#L122</a></div>

## chunk <span class="signature">(array: Array&lt;T&gt;, n: number): Array&lt;Array&lt;T&gt;&gt;</span>

Breaks an array into chunks of size at most n.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `array` | Array&lt;T&gt; |  |  |
| `n` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L115">arrays.ts#L115</a></div>

## cumulative <span class="signature">(array: Array&lt;number&gt;): Array&lt;number&gt;</span>

Creates a cumulative array by adding its elements.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `array` | Array&lt;number&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L149">arrays.ts#L149</a></div>

## difference <span class="signature">(a1: Array&lt;T&gt;, a2: Array&lt;T&gt;): Array&lt;T&gt;</span>

Returns all elements that are only in one of a1 and a2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a1` | Array&lt;T&gt; |  |  |
| `a2` | Array&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L108">arrays.ts#L108</a></div>

## flatten <span class="signature">(array: Array&lt;any&gt;): Array&lt;T&gt;</span>

Flattens a nested array into a single list.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `array` | Array&lt;any&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L143">arrays.ts#L143</a></div>

## intersect <span class="signature">(a1: Array&lt;any&gt;, a2: Array&lt;any&gt;): Array&lt;any&gt;</span>

Returns all elements that are in both a1 and a2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a1` | Array&lt;any&gt; |  |  |
| `a2` | Array&lt;any&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L157">arrays.ts#L157</a></div>

## join <span class="signature">(arrays: Array&lt;Array&lt;any&gt;&gt;): Array&lt;any&gt;</span>

Join multiple Arrays

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `arrays` | Array&lt;Array&lt;any&gt;&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L70">arrays.ts#L70</a></div>

## last <span class="signature">(array: Array&lt;T&gt;, i: number): T</span>

Returns the last item in an array, or the ith item from the end.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `array` | Array&lt;T&gt; |  |  |
| `i` | number | 0 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L52">arrays.ts#L52</a></div>

## list <span class="signature">(a: number, b: number, step: number): Array&lt;number&gt;</span>

Creates an array of numbers from 0 to a, or from a to b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `b` | number |  |  |
| `step` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L95">arrays.ts#L95</a></div>

## loop <span class="signature">(array: Array&lt;T&gt;): (): T</span>

Returns a function that can be called repeatedly, and returns items of the
array, continuously looping

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `array` | Array&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L8">arrays.ts#L8</a></div>

## repeat <span class="signature">(value: T, n: number): Array&lt;T&gt;</span>

Creates an array of size `n`, containing `value` at every entry.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | T |  |  |
| `n` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L14">arrays.ts#L14</a></div>

## repeat2D <span class="signature">(value: T, x: number, y: number): Array&lt;Array&lt;T&gt;&gt;</span>

Creates a matrix of size `x` by `y`, containing `value` at every entry.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | T |  |  |
| `x` | number |  |  |
| `y` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L132">arrays.ts#L132</a></div>

## rotate <span class="signature">(array: Array&lt;T&gt;, offset: number): Array&lt;T&gt;</span>

Rotates the elements of an array by offset.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `array` | Array&lt;T&gt; |  |  |
| `offset` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L82">arrays.ts#L82</a></div>

## sortBy <span class="signature">(array: Array&lt;T&gt;, fn: (x: T): any, reverse: boolean): Array&lt;T&gt;</span>

Sorts an array by the return value when evaluating a given function.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `array` | Array&lt;T&gt; |  |  |
| `fn` | (x: T): any |  |  |
| `reverse` | boolean | false |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L24">arrays.ts#L24</a></div>

## tabulate <span class="signature">(fn: (i: number): T, n: number): Array&lt;T&gt;</span>

Creates an array of size `n`, with the result of `fn(i)` at position i.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (i: number): T |  |  |
| `n` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L37">arrays.ts#L37</a></div>

## tabulate2D <span class="signature">(fn: (i: number, j: number): T, x: number, y: number): Array&lt;Array&lt;T&gt;&gt;</span>

Creates a matrix of size `x` by `y`, with the result of `fn(i, j)` at
position (i, j.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (i: number, j: number): T |  |  |
| `x` | number |  |  |
| `y` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L168">arrays.ts#L168</a></div>

## toLinkedList <span class="signature">(array: Array&lt;T&gt;): Array&lt;LinkedListItem&lt;T&gt;&gt;</span>

Converts an array to a linked list data structure.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `array` | Array&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L76">arrays.ts#L76</a></div>

## total <span class="signature">(array: Array&lt;number&gt;): number</span>

Finds the sum of all elements in an numeric array.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `array` | Array&lt;number&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L102">arrays.ts#L102</a></div>

## unique <span class="signature">(array: Array&lt;T&gt;): Array&lt;T&gt;</span>

Filters all duplicate elements from an array.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `array` | Array&lt;T&gt; |  |  |


</div>