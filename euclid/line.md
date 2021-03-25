---
layout: page
nav_order: 9
parent: Euclid.js
---

# Line

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L13">line.ts#L13</a></div>

## <span class="pill">Class</span> Line

An infinite straight line that goes through two points.

Implements GeoShape

<div class="docs-item" markdown="1">

### constructor <span class="signature">(p1: Point, p2: Point): Line</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p1` | Point |  |  |
| `p2` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L15">line.ts#L15</a></div>

### <span class="pill">Property</span> .flag

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .p1 <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .p2 <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L14">line.ts#L14</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type <span class="signature">: string</span>

Default value: `'line'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L49">line.ts#L49</a></div>

### <span class="pill">Accessor</span> .angle <span class="signature">: number</span>

The angle formed between this line and the x-axis.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L44">line.ts#L44</a></div>

### <span class="pill">Accessor</span> .intercept <span class="signature">: number</span>

The y-axis intercept of this line.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L24">line.ts#L24</a></div>

### <span class="pill">Accessor</span> .length <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L29">line.ts#L29</a></div>

### <span class="pill">Accessor</span> .lengthSquared <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L34">line.ts#L34</a></div>

### <span class="pill">Accessor</span> .midpoint <span class="signature">: Point</span>

The midpoint of this line.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L76">line.ts#L76</a></div>

### <span class="pill">Accessor</span> .perpendicularBisector <span class="signature">: Line</span>

The perpendicular bisector of this line.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L59">line.ts#L59</a></div>

### <span class="pill">Accessor</span> .perpendicularVector <span class="signature">: Point</span>

The point representing the perpendicular vector of this line.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L39">line.ts#L39</a></div>

### <span class="pill">Accessor</span> .slope <span class="signature">: number</span>

The slope of this line.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L54">line.ts#L54</a></div>

### <span class="pill">Accessor</span> .unitVector <span class="signature">: Point</span>

The point representing a unit vector along this line.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L114">line.ts#L114</a></div>

### <span class="pill">Method</span> .at <span class="signature">(t: number): Point</span>

Gets the point at a specific offset along the line (opposite of .offset()).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `t` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L109">line.ts#L109</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(p: SimplePoint, tolerance: number): boolean</span>

Checks if a point p lies on this line.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |
| `tolerance` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L81">line.ts#L81</a></div>

### <span class="pill">Method</span> .distanceSquared <span class="signature">(p: Point): number</span>

Squared distance between a point and a line.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L147">line.ts#L147</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(other: Line, tolerance: number): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `other` | Line |  |  |
| `tolerance` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L19">line.ts#L19</a></div>

### <span class="pill">Method</span> .make <span class="signature">(p1: Point, p2: Point): Line</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p1` | Point |  |  |
| `p2` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L89">line.ts#L89</a></div>

### <span class="pill">Method</span> .offset <span class="signature">(p: SimplePoint): number</span>

Signed distance along the line (opposite of .at()).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L65">line.ts#L65</a></div>

### <span class="pill">Method</span> .parallel <span class="signature">(p: Point): Line</span>

Finds the line parallel to this one, going though point p.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L71">line.ts#L71</a></div>

### <span class="pill">Method</span> .perpendicular <span class="signature">(p: Point): Line</span>

Finds the line perpendicular to this one, going though point p.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L96">line.ts#L96</a></div>

### <span class="pill">Method</span> .project <span class="signature">(p: SimplePoint): Point</span>

Projects a point `p` onto this line.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L131">line.ts#L131</a></div>

### <span class="pill">Method</span> .reflect <span class="signature">(l: Line): Line</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `l` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L125">line.ts#L125</a></div>

### <span class="pill">Method</span> .rotate <span class="signature">(a: number, c: Point): Line</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `c` | Point | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L135">line.ts#L135</a></div>

### <span class="pill">Method</span> .scale <span class="signature">(sx: number, sy: number): Line</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sx` | number |  |  |
| `sy` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L139">line.ts#L139</a></div>

### <span class="pill">Method</span> .shift <span class="signature">(x: number, y: number): Line</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `y` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L101">line.ts#L101</a></div>

### <span class="pill">Method</span> .side <span class="signature">(p: SimplePoint, tolerance: number): number</span>

Returns which side of this line a point p is on (or 0 on the line).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |
| `tolerance` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L120">line.ts#L120</a></div>

### <span class="pill">Method</span> .transform <span class="signature">(m: TransformMatrix): Line</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `m` | TransformMatrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L143">line.ts#L143</a></div>

### <span class="pill">Method</span> .translate <span class="signature">(p: Point): Line</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L156">line.ts#L156</a></div>

## <span class="pill">Class</span> Ray

An infinite ray defined by an endpoint and another point on the ray.

Extends Line

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L157">line.ts#L157</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'ray'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L163">line.ts#L163</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(other: Ray, tolerance: number): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `other` | Ray |  |  |
| `tolerance` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L159">line.ts#L159</a></div>

### <span class="pill">Method</span> .make <span class="signature">(p1: Point, p2: Point): Ray</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p1` | Point |  |  |
| `p2` | Point |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L171">line.ts#L171</a></div>

## <span class="pill">Class</span> Segment

A finite line segment defined by its two endpoints.

Extends Line

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L172">line.ts#L172</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'segment'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L174">line.ts#L174</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(p: Point, tolerance: number): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |
| `tolerance` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L197">line.ts#L197</a></div>

### <span class="pill">Method</span> .contract <span class="signature">(x: number): Segment</span>

Contracts (or expands) a line by a specific ratio.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L201">line.ts#L201</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(other: Segment, tolerance: number, oriented: boolean): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `other` | Segment |  |  |
| `tolerance` | number |  |  |
| `oriented` | boolean | false |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L184">line.ts#L184</a></div>

### <span class="pill">Method</span> .make <span class="signature">(p1: Point, p2: Point): Segment</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p1` | Point |  |  |
| `p2` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L188">line.ts#L188</a></div>

### <span class="pill">Method</span> .project <span class="signature">(p: SimplePoint): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


</div>

</div>