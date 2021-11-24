---
layout: page
nav_order: 1
parent: Fermat.js
---

# Arithmetic

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/arithmetic.ts#L217">arithmetic.ts#L217</a></div>

## clamp <span class="signature">(x: number, min: number, max: number): number</span>

Bounds a number between a lower and an upper limit.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `min` | number | -Infinity |  |
| `max` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/arithmetic.ts#L232">arithmetic.ts#L232</a></div>

## cube <span class="signature">(x: number): number</span>

Cubes a number.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/arithmetic.ts#L175">arithmetic.ts#L175</a></div>

## digits <span class="signature">(n: number): Array&lt;number&gt;</span>

Returns the digits of a number n.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/arithmetic.ts#L25">arithmetic.ts#L25</a></div>

## isBetween <span class="signature">(value: number, a: number, b: number, t: number): boolean</span>

Checks if a number x is between two numbers a and b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | number |  |  |
| `a` | number |  |  |
| `b` | number |  |  |
| `t` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/arithmetic.ts#L20">arithmetic.ts#L20</a></div>

## isInteger <span class="signature">(x: number, t: number): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `t` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/arithmetic.ts#L222">arithmetic.ts#L222</a></div>

## lerp <span class="signature">(a: number, b: number, t: number): number</span>

Linear interpolation

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `b` | number |  |  |
| `t` | number | 0.5 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/arithmetic.ts#L246">arithmetic.ts#L246</a></div>

## log <span class="signature">(x: number, b: number): number</span>

Calculates the logarithm of `x` with base `b`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `b` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/arithmetic.ts#L241">arithmetic.ts#L241</a></div>

## mod <span class="signature">(a: number, m: number): number</span>

Calculates `a mod m`. The JS implementation of the % operator returns the
symmetric modulo. Both are identical if a >= 0 and m >= 0 but the results
differ if a or m < 0.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `m` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/arithmetic.ts#L14">arithmetic.ts#L14</a></div>

## nearlyEquals <span class="signature">(a: number, b: number, t: number): boolean</span>

Checks if two numbers are nearly equals.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `b` | number |  |  |
| `t` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/arithmetic.ts#L69">arithmetic.ts#L69</a></div>

## numberFormat <span class="signature">(n: number, places: number, separators: boolean): string</span>

Converts a number to a clean string, by rounding, adding power suffixes, and
adding thousands separators. `places` is the number of digits to show in the
result.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |
| `places` | number | 0 |  |
| `separators` | boolean | true |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/arithmetic.ts#L89">arithmetic.ts#L89</a></div>

## parseNumber <span class="signature">(str: string): number</span>

Converts a number to a string, including . or , decimal points and
thousands separators.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `str` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/arithmetic.ts#L260">arithmetic.ts#L260</a></div>

## polynomial <span class="signature">(x: number, coefficients: Array&lt;number&gt;): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `coefficients` | Array&lt;number&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/arithmetic.ts#L251">arithmetic.ts#L251</a></div>

## quadratic <span class="signature">(a: number, b: number, c: number): Array&lt;number&gt;</span>

Solves the quadratic equation a x^2 + b x + c = 0

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `b` | number |  |  |
| `c` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/arithmetic.ts#L181">arithmetic.ts#L181</a></div>

## round <span class="signature">(n: number, precision: number): number</span>

Rounds a number `n` to `precision` decimal places.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |
| `precision` | number | 0 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/arithmetic.ts#L187">arithmetic.ts#L187</a></div>

## roundTo <span class="signature">(n: number, increment: number): number</span>

Round a number `n` to the nearest multiple of `increment`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |
| `increment` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/arithmetic.ts#L31">arithmetic.ts#L31</a></div>

## sign <span class="signature">(value: number, t: number): 1|0|-1</span>

Returns the sign of a number x, as +1, 0 or –1.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | number |  |  |
| `t` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/arithmetic.ts#L227">arithmetic.ts#L227</a></div>

## square <span class="signature">(x: number): number</span>

Squares a number.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/arithmetic.ts#L195">arithmetic.ts#L195</a></div>

## toFraction <span class="signature">(decimal: number, precision: number): Array&lt;number&gt;</span>

Returns an [numerator, denominator] array that approximated a `decimal` to
`precision`. See http://en.wikipedia.org/wiki/Continued_fraction

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `decimal` | number |  |  |
| `precision` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/arithmetic.ts#L113">arithmetic.ts#L113</a></div>

## toOrdinal <span class="signature">(x: number): string</span>

Converts a number to an ordinal.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/arithmetic.ts#L152">arithmetic.ts#L152</a></div>

## toWord <span class="signature">(n: number): string</span>

Spells a number as an English word.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |


</div>