---
layout: page
nav_order: 2
parent: Euclid.js
---

# Arc

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L14">arc.ts#L14</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L15">arc.ts#L15</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type <span class="signature">: string</span>

Default value: `'arc'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L48">arc.ts#L48</a></div>

### <span class="pill">Accessor</span> .center <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L25">arc.ts#L25</a></div>

### <span class="pill">Accessor</span> .end <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L43">arc.ts#L43</a></div>

### <span class="pill">Accessor</span> .major <span class="signature">: this</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L38">arc.ts#L38</a></div>

### <span class="pill">Accessor</span> .minor <span class="signature">: this</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L21">arc.ts#L21</a></div>

### <span class="pill">Accessor</span> .radius <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L29">arc.ts#L29</a></div>

### <span class="pill">Accessor</span> .startAngle <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L65">arc.ts#L65</a></div>

### <span class="pill">Method</span> .at <span class="signature">(t: number): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `t` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L69">arc.ts#L69</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(p: Point): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L33">arc.ts#L33</a></div>

### <span class="pill">Method</span> .contract <span class="signature">(p: number): Arc</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L106">arc.ts#L106</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(): boolean</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L54">arc.ts#L54</a></div>

### <span class="pill">Method</span> .project <span class="signature">(p: Point): Point</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L87">arc.ts#L87</a></div>

### <span class="pill">Method</span> .reflect <span class="signature">(l: Line): Arc</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `l` | Line |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L81">arc.ts#L81</a></div>

### <span class="pill">Method</span> .rotate <span class="signature">(a: number, c: Point): Arc</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | number |  |  |
| `c` | Point | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L92">arc.ts#L92</a></div>

### <span class="pill">Method</span> .scale <span class="signature">(sx: number, sy: number): Arc</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sx` | number |  |  |
| `sy` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L97">arc.ts#L97</a></div>

### <span class="pill">Method</span> .shift <span class="signature">(x: number, y: number): Arc</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `y` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L76">arc.ts#L76</a></div>

### <span class="pill">Method</span> .transform <span class="signature">(m: TransformMatrix): Arc</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `m` | TransformMatrix |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L102">arc.ts#L102</a></div>

### <span class="pill">Method</span> .translate <span class="signature">(p: Point): Arc</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L112">arc.ts#L112</a></div>

## <span class="pill">Class</span> Sector

Extends Arc

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/arc.ts#L113">arc.ts#L113</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'sector'`

</div>

</div>