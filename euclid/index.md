---
layout: page
nav_order: 9
parent: Euclid.js
---

# Index

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L89">angle.ts#L89</a></div>

### <span class="pill">Accessor</span> .arc <span class="signature">: Arc</span>

Returns the Arc element corresponding to this angle.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L67">angle.ts#L67</a></div>

### <span class="pill">Accessor</span> .bisector

The bisector of this angle.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L56">angle.ts#L56</a></div>

### <span class="pill">Accessor</span> .deg <span class="signature">: number</span>

The size, in degrees, of this angle.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L61">angle.ts#L61</a></div>

### <span class="pill">Accessor</span> .isRight <span class="signature">: boolean</span>

Checks if this angle is right-angled.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L46">angle.ts#L46</a></div>

### <span class="pill">Accessor</span> .rad <span class="signature">: number</span>

The size, in radians, of this angle.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L96">angle.ts#L96</a></div>

### <span class="pill">Accessor</span> .radius <span class="signature">: number</span>

Radius of the arc or sector representing this angle.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L84">angle.ts#L84</a></div>

### <span class="pill">Accessor</span> .sup <span class="signature">: Angle</span>

Returns the smaller one of this and its supplementary angle.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L128">angle.ts#L128</a></div>

### <span class="pill">Method</span> .at <span class="signature">(): Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L136">angle.ts#L136</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(p: Point): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L167">angle.ts#L167</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(_a: Angle): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_a` | Angle |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L132">angle.ts#L132</a></div>

### <span class="pill">Method</span> .offset <span class="signature">(): number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L124">angle.ts#L124</a></div>

### <span class="pill">Method</span> .project <span class="signature">(p: Point): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L151">angle.ts#L151</a></div>

### <span class="pill">Method</span> .reflect <span class="signature">(l: Line): Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `l` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L146">angle.ts#L146</a></div>

### <span class="pill">Method</span> .rotate <span class="signature">(a: number, c: SimplePoint): Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `c` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L155">angle.ts#L155</a></div>

### <span class="pill">Method</span> .scale <span class="signature">(sx: number, sy: number): Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sx` | number |  |  |
| `sy` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L101">angle.ts#L101</a></div>

### <span class="pill">Method</span> .shape <span class="signature">(filled: boolean, radius: number, round: boolean): Arc|Polygon</span>

Shape object that can be used to draw this angle.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `filled` | boolean | true |  |
| `radius` | number |  |  |
| `round` | boolean |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L159">angle.ts#L159</a></div>

### <span class="pill">Method</span> .shift <span class="signature">(x: number, y: number): Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `y` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L172">angle.ts#L172</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L142">angle.ts#L142</a></div>

### <span class="pill">Method</span> .transform <span class="signature">(m: TransformMatrix): Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `m` | TransformMatrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/angle.ts#L163">angle.ts#L163</a></div>

### <span class="pill">Method</span> .translate <span class="signature">(p: SimplePoint): Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


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

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L16">arc.ts#L16</a></div>

## <span class="pill">Class</span> Arc

An arc segment of a circle, with given center, start point and angle.

Implements GeoShape

<div class="docs-item" markdown="1">

### constructor <span class="signature">(c: Point, start: Point, angle: number): Arc</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c` | Point |  |  |
| `start` | Point |  |  |
| `angle` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .angle <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .c <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .start <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L17">arc.ts#L17</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type <span class="signature">: string</span>

Default value: `'arc'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L53">arc.ts#L53</a></div>

### <span class="pill">Accessor</span> .center <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L23">arc.ts#L23</a></div>

### <span class="pill">Accessor</span> .circle <span class="signature">: Circle</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L31">arc.ts#L31</a></div>

### <span class="pill">Accessor</span> .end <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L48">arc.ts#L48</a></div>

### <span class="pill">Accessor</span> .major <span class="signature">: this</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L43">arc.ts#L43</a></div>

### <span class="pill">Accessor</span> .minor <span class="signature">: this</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L27">arc.ts#L27</a></div>

### <span class="pill">Accessor</span> .radius <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L35">arc.ts#L35</a></div>

### <span class="pill">Accessor</span> .startAngle <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L70">arc.ts#L70</a></div>

### <span class="pill">Method</span> .at <span class="signature">(t: number): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `t` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L78">arc.ts#L78</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(p: Point): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L39">arc.ts#L39</a></div>

### <span class="pill">Method</span> .contract <span class="signature">(p: number): Arc</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L116">arc.ts#L116</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(): boolean</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L74">arc.ts#L74</a></div>

### <span class="pill">Method</span> .offset <span class="signature">(p: Point): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L59">arc.ts#L59</a></div>

### <span class="pill">Method</span> .project <span class="signature">(p: Point): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L97">arc.ts#L97</a></div>

### <span class="pill">Method</span> .reflect <span class="signature">(l: Line): Arc</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `l` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L91">arc.ts#L91</a></div>

### <span class="pill">Method</span> .rotate <span class="signature">(a: number, c: Point): Arc</span>

Rotates this arc by a given angle (in radians), optionally around point `c`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `c` | Point | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L102">arc.ts#L102</a></div>

### <span class="pill">Method</span> .scale <span class="signature">(sx: number, sy: number): Arc</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sx` | number |  |  |
| `sy` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L107">arc.ts#L107</a></div>

### <span class="pill">Method</span> .shift <span class="signature">(x: number, y: number): Arc</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `y` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L121">arc.ts#L121</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L85">arc.ts#L85</a></div>

### <span class="pill">Method</span> .transform <span class="signature">(m: TransformMatrix): Arc</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `m` | TransformMatrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L112">arc.ts#L112</a></div>

### <span class="pill">Method</span> .translate <span class="signature">(p: SimplePoint): Arc</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L12">bounds.ts#L12</a></div>

## <span class="pill">Class</span> Bounds

<div class="docs-item" markdown="1">

### constructor <span class="signature">(xMin: number, xMax: number, yMin: number, yMax: number): Bounds</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `xMin` | number |  |  |
| `xMax` | number |  |  |
| `yMin` | number |  |  |
| `yMax` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Property</span> .xMax <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Property</span> .xMin <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Property</span> .yMax <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Property</span> .yMin <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L54">bounds.ts#L54</a></div>

### <span class="pill">Accessor</span> .center <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L34">bounds.ts#L34</a></div>

### <span class="pill">Accessor</span> .dx <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L38">bounds.ts#L38</a></div>

### <span class="pill">Accessor</span> .dy <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L58">bounds.ts#L58</a></div>

### <span class="pill">Accessor</span> .flip <span class="signature">: Bounds</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L50">bounds.ts#L50</a></div>

### <span class="pill">Accessor</span> .rect <span class="signature">: Rectangle</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L42">bounds.ts#L42</a></div>

### <span class="pill">Accessor</span> .xRange

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L46">bounds.ts#L46</a></div>

### <span class="pill">Accessor</span> .yRange

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L18">bounds.ts#L18</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(p: Point): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L22">bounds.ts#L22</a></div>

### <span class="pill">Method</span> .containsX <span class="signature">(p: Point): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L26">bounds.ts#L26</a></div>

### <span class="pill">Method</span> .containsY <span class="signature">(p: Point): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L30">bounds.ts#L30</a></div>

### <span class="pill">Method</span> .resize <span class="signature">(dx: number, dy: number): Bounds</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `dx` | number |  |  |
| `dy` | number |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L16">circle.ts#L16</a></div>

## <span class="pill">Class</span> Circle

A circle with a given center and radius.

Implements GeoShape

<div class="docs-item" markdown="1">

### constructor <span class="signature">(c: Point, r: number): Circle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c` | Point | ... |  |
| `r` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .c <span class="signature">: Point</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .r <span class="signature">: number</span>

Default value: `1`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L17">circle.ts#L17</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'circle'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L31">circle.ts#L31</a></div>

### <span class="pill">Accessor</span> .arc <span class="signature">: Arc</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L27">circle.ts#L27</a></div>

### <span class="pill">Accessor</span> .area <span class="signature">: number</span>

The area of this circle.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L22">circle.ts#L22</a></div>

### <span class="pill">Accessor</span> .circumference <span class="signature">: number</span>

The length of the circumference of this circle.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L57">circle.ts#L57</a></div>

### <span class="pill">Method</span> .at <span class="signature">(t: number): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `t` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L42">circle.ts#L42</a></div>

### <span class="pill">Method</span> .collision <span class="signature">(r: Rectangle): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `r` | Rectangle |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L66">circle.ts#L66</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(p: Point): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L98">circle.ts#L98</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(other: Circle, tolerance: number): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `other` | Circle |  |  |
| `tolerance` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L62">circle.ts#L62</a></div>

### <span class="pill">Method</span> .offset <span class="signature">(p: Point): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L52">circle.ts#L52</a></div>

### <span class="pill">Method</span> .project <span class="signature">(p: Point): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L82">circle.ts#L82</a></div>

### <span class="pill">Method</span> .reflect <span class="signature">(l: Line): Circle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `l` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L77">circle.ts#L77</a></div>

### <span class="pill">Method</span> .rotate <span class="signature">(a: number, c: Point): Circle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `c` | Point | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L86">circle.ts#L86</a></div>

### <span class="pill">Method</span> .scale <span class="signature">(sx: number, sy: number): Circle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sx` | number |  |  |
| `sy` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L90">circle.ts#L90</a></div>

### <span class="pill">Method</span> .shift <span class="signature">(x: number, y: number): Circle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `y` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L36">circle.ts#L36</a></div>

### <span class="pill">Method</span> .tangentAt <span class="signature">(t: number): Line</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `t` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L102">circle.ts#L102</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L72">circle.ts#L72</a></div>

### <span class="pill">Method</span> .transform <span class="signature">(m: TransformMatrix): Circle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `m` | TransformMatrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/circle.ts#L94">circle.ts#L94</a></div>

### <span class="pill">Method</span> .translate <span class="signature">(p: SimplePoint): Circle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


</div>

</div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L126">line.ts#L126</a></div>

### <span class="pill">Method</span> .rotate <span class="signature">(a: number, c: Point): Line</span>

Rotates this line by a given angle (in radians), optionally around point `c`.

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L153">line.ts#L153</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

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

### <span class="pill">Method</span> .translate <span class="signature">(p: SimplePoint): Line</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


</div>

</div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L213">point.ts#L213</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L187">point.ts#L187</a></div>

### <span class="pill">Method</span> .reflect <span class="signature">(l: Line): Point</span>

Reflects this point across a line l.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `l` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L172">point.ts#L172</a></div>

### <span class="pill">Method</span> .rotate <span class="signature">(angle: number, c: SimplePoint): Point</span>

Rotates this point by a given angle (in radians) around point `c`.

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L201">point.ts#L201</a></div>

### <span class="pill">Method</span> .scale <span class="signature">(sx: number, sy: number): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sx` | number |  |  |
| `sy` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L205">point.ts#L205</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L218">point.ts#L218</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L165">point.ts#L165</a></div>

### <span class="pill">Method</span> .transform <span class="signature">(m: TransformMatrix): Point</span>

Transforms this point using a 2x3 matrix m.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `m` | TransformMatrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L209">point.ts#L209</a></div>

### <span class="pill">Method</span> .translate <span class="signature">(p: SimplePoint): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


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

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L154">point.ts#L154</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .colinear <span class="signature">(p1: SimplePoint, p2: SimplePoint, p3: SimplePoint, tolerance: number): boolean</span>

Check if p1, p2 and p3 lie on a straight line.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p1` | SimplePoint |  |  |
| `p2` | SimplePoint |  |  |
| `p3` | SimplePoint |  |  |
| `tolerance` | number |  |  |


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

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L149">point.ts#L149</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .equals <span class="signature">(p1: SimplePoint, p2: SimplePoint, precision: number): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p1` | SimplePoint |  |  |
| `p2` | SimplePoint |  |  |
| `precision` | number |  |  |


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

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L160">line.ts#L160</a></div>

## <span class="pill">Class</span> Ray

An infinite ray defined by an endpoint and another point on the ray.

Extends Line

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L161">line.ts#L161</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'ray'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L172">line.ts#L172</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(p: Point, tolerance: number): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |
| `tolerance` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L167">line.ts#L167</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(other: Ray, tolerance: number): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `other` | Ray |  |  |
| `tolerance` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L163">line.ts#L163</a></div>

### <span class="pill">Method</span> .make <span class="signature">(p1: Point, p2: Point): Ray</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p1` | Point |  |  |
| `p2` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L178">line.ts#L178</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

</div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L98">rectangle.ts#L98</a></div>

### <span class="pill">Method</span> .at <span class="signature">(t: number): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `t` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L71">rectangle.ts#L71</a></div>

### <span class="pill">Method</span> .collision <span class="signature">(r: Rectangle): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `r` | Rectangle |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L82">rectangle.ts#L82</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(p: Point, tolerance: number): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |
| `tolerance` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L134">rectangle.ts#L134</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(_other: Polygon): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_other` | Polygon |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L102">rectangle.ts#L102</a></div>

### <span class="pill">Method</span> .offset <span class="signature">(p: Point): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L76">rectangle.ts#L76</a></div>

### <span class="pill">Method</span> .padding <span class="signature">(top: number, right: number, bottom: number, left: number): Rectangle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `top` | number |  |  |
| `right` | number |  |  |
| `bottom` | number |  |  |
| `left` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L87">rectangle.ts#L87</a></div>

### <span class="pill">Method</span> .project <span class="signature">(p: SimplePoint): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L118">rectangle.ts#L118</a></div>

### <span class="pill">Method</span> .reflect <span class="signature">(l: Line): Polygon</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `l` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L113">rectangle.ts#L113</a></div>

### <span class="pill">Method</span> .rotate <span class="signature">(a: number, c: Point): Polygon|Rectangle</span>

Rotates this rectangle by a given angle (in radians), optionally around point `c`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `c` | Point | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L122">rectangle.ts#L122</a></div>

### <span class="pill">Method</span> .scale <span class="signature">(sx: number, sy: number): Rectangle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sx` | number |  |  |
| `sy` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L126">rectangle.ts#L126</a></div>

### <span class="pill">Method</span> .shift <span class="signature">(x: number, y: number): Rectangle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `y` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L139">rectangle.ts#L139</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L108">rectangle.ts#L108</a></div>

### <span class="pill">Method</span> .transform <span class="signature">(m: TransformMatrix): Polygon</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `m` | TransformMatrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/rectangle.ts#L130">rectangle.ts#L130</a></div>

### <span class="pill">Method</span> .translate <span class="signature">(p: SimplePoint): Rectangle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


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

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L126">arc.ts#L126</a></div>

## <span class="pill">Class</span> Sector

Extends Arc

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L127">arc.ts#L127</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'sector'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L129">arc.ts#L129</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(p: Point): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L133">arc.ts#L133</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L185">line.ts#L185</a></div>

## <span class="pill">Class</span> Segment

A finite line segment defined by its two endpoints.

Extends Line

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L186">line.ts#L186</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'segment'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L188">line.ts#L188</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(p: Point, tolerance: number): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |
| `tolerance` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L211">line.ts#L211</a></div>

### <span class="pill">Method</span> .contract <span class="signature">(x: number): Segment</span>

Contracts (or expands) a line by a specific ratio.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L215">line.ts#L215</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(other: Segment, tolerance: number, oriented: boolean): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `other` | Segment |  |  |
| `tolerance` | number |  |  |
| `oriented` | boolean | false |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L198">line.ts#L198</a></div>

### <span class="pill">Method</span> .make <span class="signature">(p1: Point, p2: Point): Segment</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p1` | Point |  |  |
| `p2` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L202">line.ts#L202</a></div>

### <span class="pill">Method</span> .project <span class="signature">(p: SimplePoint): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/line.ts#L222">line.ts#L222</a></div>

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

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/draw-canvas.ts#L11">draw-canvas.ts#L11</a></div>

## <span class="pill">Interface</span> CanvasDrawingOptions

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/draw-canvas.ts#L12">draw-canvas.ts#L12</a></div>

### <span class="pill">Property</span> .fill

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/draw-canvas.ts#L16">draw-canvas.ts#L16</a></div>

### <span class="pill">Property</span> .lineCap

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/draw-canvas.ts#L17">draw-canvas.ts#L17</a></div>

### <span class="pill">Property</span> .lineJoin

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/draw-canvas.ts#L13">draw-canvas.ts#L13</a></div>

### <span class="pill">Property</span> .opacity

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/draw-canvas.ts#L14">draw-canvas.ts#L14</a></div>

### <span class="pill">Property</span> .stroke

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/draw-canvas.ts#L15">draw-canvas.ts#L15</a></div>

### <span class="pill">Property</span> .strokeWidth

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/utilities.ts#L16">utilities.ts#L16</a></div>

## <span class="pill">Interface</span> GeoElement

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/utilities.ts#L17">utilities.ts#L17</a></div>

### <span class="pill">Property</span> .type <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .equals <span class="signature">(other: GeoElement, tolerance: number, oriented: boolean): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `other` | GeoElement |  |  |
| `tolerance` | number |  |  |
| `oriented` | boolean |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .reflect <span class="signature">(l: Line): GeoElement</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `l` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .rotate <span class="signature">(angle: number, center: SimplePoint): GeoElement</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `angle` | number |  |  |
| `center` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .scale <span class="signature">(sx: number, sy: number): GeoElement</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sx` | number |  |  |
| `sy` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .shift <span class="signature">(x: number, y: number): GeoElement</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `y` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .transform <span class="signature">(matrix: TransformMatrix): GeoElement</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `matrix` | TransformMatrix |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .translate <span class="signature">(p: Point): GeoElement</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/utilities.ts#L28">utilities.ts#L28</a></div>

## <span class="pill">Interface</span> GeoShape

Extends GeoElement

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .at <span class="signature">(t: number): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `t` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .contains <span class="signature">(p: Point, tolerance: number): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |
| `tolerance` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .offset <span class="signature">(p: Point): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .project <span class="signature">(p: Point): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .reflect <span class="signature">(l: Line): GeoShape</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `l` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .rotate <span class="signature">(angle: number, center: SimplePoint): GeoShape</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `angle` | number |  |  |
| `center` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .scale <span class="signature">(sx: number, sy: number): GeoShape</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sx` | number |  |  |
| `sy` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .shift <span class="signature">(x: number, y: number): GeoShape</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `y` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .translate <span class="signature">(p: SimplePoint): GeoShape</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/draw-svg.ts#L20">draw-svg.ts#L20</a></div>

## <span class="pill">Interface</span> SVGDrawingOptions

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/draw-svg.ts#L25">draw-svg.ts#L25</a></div>

### <span class="pill">Property</span> .arrows

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/draw-svg.ts#L26">draw-svg.ts#L26</a></div>

### <span class="pill">Property</span> .box

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/draw-svg.ts#L23">draw-svg.ts#L23</a></div>

### <span class="pill">Property</span> .fill

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/draw-svg.ts#L24">draw-svg.ts#L24</a></div>

### <span class="pill">Property</span> .mark

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/draw-svg.ts#L21">draw-svg.ts#L21</a></div>

### <span class="pill">Property</span> .round

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/draw-svg.ts#L22">draw-svg.ts#L22</a></div>

### <span class="pill">Property</span> .size

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/draw-svg.ts#L18">draw-svg.ts#L18</a></div>

## <span class="pill">Type alias</span> LineArrow

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/draw-svg.ts#L17">draw-svg.ts#L17</a></div>

## <span class="pill">Type alias</span> LineMark

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/utilities.ts#L14">utilities.ts#L14</a></div>

## <span class="pill">Type alias</span> SimplePoint

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/utilities.ts#L12">utilities.ts#L12</a></div>

## <span class="pill">Type alias</span> TransformMatrix

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/point.ts#L223">point.ts#L223</a></div>

## ORIGIN <span class="signature">: Point</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/utilities.ts#L41">utilities.ts#L41</a></div>

## TWO_PI <span class="signature">: number</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/boolean.ts#L633">boolean.ts#L633</a></div>

## difference <span class="signature">(p1: MultiPolygon, p2: MultiPolygon): Array&lt;Array&lt;Point&gt;&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p1` | MultiPolygon |  |  |
| `p2` | MultiPolygon |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/draw-canvas.ts#L24">draw-canvas.ts#L24</a></div>

## drawCanvas <span class="signature">(ctx: CanvasRenderingContext2D, obj: GeoElement, options: CanvasDrawingOptions): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ctx` | CanvasRenderingContext2D |  |  |
| `obj` | GeoElement |  |  |
| `options` | CanvasDrawingOptions | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/draw-svg.ts#L111">draw-svg.ts#L111</a></div>

## drawSVG <span class="signature">(obj: GeoElement, options: SVGDrawingOptions): string</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `obj` | GeoElement |  |  |
| `options` | SVGDrawingOptions | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/boolean.ts#L632">boolean.ts#L632</a></div>

## intersect <span class="signature">(p1: MultiPolygon, p2: MultiPolygon): Array&lt;Array&lt;Point&gt;&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p1` | MultiPolygon |  |  |
| `p2` | MultiPolygon |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/intersection.ts#L134">intersection.ts#L134</a></div>

## intersections <span class="signature">(elements: Array&lt;GeoShape&gt;): Array&lt;Point&gt;</span>

Returns the intersection of two or more geometry objects.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `elements` | Array&lt;GeoShape&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/types.ts#L66">types.ts#L66</a></div>

## isAngle <span class="signature">(shape: GeoElement): shape is Angle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `shape` | GeoElement |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/types.ts#L58">types.ts#L58</a></div>

## isArc <span class="signature">(shape: GeoElement): shape is Arc</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `shape` | GeoElement |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/types.ts#L50">types.ts#L50</a></div>

## isCircle <span class="signature">(shape: GeoElement): shape is Circle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `shape` | GeoElement |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/types.ts#L54">types.ts#L54</a></div>

## isEllipse <span class="signature">(shape: GeoElement): shape is Ellipse</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `shape` | GeoElement |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/types.ts#L38">types.ts#L38</a></div>

## isLine <span class="signature">(shape: GeoElement): shape is Line</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `shape` | GeoElement |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/types.ts#L34">types.ts#L34</a></div>

## isLineLike <span class="signature">(shape: GeoElement): shape is Line|Segment|Ray</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `shape` | GeoElement |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/types.ts#L70">types.ts#L70</a></div>

## isPoint <span class="signature">(shape: GeoElement): shape is Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `shape` | GeoElement |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/types.ts#L22">types.ts#L22</a></div>

## isPolygon <span class="signature">(shape: GeoElement): shape is Polygon</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `shape` | GeoElement |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/types.ts#L18">types.ts#L18</a></div>

## isPolygonLike <span class="signature">(shape: GeoElement): shape is Polygon|Rectangle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `shape` | GeoElement |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/types.ts#L26">types.ts#L26</a></div>

## isPolyline <span class="signature">(shape: GeoElement): shape is Polyline</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `shape` | GeoElement |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/types.ts#L42">types.ts#L42</a></div>

## isRay <span class="signature">(shape: GeoElement): shape is Ray</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `shape` | GeoElement |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/types.ts#L30">types.ts#L30</a></div>

## isRectangle <span class="signature">(shape: GeoElement): shape is Rectangle</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `shape` | GeoElement |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/types.ts#L62">types.ts#L62</a></div>

## isSector <span class="signature">(shape: GeoElement): shape is Sector</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `shape` | GeoElement |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/types.ts#L46">types.ts#L46</a></div>

## isSegment <span class="signature">(shape: GeoElement): shape is Segment</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `shape` | GeoElement |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/utilities.ts#L43">utilities.ts#L43</a></div>

## rad <span class="signature">(p: SimplePoint, c: SimplePoint): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |
| `c` | SimplePoint |  |  |


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

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/boolean.ts#L631">boolean.ts#L631</a></div>

## union <span class="signature">(p1: MultiPolygon, p2: MultiPolygon): Array&lt;Array&lt;Point&gt;&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p1` | MultiPolygon |  |  |
| `p2` | MultiPolygon |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/boolean.ts#L634">boolean.ts#L634</a></div>

## xor <span class="signature">(p1: MultiPolygon, p2: MultiPolygon): Array&lt;Array&lt;Point&gt;&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p1` | MultiPolygon |  |  |
| `p2` | MultiPolygon |  |  |


</div>