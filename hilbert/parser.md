---
layout: page
nav_order: 5
parent: Hilbert.js
---

# Parser

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/parser.ts#L263">parser.ts#L263</a></div>

## collapseTerm <span class="signature">(tokens: Array&lt;ExprElement&gt;): ExprElement</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `tokens` | Array&lt;ExprElement&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/parser.ts#L178">parser.ts#L178</a></div>

## matchBrackets <span class="signature">(tokens: Array&lt;ExprElement&gt;, context: {variables?: undefined|Array&lt;string&gt;}): ExprElement|ExprTerm</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `tokens` | Array&lt;ExprElement&gt; |  |  |
| `context` | {variables?: undefined|Array&lt;string&gt;} |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/hilbert.js/tree/master/src/parser.ts#L53">parser.ts#L53</a></div>

## tokenize <span class="signature">(str: string): Array&lt;ExprString|ExprSpace|ExprNumber|ExprIdentifier|ExprOperator&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `str` | string |  |  |


</div>