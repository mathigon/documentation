---
layout: page
nav_order: 6
parent: Hilbert.js
---

# Index

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L30">hilbert.js/src/elements.ts#L30</a></div>

## <span class="pill">Class</span> ExprElement

Maths Expression

<div class="docs-item" markdown="1">

### constructor <span class="signature">(): ExprElement</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L73">hilbert.js/src/elements.ts#L73</a></div>

### <span class="pill">Accessor</span> .functions

Returns a list of all functions called by the expression.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L58">hilbert.js/src/elements.ts#L58</a></div>

### <span class="pill">Accessor</span> .simplified <span class="signature">: ExprElement</span>

Returns the simplest mathematically equivalent expression.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L63">hilbert.js/src/elements.ts#L63</a></div>

### <span class="pill">Accessor</span> .unknowns

Returns a list of all variables used in the expression (excluding defined constants).

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L68">hilbert.js/src/elements.ts#L68</a></div>

### <span class="pill">Accessor</span> .variables

Returns a list of all variables used in the expression (including defined constants).

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L78">hilbert.js/src/elements.ts#L78</a></div>

### <span class="pill">Method</span> .collapse <span class="signature">(): ExprElement</span>

Collapses all terms into functions.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L33">hilbert.js/src/elements.ts#L33</a></div>

### <span class="pill">Method</span> .evaluate <span class="signature">(_vars: VarMap, _privateNested: boolean): number</span>

Evaluates an expression using a given map of variables and functions.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_vars` | VarMap | ... |  |
| `_privateNested` | boolean |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L37">hilbert.js/src/elements.ts#L37</a></div>

### <span class="pill">Method</span> .interval <span class="signature">(vars: VarMap, _privateNested: boolean): Interval</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | VarMap | ... |  |
| `_privateNested` | boolean |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L51">hilbert.js/src/elements.ts#L51</a></div>

### <span class="pill">Method</span> .recursiveSubstitute <span class="signature">(vars: ExprMap): ExprElement</span>

Recursively substitutes a new expression for a variable.
NOTE: This function does not test for cyclical dependencies, which could
lead to an infinite loop. You have to manually validate expressions first!

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | ExprMap |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L42">hilbert.js/src/elements.ts#L42</a></div>

### <span class="pill">Method</span> .substitute <span class="signature">(_vars: ExprMap): ExprElement</span>

Substitutes a new expression for a variable.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_vars` | ExprMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L93">hilbert.js/src/elements.ts#L93</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(_custom: MathMLMap): string</span>

Converts the expression to a MathML string.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_custom` | MathMLMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L83">hilbert.js/src/elements.ts#L83</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

Converts the expression to a plain text string.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L88">hilbert.js/src/elements.ts#L88</a></div>

### <span class="pill">Method</span> .toVoice <span class="signature">(_custom: MathMLMap): string</span>

Converts the expression to a MathML string.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_custom` | MathMLMap | ... |  |


</div>

</div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/errors.ts#L45">hilbert.js/src/errors.ts#L45</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .conflictingBrackets <span class="signature">(x: string): ExprError</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/errors.ts#L61">hilbert.js/src/errors.ts#L61</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .consecutiveOperators <span class="signature">(x: string, y: string): ExprError</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | string |  |  |
| `y` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/errors.ts#L57">hilbert.js/src/errors.ts#L57</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .endOperator <span class="signature">(x: ExprElement): ExprError</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | ExprElement |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/errors.ts#L33">hilbert.js/src/errors.ts#L33</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .evalLoop <span class="signature">(x: string): ExprError</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/errors.ts#L41">hilbert.js/src/errors.ts#L41</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .invalidCharacter <span class="signature">(x: string): ExprError</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/errors.ts#L66">hilbert.js/src/errors.ts#L66</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .invalidExpression <span class="signature">(): ExprError</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/errors.ts#L53">hilbert.js/src/errors.ts#L53</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .startOperator <span class="signature">(x: ExprElement): ExprError</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | ExprElement |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/errors.ts#L29">hilbert.js/src/errors.ts#L29</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .uncallableExpression <span class="signature">(x: string): ExprError</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/errors.ts#L49">hilbert.js/src/errors.ts#L49</a></div>

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

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/functions.ts#L42">hilbert.js/src/functions.ts#L42</a></div>

## <span class="pill">Class</span> ExprFunction

Extends ExprElement

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .args

Default value: `...`

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .fn <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/functions.ts#L93">hilbert.js/src/functions.ts#L93</a></div>

### <span class="pill">Method</span> .collapse <span class="signature">(): ExprElement|ExprFunction</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/functions.ts#L48">hilbert.js/src/functions.ts#L48</a></div>

### <span class="pill">Method</span> .evaluate <span class="signature">(vars: VarMap): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | VarMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/functions.ts#L68">hilbert.js/src/functions.ts#L68</a></div>

### <span class="pill">Method</span> .interval <span class="signature">(vars: VarMap): Interval</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | VarMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/functions.ts#L89">hilbert.js/src/functions.ts#L89</a></div>

### <span class="pill">Method</span> .substitute <span class="signature">(vars: ExprMap): ExprFunction</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | ExprMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/functions.ts#L136">hilbert.js/src/functions.ts#L136</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(custom: MathMLMap): string</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `custom` | MathMLMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/functions.ts#L111">hilbert.js/src/functions.ts#L111</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/functions.ts#L216">hilbert.js/src/functions.ts#L216</a></div>

### <span class="pill">Method</span> .toVoice <span class="signature">(custom: MathMLMap): string</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `custom` | MathMLMap | ... |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L148">hilbert.js/src/elements.ts#L148</a></div>

## <span class="pill">Class</span> ExprIdentifier

Extends ExprElement

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .i <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L154">hilbert.js/src/elements.ts#L154</a></div>

### <span class="pill">Method</span> .evaluate <span class="signature">(vars: VarMap, privateNested: boolean): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | VarMap | ... |  |
| `privateNested` | boolean |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L158">hilbert.js/src/elements.ts#L158</a></div>

### <span class="pill">Method</span> .interval <span class="signature">(vars: VarMap, privateNested: boolean): Interval</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | VarMap | ... |  |
| `privateNested` | boolean |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L167">hilbert.js/src/elements.ts#L167</a></div>

### <span class="pill">Method</span> .substitute <span class="signature">(vars: ExprMap): ExprElement</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `vars` | ExprMap | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L162">hilbert.js/src/elements.ts#L162</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L175">hilbert.js/src/elements.ts#L175</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L179">hilbert.js/src/elements.ts#L179</a></div>

### <span class="pill">Method</span> .toVoice <span class="signature">(): string</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L125">hilbert.js/src/elements.ts#L125</a></div>

## <span class="pill">Class</span> ExprNumber

Extends ExprElement

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .n <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L131">hilbert.js/src/elements.ts#L131</a></div>

### <span class="pill">Method</span> .evaluate <span class="signature">(): number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L143">hilbert.js/src/elements.ts#L143</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L135">hilbert.js/src/elements.ts#L135</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L139">hilbert.js/src/elements.ts#L139</a></div>

### <span class="pill">Method</span> .toVoice <span class="signature">(): string</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L221">hilbert.js/src/elements.ts#L221</a></div>

## <span class="pill">Class</span> ExprOperator

Extends ExprElement

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .o <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L239">hilbert.js/src/elements.ts#L239</a></div>

### <span class="pill">Method</span> .toMathML <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L227">hilbert.js/src/elements.ts#L227</a></div>

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/elements.ts#L231">hilbert.js/src/elements.ts#L231</a></div>

### <span class="pill">Method</span> .toVoice <span class="signature">(): string</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/eval.ts#L18">hilbert.js/src/eval.ts#L18</a></div>

## <span class="pill">Type alias</span> Interval

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/expression.ts#L55">hilbert.js/src/expression.ts#L55</a></div>

## Expression

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/symbols.ts#L10">hilbert.js/src/symbols.ts#L10</a></div>

## HILBERT_CONSTANTS <span class="signature">: Obj&lt;number&gt;</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/symbols.ts#L66">hilbert.js/src/symbols.ts#L66</a></div>

## SPECIAL_IDENTIFIERS <span class="signature">: Obj&lt;string&gt;</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/eval.ts#L34">hilbert.js/src/eval.ts#L34</a></div>

## hasZero <span class="signature">(a: Interval): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | Interval |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/symbols.ts#L141">hilbert.js/src/symbols.ts#L141</a></div>

## isSpecialFunction <span class="signature">(fn: string): fn is abs|round|floor|ceil|max|min|mod|lcm|gcd|gcf|log|exp|ln|sqrt|root|sin|cos|tan|sec|csc|cot|cosec|cotan|arcsin|arccos|arctan|sinh|cosh|tanh|sech|csch|coth|cosech</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/eval.ts#L29">hilbert.js/src/eval.ts#L29</a></div>

## isWhole <span class="signature">(a: Interval): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | Interval |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/hilbert.js/src/eval.ts#L27">hilbert.js/src/eval.ts#L27</a></div>

## width <span class="signature">(a: Interval): number</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | Interval |  |  |


</div>