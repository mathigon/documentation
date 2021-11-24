---
layout: page
nav_order: 5
parent: Euclid.js
---

# Circle

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L16">circle.ts#L16</a></div>

## <span class="pill">Class</span> Circle

A circle with a given center and radius.

Implements GeoShape

<div class="docs-item" markdown="1">

### constructor <span class="signature">(c: Point, r: number): Circle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c` | Point | ... |  |
| `r` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .c <span class="signature">: Point</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .r <span class="signature">: number</span>

Default value: `1`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L17">circle.ts#L17</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'circle'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L31">circle.ts#L31</a></div>

### <span class="pill">Accessor</span> .arc <span class="signature">: Arc</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L27">circle.ts#L27</a></div>

### <span class="pill">Accessor</span> .area <span class="signature">: number</span>

The area of this circle.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L22">circle.ts#L22</a></div>

### <span class="pill">Accessor</span> .circumference <span class="signature">: number</span>

The length of the circumference of this circle.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L57">circle.ts#L57</a></div>

### <span class="pill">Method</span> .at <span class="signature">(t: number): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `t` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L42">circle.ts#L42</a></div>

### <span class="pill">Method</span> .collision <span class="signature">(r: Rectangle): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `r` | Rectangle |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L62">circle.ts#L62</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(p: Point): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L94">circle.ts#L94</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(other: Circle, tolerance: number): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `other` | Circle |  |  |
| `tolerance` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L52">circle.ts#L52</a></div>

### <span class="pill">Method</span> .project <span class="signature">(p: Point): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L78">circle.ts#L78</a></div>

### <span class="pill">Method</span> .reflect <span class="signature">(l: Line): Circle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `l` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L73">circle.ts#L73</a></div>

### <span class="pill">Method</span> .rotate <span class="signature">(a: number, c: Point): Circle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `c` | Point | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L82">circle.ts#L82</a></div>

### <span class="pill">Method</span> .scale <span class="signature">(sx: number, sy: number): Circle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sx` | number |  |  |
| `sy` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L86">circle.ts#L86</a></div>

### <span class="pill">Method</span> .shift <span class="signature">(x: number, y: number): Circle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `y` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L36">circle.ts#L36</a></div>

### <span class="pill">Method</span> .tangentAt <span class="signature">(t: number): Line</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `t` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L98">circle.ts#L98</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L68">circle.ts#L68</a></div>

### <span class="pill">Method</span> .transform <span class="signature">(m: TransformMatrix): Circle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `m` | TransformMatrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L90">circle.ts#L90</a></div>

### <span class="pill">Method</span> .translate <span class="signature">(p: Point): Circle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

</div>