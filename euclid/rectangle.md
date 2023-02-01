---
layout: page
nav_order: 14
parent: Euclid.js
---

# Rectangle

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L16">rectangle.ts#L16</a></div>

## <span class="pill">Class</span> Rectangle

A rectangle, defined by its top left vertex, width and height.

Implements GeoShape

<div class="docs-item" markdown="1">

### constructor <span class="signature">(p: Point, w: number, h: number): Rectangle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |
| `w` | number | 1 |  |
| `h` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .h <span class="signature">: number</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .p <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L17">rectangle.ts#L17</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'rectangle'`

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .w <span class="signature">: number</span>

Default value: `1`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L50">rectangle.ts#L50</a></div>

### <span class="pill">Accessor</span> .area <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L72">rectangle.ts#L72</a></div>

### <span class="pill">Accessor</span> .bounds <span class="signature">: Bounds</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L38">rectangle.ts#L38</a></div>

### <span class="pill">Accessor</span> .center <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L42">rectangle.ts#L42</a></div>

### <span class="pill">Accessor</span> .centroid <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L46">rectangle.ts#L46</a></div>

### <span class="pill">Accessor</span> .circumference <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L55">rectangle.ts#L55</a></div>

### <span class="pill">Accessor</span> .edges

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L60">rectangle.ts#L60</a></div>

### <span class="pill">Accessor</span> .points

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L65">rectangle.ts#L65</a></div>

### <span class="pill">Accessor</span> .polygon <span class="signature">: Polygon</span>

A polygon class representing this rectangle.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L103">rectangle.ts#L103</a></div>

### <span class="pill">Method</span> .at <span class="signature">(t: number): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `t` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L76">rectangle.ts#L76</a></div>

### <span class="pill">Method</span> .collision <span class="signature">(r: Rectangle): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `r` | Rectangle |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L87">rectangle.ts#L87</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(p: Point, tolerance: number): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |
| `tolerance` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L139">rectangle.ts#L139</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(_other: Polygon): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_other` | Polygon |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L107">rectangle.ts#L107</a></div>

### <span class="pill">Method</span> .offset <span class="signature">(p: Point): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L81">rectangle.ts#L81</a></div>

### <span class="pill">Method</span> .padding <span class="signature">(top: number, right: number, bottom: number, left: number): Rectangle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `top` | number |  |  |
| `right` | number |  |  |
| `bottom` | number |  |  |
| `left` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L92">rectangle.ts#L92</a></div>

### <span class="pill">Method</span> .project <span class="signature">(p: SimplePoint): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L123">rectangle.ts#L123</a></div>

### <span class="pill">Method</span> .reflect <span class="signature">(l: Line): Polygon</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `l` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L118">rectangle.ts#L118</a></div>

### <span class="pill">Method</span> .rotate <span class="signature">(a: number, c: Point): Rectangle|Polygon</span>

Rotates this rectangle by a given angle (in radians), optionally around point `c`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `c` | Point | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L127">rectangle.ts#L127</a></div>

### <span class="pill">Method</span> .scale <span class="signature">(sx: number, sy: number): Rectangle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sx` | number |  |  |
| `sy` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L131">rectangle.ts#L131</a></div>

### <span class="pill">Method</span> .shift <span class="signature">(x: number, y: number): Rectangle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `y` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L144">rectangle.ts#L144</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L113">rectangle.ts#L113</a></div>

### <span class="pill">Method</span> .transform <span class="signature">(m: TransformMatrix): Polygon</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `m` | TransformMatrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L135">rectangle.ts#L135</a></div>

### <span class="pill">Method</span> .translate <span class="signature">(p: SimplePoint): Rectangle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L22">rectangle.ts#L22</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .aroundPoints <span class="signature">(points: Iterable&lt;SimplePoint&gt;): Rectangle</span>

Creates the smallest rectangle containing all given points.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `points` | Iterable&lt;SimplePoint&gt; |  |  |


</div>

</div>