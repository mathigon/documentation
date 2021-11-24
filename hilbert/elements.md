---
layout: page
nav_order: 1
parent: Hilbert.js
---

# Elements

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L30">elements.ts#L30</a></div>

## <span class="pill">Class</span> ExprElement

Maths Expression

<div class="docs-item" markdown="1">

### constructor <span class="signature">(): ExprElement</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L73">elements.ts#L73</a></div>

### <span class="pill">Accessor</span> .functions

Returns a list of all functions called by the expression.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L58">elements.ts#L58</a></div>

### <span class="pill">Accessor</span> .simplified <span class="signature">: ExprElement</span>

Returns the simplest mathematically equivalent expression.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L63">elements.ts#L63</a></div>

### <span class="pill">Accessor</span> .unknowns

Returns a list of all variables used in the expression (excluding defined constants).

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L68">elements.ts#L68</a></div>

### <span class="pill">Accessor</span> .variables

Returns a list of all variables used in the expression (including defined constants).

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L78">elements.ts#L78</a></div>

### <span class="pill">Method</span> .collapse <span class="signature">(): ExprElement</span>

Collapses all terms into functions.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L33">elements.ts#L33</a></div>

### <span class="pill">Method</span> .evaluate <span class="signature">(_vars: VarMap, _privateNested: boolean): number</span>

Evaluates an expression using a given map of variables and functions.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_vars` | VarMap | ... |  |
| `_privateNested` | boolean |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L37">elements.ts#L37</a></div>

### <span class="pill">Method</span> .interval <span class="signature">(vars: VarMap, _privateNested: boolean): Interval</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | VarMap | ... |  |
| `_privateNested` | boolean |  |  |


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

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L42">elements.ts#L42</a></div>

### <span class="pill">Method</span> .substitute <span class="signature">(_vars: ExprMap): ExprElement</span>

Substitutes a new expression for a variable.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_vars` | ExprMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L93">elements.ts#L93</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(_custom: MathMLMap): string</span>

Converts the expression to a MathML string.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_custom` | MathMLMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L83">elements.ts#L83</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

Converts the expression to a plain text string.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L88">elements.ts#L88</a></div>

### <span class="pill">Method</span> .toVoice <span class="signature">(_custom: MathMLMap): string</span>

Converts the expression to a MathML string.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_custom` | MathMLMap | ... |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L148">elements.ts#L148</a></div>

## <span class="pill">Class</span> ExprIdentifier

Extends ExprElement

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .i <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L154">elements.ts#L154</a></div>

### <span class="pill">Method</span> .evaluate <span class="signature">(vars: VarMap, privateNested: boolean): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | VarMap | ... |  |
| `privateNested` | boolean |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L158">elements.ts#L158</a></div>

### <span class="pill">Method</span> .interval <span class="signature">(vars: VarMap, privateNested: boolean): Interval</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | VarMap | ... |  |
| `privateNested` | boolean |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L167">elements.ts#L167</a></div>

### <span class="pill">Method</span> .substitute <span class="signature">(vars: ExprMap): ExprElement</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | ExprMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L162">elements.ts#L162</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L175">elements.ts#L175</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L179">elements.ts#L179</a></div>

### <span class="pill">Method</span> .toVoice <span class="signature">(): string</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L125">elements.ts#L125</a></div>

## <span class="pill">Class</span> ExprNumber

Extends ExprElement

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .n <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L131">elements.ts#L131</a></div>

### <span class="pill">Method</span> .evaluate <span class="signature">(): number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L143">elements.ts#L143</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L135">elements.ts#L135</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L139">elements.ts#L139</a></div>

### <span class="pill">Method</span> .toVoice <span class="signature">(): string</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L221">elements.ts#L221</a></div>

## <span class="pill">Class</span> ExprOperator

Extends ExprElement

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .o <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L239">elements.ts#L239</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L227">elements.ts#L227</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L231">elements.ts#L231</a></div>

### <span class="pill">Method</span> .toVoice <span class="signature">(): string</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L210">elements.ts#L210</a></div>

## <span class="pill">Class</span> ExprSpace

Extends ExprElement

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L216">elements.ts#L216</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L212">elements.ts#L212</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L187">elements.ts#L187</a></div>

## <span class="pill">Class</span> ExprString

Extends ExprElement

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .s <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L193">elements.ts#L193</a></div>

### <span class="pill">Method</span> .evaluate <span class="signature">(vars: VarMap, privateNested: boolean): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | VarMap | ... |  |
| `privateNested` | boolean |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L205">elements.ts#L205</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L197">elements.ts#L197</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L201">elements.ts#L201</a></div>

### <span class="pill">Method</span> .toVoice <span class="signature">(): string</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L13">elements.ts#L13</a></div>

## <span class="pill">Interface</span> MathMLArgument

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L15">elements.ts#L15</a></div>

### <span class="pill">Property</span> .toString

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L14">elements.ts#L14</a></div>

### <span class="pill">Property</span> .val <span class="signature">: ExprElement</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L18">elements.ts#L18</a></div>

## <span class="pill">Type alias</span> CustomFunction

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L20">elements.ts#L20</a></div>

## <span class="pill">Type alias</span> ExprMap <span class="signature">: Record&lt;string, ExprElement&gt;</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L21">elements.ts#L21</a></div>

## <span class="pill">Type alias</span> MathMLMap <span class="signature">: Record&lt;string, (args: Array&lt;MathMLArgument&gt;): string&gt;</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L19">elements.ts#L19</a></div>

## <span class="pill">Type alias</span> VarMap <span class="signature">: Record&lt;string, number|string|Interval|ExprElement|CustomFunction&gt;</span>

</div>