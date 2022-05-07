---
layout: page
nav_order: 13
parent: Euclid.js
---

# Polygon

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L18">polygon.ts#L18</a></div>

## <span class="pill">Class</span> Polygon

A polygon defined by its vertex points.

Implements GeoShape

<div class="docs-item" markdown="1">

### constructor <span class="signature">(points: Array&lt;Point&gt;): Polygon</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `points` | Array&lt;Point&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L20">polygon.ts#L20</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .points

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L19">polygon.ts#L19</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type <span class="signature">: string</span>

Default value: `'polygon'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L51">polygon.ts#L51</a></div>

### <span class="pill">Accessor</span> .area <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L55">polygon.ts#L55</a></div>

### <span class="pill">Accessor</span> .centroid <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L26">polygon.ts#L26</a></div>

### <span class="pill">Accessor</span> .circumference <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L68">polygon.ts#L68</a></div>

### <span class="pill">Accessor</span> .edges

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L84">polygon.ts#L84</a></div>

### <span class="pill">Accessor</span> .oriented <span class="signature">: this</span>

The oriented version of this polygon (vertices in clockwise order).

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L77">polygon.ts#L77</a></div>

### <span class="pill">Accessor</span> .radius <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L39">polygon.ts#L39</a></div>

### <span class="pill">Accessor</span> .signedArea <span class="signature">: number</span>

The (signed) area of this polygon. The result is positive if the vertices
are ordered clockwise, and negative otherwise.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L196">polygon.ts#L196</a></div>

### <span class="pill">Method</span> .at <span class="signature">(t: number): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `t` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L225">polygon.ts#L225</a></div>

### <span class="pill">Method</span> .centerAt <span class="signature">(on: Point): Polygon</span>

Center this polygon on a given point or the origin

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `on` | Point | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L181">polygon.ts#L181</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(p: Point): boolean</span>

Checks if a point p lies inside this polygon, by using a ray-casting
algorithm and calculating the number of intersections.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L91">polygon.ts#L91</a></div>

### <span class="pill">Method</span> .cut <span class="signature">(line: Line): Array&lt;Polygon&gt;</span>

Cut this polygon along a line, and return multiple parts.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `line` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L261">polygon.ts#L261</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(other: Polygon, tolerance: number, oriented: boolean): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `other` | Polygon |  |  |
| `tolerance` | number |  |  |
| `oriented` | boolean |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L208">polygon.ts#L208</a></div>

### <span class="pill">Method</span> .offset <span class="signature">(p: Point): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L219">polygon.ts#L219</a></div>

### <span class="pill">Method</span> .project <span class="signature">(p: Point): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L242">polygon.ts#L242</a></div>

### <span class="pill">Method</span> .reflect <span class="signature">(line: Line): Polygon</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `line` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L236">polygon.ts#L236</a></div>

### <span class="pill">Method</span> .rotate <span class="signature">(a: number, center: Point): Polygon</span>

Rotates this polygon by a given angle (in radians), optionally around point `center`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `center` | Point | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L247">polygon.ts#L247</a></div>

### <span class="pill">Method</span> .scale <span class="signature">(sx: number, sy: number): Polygon</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sx` | number |  |  |
| `sy` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L252">polygon.ts#L252</a></div>

### <span class="pill">Method</span> .shift <span class="signature">(x: number, y: number): Polygon</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `y` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L277">polygon.ts#L277</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L231">polygon.ts#L231</a></div>

### <span class="pill">Method</span> .transform <span class="signature">(m: TransformMatrix): Polygon</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `m` | TransformMatrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L257">polygon.ts#L257</a></div>

### <span class="pill">Method</span> .translate <span class="signature">(p: SimplePoint): Polygon</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L105">polygon.ts#L105</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .collision <span class="signature">(p1: Polygon, p2: Polygon): boolean</span>

Checks if two polygons p1 and p2 collide.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p1` | Polygon |  |  |
| `p2` | Polygon |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L146">polygon.ts#L146</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .convexHull <span class="signature">(points: Array&lt;Point&gt;): Polygon</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `points` | Array&lt;Point&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L139">polygon.ts#L139</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .interpolate <span class="signature">(p1: Polygon, p2: Polygon, t: number): Polygon</span>

Interpolates the points of two polygons

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p1` | Polygon |  |  |
| `p2` | Polygon |  |  |
| `t` | number | 0.5 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L130">polygon.ts#L130</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .regular <span class="signature">(n: number, radius: number): Polygon</span>

Creates a regular polygon.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |
| `radius` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L120">polygon.ts#L120</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .union <span class="signature">(polygons: Array&lt;Polygon&gt;): Array&lt;Polygon&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `polygons` | Array&lt;Polygon&gt; |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L284">polygon.ts#L284</a></div>

## <span class="pill">Class</span> Polyline

A polyline defined by its vertex points.

Extends Polygon

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L285">polygon.ts#L285</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'polyline'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L291">polygon.ts#L291</a></div>

### <span class="pill">Accessor</span> .length <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L308">polygon.ts#L308</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L315">polygon.ts#L315</a></div>

## <span class="pill">Class</span> Triangle

A triangle defined by its three vertices.

Extends Polygon

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L316">polygon.ts#L316</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'triangle'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L318">polygon.ts#L318</a></div>

### <span class="pill">Accessor</span> .circumcircle

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L338">polygon.ts#L338</a></div>

### <span class="pill">Accessor</span> .incircle

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L353">polygon.ts#L353</a></div>

### <span class="pill">Accessor</span> .orthocenter <span class="signature">: Point</span>

</div>

</div>