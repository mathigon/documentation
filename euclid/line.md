---
layout: page
nav_order: 11
parent: Euclid.js
---

# Line

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L14">line.ts#L14</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L16">line.ts#L16</a></div>

### <span class="pill">Property</span> .flag

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .p1 <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .p2 <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L15">line.ts#L15</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type <span class="signature">: string</span>

Default value: `'line'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L46">line.ts#L46</a></div>

### <span class="pill">Accessor</span> .angle <span class="signature">: number</span>

The angle formed between this line and the x-axis.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L41">line.ts#L41</a></div>

### <span class="pill">Accessor</span> .intercept <span class="signature">: number</span>

The y-axis intercept of this line.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L21">line.ts#L21</a></div>

### <span class="pill">Accessor</span> .length <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L26">line.ts#L26</a></div>

### <span class="pill">Accessor</span> .lengthSquared <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L83">line.ts#L83</a></div>

### <span class="pill">Accessor</span> .line <span class="signature">: Line</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L31">line.ts#L31</a></div>

### <span class="pill">Accessor</span> .midpoint <span class="signature">: Point</span>

The midpoint of this line.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L73">line.ts#L73</a></div>

### <span class="pill">Accessor</span> .perpendicularBisector <span class="signature">: Line</span>

The perpendicular bisector of this line.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L56">line.ts#L56</a></div>

### <span class="pill">Accessor</span> .perpendicularVector <span class="signature">: Point</span>

The point representing the perpendicular vector of this line.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L87">line.ts#L87</a></div>

### <span class="pill">Accessor</span> .ray <span class="signature">: Ray</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L91">line.ts#L91</a></div>

### <span class="pill">Accessor</span> .segment <span class="signature">: Segment</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L36">line.ts#L36</a></div>

### <span class="pill">Accessor</span> .slope <span class="signature">: number</span>

The slope of this line.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L51">line.ts#L51</a></div>

### <span class="pill">Accessor</span> .unitVector <span class="signature">: Point</span>

The point representing a unit vector along this line.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L123">line.ts#L123</a></div>

### <span class="pill">Method</span> .at <span class="signature">(t: number): Point</span>

Gets the point at a specific offset along the line (opposite of .offset()).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `t` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L118">line.ts#L118</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(p: SimplePoint, tolerance: number): boolean</span>

Checks if a point p lies on this line.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |
| `tolerance` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L78">line.ts#L78</a></div>

### <span class="pill">Method</span> .distanceSquared <span class="signature">(p: Point): number</span>

Squared distance between a point and a line.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L155">line.ts#L155</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(other: Line, tolerance: number): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `other` | Line |  |  |
| `tolerance` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L98">line.ts#L98</a></div>

### <span class="pill">Method</span> .offset <span class="signature">(p: SimplePoint): number</span>

Signed distance along the line (opposite of .at()).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L61">line.ts#L61</a></div>

### <span class="pill">Method</span> .parallel <span class="signature">(p: Point): Line</span>

Finds the line parallel to this one, going through point p.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L66">line.ts#L66</a></div>

### <span class="pill">Method</span> .perpendicular <span class="signature">(p: Point): Line</span>

Finds the line perpendicular to this one, going through point p.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L105">line.ts#L105</a></div>

### <span class="pill">Method</span> .project <span class="signature">(p: SimplePoint): Point</span>

Projects a point `p` onto this line.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L139">line.ts#L139</a></div>

### <span class="pill">Method</span> .reflect <span class="signature">(l: Line): Line</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `l` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L134">line.ts#L134</a></div>

### <span class="pill">Method</span> .rotate <span class="signature">(a: number, c: Point): Line</span>

Rotates this line by a given angle (in radians), optionally around point `c`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `c` | Point | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L143">line.ts#L143</a></div>

### <span class="pill">Method</span> .scale <span class="signature">(sx: number, sy: number): any</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sx` | number |  |  |
| `sy` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L147">line.ts#L147</a></div>

### <span class="pill">Method</span> .shift <span class="signature">(x: number, y: number): any</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `y` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L110">line.ts#L110</a></div>

### <span class="pill">Method</span> .side <span class="signature">(p: SimplePoint, tolerance: number): number</span>

Returns which side of this line a point p is on (or 0 on the line).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |
| `tolerance` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L161">line.ts#L161</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L129">line.ts#L129</a></div>

### <span class="pill">Method</span> .transform <span class="signature">(m: TransformMatrix): Line</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `m` | TransformMatrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L151">line.ts#L151</a></div>

### <span class="pill">Method</span> .translate <span class="signature">(p: SimplePoint): any</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L168">line.ts#L168</a></div>

## <span class="pill">Class</span> Ray

An infinite ray defined by an endpoint and another point on the ray.

Extends Line

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L169">line.ts#L169</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'ray'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L178">line.ts#L178</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(p: Point, tolerance: number): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |
| `tolerance` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L171">line.ts#L171</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(other: Ray, tolerance: number): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `other` | Ray |  |  |
| `tolerance` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L184">line.ts#L184</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L191">line.ts#L191</a></div>

## <span class="pill">Class</span> Segment

A finite line segment defined by its two endpoints.

Extends Line

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L192">line.ts#L192</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'segment'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L194">line.ts#L194</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(p: Point, tolerance: number): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |
| `tolerance` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L213">line.ts#L213</a></div>

### <span class="pill">Method</span> .contract <span class="signature">(x: number): Segment</span>

Contracts (or expands) a line by a specific ratio.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L217">line.ts#L217</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(other: Segment, tolerance: number, oriented: boolean): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `other` | Segment |  |  |
| `tolerance` | number |  |  |
| `oriented` | boolean | false |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L204">line.ts#L204</a></div>

### <span class="pill">Method</span> .project <span class="signature">(p: SimplePoint): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L224">line.ts#L224</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

</div>