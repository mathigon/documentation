---
layout: page
nav_order: 4
parent: Euclid.js
---

# Bounds

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L12">bounds.ts#L12</a></div>

## <span class="pill">Class</span> Bounds

<div class="docs-item" markdown="1">

### constructor <span class="signature">(xMin: number, xMax: number, yMin: number, yMax: number, errorHandling: swap|center): Bounds</span>

Use the `errorHandling` option to decide how to deal with cases where the
min and max values are in the wrong order.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `xMin` | number |  |  |
| `xMax` | number |  |  |
| `yMin` | number |  |  |
| `yMax` | number |  |  |
| `errorHandling` | swap|center |  |  |


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

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L69">bounds.ts#L69</a></div>

### <span class="pill">Accessor</span> .center <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L45">bounds.ts#L45</a></div>

### <span class="pill">Accessor</span> .dx <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L49">bounds.ts#L49</a></div>

### <span class="pill">Accessor</span> .dy <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L73">bounds.ts#L73</a></div>

### <span class="pill">Accessor</span> .flip <span class="signature">: Bounds</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L65">bounds.ts#L65</a></div>

### <span class="pill">Accessor</span> .rect <span class="signature">: Rectangle</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L53">bounds.ts#L53</a></div>

### <span class="pill">Accessor</span> .xRange

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L57">bounds.ts#L57</a></div>

### <span class="pill">Accessor</span> .yRange

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L29">bounds.ts#L29</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(p: Point): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L33">bounds.ts#L33</a></div>

### <span class="pill">Method</span> .containsX <span class="signature">(p: Point): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L37">bounds.ts#L37</a></div>

### <span class="pill">Method</span> .containsY <span class="signature">(p: Point): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L61">bounds.ts#L61</a></div>

### <span class="pill">Method</span> .extend <span class="signature">(top: number, right: number, bottom: number, left: number): Bounds</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `top` | number |  |  |
| `right` | number | ... |  |
| `bottom` | number | ... |  |
| `left` | number | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/euclid.js/tree/master/src/bounds.ts#L41">bounds.ts#L41</a></div>

### <span class="pill">Method</span> .resize <span class="signature">(dx: number, dy: number): Bounds</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `dx` | number |  |  |
| `dy` | number |  |  |


</div>

</div>