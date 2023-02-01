---
layout: page
nav_order: 1
parent: Euclid.js
---

# Angle

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L30">angle.ts#L30</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L31">angle.ts#L31</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'angle'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L94">angle.ts#L94</a></div>

### <span class="pill">Accessor</span> .arc <span class="signature">: Arc</span>

Returns the Arc element corresponding to this angle.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L72">angle.ts#L72</a></div>

### <span class="pill">Accessor</span> .bisector

The bisector of this angle.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L61">angle.ts#L61</a></div>

### <span class="pill">Accessor</span> .deg <span class="signature">: number</span>

The size, in degrees, of this angle.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L66">angle.ts#L66</a></div>

### <span class="pill">Accessor</span> .isRight <span class="signature">: boolean</span>

Checks if this angle is right-angled.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L51">angle.ts#L51</a></div>

### <span class="pill">Accessor</span> .rad <span class="signature">: number</span>

The size, in radians, of this angle.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L101">angle.ts#L101</a></div>

### <span class="pill">Accessor</span> .radius <span class="signature">: number</span>

Radius of the arc or sector representing this angle.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L89">angle.ts#L89</a></div>

### <span class="pill">Accessor</span> .sup <span class="signature">: Angle</span>

Returns the smaller one of this and its supplementary angle.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L133">angle.ts#L133</a></div>

### <span class="pill">Method</span> .at <span class="signature">(): Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L141">angle.ts#L141</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(p: Point): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L172">angle.ts#L172</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(a: Angle, precision: number): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | Angle |  |  |
| `precision` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L137">angle.ts#L137</a></div>

### <span class="pill">Method</span> .offset <span class="signature">(): number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L129">angle.ts#L129</a></div>

### <span class="pill">Method</span> .project <span class="signature">(p: Point): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L156">angle.ts#L156</a></div>

### <span class="pill">Method</span> .reflect <span class="signature">(l: Line): Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `l` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L151">angle.ts#L151</a></div>

### <span class="pill">Method</span> .rotate <span class="signature">(a: number, c: SimplePoint): Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `c` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L160">angle.ts#L160</a></div>

### <span class="pill">Method</span> .scale <span class="signature">(sx: number, sy: number): Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sx` | number |  |  |
| `sy` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L106">angle.ts#L106</a></div>

### <span class="pill">Method</span> .shape <span class="signature">(filled: boolean, radius: number, round: boolean): Arc|Polygon</span>

Shape object that can be used to draw this angle.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `filled` | boolean | true |  |
| `radius` | number |  |  |
| `round` | boolean |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L164">angle.ts#L164</a></div>

### <span class="pill">Method</span> .shift <span class="signature">(x: number, y: number): Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `y` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L176">angle.ts#L176</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L147">angle.ts#L147</a></div>

### <span class="pill">Method</span> .transform <span class="signature">(m: TransformMatrix): Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `m` | TransformMatrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L168">angle.ts#L168</a></div>

### <span class="pill">Method</span> .translate <span class="signature">(p: SimplePoint): Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L46">angle.ts#L46</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .equals <span class="signature">(a: Angle, b: Angle, precision: number): boolean</span>

Checks if `a` and `b` are roughly equivalent (by default, within one degree of eachother)

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | Angle |  |  |
| `b` | Angle |  |  |
| `precision` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L35">angle.ts#L35</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .fromDegrees <span class="signature">(val: number): Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `val` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L39">angle.ts#L39</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .fromRadians <span class="signature">(val: number): Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `val` | number |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L19">angle.ts#L19</a></div>

## toDeg <span class="signature">(n: number): number</span>

Convert angles in radians to degrees.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L24">angle.ts#L24</a></div>

## toRad <span class="signature">(n: number): number</span>

Convert angles in degrees to radians.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `n` | number |  |  |


</div>