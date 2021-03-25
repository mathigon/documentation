---
layout: page
nav_order: 2
parent: Hilbert.js
---

# Errors

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/errors.ts#L11">hilbert.js/src/errors.ts#L11</a></div>

## <span class="pill">Class</span> ExprError

Expression Error Class

Extends Error

<div class="docs-item" markdown="1">

### constructor <span class="signature">(name: string, message: string): ExprError</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string |  |  |
| `message` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/documentation/node_modules/typescript/lib/lib.es5.d.ts#L974">documentation/node_modules/typescript/lib/lib.es5.d.ts#L974</a></div>

### <span class="pill">Property</span> .message <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/documentation/node_modules/typescript/lib/lib.es5.d.ts#L973">documentation/node_modules/typescript/lib/lib.es5.d.ts#L973</a></div>

### <span class="pill">Property</span> .name <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/node_modules/@types/node/globals.d.ts#L11">hilbert.js/node_modules/@types/node/globals.d.ts#L11</a></div>

### <span class="pill">Property</span> .prepareStackTrace

Optional override for formatting stack traces

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/documentation/node_modules/typescript/lib/lib.es5.d.ts#L975">documentation/node_modules/typescript/lib/lib.es5.d.ts#L975</a></div>

### <span class="pill">Property</span> .stack

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/node_modules/@types/node/globals.d.ts#L13">hilbert.js/node_modules/@types/node/globals.d.ts#L13</a></div>

### <span class="pill">Property</span> .stackTraceLimit <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .captureStackTrace <span class="signature">(targetObject: object, constructorOpt: Function): void</span>

Create .stack property on a target object

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `targetObject` | object |  |  |
| `constructorOpt` | Function |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/errors.ts#L37">hilbert.js/src/errors.ts#L37</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .conflictingBrackets <span class="signature">(x: string): ExprError</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/errors.ts#L53">hilbert.js/src/errors.ts#L53</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .consecutiveOperators <span class="signature">(x: string, y: string): ExprError</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | string |  |  |
| `y` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/errors.ts#L49">hilbert.js/src/errors.ts#L49</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .endOperator <span class="signature">(x: ExprElement): ExprError</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | ExprElement |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/errors.ts#L33">hilbert.js/src/errors.ts#L33</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .invalidCharacter <span class="signature">(x: string): ExprError</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/errors.ts#L58">hilbert.js/src/errors.ts#L58</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .invalidExpression <span class="signature">(): ExprError</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/errors.ts#L45">hilbert.js/src/errors.ts#L45</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .startOperator <span class="signature">(x: ExprElement): ExprError</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | ExprElement |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/errors.ts#L41">hilbert.js/src/errors.ts#L41</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .unclosedBracket <span class="signature">(x: string): ExprError</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/errors.ts#L25">hilbert.js/src/errors.ts#L25</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .undefinedFunction <span class="signature">(x: string): ExprError</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/errors.ts#L21">hilbert.js/src/errors.ts#L21</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .undefinedVariable <span class="signature">(x: string): ExprError</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | string |  |  |


</div>

</div>