---
layout: page
nav_order: 4
parent: Fermat.js
---

# Fraction

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fraction.ts#L11">fraction.ts#L11</a></div>

## <span class="pill">Class</span> Fraction

Fraction class.

<div class="docs-item" markdown="1">

### constructor <span class="signature">(n: number, d: number): Fraction</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |
| `d` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Property</span> .d <span class="signature">: number</span>

Default value: `1`

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Property</span> .n <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fraction.ts#L15">fraction.ts#L15</a></div>

### <span class="pill">Accessor</span> .decimal <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fraction.ts#L33">fraction.ts#L33</a></div>

### <span class="pill">Accessor</span> .inverse <span class="signature">: Fraction</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fraction.ts#L19">fraction.ts#L19</a></div>

### <span class="pill">Accessor</span> .sign

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fraction.ts#L26">fraction.ts#L26</a></div>

### <span class="pill">Accessor</span> .simplified <span class="signature">: Fraction</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fraction.ts#L77">fraction.ts#L77</a></div>

### <span class="pill">Method</span> .add <span class="signature">(a: number|Fraction): Fraction</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|Fraction |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fraction.ts#L89">fraction.ts#L89</a></div>

### <span class="pill">Method</span> .divide <span class="signature">(a: number|Fraction): Fraction</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|Fraction |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fraction.ts#L85">fraction.ts#L85</a></div>

### <span class="pill">Method</span> .multiply <span class="signature">(a: number|Fraction): Fraction</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|Fraction |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fraction.ts#L81">fraction.ts#L81</a></div>

### <span class="pill">Method</span> .subtract <span class="signature">(a: number|Fraction): Fraction</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|Fraction |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fraction.ts#L37">fraction.ts#L37</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fraction.ts#L41">fraction.ts#L41</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fraction.ts#L101">fraction.ts#L101</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .difference <span class="signature">(a: number|Fraction, b: number|Fraction): Fraction</span>

Calculates the difference of two fractions a and b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|Fraction |  |  |
| `b` | number|Fraction |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fraction.ts#L49">fraction.ts#L49</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .fromDecimal <span class="signature">(x: number, max: number): Fraction</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `max` | number | 20 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fraction.ts#L108">fraction.ts#L108</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .product <span class="signature">(a: number|Fraction, b: number|Fraction): Fraction</span>

Calculates the product of two fractions a and b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|Fraction |  |  |
| `b` | number|Fraction |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fraction.ts#L115">fraction.ts#L115</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .quotient <span class="signature">(a: number|Fraction, b: number|Fraction): Fraction</span>

Calculates the quotient of two fractions a and b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|Fraction |  |  |
| `b` | number|Fraction |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fraction.ts#L94">fraction.ts#L94</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .sum <span class="signature">(a: number|Fraction, b: number|Fraction): Fraction</span>

Calculates the sum of two fractions a and b.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|Fraction |  |  |
| `b` | number|Fraction |  |  |


</div>

</div>