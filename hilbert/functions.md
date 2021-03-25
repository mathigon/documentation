---
layout: page
nav_order: 4
parent: Hilbert.js
---

# Functions

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L41">functions.ts#L41</a></div>

## <span class="pill">Class</span> ExprFunction

Extends ExprElement

<div class="docs-item" markdown="1">

### constructor <span class="signature">(fn: string, args: Array&lt;ExprElement&gt;): ExprFunction</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | string |  |  |
| `args` | Array&lt;ExprElement&gt; | ... |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .args

Default value: `...`

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .fn <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L102">functions.ts#L102</a></div>

### <span class="pill">Accessor</span> .functions

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L93">functions.ts#L93</a></div>

### <span class="pill">Accessor</span> .simplified <span class="signature">: this</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L98">functions.ts#L98</a></div>

### <span class="pill">Accessor</span> .variables

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L88">functions.ts#L88</a></div>

### <span class="pill">Method</span> .collapse <span class="signature">(): ExprFunction|ExprElement</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L47">functions.ts#L47</a></div>

### <span class="pill">Method</span> .evaluate <span class="signature">(vars: VarMap): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | VarMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L84">functions.ts#L84</a></div>

### <span class="pill">Method</span> .substitute <span class="signature">(vars: ExprMap): ExprFunction</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | ExprMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L132">functions.ts#L132</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(custom: MathMLMap): string</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `custom` | MathMLMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L106">functions.ts#L106</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L213">functions.ts#L213</a></div>

### <span class="pill">Method</span> .toVoice <span class="signature">(custom: MathMLMap): string</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `custom` | MathMLMap | ... |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L248">functions.ts#L248</a></div>

## <span class="pill">Class</span> ExprTerm

Extends ExprElement

<div class="docs-item" markdown="1">

### constructor <span class="signature">(items: Array&lt;ExprElement&gt;): ExprTerm</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | Array&lt;ExprElement&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .items

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L270">functions.ts#L270</a></div>

### <span class="pill">Accessor</span> .functions

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L262">functions.ts#L262</a></div>

### <span class="pill">Accessor</span> .simplified <span class="signature">: ExprElement</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L266">functions.ts#L266</a></div>

### <span class="pill">Accessor</span> .variables

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L286">functions.ts#L286</a></div>

### <span class="pill">Method</span> .collapse <span class="signature">(): ExprElement</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L254">functions.ts#L254</a></div>

### <span class="pill">Method</span> .evaluate <span class="signature">(vars: VarMap): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | VarMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L258">functions.ts#L258</a></div>

### <span class="pill">Method</span> .substitute <span class="signature">(vars: ExprMap): ExprElement</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | ExprMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L278">functions.ts#L278</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(custom: MathMLMap): string</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `custom` | MathMLMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L274">functions.ts#L274</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L282">functions.ts#L282</a></div>

### <span class="pill">Method</span> .toVoice <span class="signature">(custom: MathMLMap): string</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `custom` | MathMLMap | ... |  |


</div>

</div>