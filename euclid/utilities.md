---
layout: page
nav_order: 16
parent: Euclid.js
---

# Utilities

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/utilities.ts#L14">utilities.ts#L14</a></div>

## <span class="pill">Type alias</span> SimplePoint

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/utilities.ts#L12">utilities.ts#L12</a></div>

## <span class="pill">Type alias</span> TransformMatrix

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/utilities.ts#L41">utilities.ts#L41</a></div>

## TWO_PI <span class="signature">: number</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/utilities.ts#L49">utilities.ts#L49</a></div>

## findClosest <span class="signature">(p: Point, items: Array&lt;GeoShape&gt;): undefined|[Point, number]</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |
| `items` | Array&lt;GeoShape&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/utilities.ts#L43">utilities.ts#L43</a></div>

## rad <span class="signature">(p: SimplePoint, c: SimplePoint): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |
| `c` | SimplePoint |  |  |


</div>