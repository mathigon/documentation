---
layout: page
nav_order: 11
parent: Boost.js
---

# Observable

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/observable.ts#L22">observable.ts#L22</a></div>

## <span class="pill">Type alias</span> Observable

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/observable.ts#L33">observable.ts#L33</a></div>

## batch <span class="signature">(callback: (): void): void</span>

Batch multiple observable changes together into a single callback.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callback` | (): void |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/observable.ts#L45">observable.ts#L45</a></div>

## observe <span class="signature">(state: T, parentModel: any): Observable&lt;T&gt;</span>

Convert object to an observable Proxy with .watch() callbacks.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `state` | T |  |  |
| `parentModel` | any |  |  |


</div>