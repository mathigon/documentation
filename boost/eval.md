---
layout: page
nav_order: 7
parent: Boost.js
---

# Eval

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/eval.ts#L470">eval.ts#L470</a></div>

## compile <span class="signature">(expr: string): (context: {}): undefined|T</span>

Compiles a JS expression into a function that can be evaluated with context.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `expr` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/eval.ts#L486">eval.ts#L486</a></div>

## compileString <span class="signature">(expr: string): (vars: any): string</span>

Converts an expression string into an executable JS function. It will replace
all `${x}` type expressions and evaluate them based on a context.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `expr` | string |  |  |


</div>