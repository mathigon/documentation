---
layout: page
nav_order: 8
parent: Euclid.js
---

# Ellipse

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L14">ellipse.ts#L14</a></div>

## <span class="pill">Class</span> Ellipse

Implements GeoShape

<div class="docs-item" markdown="1">

### constructor <span class="signature">(c: Point, a: number, b: number, angle: number): Ellipse</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c` | Point |  |  |
| `a` | number |  |  |
| `b` | number |  |  |
| `angle` | number | 0 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L16">ellipse.ts#L16</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .a <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L18">ellipse.ts#L18</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .angle <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L17">ellipse.ts#L17</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .b <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .c <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L19">ellipse.ts#L19</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .f1 <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L20">ellipse.ts#L20</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .f2 <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L15">ellipse.ts#L15</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'ellipse'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L42">ellipse.ts#L42</a></div>

### <span class="pill">Accessor</span> .rx

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L46">ellipse.ts#L46</a></div>

### <span class="pill">Accessor</span> .ry

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L92">ellipse.ts#L92</a></div>

### <span class="pill">Method</span> .at <span class="signature">(t: number): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `t` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L104">ellipse.ts#L104</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(p: Point): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L140">ellipse.ts#L140</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(other: Ellipse, tolerance: number): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `other` | Ellipse |  |  |
| `tolerance` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L55">ellipse.ts#L55</a></div>

### <span class="pill">Method</span> .intersect <span class="signature">(line: Line): Array&lt;Point&gt;</span>

Intersection between an ellipse and a line.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `line` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L50">ellipse.ts#L50</a></div>

### <span class="pill">Method</span> .normalAt <span class="signature">(p: Point): Line</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L99">ellipse.ts#L99</a></div>

### <span class="pill">Method</span> .offset <span class="signature">(p: Point): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L86">ellipse.ts#L86</a></div>

### <span class="pill">Method</span> .project <span class="signature">(p: Point): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L123">ellipse.ts#L123</a></div>

### <span class="pill">Method</span> .reflect <span class="signature">(l: Line): Ellipse</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `l` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L118">ellipse.ts#L118</a></div>

### <span class="pill">Method</span> .rotate <span class="signature">(a: number, c: Point): Ellipse</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `c` | Point | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L128">ellipse.ts#L128</a></div>

### <span class="pill">Method</span> .scale <span class="signature">(sx: number, sy: number): Ellipse</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sx` | number |  |  |
| `sy` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L132">ellipse.ts#L132</a></div>

### <span class="pill">Method</span> .shift <span class="signature">(x: number, y: number): Ellipse</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `y` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L149">ellipse.ts#L149</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L113">ellipse.ts#L113</a></div>

### <span class="pill">Method</span> .transform <span class="signature">(_m: TransformMatrix): Ellipse</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_m` | TransformMatrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L136">ellipse.ts#L136</a></div>

### <span class="pill">Method</span> .translate <span class="signature">(p: SimplePoint): Ellipse</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/ellipse.ts#L76">ellipse.ts#L76</a></div>

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