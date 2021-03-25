---
layout: page
nav_order: 1
parent: Boost.js
---

# Ajax

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/ajax.ts#L140">ajax.ts#L140</a></div>

## deferredPost <span class="signature">(url: string, data: PostData): void</span>

Utility function to throttle repeated POST requests. A request to the same
URL will be made at most every 5s, and the corresponding data objects will
be deep-merged.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `url` | string |  |  |
| `data` | PostData |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/ajax.ts#L44">ajax.ts#L44</a></div>

## fromQueryString <span class="signature">(str: string): Obj&lt;string&gt;</span>

Converts an HTML query string to JSON object.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `str` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/ajax.ts#L92">ajax.ts#L92</a></div>

## loadImage <span class="signature">(url: string, credentials: boolean): Promise&lt;HTMLImageElement&gt;</span>

Asynchronously loads an Image.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `url` | string |  |  |
| `credentials` | boolean | false |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/ajax.ts#L81">ajax.ts#L81</a></div>

## loadScript <span class="signature">(src: string): Promise&lt;unknown&gt;</span>

Asynchronously loads and executes a JS script.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `src` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/ajax.ts#L63">ajax.ts#L63</a></div>

## post <span class="signature">(url: string, data: PostData|FormData): Promise&lt;string&gt;</span>

Asynchronously loads a resource using a POST request. This utility function
automatically form-encodes JSON data and adds a CSRF header.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `url` | string |  |  |
| `data` | PostData|FormData |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/ajax.ts#L22">ajax.ts#L22</a></div>

## toQueryString <span class="signature">(data: PostData): string</span>

Converts a JSON object to an HTML query string.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | PostData |  |  |


</div>