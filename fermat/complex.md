---
layout: page
nav_order: 3
parent: Fermat.js
---

# Complex

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/complex.ts#L18">complex.ts#L18</a></div>

## <span class="pill">Class</span> Complex

Complex number class.

<div class="docs-item" markdown="1">

### constructor <span class="signature">(re: number, im: number): Complex</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `re` | number | 0 |  |
| `im` | number | 0 |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Property</span> .im <span class="signature">: number</span>

Default value: `0`

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Property</span> .re <span class="signature">: number</span>

Default value: `0`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/complex.ts#L26">complex.ts#L26</a></div>

### <span class="pill">Accessor</span> .argument <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/complex.ts#L30">complex.ts#L30</a></div>

### <span class="pill">Accessor</span> .conjugate <span class="signature">: Complex</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/complex.ts#L22">complex.ts#L22</a></div>

### <span class="pill">Accessor</span> .modulus <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/complex.ts#L52">complex.ts#L52</a></div>

### <span class="pill">Method</span> .add <span class="signature">(a: number|Complex): Complex</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|Complex |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/complex.ts#L64">complex.ts#L64</a></div>

### <span class="pill">Method</span> .divide <span class="signature">(a: number|Complex): Complex</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|Complex |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/complex.ts#L60">complex.ts#L60</a></div>

### <span class="pill">Method</span> .multiply <span class="signature">(a: number|Complex): Complex</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|Complex |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/complex.ts#L35">complex.ts#L35</a></div>

### <span class="pill">Method</span> .root <span class="signature">(n: number, i: number): Complex</span>

Returns the ith nth-root of this complex number.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |
| `i` | number | 0 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/complex.ts#L56">complex.ts#L56</a></div>

### <span class="pill">Method</span> .subtract <span class="signature">(a: number|Complex): Complex</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number|Complex |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/complex.ts#L41">complex.ts#L41</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(precision: number): string</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `precision` | number | 2 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/complex.ts#L77">complex.ts#L77</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .difference <span class="signature">(c1: number|Complex, c2: number|Complex): Complex</span>

Calculates the difference of two complex numbers c1 and c2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c1` | number|Complex |  |  |
| `c2` | number|Complex |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/complex.ts#L111">complex.ts#L111</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .exp <span class="signature">(c: number|Complex): Complex</span>

Calculates e^c for a complex number c.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c` | number|Complex |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/complex.ts#L85">complex.ts#L85</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .product <span class="signature">(c1: number|Complex, c2: number|Complex): Complex</span>

Calculates the product of two complex numbers c1 and c2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c1` | number|Complex |  |  |
| `c2` | number|Complex |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/complex.ts#L95">complex.ts#L95</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .quotient <span class="signature">(c1: number|Complex, c2: number|Complex): Complex</span>

Calculates the quotient of two complex numbers c1 and c2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c1` | number|Complex |  |  |
| `c2` | number|Complex |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/complex.ts#L69">complex.ts#L69</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .sum <span class="signature">(c1: number|Complex, c2: number|Complex): Complex</span>

Calculates the sum of two complex numbers c1 and c2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c1` | number|Complex |  |  |
| `c2` | number|Complex |  |  |


</div>

</div>