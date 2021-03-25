---
layout: page
nav_order: 2
parent: Core.js
---

# Cache

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/cache.ts#L8">cache.ts#L8</a></div>

## <span class="pill">Class</span> Cache

A basic LRU cache implementation.

<div class="docs-item" markdown="1">

### constructor <span class="signature">(maxSize: number): Cache&lt;T&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `maxSize` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/cache.ts#L10">cache.ts#L10</a></div>

### <span class="pill">Property</span> .list

Default value: `...`

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .maxSize <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/cache.ts#L9">cache.ts#L9</a></div>

### <span class="pill">Property</span> .store <span class="signature">: Map&lt;string, {i: number, val: T}&gt;</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/cache.ts#L18">cache.ts#L18</a></div>

### <span class="pill">Method</span> .get <span class="signature">(a: string): undefined|T</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/cache.ts#L44">cache.ts#L44</a></div>

### <span class="pill">Method</span> .getOrSet <span class="signature">(a: string, callback: (a: string): T): T</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | string |  |  |
| `callback` | (a: string): T |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/cache.ts#L14">cache.ts#L14</a></div>

### <span class="pill">Method</span> .has <span class="signature">(a: string): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/cache.ts#L24">cache.ts#L24</a></div>

### <span class="pill">Method</span> .set <span class="signature">(a: string, b: T): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | string |  |  |
| `b` | T |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/cache.ts#L53">cache.ts#L53</a></div>

### <span class="pill">Method</span> .touch <span class="signature">(a: string, item: {i: number, val: T}): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | string |  |  |
| `item` | {i: number, val: T} |  |  |


</div>

</div>