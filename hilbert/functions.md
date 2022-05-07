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

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L107">functions.ts#L107</a></div>

### <span class="pill">Accessor</span> .functions

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L98">functions.ts#L98</a></div>

### <span class="pill">Accessor</span> .simplified <span class="signature">: this</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L63">elements.ts#L63</a></div>

### <span class="pill">Accessor</span> .unknowns

Returns a list of all variables used in the expression (excluding defined constants).

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L103">functions.ts#L103</a></div>

### <span class="pill">Accessor</span> .variables

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L93">functions.ts#L93</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L68">functions.ts#L68</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L89">functions.ts#L89</a></div>

### <span class="pill">Method</span> .substitute <span class="signature">(vars: ExprMap): ExprFunction</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | ExprMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L136">functions.ts#L136</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(custom: MathMLMap): string</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `custom` | MathMLMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L111">functions.ts#L111</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L216">functions.ts#L216</a></div>

### <span class="pill">Method</span> .toVoice <span class="signature">(custom: MathMLMap): string</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `custom` | MathMLMap | ... |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L251">functions.ts#L251</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L277">functions.ts#L277</a></div>

### <span class="pill">Accessor</span> .functions

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L269">functions.ts#L269</a></div>

### <span class="pill">Accessor</span> .simplified <span class="signature">: ExprElement</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L63">elements.ts#L63</a></div>

### <span class="pill">Accessor</span> .unknowns

Returns a list of all variables used in the expression (excluding defined constants).

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L273">functions.ts#L273</a></div>

### <span class="pill">Accessor</span> .variables

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L293">functions.ts#L293</a></div>

### <span class="pill">Method</span> .collapse <span class="signature">(): ExprElement</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L257">functions.ts#L257</a></div>

### <span class="pill">Method</span> .evaluate <span class="signature">(vars: VarMap): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | VarMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L261">functions.ts#L261</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L265">functions.ts#L265</a></div>

### <span class="pill">Method</span> .substitute <span class="signature">(vars: ExprMap): ExprElement</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | ExprMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L285">functions.ts#L285</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(custom: MathMLMap): string</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `custom` | MathMLMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L281">functions.ts#L281</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/functions.ts#L289">functions.ts#L289</a></div>

### <span class="pill">Method</span> .toVoice <span class="signature">(custom: MathMLMap): string</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `custom` | MathMLMap | ... |  |


</div>

</div>