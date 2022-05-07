---
layout: page
nav_order: 14
parent: Boost.js
---

# Thread

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/thread.ts#L15">thread.ts#L15</a></div>

## functionToWorker <span class="signature">(fn: (): any): string</span>

Converts a function into a WebWorker URL object that can be passed into
thread(). Note that `fn` has to be a single function with no external
references or bindings, so that it can be stringified using .toString().

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (): any |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/thread.ts#L26">thread.ts#L26</a></div>

## thread <span class="signature">(url: string|URL, data: any, timeout: number): Promise&lt;T&gt;</span>

Creates a new web worker, posts it a serializable data object, and returns
when the worker responds (or after a fixed timeout).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `url` | string|URL |  |  |
| `data` | any |  |  |
| `timeout` | number | 5000 |  |


</div>