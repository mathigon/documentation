---
layout: page
nav_order: 6
parent: Core.js
---

# Iterable

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L59">iterable.ts#L59</a></div>

## <span class="pill">Class</span> Itarray

Implements Iterable&lt;T&gt;

<div class="docs-item" markdown="1">

### constructor <span class="signature">(values: Array&lt;Iterable&lt;T&gt;&gt;): Itarray&lt;T&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `values` | Array&lt;Iterable&lt;T&gt;&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L60">iterable.ts#L60</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .values

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L132">iterable.ts#L132</a></div>

### <span class="pill">Method</span> .[Symbol.iterator] <span class="signature">(): Generator&lt;T, void, unknown&gt;</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L128">iterable.ts#L128</a></div>

### <span class="pill">Method</span> .concat <span class="signature">(newValues: Iterable&lt;T&gt;): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `newValues` | Iterable&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L79">iterable.ts#L79</a></div>

### <span class="pill">Method</span> .every <span class="signature">(fn: (t: T, i: number): boolean): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (t: T, i: number): boolean |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L115">iterable.ts#L115</a></div>

### <span class="pill">Method</span> .filter <span class="signature">(fn: (t: T, i: number): unknown): Itarray&lt;T&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (t: T, i: number): unknown |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L66">iterable.ts#L66</a></div>

### <span class="pill">Method</span> .map <span class="signature">(fn: (t: T, i: number): S): Itarray&lt;S&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (t: T, i: number): S |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L101">iterable.ts#L101</a></div>

### <span class="pill">Method</span> .slice <span class="signature">(from: number, to: number): Itarray&lt;T&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `from` | number |  |  |
| `to` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L90">iterable.ts#L90</a></div>

### <span class="pill">Method</span> .some <span class="signature">(fn: (t: T, i: number): boolean): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (t: T, i: number): boolean |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L143">iterable.ts#L143</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L42">iterable.ts#L42</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L33">iterable.ts#L33</a></div>

## pairs <span class="signature">(a: Iterable&lt;S&gt;, b: Iterable&lt;T&gt;): Generator&lt;Array&lt;S|T&gt;, void, unknown&gt;</span>

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