---
layout: page
nav_order: 5
parent: Core.js
---

# Iterable

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L26">iterable.ts#L26</a></div>

## <span class="pill">Class</span> Itarray

Implements Iterable&lt;T&gt;

<div class="docs-item" markdown="1">

### constructor <span class="signature">(values: Array&lt;Iterable&lt;T&gt;&gt;): Itarray&lt;T&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `values` | Array&lt;Iterable&lt;T&gt;&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L27">iterable.ts#L27</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .values

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L99">iterable.ts#L99</a></div>

### <span class="pill">Method</span> .[Symbol.iterator] <span class="signature">(): Generator&lt;T, void, unknown&gt;</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L95">iterable.ts#L95</a></div>

### <span class="pill">Method</span> .concat <span class="signature">(newValues: Iterable&lt;T&gt;): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `newValues` | Iterable&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L46">iterable.ts#L46</a></div>

### <span class="pill">Method</span> .every <span class="signature">(fn: (t: T, i: number): boolean): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (t: T, i: number): boolean |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L82">iterable.ts#L82</a></div>

### <span class="pill">Method</span> .filter <span class="signature">(fn: (t: T, i: number): unknown): Itarray&lt;T&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (t: T, i: number): unknown |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L33">iterable.ts#L33</a></div>

### <span class="pill">Method</span> .map <span class="signature">(fn: (t: T, i: number): S): Itarray&lt;S&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (t: T, i: number): S |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L68">iterable.ts#L68</a></div>

### <span class="pill">Method</span> .slice <span class="signature">(from: number, to: number): Itarray&lt;T&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `from` | number |  |  |
| `to` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L57">iterable.ts#L57</a></div>

### <span class="pill">Method</span> .some <span class="signature">(fn: (t: T, i: number): boolean): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (t: T, i: number): boolean |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L110">iterable.ts#L110</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .make <span class="signature">(fn: (i: number): T, max: number): Itarray&lt;T&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (i: number): T |  |  |
| `max` | number |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L11">iterable.ts#L11</a></div>

## every <span class="signature">(set: Iterable&lt;T&gt;, callback: (v: T): any): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `set` | Iterable&lt;T&gt; |  |  |
| `callback` | (v: T): any |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L7">iterable.ts#L7</a></div>

## first <span class="signature">(set: Iterable&lt;T&gt;): undefined|T</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `set` | Iterable&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L18">iterable.ts#L18</a></div>

## some <span class="signature">(set: Iterable&lt;T&gt;, callback: (v: T): any): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `set` | Iterable&lt;T&gt; |  |  |
| `callback` | (v: T): any |  |  |


</div>