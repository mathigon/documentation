---
layout: page
nav_order: 5
parent: Hilbert.js
---

# Functions

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L42">functions.ts#L42</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L94">functions.ts#L94</a></div>

### <span class="pill">Accessor</span> .functions

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L85">functions.ts#L85</a></div>

### <span class="pill">Accessor</span> .simplified <span class="signature">: this</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L63">elements.ts#L63</a></div>

### <span class="pill">Accessor</span> .unknowns

Returns a list of all variables used in the expression (excluding defined constants).

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L90">functions.ts#L90</a></div>

### <span class="pill">Accessor</span> .variables

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L80">functions.ts#L80</a></div>

### <span class="pill">Method</span> .collapse <span class="signature">(): ExprFunction|ExprElement</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L48">functions.ts#L48</a></div>

### <span class="pill">Method</span> .evaluate <span class="signature">(vars: VarMap): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | VarMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L62">functions.ts#L62</a></div>

### <span class="pill">Method</span> .interval <span class="signature">(vars: VarMap): Interval</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | VarMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L51">elements.ts#L51</a></div>

### <span class="pill">Method</span> .recursiveSubstitute <span class="signature">(vars: ExprMap): ExprElement</span>

Recursively substitutes a new expression for a variable.
NOTE: This function does not test for cyclical dependencies, which could
lead to an infinite loop. You have to manually validate expressions first!

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | ExprMap |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L76">functions.ts#L76</a></div>

### <span class="pill">Method</span> .substitute <span class="signature">(vars: ExprMap): ExprFunction</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | ExprMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L123">functions.ts#L123</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(custom: MathMLMap): string</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `custom` | MathMLMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L98">functions.ts#L98</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L203">functions.ts#L203</a></div>

### <span class="pill">Method</span> .toVoice <span class="signature">(custom: MathMLMap): string</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `custom` | MathMLMap | ... |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L238">functions.ts#L238</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L264">functions.ts#L264</a></div>

### <span class="pill">Accessor</span> .functions

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L256">functions.ts#L256</a></div>

### <span class="pill">Accessor</span> .simplified <span class="signature">: ExprElement</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L63">elements.ts#L63</a></div>

### <span class="pill">Accessor</span> .unknowns

Returns a list of all variables used in the expression (excluding defined constants).

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L260">functions.ts#L260</a></div>

### <span class="pill">Accessor</span> .variables

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L280">functions.ts#L280</a></div>

### <span class="pill">Method</span> .collapse <span class="signature">(): ExprElement</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L244">functions.ts#L244</a></div>

### <span class="pill">Method</span> .evaluate <span class="signature">(vars: VarMap): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | VarMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L248">functions.ts#L248</a></div>

### <span class="pill">Method</span> .interval <span class="signature">(vars: VarMap): Interval</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | VarMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L51">elements.ts#L51</a></div>

### <span class="pill">Method</span> .recursiveSubstitute <span class="signature">(vars: ExprMap): ExprElement</span>

Recursively substitutes a new expression for a variable.
NOTE: This function does not test for cyclical dependencies, which could
lead to an infinite loop. You have to manually validate expressions first!

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | ExprMap |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L252">functions.ts#L252</a></div>

### <span class="pill">Method</span> .substitute <span class="signature">(vars: ExprMap): ExprElement</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | ExprMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L272">functions.ts#L272</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(custom: MathMLMap): string</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `custom` | MathMLMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L268">functions.ts#L268</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L276">functions.ts#L276</a></div>

### <span class="pill">Method</span> .toVoice <span class="signature">(custom: MathMLMap): string</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `custom` | MathMLMap | ... |  |


</div>

</div>