---
layout: page
nav_order: 10
parent: Euclid.js
---

# Point

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L15">point.ts#L15</a></div>

## <span class="pill">Class</span> Point

A single point class defined by two coordinates x and y.

Implements GeoElement, SimplePoint

<div class="docs-item" markdown="1">

### constructor <span class="signature">(x: number, y: number): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number | 0 |  |
| `y` | number | 0 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L16">point.ts#L16</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'point'`

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .x <span class="signature">: number</span>

Default value: `0`

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .y <span class="signature">: number</span>

Default value: `0`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L41">point.ts#L41</a></div>

### <span class="pill">Accessor</span> .array

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L33">point.ts#L33</a></div>

### <span class="pill">Accessor</span> .flip <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L29">point.ts#L29</a></div>

### <span class="pill">Accessor</span> .inverse <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L25">point.ts#L25</a></div>

### <span class="pill">Accessor</span> .length <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L37">point.ts#L37</a></div>

### <span class="pill">Accessor</span> .perpendicular <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L20">point.ts#L20</a></div>

### <span class="pill">Accessor</span> .unitVector <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L65">point.ts#L65</a></div>

### <span class="pill">Method</span> .add <span class="signature">(p: SimplePoint): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L85">point.ts#L85</a></div>

### <span class="pill">Method</span> .angle <span class="signature">(c: Point): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c` | Point | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L57">point.ts#L57</a></div>

### <span class="pill">Method</span> .changeCoordinates <span class="signature">(originCoords: Bounds, targetCoords: Bounds): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `originCoords` | Bounds |  |  |
| `targetCoords` | Bounds |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L51">point.ts#L51</a></div>

### <span class="pill">Method</span> .clamp <span class="signature">(bounds: Bounds, padding: number): Point</span>

Clamps this point to specific bounds.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `bounds` | Bounds |  |  |
| `padding` | number | 0 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L46">point.ts#L46</a></div>

### <span class="pill">Method</span> .distanceFromLine <span class="signature">(l: Line): number</span>

Finds the perpendicular distance between this point and a line.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `l` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L200">point.ts#L200</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(other: any, precision: number): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `other` | any |  |  |
| `precision` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L77">point.ts#L77</a></div>

### <span class="pill">Method</span> .floor <span class="signature">(): Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L81">point.ts#L81</a></div>

### <span class="pill">Method</span> .mod <span class="signature">(x: number, y: number): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `y` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L174">point.ts#L174</a></div>

### <span class="pill">Method</span> .reflect <span class="signature">(l: Line): Point</span>

Reflects this point across a line l.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `l` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L159">point.ts#L159</a></div>

### <span class="pill">Method</span> .rotate <span class="signature">(angle: number, c: SimplePoint): Point</span>

Rotates this point by a given angle (in radians) around c.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `angle` | number |  |  |
| `c` | SimplePoint | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L73">point.ts#L73</a></div>

### <span class="pill">Method</span> .round <span class="signature">(inc: number): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `inc` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L188">point.ts#L188</a></div>

### <span class="pill">Method</span> .scale <span class="signature">(sx: number, sy: number): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sx` | number |  |  |
| `sy` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L192">point.ts#L192</a></div>

### <span class="pill">Method</span> .shift <span class="signature">(x: number, y: number): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `y` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L90">point.ts#L90</a></div>

### <span class="pill">Method</span> .snap <span class="signature">(p: Point, tolerance: number): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |
| `tolerance` | number | 5 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L69">point.ts#L69</a></div>

### <span class="pill">Method</span> .subtract <span class="signature">(p: SimplePoint): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L152">point.ts#L152</a></div>

### <span class="pill">Method</span> .transform <span class="signature">(m: TransformMatrix): Point</span>

Transforms this point using a 2x3 matrix m.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `m` | TransformMatrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L196">point.ts#L196</a></div>

### <span class="pill">Method</span> .translate <span class="signature">(p: Point): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L97">point.ts#L97</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .average <span class="signature">(points: Array&lt;SimplePoint&gt;): Point</span>

Calculates the average of multiple points.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `points` | Array&lt;SimplePoint&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L112">point.ts#L112</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .difference <span class="signature">(p1: SimplePoint, p2: SimplePoint): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p1` | SimplePoint |  |  |
| `p2` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L117">point.ts#L117</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .distance <span class="signature">(p1: SimplePoint, p2: SimplePoint): number</span>

Returns the Euclidean distance between two points p1 and p2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p1` | SimplePoint |  |  |
| `p2` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L104">point.ts#L104</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .dot <span class="signature">(p1: SimplePoint, p2: SimplePoint): number</span>

Calculates the dot product of two points p1 and p2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p1` | SimplePoint |  |  |
| `p2` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L139">point.ts#L139</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .fromPolar <span class="signature">(angle: number, r: number): Point</span>

Creates a point from polar coordinates.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `angle` | number |  |  |
| `r` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L127">point.ts#L127</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .interpolate <span class="signature">(p1: SimplePoint, p2: SimplePoint, t: number): Point</span>

Interpolates two points p1 and p2 by a factor of t.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p1` | SimplePoint |  |  |
| `p2` | SimplePoint |  |  |
| `t` | number | 0.5 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L132">point.ts#L132</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .interpolateList <span class="signature">(points: Array&lt;SimplePoint&gt;, t: number): Point</span>

Interpolates a list of multiple points.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `points` | Array&lt;SimplePoint&gt; |  |  |
| `t` | number | 0.5 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L122">point.ts#L122</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .manhattan <span class="signature">(p1: SimplePoint, p2: SimplePoint): number</span>

Returns the Manhattan distance between two points p1 and p2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p1` | SimplePoint |  |  |
| `p2` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L143">point.ts#L143</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .random <span class="signature">(b: Bounds): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `b` | Bounds |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L108">point.ts#L108</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .sum <span class="signature">(p1: SimplePoint, p2: SimplePoint): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p1` | SimplePoint |  |  |
| `p2` | SimplePoint |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L206">point.ts#L206</a></div>

## ORIGIN <span class="signature">: Point</span>

Default value: `...`

</div>