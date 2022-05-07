---
layout: page
nav_order: 6
parent: Core.js
---

# Iterable

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L68">iterable.ts#L68</a></div>

## <span class="pill">Class</span> Itarray

Implements Iterable&lt;T&gt;

<div class="docs-item" markdown="1">

### constructor <span class="signature">(values: Array&lt;Iterable&lt;T&gt;&gt;): Itarray&lt;T&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `values` | Array&lt;Iterable&lt;T&gt;&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L69">iterable.ts#L69</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .values

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L141">iterable.ts#L141</a></div>

### <span class="pill">Method</span> .[Symbol.iterator] <span class="signature">(): Generator&lt;T, void, unknown&gt;</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L137">iterable.ts#L137</a></div>

### <span class="pill">Method</span> .concat <span class="signature">(newValues: Iterable&lt;T&gt;): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `newValues` | Iterable&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L88">iterable.ts#L88</a></div>

### <span class="pill">Method</span> .every <span class="signature">(fn: (t: T, i: number): boolean): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (t: T, i: number): boolean |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L124">iterable.ts#L124</a></div>

### <span class="pill">Method</span> .filter <span class="signature">(fn: (t: T, i: number): unknown): Itarray&lt;T&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (t: T, i: number): unknown |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L75">iterable.ts#L75</a></div>

### <span class="pill">Method</span> .map <span class="signature">(fn: (t: T, i: number): S): Itarray&lt;S&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (t: T, i: number): S |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L110">iterable.ts#L110</a></div>

### <span class="pill">Method</span> .slice <span class="signature">(from: number, to: number): Itarray&lt;T&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `from` | number |  |  |
| `to` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L99">iterable.ts#L99</a></div>

### <span class="pill">Method</span> .some <span class="signature">(fn: (t: T, i: number): boolean): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (t: T, i: number): boolean |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L152">iterable.ts#L152</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .make <span class="signature">(fn: (i: number): T, max: number): Itarray&lt;T&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (i: number): T |  |  |
| `max` | number |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L11">iterable.ts#L11</a></div>

## every <span class="signature">(set: Iterable&lt;T&gt;, callback: (v: T): unknown): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `set` | Iterable&lt;T&gt; |  |  |
| `callback` | (v: T): unknown |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L51">iterable.ts#L51</a></div>

## findMin <span class="signature">(items: Iterable&lt;T&gt;, value: (item: T): number, max: number, min: number): undefined|T</span>

Find the item in an iterable for which value() returns the smallest value.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | Iterable&lt;T&gt; |  |  |
| `value` | (item: T): number |  |  |
| `max` | number | ... |  |
| `min` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L7">iterable.ts#L7</a></div>

## first <span class="signature">(set: Iterable&lt;T&gt;): undefined|T</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `set` | Iterable&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L25">iterable.ts#L25</a></div>

## flatMap <span class="signature">(set: Iterable&lt;T&gt;, map: (x: T): Iterable&lt;S&gt;): Generator&lt;S, void, unknown&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `set` | Iterable&lt;T&gt; |  |  |
| `map` | (x: T): Iterable&lt;S&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L41">iterable.ts#L41</a></div>

## listPairs <span class="signature">(list: Array&lt;T&gt;): Iterable&lt;[T, T]&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `list` | Array&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L33">iterable.ts#L33</a></div>

## pairs <span class="signature">(a: Iterable&lt;S&gt;, b: Iterable&lt;T&gt;): Iterable&lt;[S, T]&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | Iterable&lt;S&gt; |  |  |
| `b` | Iterable&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L18">iterable.ts#L18</a></div>

## some <span class="signature">(set: Iterable&lt;T&gt;, callback: (v: T): unknown): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `set` | Iterable&lt;T&gt; |  |  |
| `callback` | (v: T): unknown |  |  |


</div>