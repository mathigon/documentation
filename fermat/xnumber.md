---
layout: page
nav_order: 11
parent: Fermat.js
---

# Xnumber

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L16">xnumber.ts#L16</a></div>

## <span class="pill">Class</span> XNumber

Extended Number class.

<div class="docs-item" markdown="1">

### constructor <span class="signature">(num: number, den: number, unit: Suffix): XNumber</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `num` | number |  |  |
| `den` | number |  |  |
| `unit` | Suffix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L18">xnumber.ts#L18</a></div>

### <span class="pill">Property</span> .den

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L17">xnumber.ts#L17</a></div>

### <span class="pill">Property</span> .num <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Property</span> .unit <span class="signature">?: Suffix</span>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L52">xnumber.ts#L52</a></div>

### <span class="pill">Accessor</span> .value <span class="signature">: number</span>

Returns the value of this number as a decimal. For example, 2/5 and 40%
would both return 0.4.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L150">xnumber.ts#L150</a></div>

### <span class="pill">Method</span> .add <span class="signature">(a: number|XNumber): XNumber</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|XNumber |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L143">xnumber.ts#L143</a></div>

### <span class="pill">Method</span> .clamp <span class="signature">(min: number, max: number): XNumber</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `min` | number |  |  |
| `max` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L162">xnumber.ts#L162</a></div>

### <span class="pill">Method</span> .divide <span class="signature">(a: number|XNumber): XNumber</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|XNumber |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L158">xnumber.ts#L158</a></div>

### <span class="pill">Method</span> .multiply <span class="signature">(a: number|XNumber): XNumber</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|XNumber |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L154">xnumber.ts#L154</a></div>

### <span class="pill">Method</span> .subtract <span class="signature">(a: number|XNumber): XNumber</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|XNumber |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L39">xnumber.ts#L39</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L30">xnumber.ts#L30</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(precision: number): string</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `precision` | number | 4 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L26">xnumber.ts#L26</a></div>

### <span class="pill">Method</span> .valueOf <span class="signature">(): number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L189">xnumber.ts#L189</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .difference <span class="signature">(a: XNumber, b: number|XNumber): XNumber</span>

Calculates the difference of two numbers a and b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | XNumber |  |  |
| `b` | number|XNumber |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L110">xnumber.ts#L110</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L195">xnumber.ts#L195</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .product <span class="signature">(a: XNumber, b: number|XNumber): XNumber</span>

Calculates the product of two numbers a and b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | XNumber |  |  |
| `b` | number|XNumber |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L211">xnumber.ts#L211</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .quotient <span class="signature">(a: XNumber, b: number|XNumber): XNumber</span>

Calculates the quotient of two fractions a and b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | XNumber |  |  |
| `b` | number|XNumber |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/xnumber.ts#L167">xnumber.ts#L167</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .sum <span class="signature">(a: XNumber, b: number|XNumber): XNumber</span>

Calculates the sum of two fractions a and b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | XNumber |  |  |
| `b` | number|XNumber |  |  |


</div>

</div>