---
layout: page
nav_order: 7
parent: Euclid.js
---

# Ellipse

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L14">ellipse.ts#L14</a></div>

## <span class="pill">Class</span> Ellipse

Implements GeoShape

<div class="docs-item" markdown="1">

### constructor <span class="signature">(c: Point, a: number, b: number): Ellipse</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c` | Point |  |  |
| `a` | number |  |  |
| `b` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .a <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .b <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .c <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L16">ellipse.ts#L16</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .f1 <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L17">ellipse.ts#L17</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .f2 <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L15">ellipse.ts#L15</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'ellipse'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L68">ellipse.ts#L68</a></div>

### <span class="pill">Method</span> .at <span class="signature">(t: number): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `t` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L73">ellipse.ts#L73</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(_p: Point): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L110">ellipse.ts#L110</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(): boolean</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L33">ellipse.ts#L33</a></div>

### <span class="pill">Method</span> .intersect <span class="signature">(line: Line): Array&lt;Point&gt;</span>

Intersection between an ellipse and a line.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `line` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L27">ellipse.ts#L27</a></div>

### <span class="pill">Method</span> .normalAt <span class="signature">(p: Point): Line</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L61">ellipse.ts#L61</a></div>

### <span class="pill">Method</span> .project <span class="signature">(p: Point): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L90">ellipse.ts#L90</a></div>

### <span class="pill">Method</span> .reflect <span class="signature">(_l: Line): Ellipse</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_l` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L85">ellipse.ts#L85</a></div>

### <span class="pill">Method</span> .rotate <span class="signature">(_a: number, _c: Point): Ellipse</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_a` | number |  |  |
| `_c` | Point | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L95">ellipse.ts#L95</a></div>

### <span class="pill">Method</span> .scale <span class="signature">(_sx: number, _sy: number): Ellipse</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_sx` | number |  |  |
| `_sy` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L100">ellipse.ts#L100</a></div>

### <span class="pill">Method</span> .shift <span class="signature">(_x: number, _y: number): Ellipse</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_x` | number |  |  |
| `_y` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L80">ellipse.ts#L80</a></div>

### <span class="pill">Method</span> .transform <span class="signature">(_m: TransformMatrix): Ellipse</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_m` | TransformMatrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L105">ellipse.ts#L105</a></div>

### <span class="pill">Method</span> .translate <span class="signature">(_p: Point): Ellipse</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L52">ellipse.ts#L52</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .fromFoci <span class="signature">(f1: Point, f2: Point, stringLength: number): Ellipse</span>

Creates a new Ellipse. StringLength is the length of string from one foci
to a point on the circumference, to the other foci.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `f1` | Point |  |  |
| `f2` | Point |  |  |
| `stringLength` | number |  |  |


</div>

</div>