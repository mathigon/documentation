---
layout: page
nav_order: 13
parent: Boost.js
---

# Svg

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/svg.ts#L11">svg.ts#L11</a></div>

## <span class="pill">Type alias</span> PathCommand

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/svg.ts#L129">svg.ts#L129</a></div>

## cleanSVG <span class="signature">(node: El): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `node` | El |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/svg.ts#L157">svg.ts#L157</a></div>

## copySVGStyles <span class="signature">(source: El, copy: El, isHTML: boolean): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | El |  |  |
| `copy` | El |  |  |
| `isHTML` | boolean | false |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/svg.ts#L65">svg.ts#L65</a></div>

## parsePath <span class="signature">(d: string): Array&lt;Point&gt;</span>

Return all points on an SVG path. Essentially, this turns a curved path into
a polygon with just the joins/corners selected.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `d` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/svg.ts#L18">svg.ts#L18</a></div>

## pathCommands <span class="signature">(path: string): Array&lt;PathCommand&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `path` | string |  |  |


</div>