---
layout: page
nav_order: 3
parent: Core.js
---

# Colors

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L43">colors.ts#L43</a></div>

## <span class="pill">Class</span> Color

Color generation and conversion class.

<div class="docs-item" markdown="1">

### constructor <span class="signature">(r: number, g: number, b: number, a: number): Color</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `r` | number |  |  |
| `g` | number |  |  |
| `b` | number |  |  |
| `a` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Property</span> .a <span class="signature">: number</span>

Default value: `1`

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Property</span> .b <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Property</span> .g <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Property</span> .r <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L62">colors.ts#L62</a></div>

### <span class="pill">Accessor</span> .brightness <span class="signature">: number</span>

Get the brightness of this color.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L88">colors.ts#L88</a></div>

### <span class="pill">Accessor</span> .chroma <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L49">colors.ts#L49</a></div>

### <span class="pill">Accessor</span> .hex <span class="signature">: string</span>

Converts this color to a hex string.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L67">colors.ts#L67</a></div>

### <span class="pill">Accessor</span> .hsl

Converts this color to an HSL array.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L56">colors.ts#L56</a></div>

### <span class="pill">Accessor</span> .rgb <span class="signature">: string</span>

Converts this color to an rgba string.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L97">colors.ts#L97</a></div>

### <span class="pill">Method</span> .copy <span class="signature">(): Color</span>

Creates a copy of this color.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L92">colors.ts#L92</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L103">colors.ts#L103</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .from <span class="signature">(color: string|Color): Color</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | string|Color |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L117">colors.ts#L117</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .fromHex <span class="signature">(hex: string): Color</span>

Creates a Color instance from a hex string.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `hex` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L131">colors.ts#L131</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .fromHsl <span class="signature">(h: number, s: number, l: number): Color</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `h` | number |  |  |
| `s` | number |  |  |
| `l` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L108">colors.ts#L108</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .fromRgb <span class="signature">(color: string): Color</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L156">colors.ts#L156</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .gradient <span class="signature">(colors: Array&lt;string|Color&gt;, steps: number): Array&lt;Color&gt;</span>

Generates a rainbow gradient with a given number of steps.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `colors` | Array&lt;string|Color&gt; |  |  |
| `steps` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L167">colors.ts#L167</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .mix <span class="signature">(c1: string|Color, c2: string|Color, p: number): Color</span>

Linearly interpolates two colors or hex strings.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c1` | string|Color |  |  |
| `c2` | string|Color |  |  |
| `p` | number | 0.5 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L179">colors.ts#L179</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .mixMany <span class="signature">(colors: Array&lt;Color&gt;, weights: Array&lt;number&gt;): Color</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `colors` | Array&lt;Color&gt; |  |  |
| `weights` | Array&lt;number&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L151">colors.ts#L151</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .rainbow <span class="signature">(steps: number): Array&lt;Color&gt;</span>

Generates a rainbow gradient with a given number of steps.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `steps` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/colors.ts#L160">colors.ts#L160</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .shades <span class="signature">(color: string|Color, steps: number, range: number): Array&lt;Color&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | string|Color |  |  |
| `steps` | number |  |  |
| `range` | number | 0.5 |  |


</div>

</div>