---
layout: page
nav_order: 14
parent: Euclid.js
---

# Rectangle

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L15">rectangle.ts#L15</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L16">rectangle.ts#L16</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'rectangle'`

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .w <span class="signature">: number</span>

Default value: `1`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L49">rectangle.ts#L49</a></div>

### <span class="pill">Accessor</span> .area <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L37">rectangle.ts#L37</a></div>

### <span class="pill">Accessor</span> .center <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L41">rectangle.ts#L41</a></div>

### <span class="pill">Accessor</span> .centroid <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L45">rectangle.ts#L45</a></div>

### <span class="pill">Accessor</span> .circumference <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L54">rectangle.ts#L54</a></div>

### <span class="pill">Accessor</span> .edges

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L59">rectangle.ts#L59</a></div>

### <span class="pill">Accessor</span> .points

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L64">rectangle.ts#L64</a></div>

### <span class="pill">Accessor</span> .polygon <span class="signature">: Polygon</span>

A polygon class representing this rectangle.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L94">rectangle.ts#L94</a></div>

### <span class="pill">Method</span> .at <span class="signature">(_t: number): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_t` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L71">rectangle.ts#L71</a></div>

### <span class="pill">Method</span> .collision <span class="signature">(r: Rectangle): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `r` | Rectangle |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L78">rectangle.ts#L78</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(p: Point, tolerance: number): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |
| `tolerance` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L127">rectangle.ts#L127</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(_other: Polygon): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_other` | Polygon |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L83">rectangle.ts#L83</a></div>

### <span class="pill">Method</span> .project <span class="signature">(p: SimplePoint): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L111">rectangle.ts#L111</a></div>

### <span class="pill">Method</span> .reflect <span class="signature">(l: Line): Polygon</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `l` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L106">rectangle.ts#L106</a></div>

### <span class="pill">Method</span> .rotate <span class="signature">(a: number, c: Point): Rectangle|Polygon</span>

Rotates this rectangle by a given angle (in radians), optionally around point `c`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `c` | Point | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L115">rectangle.ts#L115</a></div>

### <span class="pill">Method</span> .scale <span class="signature">(sx: number, sy: number): Rectangle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sx` | number |  |  |
| `sy` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L119">rectangle.ts#L119</a></div>

### <span class="pill">Method</span> .shift <span class="signature">(x: number, y: number): Rectangle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `y` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L132">rectangle.ts#L132</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L101">rectangle.ts#L101</a></div>

### <span class="pill">Method</span> .transform <span class="signature">(m: TransformMatrix): Polygon</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `m` | TransformMatrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L123">rectangle.ts#L123</a></div>

### <span class="pill">Method</span> .translate <span class="signature">(p: Point): Rectangle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L21">rectangle.ts#L21</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .aroundPoints <span class="signature">(points: Iterable&lt;SimplePoint&gt;): Rectangle</span>

Creates the smallest rectangle containing all given points.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `points` | Iterable&lt;SimplePoint&gt; |  |  |


</div>

</div>