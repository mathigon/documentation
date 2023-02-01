---
layout: page
nav_order: 2
parent: Boost.js
---

# Animate

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/animate.ts#L24">animate.ts#L24</a></div>

## <span class="pill">Type alias</span> AnimationCallback

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/animate.ts#L23">animate.ts#L23</a></div>

## <span class="pill">Type alias</span> AnimationCancel

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/animate.ts#L146">animate.ts#L146</a></div>

## <span class="pill">Type alias</span> AnimationProperties <span class="signature">: Obj&lt;AnimationValue|Array&lt;AnimationValue&gt;&gt;</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/animate.ts#L25">animate.ts#L25</a></div>

## <span class="pill">Type alias</span> AnimationResponse

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/animate.ts#L27">animate.ts#L27</a></div>

## ResolvedAnimation

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/animate.ts#L38">animate.ts#L38</a></div>

## animate <span class="signature">(callback: AnimationCallback, duration: number): AnimationResponse</span>

Runs an animation. If no duration is provided, the animation will run
indefinitely, and call `callback` with the time since start as first
argument. If a duration is provided, the first callback argument is instead
the proportion of the duration passed (between 0 and 1). The second callback
argument is the time difference since the last animation frame, and the
third callback argument is a `cancel()` function to stop the animation.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callback` | AnimationCallback |  |  |
| `duration` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/animate.ts#L130">animate.ts#L130</a></div>

## ease <span class="signature">(type: string, t: number, s: number): number</span>

Applies an easing function to a number `t` between 0 and 1. Options include
`quad`, `cubic`, `quart`, `quint`, `circ`, `sine`, `exp`, `back`, `elastic`,
`swing`, `spring` and `bounce`, optionally followed by `-in` or `-out`. The
`s` parameter is only used by `back` and `elastic` easing.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | string |  |  |
| `t` | number | 0 |  |
| `s` | number | 0 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/animate.ts#L239">animate.ts#L239</a></div>

## enter <span class="signature">($el: ElementView, effect: string, duration: number, _delay: number): AnimationResponse</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `$el` | ElementView |  |  |
| `effect` | string | 'fade' |  |
| `duration` | number | 500 |  |
| `_delay` | number | 0 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/animate.ts#L291">animate.ts#L291</a></div>

## exit <span class="signature">($el: ElementView, effect: string, duration: number, delay: number, remove: boolean): AnimationResponse</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `$el` | ElementView |  |  |
| `effect` | string | 'fade' |  |
| `duration` | number | 400 |  |
| `delay` | number | 0 |  |
| `remove` | boolean | false |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/animate.ts#L149">animate.ts#L149</a></div>

## transition <span class="signature">($el: ElementView, properties: AnimationProperties, duration: number, _delay: number, easing: string): AnimationResponse</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `$el` | ElementView |  |  |
| `properties` | AnimationProperties |  |  |
| `duration` | number | 400 |  |
| `_delay` | number | 0 |  |
| `easing` | string | 'ease-in-out' |  |


</div>