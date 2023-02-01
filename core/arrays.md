---
layout: page
nav_order: 1
parent: Core.js
---

# Arrays

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L211">arrays.ts#L211</a></div>

## BinarySearchType

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L212">arrays.ts#L212</a></div>

### first

Default value: `0`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L213">arrays.ts#L213</a></div>

### firstGreater

Default value: `1`

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L175">arrays.ts#L175</a></div>

## <span class="pill">Class</span> LinkedList

Converts an array to a linked list data structure.

<div class="docs-item" markdown="1">

### constructor <span class="signature">(items: Array&lt;T&gt;): LinkedList&lt;T&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | Array&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L176">arrays.ts#L176</a></div>

### <span class="pill">Property</span> .root

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L197">arrays.ts#L197</a></div>

### <span class="pill">Accessor</span> .array

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L201">arrays.ts#L201</a></div>

### <span class="pill">Method</span> .delete <span class="signature">(node: LinkedListItem&lt;T&gt;): undefined</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `node` | LinkedListItem&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L188">arrays.ts#L188</a></div>

### <span class="pill">Method</span> .traverse <span class="signature">(): Generator&lt;LinkedListItem&lt;T&gt;, void, unknown&gt;</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L216">arrays.ts#L216</a></div>

## <span class="pill">Type alias</span> BinarySearchArray <span class="signature">: Array&lt;{item: T, val: number}&gt;</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L255">arrays.ts#L255</a></div>

## binaryIndexOf <span class="signature">(array: BinarySearchArray&lt;T&gt;, item: T, value: number): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `array` | BinarySearchArray&lt;T&gt; |  |  |
| `item` | T |  |  |
| `value` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L223">arrays.ts#L223</a></div>

## binarySearch <span class="signature">(array: BinarySearchArray&lt;T&gt;, value: number, type: BinarySearchType): number</span>

Performs binary search on `array`, finding elements with value `value` based
on the `type` criteria. The array is assumed to be sorted (small to large)
in oder of the value returned by the `getValue()` method.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `array` | BinarySearchArray&lt;T&gt; |  |  |
| `value` | number |  |  |
| `type` | BinarySearchType |  |  |


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

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L109">arrays.ts#L109</a></div>

## flatten <span class="signature">(array: Nested&lt;T&gt;): Array&lt;T&gt;</span>

Flattens a nested array into a single list.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `array` | Nested&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L143">arrays.ts#L143</a></div>

## intersect <span class="signature">(a1: Array&lt;T&gt;, a2: Array&lt;T&gt;): Array&lt;T&gt;</span>

Returns all elements that are in both a1 and a2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a1` | Array&lt;T&gt; |  |  |
| `a2` | Array&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L157">arrays.ts#L157</a></div>

## join <span class="signature">(arrays: Array&lt;Array&lt;T&gt;&gt;): Array&lt;T&gt;</span>

Join multiple Arrays

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `arrays` | Array&lt;Array&lt;T&gt;&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L69">arrays.ts#L69</a></div>

## last <span class="signature">(array: Array&lt;T&gt;, i: number): T</span>

Returns the last item in an array, or the ith item from the end.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `array` | Array&lt;T&gt; |  |  |
| `i` | number | 0 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L51">arrays.ts#L51</a></div>

## list <span class="signature">(a: number, b: number, step: number): Array&lt;number&gt;</span>

Creates an array of numbers from 0 to a, or from a to b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `b` | number |  |  |
| `step` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L94">arrays.ts#L94</a></div>

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

Creates a 2D array of size `x` by `y`, containing `value` at every entry.

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L81">arrays.ts#L81</a></div>

## sortBy <span class="signature">(array: Array&lt;T&gt;, fn: (x: T): S, reverse: boolean): Array&lt;T&gt;</span>

Sorts an array by the return value when evaluating a given function.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `array` | Array&lt;T&gt; |  |  |
| `fn` | (x: T): S |  |  |
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

Creates a 2D array of size `x` by `y`, with the result of `fn(i, j)` at
position (i, j).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (i: number, j: number): T |  |  |
| `x` | number |  |  |
| `y` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L163">arrays.ts#L163</a></div>

## toCSV <span class="signature">(data: Array&lt;Array&lt;unknown&gt;&gt;): string</span>

Converts a 2D array to CSV data.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | Array&lt;Array&lt;unknown&gt;&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L75">arrays.ts#L75</a></div>

## total <span class="signature">(array: Array&lt;number&gt;): number</span>

Finds the sum of all elements in an numeric array.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `array` | Array&lt;number&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L101">arrays.ts#L101</a></div>

## unique <span class="signature">(array: Array&lt;T&gt;): Array&lt;T&gt;</span>

Filters all duplicate elements from an array.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `array` | Array&lt;T&gt; |  |  |


</div>