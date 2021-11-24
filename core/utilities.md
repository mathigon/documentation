---
layout: page
nav_order: 8
parent: Core.js
---

# Utilities

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/utilities.ts#L8">utilities.ts#L8</a></div>

## <span class="pill">Type alias</span> Obj

Object Map Interface.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/utilities.ts#L94">utilities.ts#L94</a></div>

## cache <span class="signature">(fn: (args: Args): T): (args: Args): NonNullable&lt;T&gt;</span>

Function wrapper that modifies a function to cache its return values. This
is useful for performance intensive functions which are called repeatedly
with the same arguments. However it can reduce performance for functions
which are always called with different arguments. Note that argument
comparison does not work with Objects or nested arrays.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (args: Args): T |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/utilities.ts#L33">utilities.ts#L33</a></div>

## deepExtend <span class="signature">(obj1: any, obj2: any, arrayMergeFn: (a: Array&lt;unknown&gt;, b: Array&lt;unknown&gt;): Array&lt;unknown&gt;): void</span>

Deep extends obj1 with obj2, using a custom array merge function.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `obj1` | any |  |  |
| `obj2` | any |  |  |
| `arrayMergeFn` | (a: Array&lt;unknown&gt;, b: Array&lt;unknown&gt;): Array&lt;unknown&gt; | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/utilities.ts#L65">utilities.ts#L65</a></div>

## defer <span class="signature">(): {promise: Promise&lt;T&gt;, reject: (reason: unknown): void, resolve: (value: T|PromiseLike&lt;T&gt;): void}</span>

Creates a new promise together with functions to resolve or reject.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/utilities.ts#L48">utilities.ts#L48</a></div>

## delay <span class="signature">(fn: (): void, t: number): number</span>

Replacement for setTimeout() that is synchronous for time 0.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (): void |  |  |
| `t` | number | 0 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/utilities.ts#L25">utilities.ts#L25</a></div>

## isOneOf <span class="signature">(x: T, values: Array&lt;T&gt;): boolean</span>

Checks if x is strictly equal to any one of the following arguments.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | T |  |  |
| `values` | Array&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/utilities.ts#L18">utilities.ts#L18</a></div>

## run <span class="signature">(val: T|(args: Array&lt;S&gt;): T, args: Array&lt;S&gt;): T</span>

Executes a function or returns the default value.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `val` | T|(args: Array&lt;S&gt;): T |  |  |
| `args` | Array&lt;S&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/utilities.ts#L151">utilities.ts#L151</a></div>

## safeToJSON <span class="signature">(str: |string, fallback: T, allowedKeys: Array&lt;string&gt;): undefined|T</span>

Safe wrapper for JSON.parse.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `str` | |string |  |  |
| `fallback` | T |  |  |
| `allowedKeys` | Array&lt;string&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/utilities.ts#L119">utilities.ts#L119</a></div>

## throttle <span class="signature">(fn: (args: Args): void, t: number, forceDelay: boolean): (args: Args): void</span>

Function wrapper that prevents a function from being executed more than once
every t ms. This is particularly useful for optimising callbacks for
continues events like scroll, resize or slider move. Setting `forceDelay`
to `true` means that even the first function call is after the minimum
timout, rather than instantly.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (args: Args): void |  |  |
| `t` | number | 0 |  |
| `forceDelay` | boolean | false |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/utilities.ts#L12">utilities.ts#L12</a></div>

## uid <span class="signature">(n: number): string</span>

Creates a random UID string of a given length.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number | 10 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/utilities.ts#L59">utilities.ts#L59</a></div>

## wait <span class="signature">(t: number): Promise&lt;void&gt;</span>

Returns a promise that resolves after a fixed time.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `t` | number |  |  |


</div>