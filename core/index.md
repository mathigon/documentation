---
layout: page
nav_order: 5
parent: Core.js
---

# Index

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/cache.ts#L8">cache.ts#L8</a></div>

## <span class="pill">Class</span> Cache

A basic LRU cache implementation.

<div class="docs-item" markdown="1">

### constructor <span class="signature">(maxSize: number): Cache&lt;T&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `maxSize` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/cache.ts#L10">cache.ts#L10</a></div>

### <span class="pill">Property</span> .list

Default value: `...`

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .maxSize <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/cache.ts#L9">cache.ts#L9</a></div>

### <span class="pill">Property</span> .store <span class="signature">: Map&lt;string, {i: number, val: T}&gt;</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/cache.ts#L18">cache.ts#L18</a></div>

### <span class="pill">Method</span> .get <span class="signature">(a: string): undefined|T</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/cache.ts#L44">cache.ts#L44</a></div>

### <span class="pill">Method</span> .getOrSet <span class="signature">(a: string, callback: (a: string): T): T</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | string |  |  |
| `callback` | (a: string): T |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/cache.ts#L14">cache.ts#L14</a></div>

### <span class="pill">Method</span> .has <span class="signature">(a: string): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/cache.ts#L24">cache.ts#L24</a></div>

### <span class="pill">Method</span> .set <span class="signature">(a: string, b: T): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | string |  |  |
| `b` | T |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/cache.ts#L53">cache.ts#L53</a></div>

### <span class="pill">Method</span> .touch <span class="signature">(a: string, item: {i: number, val: T}): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | string |  |  |
| `item` | {i: number, val: T} |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L43">colors.ts#L43</a></div>

## <span class="pill">Class</span> Color

Color generation and conversion class.

<div class="docs-item" markdown="1">

### constructor <span class="signature">(r: number, g: number, b: number, a: number): Color</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `r` | number |  |  |
| `g` | number |  |  |
| `b` | number |  |  |
| `a` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Property</span> .a <span class="signature">: number</span>

Default value: `1`

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Property</span> .b <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Property</span> .g <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Property</span> .r <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L62">colors.ts#L62</a></div>

### <span class="pill">Accessor</span> .brightness <span class="signature">: number</span>

Get the brightness of this color.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L88">colors.ts#L88</a></div>

### <span class="pill">Accessor</span> .chroma <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L49">colors.ts#L49</a></div>

### <span class="pill">Accessor</span> .hex <span class="signature">: string</span>

Converts this color to a hex string.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L67">colors.ts#L67</a></div>

### <span class="pill">Accessor</span> .hsl

Converts this color to an HSL array.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L56">colors.ts#L56</a></div>

### <span class="pill">Accessor</span> .rgb <span class="signature">: string</span>

Converts this color to an rgba string.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L97">colors.ts#L97</a></div>

### <span class="pill">Method</span> .copy <span class="signature">(): Color</span>

Creates a copy of this color.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L92">colors.ts#L92</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L103">colors.ts#L103</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .from <span class="signature">(color: string|Color): Color</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | string|Color |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L117">colors.ts#L117</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .fromHex <span class="signature">(hex: string): Color</span>

Creates a Color instance from a hex string.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `hex` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L131">colors.ts#L131</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .fromHsl <span class="signature">(h: number, s: number, l: number): Color</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `h` | number |  |  |
| `s` | number |  |  |
| `l` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L108">colors.ts#L108</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .fromRgb <span class="signature">(color: string): Color</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L156">colors.ts#L156</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .gradient <span class="signature">(colors: Array&lt;string|Color&gt;, steps: number): Array&lt;Color&gt;</span>

Generates a rainbow gradient with a given number of steps.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `colors` | Array&lt;string|Color&gt; |  |  |
| `steps` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L167">colors.ts#L167</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .mix <span class="signature">(c1: string|Color, c2: string|Color, p: number): Color</span>

Linearly interpolates two colors or hex strings.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c1` | string|Color |  |  |
| `c2` | string|Color |  |  |
| `p` | number | 0.5 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L179">colors.ts#L179</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .mixMany <span class="signature">(colors: Array&lt;Color&gt;, weights: Array&lt;number&gt;): Color</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `colors` | Array&lt;Color&gt; |  |  |
| `weights` | Array&lt;number&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L151">colors.ts#L151</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .rainbow <span class="signature">(steps: number): Array&lt;Color&gt;</span>

Generates a rainbow gradient with a given number of steps.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `steps` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L160">colors.ts#L160</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .shades <span class="signature">(color: string|Color, steps: number, range: number): Array&lt;Color&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | string|Color |  |  |
| `steps` | number |  |  |
| `range` | number | 0.5 |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/events.ts#L15">events.ts#L15</a></div>

## <span class="pill">Class</span> EventTarget

Base class for event management.

<div class="docs-item" markdown="1">

### constructor <span class="signature">(): EventTarget</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/events.ts#L16">events.ts#L16</a></div>

### <span class="pill">Property</span> .events <span class="signature">: Map&lt;string, Array&lt;EventCallback&gt;&gt;</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/events.ts#L36">events.ts#L36</a></div>

### <span class="pill">Method</span> .off <span class="signature">(events: string, fn: EventCallback): void</span>

Removes an event listener from one or more events.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `events` | string |  |  |
| `fn` | EventCallback |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/events.ts#L19">events.ts#L19</a></div>

### <span class="pill">Method</span> .on <span class="signature">(events: string, fn: EventCallback): void</span>

Adds an event listener for one or more events.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `events` | string |  |  |
| `fn` | EventCallback |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/events.ts#L27">events.ts#L27</a></div>

### <span class="pill">Method</span> .one <span class="signature">(events: string, fn: EventCallback): void</span>

Adds a one-time event listener to one or more events.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `events` | string |  |  |
| `fn` | EventCallback |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/events.ts#L45">events.ts#L45</a></div>

### <span class="pill">Method</span> .trigger <span class="signature">(events: string, arg: unknown): void</span>

Triggers one or more events, and executes all bound event listeners.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `events` | string |  |  |
| `arg` | unknown |  |  |


</div>

</div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/utilities.ts#L8">utilities.ts#L8</a></div>

## <span class="pill">Type alias</span> Obj

Object Map Interface.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/strings.ts#L59">strings.ts#L59</a></div>

## autoCorrect <span class="signature">(word: string, dict: Array&lt;string&gt;): undefined|string</span>

Tries to auto-correct a word from a dictionary.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `word` | string |  |  |
| `dict` | Array&lt;string&gt; |  |  |


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

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L149">arrays.ts#L149</a></div>

## difference <span class="signature">(a1: Array&lt;T&gt;, a2: Array&lt;T&gt;): Array&lt;T&gt;</span>

Returns all elements that are only in one of a1 and a2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a1` | Array&lt;T&gt; |  |  |
| `a2` | Array&lt;T&gt; |  |  |


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

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/utilities.ts#L25">utilities.ts#L25</a></div>

## isOneOf <span class="signature">(x: T, values: Array&lt;T&gt;): boolean</span>

Checks if x is strictly equal to any one of the following arguments.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | T |  |  |
| `values` | Array&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/strings.ts#L31">strings.ts#L31</a></div>

## isPalindrome <span class="signature">(str: string): boolean</span>

Checks if a string is a palindrome.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `str` | string |  |  |


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

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L41">iterable.ts#L41</a></div>

## listPairs <span class="signature">(list: Array&lt;T&gt;): Iterable&lt;[T, T]&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `list` | Array&lt;T&gt; |  |  |


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

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L33">iterable.ts#L33</a></div>

## pairs <span class="signature">(a: Iterable&lt;S&gt;, b: Iterable&lt;T&gt;): Iterable&lt;[S, T]&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | Iterable&lt;S&gt; |  |  |
| `b` | Iterable&lt;T&gt; |  |  |


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

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/iterable.ts#L18">iterable.ts#L18</a></div>

## some <span class="signature">(set: Iterable&lt;T&gt;, callback: (v: T): unknown): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `set` | Iterable&lt;T&gt; |  |  |
| `callback` | (v: T): unknown |  |  |


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

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/strings.ts#L40">strings.ts#L40</a></div>

## stringDistance <span class="signature">(s1: string, s2: string, ignoreTrailing: boolean): number</span>

Determines the Levenshtein distance between two strings. If ignoreTrailing
is true, we will ignore any additional, trailing characters in s2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `s1` | string |  |  |
| `s2` | string |  |  |
| `ignoreTrailing` | boolean | false |  |


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

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L163">arrays.ts#L163</a></div>

## toCSV <span class="signature">(data: Array&lt;Array&lt;unknown&gt;&gt;): string</span>

Converts a 2D array to CSV data.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | Array&lt;Array&lt;unknown&gt;&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/strings.ts#L24">strings.ts#L24</a></div>

## toCamelCase <span class="signature">(str: string): string</span>

Converts a string to camel case.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `str` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/strings.ts#L18">strings.ts#L18</a></div>

## toTitleCase <span class="signature">(str: string): string</span>

Converts a string to title case.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `str` | string |  |  |


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

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/utilities.ts#L12">utilities.ts#L12</a></div>

## uid <span class="signature">(n: number): string</span>

Creates a random UID string of a given length.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number | 10 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/arrays.ts#L101">arrays.ts#L101</a></div>

## unique <span class="signature">(array: Array&lt;T&gt;): Array&lt;T&gt;</span>

Filters all duplicate elements from an array.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `array` | Array&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/utilities.ts#L59">utilities.ts#L59</a></div>

## wait <span class="signature">(t: number): Promise&lt;void&gt;</span>

Returns a promise that resolves after a fixed time.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `t` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/strings.ts#L11">strings.ts#L11</a></div>

## words <span class="signature">(str: string, divider: RegExp): Array&lt;string&gt;</span>

Splits a string into space separated words.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `str` | string |  |  |
| `divider` | RegExp | ... |  |


</div>