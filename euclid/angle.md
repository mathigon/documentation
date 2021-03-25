---
layout: page
nav_order: 1
parent: Euclid.js
---

# Angle

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L29">angle.ts#L29</a></div>

## <span class="pill">Class</span> Angle

A 2-dimensional angle class, defined by three points.

Implements GeoShape

<div class="docs-item" markdown="1">

### constructor <span class="signature">(a: Point, b: Point, c: Point): Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | Point |  |  |
| `b` | Point |  |  |
| `c` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .a <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .b <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .c <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L30">angle.ts#L30</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'angle'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L88">angle.ts#L88</a></div>

### <span class="pill">Accessor</span> .arc <span class="signature">: Arc</span>

Returns the Arc element corresponding to this angle.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L66">angle.ts#L66</a></div>

### <span class="pill">Accessor</span> .bisector

The bisector of this angle.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L55">angle.ts#L55</a></div>

### <span class="pill">Accessor</span> .deg <span class="signature">: number</span>

The size, in degrees, of this angle.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L60">angle.ts#L60</a></div>

### <span class="pill">Accessor</span> .isRight <span class="signature">: boolean</span>

Checks if this angle is right-angled.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L45">angle.ts#L45</a></div>

### <span class="pill">Accessor</span> .rad <span class="signature">: number</span>

The size, in radians, of this angle.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L83">angle.ts#L83</a></div>

### <span class="pill">Accessor</span> .sup <span class="signature">: Angle</span>

Returns the smaller one of this and its supplementary angle.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L99">angle.ts#L99</a></div>

### <span class="pill">Method</span> .at <span class="signature">(): Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L103">angle.ts#L103</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(): boolean</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L134">angle.ts#L134</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(_a: Angle): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_a` | Angle |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L95">angle.ts#L95</a></div>

### <span class="pill">Method</span> .project <span class="signature">(): Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L118">angle.ts#L118</a></div>

### <span class="pill">Method</span> .reflect <span class="signature">(l: Line): Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `l` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L113">angle.ts#L113</a></div>

### <span class="pill">Method</span> .rotate <span class="signature">(a: number, c: SimplePoint): Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `c` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L122">angle.ts#L122</a></div>

### <span class="pill">Method</span> .scale <span class="signature">(sx: number, sy: number): Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sx` | number |  |  |
| `sy` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L126">angle.ts#L126</a></div>

### <span class="pill">Method</span> .shift <span class="signature">(x: number, y: number): Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `y` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L109">angle.ts#L109</a></div>

### <span class="pill">Method</span> .transform <span class="signature">(m: TransformMatrix): Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `m` | TransformMatrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L130">angle.ts#L130</a></div>

### <span class="pill">Method</span> .translate <span class="signature">(p: Point): Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L34">angle.ts#L34</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .fromDegrees <span class="signature">(val: number): Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `val` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L38">angle.ts#L38</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .fromRadians <span class="signature">(val: number): Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `val` | number |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L18">angle.ts#L18</a></div>

## toDeg <span class="signature">(n: number): number</span>

Convert angles in radians to degrees.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L23">angle.ts#L23</a></div>

## toRad <span class="signature">(n: number): number</span>

Convert angles in degrees to radians.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |


</div>