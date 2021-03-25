---
layout: page
nav_order: 1
parent: Hilbert.js
---

# Elements

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L26">elements.ts#L26</a></div>

## <span class="pill">Class</span> ExprElement

Maths Expression

<div class="docs-item" markdown="1">

### constructor <span class="signature">(): ExprElement</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L49">elements.ts#L49</a></div>

### <span class="pill">Accessor</span> .functions

Returns a list of all functions called by the expression.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L39">elements.ts#L39</a></div>

### <span class="pill">Accessor</span> .simplified <span class="signature">: ExprElement</span>

Returns the simplest mathematically equivalent expression.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L44">elements.ts#L44</a></div>

### <span class="pill">Accessor</span> .variables

Returns a list of all variables used in the expression.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L54">elements.ts#L54</a></div>

### <span class="pill">Method</span> .collapse <span class="signature">(): ExprElement</span>

Collapses all terms into functions.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L29">elements.ts#L29</a></div>

### <span class="pill">Method</span> .evaluate <span class="signature">(_vars: VarMap): number</span>

Evaluates an expression using a given map of variables and functions.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_vars` | VarMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L34">elements.ts#L34</a></div>

### <span class="pill">Method</span> .substitute <span class="signature">(_vars: ExprMap): ExprElement</span>

Substitutes a new expression for a variable.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_vars` | ExprMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L69">elements.ts#L69</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(_custom: MathMLMap): string</span>

Converts the expression to a MathML string.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_custom` | MathMLMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L59">elements.ts#L59</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

Converts the expression to a plain text string.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L64">elements.ts#L64</a></div>

### <span class="pill">Method</span> .toVoice <span class="signature">(_custom: MathMLMap): string</span>

Converts the expression to a MathML string.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_custom` | MathMLMap | ... |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L99">elements.ts#L99</a></div>

## <span class="pill">Class</span> ExprIdentifier

Extends ExprElement

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .i <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L105">elements.ts#L105</a></div>

### <span class="pill">Method</span> .evaluate <span class="signature">(vars: VarMap): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | VarMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L116">elements.ts#L116</a></div>

### <span class="pill">Method</span> .substitute <span class="signature">(vars: ExprMap): ExprElement</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | ExprMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L111">elements.ts#L111</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L124">elements.ts#L124</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L128">elements.ts#L128</a></div>

### <span class="pill">Method</span> .toVoice <span class="signature">(): string</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L76">elements.ts#L76</a></div>

## <span class="pill">Class</span> ExprNumber

Extends ExprElement

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .n <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L82">elements.ts#L82</a></div>

### <span class="pill">Method</span> .evaluate <span class="signature">(): number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L94">elements.ts#L94</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L86">elements.ts#L86</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L90">elements.ts#L90</a></div>

### <span class="pill">Method</span> .toVoice <span class="signature">(): string</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L171">elements.ts#L171</a></div>

## <span class="pill">Class</span> ExprOperator

Extends ExprElement

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .o <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L189">elements.ts#L189</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L177">elements.ts#L177</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L181">elements.ts#L181</a></div>

### <span class="pill">Method</span> .toVoice <span class="signature">(): string</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L160">elements.ts#L160</a></div>

## <span class="pill">Class</span> ExprSpace

Extends ExprElement

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L166">elements.ts#L166</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L162">elements.ts#L162</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L136">elements.ts#L136</a></div>

## <span class="pill">Class</span> ExprString

Extends ExprElement

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .s <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L142">elements.ts#L142</a></div>

### <span class="pill">Method</span> .evaluate <span class="signature">(vars: VarMap): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | VarMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L155">elements.ts#L155</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L147">elements.ts#L147</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L151">elements.ts#L151</a></div>

### <span class="pill">Method</span> .toVoice <span class="signature">(): string</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L12">elements.ts#L12</a></div>

## <span class="pill">Interface</span> MathMLArgument

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L14">elements.ts#L14</a></div>

### <span class="pill">Property</span> .toString

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L13">elements.ts#L13</a></div>

### <span class="pill">Property</span> .val <span class="signature">: ExprElement</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L17">elements.ts#L17</a></div>

## <span class="pill">Type alias</span> CustomFunction

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L19">elements.ts#L19</a></div>

## <span class="pill">Type alias</span> ExprMap <span class="signature">: Obj&lt;ExprElement&gt;</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L20">elements.ts#L20</a></div>

## <span class="pill">Type alias</span> MathMLMap <span class="signature">: Obj&lt;(args: Array&lt;MathMLArgument&gt;): string&gt;</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/elements.ts#L18">elements.ts#L18</a></div>

## <span class="pill">Type alias</span> VarMap <span class="signature">: Obj&lt;number|CustomFunction&gt;</span>

</div>