---
layout: page
nav_order: 2
parent: Euclid.js
---

# Arc

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