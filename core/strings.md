---
layout: page
nav_order: 6
parent: Core.js
---

# Strings

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/strings.ts#L59">strings.ts#L59</a></div>

## autoCorrect <span class="signature">(word: string, dict: Array&lt;string&gt;): undefined|string</span>

Tries to auto-correct a word from a dictionary.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `word` | string |  |  |
| `dict` | Array&lt;string&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/strings.ts#L31">strings.ts#L31</a></div>

## isPalindrome <span class="signature">(str: string): boolean</span>

Checks if a string is a palindrome.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `str` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/strings.ts#L40">strings.ts#L40</a></div>

## stringDistance <span class="signature">(s1: string, s2: string, ignoreTrailing: boolean): number</span>

Determines the Levenshtein distance between two strings. If ignoreTrailing
is true, we will ignore any additional, trailing characters in s2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `s1` | string |  |  |
| `s2` | string |  |  |
| `ignoreTrailing` | boolean | false |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/strings.ts#L24">strings.ts#L24</a></div>

## toCamelCase <span class="signature">(str: string): string</span>

Converts a string to camel case.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `str` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/strings.ts#L18">strings.ts#L18</a></div>

## toTitleCase <span class="signature">(str: string): string</span>

Converts a string to title case.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `str` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/core.js/tree/master/src/strings.ts#L11">strings.ts#L11</a></div>

## words <span class="signature">(str: string, divider: RegExp): Array&lt;string&gt;</span>

Splits a string into space separated words.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `str` | string |  |  |
| `divider` | RegExp | ... |  |


</div>