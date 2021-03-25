---
layout: page
nav_order: 11
parent: Euclid.js
---

# Polygon

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L17">polygon.ts#L17</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L19">polygon.ts#L19</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .points

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L18">polygon.ts#L18</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type <span class="signature">: string</span>

Default value: `'polygon'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L50">polygon.ts#L50</a></div>

### <span class="pill">Accessor</span> .area <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L54">polygon.ts#L54</a></div>

### <span class="pill">Accessor</span> .centroid <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L25">polygon.ts#L25</a></div>

### <span class="pill">Accessor</span> .circumference <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L67">polygon.ts#L67</a></div>

### <span class="pill">Accessor</span> .edges

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L83">polygon.ts#L83</a></div>

### <span class="pill">Accessor</span> .oriented <span class="signature">: this</span>

The oriented version of this polygon (vertices in clockwise order).

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L76">polygon.ts#L76</a></div>

### <span class="pill">Accessor</span> .radius <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L38">polygon.ts#L38</a></div>

### <span class="pill">Accessor</span> .signedArea <span class="signature">: number</span>

The (signed) area of this polygon. The result is positive if the vertices
are ordered clockwise, and negative otherwise.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L234">polygon.ts#L234</a></div>

### <span class="pill">Method</span> .at <span class="signature">(t: number): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `t` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L219">polygon.ts#L219</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(p: Point): boolean</span>

Checks if a point p lies inside this polygon, by using a ray-casting
algorithm and calculating the number of intersections.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L90">polygon.ts#L90</a></div>

### <span class="pill">Method</span> .cut <span class="signature">(line: Line): Array&lt;Polygon&gt;</span>

Cut this polygon along a line, and return multiple parts.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `line` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L285">polygon.ts#L285</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(_other: Polygon): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_other` | Polygon |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L238">polygon.ts#L238</a></div>

### <span class="pill">Method</span> .project <span class="signature">(p: Point): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L266">polygon.ts#L266</a></div>

### <span class="pill">Method</span> .reflect <span class="signature">(line: Line): Polygon</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `line` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L260">polygon.ts#L260</a></div>

### <span class="pill">Method</span> .rotate <span class="signature">(a: number, center: Point): Polygon</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `center` | Point | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L271">polygon.ts#L271</a></div>

### <span class="pill">Method</span> .scale <span class="signature">(sx: number, sy: number): Polygon</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sx` | number |  |  |
| `sy` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L276">polygon.ts#L276</a></div>

### <span class="pill">Method</span> .shift <span class="signature">(x: number, y: number): Polygon</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `y` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L256">polygon.ts#L256</a></div>

### <span class="pill">Method</span> .transform <span class="signature">(m: TransformMatrix): Polygon</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `m` | TransformMatrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L281">polygon.ts#L281</a></div>

### <span class="pill">Method</span> .translate <span class="signature">(p: Point): Polygon</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L181">polygon.ts#L181</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .collision <span class="signature">(p1: Polygon, p2: Polygon): boolean</span>

Checks if two polygons p1 and p2 collide.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p1` | Polygon |  |  |
| `p2` | Polygon |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L206">polygon.ts#L206</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .interpolate <span class="signature">(p1: Polygon, p2: Polygon, t: number): Polygon</span>

Interpolates the points of two polygons

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p1` | Polygon |  |  |
| `p2` | Polygon |  |  |
| `t` | number | 0.5 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L197">polygon.ts#L197</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .regular <span class="signature">(n: number, radius: number): Polygon</span>

Creates a regular polygon.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |
| `radius` | number | 1 |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L293">polygon.ts#L293</a></div>

## <span class="pill">Class</span> Polyline

A polyline defined by its vertex points.

Extends Polygon

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L294">polygon.ts#L294</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'polyline'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L296">polygon.ts#L296</a></div>

### <span class="pill">Accessor</span> .length <span class="signature">: number</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L316">polygon.ts#L316</a></div>

## <span class="pill">Class</span> Triangle

A triangle defined by its three vertices.

Extends Polygon

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L317">polygon.ts#L317</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'triangle'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L319">polygon.ts#L319</a></div>

### <span class="pill">Accessor</span> .circumcircle <span class="signature">: Circle</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L338">polygon.ts#L338</a></div>

### <span class="pill">Accessor</span> .incircle <span class="signature">: Circle</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/polygon.ts#L353">polygon.ts#L353</a></div>

### <span class="pill">Accessor</span> .orthocenter <span class="signature">: Point</span>

</div>

</div>