---
layout: page
nav_order: 11
parent: Fermat.js
---

# Xnumber

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L12">xnumber.ts#L12</a></div>

## <span class="pill">Class</span> XNumber

Extended Number class.

<div class="docs-item" markdown="1">

### constructor <span class="signature">(num: number, den: number, unit: %|π): XNumber</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `num` | number |  |  |
| `den` | number |  |  |
| `unit` | %|π |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L14">xnumber.ts#L14</a></div>

### <span class="pill">Property</span> .den

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L13">xnumber.ts#L13</a></div>

### <span class="pill">Property</span> .num <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Property</span> .unit

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L69">xnumber.ts#L69</a></div>

### <span class="pill">Accessor</span> .inverse <span class="signature">: XNumber</span>

Returns 1/x of this number.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L75">xnumber.ts#L75</a></div>

### <span class="pill">Accessor</span> .negative <span class="signature">: XNumber</span>

Returns -x of this number.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L57">xnumber.ts#L57</a></div>

### <span class="pill">Accessor</span> .sign <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L62">xnumber.ts#L62</a></div>

### <span class="pill">Accessor</span> .simplified <span class="signature">: XNumber</span>

Simplifies fractions, e.g. 4/8 would become 1/2.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L50">xnumber.ts#L50</a></div>

### <span class="pill">Accessor</span> .value <span class="signature">: number</span>

Returns the value of this number as a decimal. For example, 2/5 and 40%
would both return 0.4.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L132">xnumber.ts#L132</a></div>

### <span class="pill">Method</span> .add <span class="signature">(a: number|XNumber): XNumber</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|XNumber |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L144">xnumber.ts#L144</a></div>

### <span class="pill">Method</span> .divide <span class="signature">(a: number|XNumber): XNumber</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|XNumber |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L140">xnumber.ts#L140</a></div>

### <span class="pill">Method</span> .multiply <span class="signature">(a: number|XNumber): XNumber</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|XNumber |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L136">xnumber.ts#L136</a></div>

### <span class="pill">Method</span> .subtract <span class="signature">(a: number|XNumber): XNumber</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|XNumber |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L37">xnumber.ts#L37</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L26">xnumber.ts#L26</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L22">xnumber.ts#L22</a></div>

### <span class="pill">Method</span> .valueOf <span class="signature">(): number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L170">xnumber.ts#L170</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .difference <span class="signature">(a: XNumber, b: number|XNumber): XNumber</span>

Calculates the difference of two numbers a and b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | XNumber |  |  |
| `b` | number|XNumber |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L99">xnumber.ts#L99</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .fractionFromDecimal <span class="signature">(x: number, maxDen: number): XNumber</span>

Converts a decimal into the closest fraction with a given maximum denominator.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `maxDen` | number | 100 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L82">xnumber.ts#L82</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .fromString <span class="signature">(s: string): undefined|XNumber</span>

Parses a number string, e.g. '1/2' or '20.7%'.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `s` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L176">xnumber.ts#L176</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .product <span class="signature">(a: XNumber, b: number|XNumber): XNumber</span>

Calculates the product of two numbers a and b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | XNumber |  |  |
| `b` | number|XNumber |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L192">xnumber.ts#L192</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .quotient <span class="signature">(a: XNumber, b: number|XNumber): XNumber</span>

Calculates the quotient of two fractions a and b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | XNumber |  |  |
| `b` | number|XNumber |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L149">xnumber.ts#L149</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .sum <span class="signature">(a: XNumber, b: number|XNumber): XNumber</span>

Calculates the sum of two fractions a and b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | XNumber |  |  |
| `b` | number|XNumber |  |  |


</div>

</div>