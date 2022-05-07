---
layout: page
nav_order: 10
parent: Boost.js
---

# Index

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/alert.ts#L14">boost.js/src/components/alert.ts#L14</a></div>

## <span class="pill">Class</span> Alert

Extends CustomElementView

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/alert.ts#L31">boost.js/src/components/alert.ts#L31</a></div>

### <span class="pill">Method</span> .close <span class="signature">(): Promise&lt;void&gt;</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/alert.ts#L21">boost.js/src/components/alert.ts#L21</a></div>

### <span class="pill">Method</span> .open <span class="signature">(duration: number): Promise&lt;void&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `duration` | number | 2000 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/alert.ts#L16">boost.js/src/components/alert.ts#L16</a></div>

### <span class="pill">Method</span> .ready <span class="signature">(): void</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/audio.ts#L7">boost.js/src/audio.ts#L7</a></div>

## <span class="pill">Class</span> AudioPlayer

<div class="docs-item" markdown="1">

### constructor <span class="signature">(src: string, defaultVolume: number, preload: boolean): AudioPlayer</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `src` | string |  |  |
| `defaultVolume` | number | 1 |  |
| `preload` | boolean | true |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Property</span> .defaultVolume <span class="signature">: number</span>

Default value: `1`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/audio.ts#L8">boost.js/src/audio.ts#L8</a></div>

### <span class="pill">Property</span> .player <span class="signature">: HTMLAudioElement</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Property</span> .src <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/audio.ts#L15">boost.js/src/audio.ts#L15</a></div>

### <span class="pill">Method</span> .play <span class="signature">(volume: number): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `volume` | number |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L42">boost.js/src/elements.ts#L42</a></div>

## <span class="pill">Class</span> BaseView

<div class="docs-item" markdown="1">

### constructor <span class="signature">(_el: T): BaseView&lt;T&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_el` | T |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L186">boost.js/src/elements.ts#L186</a></div>

### <span class="pill">Property</span> .$placeholder

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L43">boost.js/src/elements.ts#L43</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> ._data <span class="signature">: Obj&lt;any&gt;</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> ._el <span class="signature">: T</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L44">boost.js/src/elements.ts#L44</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> ._events <span class="signature">: Obj&lt;Array&lt;EventCallback&gt;&gt;</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L46">boost.js/src/elements.ts#L46</a></div>

### <span class="pill">Property</span> .model <span class="signature">?: any</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L45">boost.js/src/elements.ts#L45</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type <span class="signature">: string</span>

Default value: `'default'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L115">boost.js/src/elements.ts#L115</a></div>

### <span class="pill">Accessor</span> .attributes

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L288">boost.js/src/elements.ts#L288</a></div>

### <span class="pill">Accessor</span> .bounds <span class="signature">: DOMRect</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L292">boost.js/src/elements.ts#L292</a></div>

### <span class="pill">Accessor</span> .boundsRect <span class="signature">: Rectangle</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L313">boost.js/src/elements.ts#L313</a></div>

### <span class="pill">Accessor</span> .boxCenter <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L572">boost.js/src/elements.ts#L572</a></div>

### <span class="pill">Accessor</span> .childNodes

Returns an array of all child nodes, including text nodes.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L567">boost.js/src/elements.ts#L567</a></div>

### <span class="pill">Accessor</span> .children

Returns an array of all children of this element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L57">boost.js/src/elements.ts#L57</a></div>

### <span class="pill">Accessor</span> .data <span class="signature">: DOMStringMap</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L320">boost.js/src/elements.ts#L320</a></div>

### <span class="pill">Accessor</span> .height <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L120">boost.js/src/elements.ts#L120</a></div>

### <span class="pill">Accessor</span> .html <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L53">boost.js/src/elements.ts#L53</a></div>

### <span class="pill">Accessor</span> .id <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L302">boost.js/src/elements.ts#L302</a></div>

### <span class="pill">Accessor</span> .isInViewport <span class="signature">: boolean</span>

Checks if this element is currently visible in the viewport.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L519">boost.js/src/elements.ts#L519</a></div>

### <span class="pill">Accessor</span> .next <span class="signature">: ElementView</span>

Returns this element's next sibling, or undefined.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L539">boost.js/src/elements.ts#L539</a></div>

### <span class="pill">Accessor</span> .parent <span class="signature">: HTMLView</span>

Returns this element's parent, or undefined.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L322">boost.js/src/elements.ts#L322</a></div>

### <span class="pill">Accessor</span> .positionLeft <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L324">boost.js/src/elements.ts#L324</a></div>

### <span class="pill">Accessor</span> .positionTop <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L524">boost.js/src/elements.ts#L524</a></div>

### <span class="pill">Accessor</span> .prev <span class="signature">: ElementView</span>

Returns this element's previous sibling, or undefined.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L415">boost.js/src/elements.ts#L415</a></div>

### <span class="pill">Accessor</span> .scale

Finds the x and y scale of this element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L330">boost.js/src/elements.ts#L330</a></div>

### <span class="pill">Accessor</span> .scrollHeight <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L343">boost.js/src/elements.ts#L343</a></div>

### <span class="pill">Accessor</span> .scrollLeft <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L334">boost.js/src/elements.ts#L334</a></div>

### <span class="pill">Accessor</span> .scrollTop <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L326">boost.js/src/elements.ts#L326</a></div>

### <span class="pill">Accessor</span> .scrollWidth <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L61">boost.js/src/elements.ts#L61</a></div>

### <span class="pill">Accessor</span> .tagName <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L128">boost.js/src/elements.ts#L128</a></div>

### <span class="pill">Accessor</span> .text <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L137">boost.js/src/elements.ts#L137</a></div>

### <span class="pill">Accessor</span> .textStr

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L308">boost.js/src/elements.ts#L308</a></div>

### <span class="pill">Accessor</span> .topLeftPosition <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L398">boost.js/src/elements.ts#L398</a></div>

### <span class="pill">Accessor</span> .transform <span class="signature">: string</span>

Shortcut for getting the CSS transform style of an element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L402">boost.js/src/elements.ts#L402</a></div>

### <span class="pill">Accessor</span> .transformMatrix

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L318">boost.js/src/elements.ts#L318</a></div>

### <span class="pill">Accessor</span> .width <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L529">boost.js/src/elements.ts#L529</a></div>

### <span class="pill">Method</span> .$ <span class="signature">(selector: T): QueryResult&lt;T&gt;</span>

The first child element matching a given selector.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `selector` | T |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L534">boost.js/src/elements.ts#L534</a></div>

### <span class="pill">Method</span> .$$ <span class="signature">(selector: T): QueryResults&lt;T&gt;</span>

All child elements matching a given selector.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `selector` | T |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L70">boost.js/src/elements.ts#L70</a></div>

### <span class="pill">Method</span> .addClass <span class="signature">(className: string): void</span>

Adds one or more space-separated classes to this element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L701">boost.js/src/elements.ts#L701</a></div>

### <span class="pill">Method</span> .animate <span class="signature">(rules: AnimationProperties, duration: number, delay: number, easing: string): AnimationResponse</span>

Animates multiple CSS properties of this element, with a given duration,
delay and ease function.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `rules` | AnimationProperties |  |  |
| `duration` | number | 400 |  |
| `delay` | number | 0 |  |
| `easing` | string | 'ease-in-out' |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L499">boost.js/src/elements.ts#L499</a></div>

### <span class="pill">Method</span> .append <span class="signature">(newChild: ElementView|Text): void</span>

Adds a new child element at the end of this one.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `newChild` | ElementView|Text |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L95">boost.js/src/elements.ts#L95</a></div>

### <span class="pill">Method</span> .attr <span class="signature">(attr: string): string</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `attr` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L159">boost.js/src/elements.ts#L159</a></div>

### <span class="pill">Method</span> .bindModel <span class="signature">(model: any, recursive: boolean): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `model` | any |  |  |
| `recursive` | boolean | true |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L182">boost.js/src/elements.ts#L182</a></div>

### <span class="pill">Method</span> .bindVariable <span class="signature">(_model: any, _name: string): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_model` | any |  |  |
| `_name` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L142">boost.js/src/elements.ts#L142</a></div>

### <span class="pill">Method</span> .blur <span class="signature">(): void</span>

Blurs this DOM element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L297">boost.js/src/elements.ts#L297</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(point: Point): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `point` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L609">boost.js/src/elements.ts#L609</a></div>

### <span class="pill">Method</span> .copy <span class="signature">(recursive: boolean): ElementView</span>

Creates a copy of this element, and optionally its children.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `recursive` | boolean | true |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L384">boost.js/src/elements.ts#L384</a></div>

### <span class="pill">Method</span> .css <span class="signature">(props: string|Obj&lt;string|number&gt;, value: string|number): undefined|string</span>

Retrieves or sets CSS properties on this element. Examples:
  * $el.css('color');  // returns 'red'
  * $el.css('color', 'blue');
  * $el.css({color: 'blue'});

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `props` | string|Obj&lt;string|number&gt; |  |  |
| `value` | string|number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L589">boost.js/src/elements.ts#L589</a></div>

### <span class="pill">Method</span> .detach <span class="signature">(): void</span>

Detaches an element from the DOM.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L728">boost.js/src/elements.ts#L728</a></div>

### <span class="pill">Method</span> .effect <span class="signature">(className: string): void</span>

Triggers a CSS animation in an element by adding a class and removing it
after the `animationEnd` event.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L713">boost.js/src/elements.ts#L713</a></div>

### <span class="pill">Method</span> .enter <span class="signature">(effect: string, duration: number, delay: number): AnimationResponse</span>

Runs an enter animation on this element. Valid effect names are
  * 'fade', 'pop' and 'descend'
  * 'draw' and 'draw-reverse'
  * 'slide' and 'slide-down'
  * 'reveal', 'reveal-left' and 'reveal-right'

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `effect` | string | 'fade' |  |
| `duration` | number | 500 |  |
| `delay` | number | 0 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L65">boost.js/src/elements.ts#L65</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(el: ElementView): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `el` | ElementView |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L720">boost.js/src/elements.ts#L720</a></div>

### <span class="pill">Method</span> .exit <span class="signature">(effect: string, duration: number, delay: number, remove: boolean): AnimationResponse</span>

Runs an exit animation on this element. See `.enter()` for options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `effect` | string | 'fade' |  |
| `duration` | number | 500 |  |
| `delay` | number | 0 |  |
| `remove` | boolean | false |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L147">boost.js/src/elements.ts#L147</a></div>

### <span class="pill">Method</span> .focus <span class="signature">(): void</span>

Focuses this DOM element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L154">boost.js/src/elements.ts#L154</a></div>

### <span class="pill">Method</span> .getParentModel <span class="signature">(): any</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L99">boost.js/src/elements.ts#L99</a></div>

### <span class="pill">Method</span> .hasAttr <span class="signature">(attr: string): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `attr` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L78">boost.js/src/elements.ts#L78</a></div>

### <span class="pill">Method</span> .hasClass <span class="signature">(className: string): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L556">boost.js/src/elements.ts#L556</a></div>

### <span class="pill">Method</span> .hasParent <span class="signature">($p: Array&lt;ElementView&gt;): boolean</span>

Checks if this element has one of the given elements as parent.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `$p` | Array&lt;ElementView&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L453">boost.js/src/elements.ts#L453</a></div>

### <span class="pill">Method</span> .hide <span class="signature">(): void</span>

Makes the element invisible, using CSS visibility (if
`data-display="visibility"`), or `display: none`.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L481">boost.js/src/elements.ts#L481</a></div>

### <span class="pill">Method</span> .index <span class="signature">(): number</span>

Finds the index of an elements, in the list of its siblings.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L509">boost.js/src/elements.ts#L509</a></div>

### <span class="pill">Method</span> .insertAfter <span class="signature">(newChild: ElementView): void</span>

Adds a new element immediately after this one, as a sibling.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `newChild` | ElementView |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L504">boost.js/src/elements.ts#L504</a></div>

### <span class="pill">Method</span> .insertBefore <span class="signature">(newChild: ElementView): void</span>

Adds a new element immediately before this one, as a sibling.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `newChild` | ElementView |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L475">boost.js/src/elements.ts#L475</a></div>

### <span class="pill">Method</span> .is <span class="signature">(selector: string): boolean</span>

Checks if an element matches a given CSS selector.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `selector` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L204">boost.js/src/elements.ts#L204</a></div>

### <span class="pill">Method</span> .makeDynamicAttribute <span class="signature">(name: string, value: string, model: any): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string |  |  |
| `value` | string |  |  |
| `model` | any |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L249">boost.js/src/elements.ts#L249</a></div>

### <span class="pill">Method</span> .makeDynamicList <span class="signature">(model: any): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `model` | any |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L644">boost.js/src/elements.ts#L644</a></div>

### <span class="pill">Method</span> .off <span class="signature">(events: string, callback: EventCallback): void</span>

Removes an event listener on this element. If callback is undefined, it
removes all event listeners for this event.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `events` | string |  |  |
| `callback` | EventCallback |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L618">boost.js/src/elements.ts#L618</a></div>

### <span class="pill">Method</span> .on <span class="signature">(events: string, callback: EventCallback, options: EventListenerOptions): void</span>

Binds one ore more space-separated event listeners on this element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `events` | string |  |  |
| `callback` | EventCallback |  |  |
| `options` | EventListenerOptions |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L672">boost.js/src/elements.ts#L672</a></div>

### <span class="pill">Method</span> .onAttr <span class="signature">(name: string, callback: (value: string, initial: boolean): void): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string |  |  |
| `callback` | (value: string, initial: boolean): void |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L665">boost.js/src/elements.ts#L665</a></div>

### <span class="pill">Method</span> .onKeyDown <span class="signature">(keys: string, callback: (e: KeyboardEvent): void): void</span>

Binds an event listener for a specific key that is pressed while this
element is in focus.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `keys` | string |  |  |
| `callback` | (e: KeyboardEvent): void |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L688">boost.js/src/elements.ts#L688</a></div>

### <span class="pill">Method</span> .onPromise <span class="signature">(event: string, resolveImmediately: boolean): Promise&lt;void&gt;</span>

Returns a promise that is resolved when an event is triggered.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `event` | string |  |  |
| `resolveImmediately` | boolean | false |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L632">boost.js/src/elements.ts#L632</a></div>

### <span class="pill">Method</span> .one <span class="signature">(events: string, callback: EventCallback, options: EventListenerOptions): void</span>

Binds a one-time event listener on this element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `events` | string |  |  |
| `callback` | EventCallback |  |  |
| `options` | EventListenerOptions |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L545">boost.js/src/elements.ts#L545</a></div>

### <span class="pill">Method</span> .parents <span class="signature">(selector: string): Array&lt;HTMLView&gt;</span>

Finds all parent elements that match a specific selector.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `selector` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L489">boost.js/src/elements.ts#L489</a></div>

### <span class="pill">Method</span> .prepend <span class="signature">(newChild: ElementView): void</span>

Adds a new child element at the beginning of this one.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `newChild` | ElementView |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L596">boost.js/src/elements.ts#L596</a></div>

### <span class="pill">Method</span> .remove <span class="signature">(): void</span>

Removes this element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L111">boost.js/src/elements.ts#L111</a></div>

### <span class="pill">Method</span> .removeAttr <span class="signature">(attr: string): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `attr` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L604">boost.js/src/elements.ts#L604</a></div>

### <span class="pill">Method</span> .removeChildren <span class="signature">(): void</span>

Removes all children of this element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L74">boost.js/src/elements.ts#L74</a></div>

### <span class="pill">Method</span> .removeClass <span class="signature">(className: string): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L581">boost.js/src/elements.ts#L581</a></div>

### <span class="pill">Method</span> .restartAnimation <span class="signature">(): void</span>

Detach and re-insert to restart CSS animations.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L369">boost.js/src/elements.ts#L369</a></div>

### <span class="pill">Method</span> .scrollBy <span class="signature">(distance: number, time: number, easing: string): void</span>

Scrolls the element by a given distance.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `distance` | number |  |  |
| `time` | number | 1000 |  |
| `easing` | string | 'cubic' |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L353">boost.js/src/elements.ts#L353</a></div>

### <span class="pill">Method</span> .scrollTo <span class="signature">(pos: number, time: number, easing: string): void</span>

Scrolls the element to a specific position.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `pos` | number |  |  |
| `time` | number | 1000 |  |
| `easing` | string | 'cubic' |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L103">boost.js/src/elements.ts#L103</a></div>

### <span class="pill">Method</span> .setAttr <span class="signature">(attr: string, value: any): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `attr` | string |  |  |
| `value` | any |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L87">boost.js/src/elements.ts#L87</a></div>

### <span class="pill">Method</span> .setClass <span class="signature">(className: string, condition: boolean): void</span>

Toggles multiple space-separated class names based on a condition.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | string |  |  |
| `condition` | boolean |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L421">boost.js/src/elements.ts#L421</a></div>

### <span class="pill">Method</span> .setTransform <span class="signature">(posn: SimplePoint, angle: number, scale: number): void</span>

Sets the CSS transform on this element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `posn` | SimplePoint |  |  |
| `angle` | number | 0 |  |
| `scale` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L439">boost.js/src/elements.ts#L439</a></div>

### <span class="pill">Method</span> .show <span class="signature">(): void</span>

Makes the element visible. Use the `data-display` attribute to determine
how this is done. Possible options are `visibility`, to use CSS visibility,
or CSS display values. The default is `display: block`.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L462">boost.js/src/elements.ts#L462</a></div>

### <span class="pill">Method</span> .toggle <span class="signature">(show: boolean): void</span>

Hides or shows the element based on a boolean value.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `show` | boolean |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L82">boost.js/src/elements.ts#L82</a></div>

### <span class="pill">Method</span> .toggleClass <span class="signature">(className: string): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L189">boost.js/src/elements.ts#L189</a></div>

### <span class="pill">Method</span> .toggleDOM <span class="signature">(show: boolean): void</span>

Conditionally hide this element from the DOM (using placeholder comments).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `show` | boolean | true |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L430">boost.js/src/elements.ts#L430</a></div>

### <span class="pill">Method</span> .translate <span class="signature">(x: number, y: number): void</span>

Sets the CSS transform of this element to an x/y translation.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `y` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L654">boost.js/src/elements.ts#L654</a></div>

### <span class="pill">Method</span> .trigger <span class="signature">(events: string, args: any): void</span>

Triggers a specific event on this element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `events` | string |  |  |
| `args` | any | ... |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1271">boost.js/src/elements.ts#L1271</a></div>

## <span class="pill">Class</span> CanvasView

Extends HTMLBaseView&lt;HTMLCanvasElement&gt;

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1272">boost.js/src/elements.ts#L1272</a></div>

### <span class="pill">Property</span> ._ctx

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1273">boost.js/src/elements.ts#L1273</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'canvas'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1291">boost.js/src/elements.ts#L1291</a></div>

### <span class="pill">Accessor</span> .canvasHeight <span class="signature">: number</span>

Returns the intrinsic pixel height of this `<canvas>` element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1286">boost.js/src/elements.ts#L1286</a></div>

### <span class="pill">Accessor</span> .canvasWidth <span class="signature">: number</span>

Returns the intrinsic pixel width of this `<canvas>` element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1296">boost.js/src/elements.ts#L1296</a></div>

### <span class="pill">Accessor</span> .ctx <span class="signature">: CanvasRenderingContext2D</span>

Cached reference to the 2D context for this `<canvas>` element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1309">boost.js/src/elements.ts#L1309</a></div>

### <span class="pill">Method</span> .clear <span class="signature">(): void</span>

Clears this canvas.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1322">boost.js/src/elements.ts#L1322</a></div>

### <span class="pill">Method</span> .clearCircle <span class="signature">(center: Point, radius: number): void</span>

Erase a specific circle of the canvas.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `center` | Point |  |  |
| `radius` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1331">boost.js/src/elements.ts#L1331</a></div>

### <span class="pill">Method</span> .downloadImage <span class="signature">(fileName: string): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fileName` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1302">boost.js/src/elements.ts#L1302</a></div>

### <span class="pill">Method</span> .draw <span class="signature">(obj: GeoShape, options: CanvasDrawingOptions): void</span>

Draws a generic geometry object ont a `<canvas>` element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `obj` | GeoShape |  |  |
| `options` | CanvasDrawingOptions | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1314">boost.js/src/elements.ts#L1314</a></div>

### <span class="pill">Method</span> .fill <span class="signature">(color: string): void</span>

Clears this canvas.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1276">boost.js/src/elements.ts#L1276</a></div>

### <span class="pill">Method</span> .getContext <span class="signature">(c: string, options: WebGLContextAttributes): |CanvasRenderingContext2D|ImageBitmapRenderingContext|WebGLRenderingContext|WebGL2RenderingContext</span>

Returns the drawing context for a `<canvas>` element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c` | string | '2d' |  |
| `options` | WebGLContextAttributes | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1281">boost.js/src/elements.ts#L1281</a></div>

### <span class="pill">Method</span> .image <span class="signature">(type: png|jpg): string</span>

Converts a Canvas element into a PNG or JPEG data URI.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | png|jpg | 'png' |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/webcomponents.ts#L99">boost.js/src/webcomponents.ts#L99</a></div>

## <span class="pill">Class</span> CustomElementView

Base class for custom HTML elements. In addition to other custom methods,
it can implement `created()` and `ready()` methods that are executed during
the element lifecycle.

Extends HTMLBaseView&lt;CustomHTMLElement&gt;

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/webcomponents.ts#L100">boost.js/src/webcomponents.ts#L100</a></div>

### <span class="pill">Method</span> .created <span class="signature">(): void</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/webcomponents.ts#L104">boost.js/src/webcomponents.ts#L104</a></div>

### <span class="pill">Method</span> .ready <span class="signature">(): void</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/draggable.ts#L51">boost.js/src/draggable.ts#L51</a></div>

## <span class="pill">Class</span> Draggable

A draggable and droppable HTML element.

Extends EventTarget

<div class="docs-item" markdown="1">

### constructor <span class="signature">($el: ElementView, options: DraggableOptions): Draggable</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `$el` | ElementView |  |  |
| `options` | DraggableOptions | ... |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .$el <span class="signature">: ElementView</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/draggable.ts#L54">boost.js/src/draggable.ts#L54</a></div>

### <span class="pill">Property</span> .$over

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/draggable.ts#L57">boost.js/src/draggable.ts#L57</a></div>

### <span class="pill">Property</span> .bounds

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/draggable.ts#L56">boost.js/src/draggable.ts#L56</a></div>

### <span class="pill">Property</span> .disabled <span class="signature">: boolean</span>

Default value: `false`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/draggable.ts#L52">boost.js/src/draggable.ts#L52</a></div>

### <span class="pill">Property</span> .options <span class="signature">: DraggableOptions</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/draggable.ts#L55">boost.js/src/draggable.ts#L55</a></div>

### <span class="pill">Property</span> .position <span class="signature">: Point</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/draggable.ts#L53">boost.js/src/draggable.ts#L53</a></div>

### <span class="pill">Property</span> .startPos <span class="signature">: Point</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/draggable.ts#L94">boost.js/src/draggable.ts#L94</a></div>

### <span class="pill">Method</span> .addTarget <span class="signature">($target: ElementView): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `$target` | ElementView |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/draggable.ts#L104">boost.js/src/draggable.ts#L104</a></div>

### <span class="pill">Method</span> .checkTarget <span class="signature">(posn: Point): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `posn` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/core.js/dist/events.d.ts#L10">core.js/dist/events.d.ts#L10</a></div>

### <span class="pill">Method</span> .off <span class="signature">(events: string, fn: EventCallback): void</span>

Removes an event listener from one or more events.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `events` | string |  |  |
| `fn` | EventCallback |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/core.js/dist/events.d.ts#L6">core.js/dist/events.d.ts#L6</a></div>

### <span class="pill">Method</span> .on <span class="signature">(events: string, fn: EventCallback): void</span>

Adds an event listener for one or more events.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `events` | string |  |  |
| `fn` | EventCallback |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/core.js/dist/events.d.ts#L8">core.js/dist/events.d.ts#L8</a></div>

### <span class="pill">Method</span> .one <span class="signature">(events: string, fn: EventCallback): void</span>

Adds a one-time event listener to one or more events.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `events` | string |  |  |
| `fn` | EventCallback |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/draggable.ts#L99">boost.js/src/draggable.ts#L99</a></div>

### <span class="pill">Method</span> .removeTarget <span class="signature">($target: ElementView): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `$target` | ElementView |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/draggable.ts#L161">boost.js/src/draggable.ts#L161</a></div>

### <span class="pill">Method</span> .resetPosition <span class="signature">(duration: number): Promise&lt;void&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `duration` | number | 250 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/draggable.ts#L142">boost.js/src/draggable.ts#L142</a></div>

### <span class="pill">Method</span> .setPosition <span class="signature">(x: number, y: number): void</span>

Sets the position of the element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `y` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/core.js/dist/events.d.ts#L12">core.js/dist/events.d.ts#L12</a></div>

### <span class="pill">Method</span> .trigger <span class="signature">(events: string, arg: unknown): void</span>

Triggers one or more events, and executes all bound event listeners.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `events` | string |  |  |
| `arg` | unknown |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/draggable.ts#L120">boost.js/src/draggable.ts#L120</a></div>

### <span class="pill">Method</span> .updateBounds <span class="signature">(): undefined|Bounds</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1164">boost.js/src/elements.ts#L1164</a></div>

## <span class="pill">Class</span> FormView

Extends HTMLBaseView&lt;HTMLFormElement&gt;

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1165">boost.js/src/elements.ts#L1165</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'form'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1167">boost.js/src/elements.ts#L1167</a></div>

### <span class="pill">Accessor</span> .action <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1172">boost.js/src/elements.ts#L1172</a></div>

### <span class="pill">Accessor</span> .formData <span class="signature">: Obj&lt;string&gt;</span>

Summarises the data for an HTML <form> element in an JSON Object.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1181">boost.js/src/elements.ts#L1181</a></div>

### <span class="pill">Accessor</span> .isValid <span class="signature">: boolean</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L740">boost.js/src/elements.ts#L740</a></div>

## <span class="pill">Class</span> HTMLBaseView

Extends BaseView&lt;T&gt;

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L772">boost.js/src/elements.ts#L772</a></div>

### <span class="pill">Accessor</span> .innerHeight <span class="signature">: number</span>

Returns this element's height, excluding border and padding.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L765">boost.js/src/elements.ts#L765</a></div>

### <span class="pill">Accessor</span> .innerWidth <span class="signature">: number</span>

Returns this element's width, excluding border and padding.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L746">boost.js/src/elements.ts#L746</a></div>

### <span class="pill">Accessor</span> .offsetLeft <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L750">boost.js/src/elements.ts#L750</a></div>

### <span class="pill">Accessor</span> .offsetParent <span class="signature">: ElementView</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L742">boost.js/src/elements.ts#L742</a></div>

### <span class="pill">Accessor</span> .offsetTop <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L786">boost.js/src/elements.ts#L786</a></div>

### <span class="pill">Accessor</span> .outerHeight <span class="signature">: number</span>

Returns this element's height, including margins.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L779">boost.js/src/elements.ts#L779</a></div>

### <span class="pill">Accessor</span> .outerWidth <span class="signature">: number</span>

Returns this element's width, including margins.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L819">boost.js/src/elements.ts#L819</a></div>

### <span class="pill">Method</span> .offset <span class="signature">(parent: HTMLView): {bottom: number, left: number, right: number, top: number}</span>

Calculates the element offset relative to any other parent element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `parent` | HTMLView |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/icon.ts#L17">boost.js/src/components/icon.ts#L17</a></div>

## <span class="pill">Class</span> IconView

SVG icon component, which loads from a global `/icons.svg` file.

Extends CustomElementView

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/icon.ts#L19">boost.js/src/components/icon.ts#L19</a></div>

### <span class="pill">Method</span> .ready <span class="signature">(): void</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1186">boost.js/src/elements.ts#L1186</a></div>

## <span class="pill">Class</span> InputView

Extends HTMLBaseView&lt;InputFieldElement&gt;

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1187">boost.js/src/elements.ts#L1187</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'input'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1189">boost.js/src/elements.ts#L1189</a></div>

### <span class="pill">Accessor</span> .checked <span class="signature">: boolean</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1262">boost.js/src/elements.ts#L1262</a></div>

### <span class="pill">Accessor</span> .isValid <span class="signature">: boolean</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1197">boost.js/src/elements.ts#L1197</a></div>

### <span class="pill">Accessor</span> .value <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1205">boost.js/src/elements.ts#L1205</a></div>

### <span class="pill">Method</span> .bindVariable <span class="signature">(model: any, name: string): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `model` | any |  |  |
| `name` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1245">boost.js/src/elements.ts#L1245</a></div>

### <span class="pill">Method</span> .change <span class="signature">(callback: (val: string): void): void</span>

Binds a change event listener.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callback` | (val: string): void |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1237">boost.js/src/elements.ts#L1237</a></div>

### <span class="pill">Method</span> .setInputPattern <span class="signature">(value: string): void</span>

Polyfill for type and inputmode attributes.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1258">boost.js/src/elements.ts#L1258</a></div>

### <span class="pill">Method</span> .setValidity <span class="signature">(str: string): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `str` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1254">boost.js/src/elements.ts#L1254</a></div>

### <span class="pill">Method</span> .validate <span class="signature">(callback: (value: string): string): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callback` | (value: string): string |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1343">boost.js/src/elements.ts#L1343</a></div>

## <span class="pill">Class</span> MediaView

Extends HTMLBaseView&lt;HTMLMediaElement&gt;

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1351">boost.js/src/elements.ts#L1351</a></div>

### <span class="pill">Method</span> .pause <span class="signature">(): void</span>

Pauses playback on a media element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1346">boost.js/src/elements.ts#L1346</a></div>

### <span class="pill">Method</span> .play <span class="signature">(): Promise&lt;void&gt;</span>

Starts playback on a media element.

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/modal.ts#L42">boost.js/src/components/modal.ts#L42</a></div>

## <span class="pill">Class</span> Modal

Modal component

Extends CustomElementView

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/modal.ts#L44">boost.js/src/components/modal.ts#L44</a></div>

### <span class="pill">Property</span> .$iframe

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/modal.ts#L45">boost.js/src/components/modal.ts#L45</a></div>

### <span class="pill">Property</span> .$video

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/modal.ts#L46">boost.js/src/components/modal.ts#L46</a></div>

### <span class="pill">Property</span> .canClose <span class="signature">: boolean</span>

Default value: `true`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/modal.ts#L43">boost.js/src/components/modal.ts#L43</a></div>

### <span class="pill">Property</span> .isOpen <span class="signature">: boolean</span>

Default value: `false`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/modal.ts#L111">boost.js/src/components/modal.ts#L111</a></div>

### <span class="pill">Method</span> .close <span class="signature">(keepBg: boolean, noEvent: boolean): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `keepBg` | boolean | false |  |
| `noEvent` | boolean | false |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/modal.ts#L126">boost.js/src/components/modal.ts#L126</a></div>

### <span class="pill">Method</span> .getOpenModal <span class="signature">(): undefined|Modal</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/modal.ts#L76">boost.js/src/components/modal.ts#L76</a></div>

### <span class="pill">Method</span> .open <span class="signature">(noAnimation: boolean): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `noAnimation` | boolean | false |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/modal.ts#L48">boost.js/src/components/modal.ts#L48</a></div>

### <span class="pill">Method</span> .ready <span class="signature">(): void</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/popup.ts#L14">boost.js/src/components/popup.ts#L14</a></div>

## <span class="pill">Class</span> Popup

Popup component that reveals its `.popup-body` child when clicked.

Extends CustomElementView

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/popup.ts#L17">boost.js/src/components/popup.ts#L17</a></div>

### <span class="pill">Property</span> .$bubble <span class="signature">: ElementView</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/popup.ts#L16">boost.js/src/components/popup.ts#L16</a></div>

### <span class="pill">Property</span> .animation <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/popup.ts#L15">boost.js/src/components/popup.ts#L15</a></div>

### <span class="pill">Property</span> .isOpen <span class="signature">: boolean</span>

Default value: `false`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/popup.ts#L51">boost.js/src/components/popup.ts#L51</a></div>

### <span class="pill">Method</span> .close <span class="signature">(): void</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/popup.ts#L41">boost.js/src/components/popup.ts#L41</a></div>

### <span class="pill">Method</span> .open <span class="signature">(): void</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/popup.ts#L19">boost.js/src/components/popup.ts#L19</a></div>

### <span class="pill">Method</span> .ready <span class="signature">(): void</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/popup.ts#L33">boost.js/src/components/popup.ts#L33</a></div>

### <span class="pill">Method</span> .toggle <span class="signature">(): void</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L846">boost.js/src/elements.ts#L846</a></div>

## <span class="pill">Class</span> SVGBaseView

Extends BaseView&lt;T&gt;

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L847">boost.js/src/elements.ts#L847</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'svg'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L850">boost.js/src/elements.ts#L850</a></div>

### <span class="pill">Accessor</span> .$ownerSVG <span class="signature">: SVGParentView</span>

Returns the owner `<svg>` which this element is a child of.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L956">boost.js/src/elements.ts#L956</a></div>

### <span class="pill">Accessor</span> .center <span class="signature">: Point</span>

Finds the center of an SVG `<circle>` element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L878">boost.js/src/elements.ts#L878</a></div>

### <span class="pill">Accessor</span> .inverseTransformMatrix

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L939">boost.js/src/elements.ts#L939</a></div>

### <span class="pill">Accessor</span> .points

Returns a list of all points along an SVG `<path>` element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L908">boost.js/src/elements.ts#L908</a></div>

### <span class="pill">Accessor</span> .strokeLength <span class="signature">: number</span>

Finds the total stroke length of this element. Similar to the SVG
`getTotalLength()` function, but works for a wider variety of elements.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L950">boost.js/src/elements.ts#L950</a></div>

### <span class="pill">Method</span> .addPoint <span class="signature">(p: SimplePoint): void</span>

Appends a new point to an SVG `<path>` element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L985">boost.js/src/elements.ts#L985</a></div>

### <span class="pill">Method</span> .draw <span class="signature">(obj: undefined|GeoShape, options: SVGDrawingOptions): void</span>

Draws a generic geometry object onto an SVG `<path>` element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `obj` | undefined|GeoShape |  |  |
| `options` | SVGDrawingOptions | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L934">boost.js/src/elements.ts#L934</a></div>

### <span class="pill">Method</span> .getPointAt <span class="signature">(p: number): Point</span>

Gets the coordinates of the point at a position `p` along the length of the
stroke of this `<path>` element, where `0 ≤ p ≤ 1`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L921">boost.js/src/elements.ts#L921</a></div>

### <span class="pill">Method</span> .getPointAtLength <span class="signature">(d: number): Point</span>

Gets the coordinates of the point at a distance `d` along the length of the
stroke of this `<path>` element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `d` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L963">boost.js/src/elements.ts#L963</a></div>

### <span class="pill">Method</span> .setCenter <span class="signature">(c: SimplePoint): void</span>

Sets the center of an SVG `<circle>` or `<text>` element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L969">boost.js/src/elements.ts#L969</a></div>

### <span class="pill">Method</span> .setLine <span class="signature">(p: SimplePoint, q: SimplePoint): void</span>

Sets the end points of an SVG `<line>` element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |
| `q` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L977">boost.js/src/elements.ts#L977</a></div>

### <span class="pill">Method</span> .setRect <span class="signature">(rect: Rectangle): void</span>

Sets the bounds of an SVG `<rectangle>` element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `rect` | Rectangle |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L894">boost.js/src/elements.ts#L894</a></div>

### <span class="pill">Method</span> .setTransform <span class="signature">(posn: SimplePoint, angle: number, scale: number): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `posn` | SimplePoint |  |  |
| `angle` | number | 0 |  |
| `scale` | number | 1 |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L998">boost.js/src/elements.ts#L998</a></div>

## <span class="pill">Class</span> SVGParentView

Extends SVGBaseView&lt;SVGSVGElement&gt;

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1022">boost.js/src/elements.ts#L1022</a></div>

### <span class="pill">Accessor</span> .svgHeight <span class="signature">: number</span>

Returns the intrinsic height of this `<svg>` element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1017">boost.js/src/elements.ts#L1017</a></div>

### <span class="pill">Accessor</span> .svgWidth <span class="signature">: number</span>

Returns the intrinsic width of this `<svg>` element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1000">boost.js/src/elements.ts#L1000</a></div>

### <span class="pill">Accessor</span> .viewBox <span class="signature">: DOMRect</span>

Returns the viewport coordinates of this `<svg>` element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1079">boost.js/src/elements.ts#L1079</a></div>

### <span class="pill">Method</span> .downloadImage <span class="signature">(fileName: string, width: number, height: number, viewBox: string): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fileName` | string |  |  |
| `width` | number |  |  |
| `height` | number |  |  |
| `viewBox` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1027">boost.js/src/elements.ts#L1027</a></div>

### <span class="pill">Method</span> .drawPath <span class="signature">(obj: GeoShape, attributes: Obj&lt;any&gt;, options: SVGDrawingOptions): SVGView</span>

Create a new `<path>` element child and draw a geometry object onto it.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `obj` | GeoShape |  |  |
| `attributes` | Obj&lt;any&gt; | ... |  |
| `options` | SVGDrawingOptions | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1034">boost.js/src/elements.ts#L1034</a></div>

### <span class="pill">Method</span> .image <span class="signature">(type: svg|png|jpg, width: number, height: number, viewBox: string): Promise&lt;string&gt;</span>

Converts an SVG element into a PNG, JPG or SVG data URI.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | svg|png|jpg |  |  |
| `width` | number |  |  |
| `height` | number |  |  |
| `viewBox` | string |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/select.ts#L15">boost.js/src/components/select.ts#L15</a></div>

## <span class="pill">Class</span> Select

Select (radio-button-style) component.

Extends CustomElementView

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/select.ts#L16">boost.js/src/components/select.ts#L16</a></div>

### <span class="pill">Property</span> .$active <span class="signature">: ElementView</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/select.ts#L17">boost.js/src/components/select.ts#L17</a></div>

### <span class="pill">Property</span> .$options <span class="signature">: Obj&lt;ElementView&gt;</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/select.ts#L44">boost.js/src/components/select.ts#L44</a></div>

### <span class="pill">Method</span> .bindVariable <span class="signature">(model: any, name: string): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `model` | any |  |  |
| `name` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/select.ts#L35">boost.js/src/components/select.ts#L35</a></div>

### <span class="pill">Method</span> .makeActive <span class="signature">($el: ElementView): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `$el` | ElementView |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/components/select.ts#L19">boost.js/src/components/select.ts#L19</a></div>

### <span class="pill">Method</span> .ready <span class="signature">(): void</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1104">boost.js/src/elements.ts#L1104</a></div>

## <span class="pill">Class</span> WindowView

Extends HTMLBaseView&lt;HTMLHtmlElement|HTMLBodyElement&gt;

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1105">boost.js/src/elements.ts#L1105</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'window'`

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/animate.ts#L24">boost.js/src/animate.ts#L24</a></div>

## <span class="pill">Type alias</span> AnimationCallback

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/animate.ts#L23">boost.js/src/animate.ts#L23</a></div>

## <span class="pill">Type alias</span> AnimationCancel

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/animate.ts#L146">boost.js/src/animate.ts#L146</a></div>

## <span class="pill">Type alias</span> AnimationProperties <span class="signature">: Obj&lt;AnimationValue|Array&lt;AnimationValue&gt;&gt;</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/animate.ts#L25">boost.js/src/animate.ts#L25</a></div>

## <span class="pill">Type alias</span> AnimationResponse

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L734">boost.js/src/elements.ts#L734</a></div>

## <span class="pill">Type alias</span> ElementView <span class="signature">: BaseView&lt;HTMLElement|SVGElement&gt;</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/events.ts#L30">boost.js/src/events.ts#L30</a></div>

## <span class="pill">Type alias</span> EventCallback

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L840">boost.js/src/elements.ts#L840</a></div>

## <span class="pill">Type alias</span> HTMLView <span class="signature">: HTMLBaseView&lt;HTMLElement&gt;</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/observable.ts#L22">boost.js/src/observable.ts#L22</a></div>

## <span class="pill">Type alias</span> Observable

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/svg.ts#L11">boost.js/src/svg.ts#L11</a></div>

## <span class="pill">Type alias</span> PathCommand

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/browser.ts#L42">boost.js/src/browser.ts#L42</a></div>

## <span class="pill">Type alias</span> ResizeEvent

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1098">boost.js/src/elements.ts#L1098</a></div>

## <span class="pill">Type alias</span> SVGView <span class="signature">: SVGBaseView&lt;SVGGraphicsElement&gt;</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/events.ts#L28">boost.js/src/events.ts#L28</a></div>

## <span class="pill">Type alias</span> ScreenEvent

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/events.ts#L29">boost.js/src/events.ts#L29</a></div>

## <span class="pill">Type alias</span> ScrollEvent

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1462">boost.js/src/elements.ts#L1462</a></div>

## $body <span class="signature">: WindowView</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1463">boost.js/src/elements.ts#L1463</a></div>

## $html <span class="signature">: WindowView</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/browser.ts#L315">boost.js/src/browser.ts#L315</a></div>

## Browser <span class="signature">: BrowserInstance</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/browser.ts#L19">boost.js/src/browser.ts#L19</a></div>

## KEY_CODES <span class="signature">: Obj&lt;number&gt;</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/animate.ts#L27">boost.js/src/animate.ts#L27</a></div>

## ResolvedAnimation

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/router.ts#L291">boost.js/src/router.ts#L291</a></div>

## Router <span class="signature">: Router</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1397">boost.js/src/elements.ts#L1397</a></div>

## $ <span class="signature">(query: T, context: ElementView): QueryResult&lt;T&gt;</span>

Finds the Element that matches a specific CSS selector, or creates a new
Element wrapper around a native HTMLElement instance.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `query` | T |  |  |
| `context` | ElementView |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1428">boost.js/src/elements.ts#L1428</a></div>

## $$ <span class="signature">(selector: T, context: ElementView): QueryResults&lt;T&gt;</span>

Finds all elements that match a specific CSS selector.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `selector` | T |  |  |
| `context` | ElementView |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/elements.ts#L1436">boost.js/src/elements.ts#L1436</a></div>

## $N <span class="signature">(tag: T, attributes: Obj&lt;any&gt;, parent: ElementView): CreateResult&lt;T&gt;</span>

Creates a new Element instance from a given set of options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `tag` | T |  |  |
| `attributes` | Obj&lt;any&gt; | ... |  |
| `parent` | ElementView |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/animate.ts#L38">boost.js/src/animate.ts#L38</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/observable.ts#L33">boost.js/src/observable.ts#L33</a></div>

## batch <span class="signature">(callback: (): void): void</span>

Batch multiple observable changes together into a single callback.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callback` | (): void |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/browser.ts#L366">boost.js/src/browser.ts#L366</a></div>

## bindAccessibilityEvents <span class="signature">(): void</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/events.ts#L596">boost.js/src/events.ts#L596</a></div>

## bindEvent <span class="signature">($el: ElementView, event: string, fn: EventCallback, options: EventListenerOptions): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `$el` | ElementView |  |  |
| `event` | string |  |  |
| `fn` | EventCallback |  |  |
| `options` | EventListenerOptions |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/events.ts#L63">boost.js/src/events.ts#L63</a></div>

## canvasPointerPosition <span class="signature">(event: ScreenEvent, $canvas: CanvasView): Point</span>

Gets the pointer position from an event triggered on an `<canvas>` element,
in the coordinate system of the `<canvas>` element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `event` | ScreenEvent |  |  |
| `$canvas` | CanvasView |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/svg.ts#L129">boost.js/src/svg.ts#L129</a></div>

## cleanSVG <span class="signature">(node: El): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `node` | El |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/eval.ts#L473">boost.js/src/eval.ts#L473</a></div>

## compile <span class="signature">(expr: string): (context: {}, local: {}): undefined|T</span>

Compiles a JS expression into a function that can be evaluated with context.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `expr` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/eval.ts#L489">boost.js/src/eval.ts#L489</a></div>

## compileString <span class="signature">(expr: string): (vars: any): string</span>

Converts an expression string into an executable JS function. It will replace
all `${x}` type expressions and evaluate them based on a context.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `expr` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/confetti.ts#L67">boost.js/src/confetti.ts#L67</a></div>

## confetti <span class="signature">(duration: number, maxParticles: number): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `duration` | number | 2000 |  |
| `maxParticles` | number | 150 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/svg.ts#L157">boost.js/src/svg.ts#L157</a></div>

## copySVGStyles <span class="signature">(source: El, copy: El, isHTML: boolean): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | El |  |  |
| `copy` | El |  |  |
| `isHTML` | boolean | false |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/ajax.ts#L141">boost.js/src/ajax.ts#L141</a></div>

## deferredPost <span class="signature">(url: string, data: PostData): void</span>

Utility function to throttle repeated POST requests. A request to the same
URL will be made at most every 5s, and the corresponding data objects will
be deep-merged.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `url` | string |  |  |
| `data` | PostData |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/animate.ts#L130">boost.js/src/animate.ts#L130</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/animate.ts#L236">boost.js/src/animate.ts#L236</a></div>

## enter <span class="signature">($el: ElementView, effect: string, duration: number, _delay: number): AnimationResponse</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `$el` | ElementView |  |  |
| `effect` | string | 'fade' |  |
| `duration` | number | 500 |  |
| `_delay` | number | 0 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/animate.ts#L288">boost.js/src/animate.ts#L288</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/ajax.ts#L45">boost.js/src/ajax.ts#L45</a></div>

## fromQueryString <span class="signature">(str: string): Obj&lt;string&gt;</span>

Converts an HTML query string to JSON object.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `str` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/thread.ts#L15">boost.js/src/thread.ts#L15</a></div>

## functionToWorker <span class="signature">(fn: (): any): string</span>

Converts a function into a WebWorker URL object that can be passed into
thread(). Note that `fn` has to be a single function with no external
references or bindings, so that it can be stringified using .toString().

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fn` | (): any |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/events.ts#L76">boost.js/src/events.ts#L76</a></div>

## getEventTarget <span class="signature">(event: ScreenEvent): ElementView</span>

Get the target element for an event, including for touch/pointer events
that started on a different element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `event` | ScreenEvent |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/events.ts#L345">boost.js/src/events.ts#L345</a></div>

## hover <span class="signature">($el: ElementView, options: HoverEventOptions): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `$el` | ElementView |  |  |
| `options` | HoverEventOptions |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/ajax.ts#L93">boost.js/src/ajax.ts#L93</a></div>

## loadImage <span class="signature">(url: string, credentials: boolean): Promise&lt;HTMLImageElement&gt;</span>

Asynchronously loads an Image.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `url` | string |  |  |
| `credentials` | boolean | false |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/ajax.ts#L82">boost.js/src/ajax.ts#L82</a></div>

## loadScript <span class="signature">(src: string): Promise&lt;unknown&gt;</span>

Asynchronously loads and executes a JS script.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `src` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/observable.ts#L45">boost.js/src/observable.ts#L45</a></div>

## observe <span class="signature">(state: T, parentModel: any): Observable&lt;T&gt;</span>

Convert object to an observable Proxy with .watch() callbacks.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `state` | T |  |  |
| `parentModel` | any |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/svg.ts#L65">boost.js/src/svg.ts#L65</a></div>

## parsePath <span class="signature">(d: string): Array&lt;Point&gt;</span>

Return all points on an SVG path. Essentially, this turns a curved path into
a polygon with just the joins/corners selected.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `d` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/svg.ts#L18">boost.js/src/svg.ts#L18</a></div>

## pathCommands <span class="signature">(path: string): Array&lt;PathCommand&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `path` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/events.ts#L254">boost.js/src/events.ts#L254</a></div>

## pointerOver <span class="signature">($el: ElementView, fns: OverEventOptions): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `$el` | ElementView |  |  |
| `fns` | OverEventOptions |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/events.ts#L37">boost.js/src/events.ts#L37</a></div>

## pointerPosition <span class="signature">(e: any): Point</span>

Gets the pointer position from an event.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `e` | any |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/ajax.ts#L64">boost.js/src/ajax.ts#L64</a></div>

## post <span class="signature">(url: string, data: PostData|FormData): Promise&lt;string&gt;</span>

Asynchronously loads a resource using a POST request. This utility function
automatically form-encodes JSON data and adds a CSRF header.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `url` | string |  |  |
| `data` | PostData|FormData |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/webcomponents.ts#L113">boost.js/src/webcomponents.ts#L113</a></div>

## register <span class="signature">(tagName: string, options: CustomElementOptions): (ElementClass: CustomElementConstructor): void</span>

Decorator for registering a new custom HTML element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `tagName` | string |  |  |
| `options` | CustomElementOptions | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/browser.ts#L333">boost.js/src/browser.ts#L333</a></div>

## replaceSvgImports <span class="signature">(): void</span>

Replaces SVG `<use>` imports that are not supported by older browsers.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/events.ts#L146">boost.js/src/events.ts#L146</a></div>

## slide <span class="signature">($el: ElementView, fns: SlideEventOptions): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `$el` | ElementView |  |  |
| `fns` | SlideEventOptions |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/events.ts#L54">boost.js/src/events.ts#L54</a></div>

## svgPointerPosn <span class="signature">(event: ScreenEvent, $svg: SVGParentView): Point</span>

Gets the pointer position from an event triggered on an `<svg>` element, in
the coordinate system of the `<svg>` element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `event` | ScreenEvent |  |  |
| `$svg` | SVGParentView |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/thread.ts#L26">boost.js/src/thread.ts#L26</a></div>

## thread <span class="signature">(url: string|URL, data: any, timeout: number): Promise&lt;T&gt;</span>

Creates a new web worker, posts it a serializable data object, and returns
when the worker responds (or after a fixed timeout).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `url` | string|URL |  |  |
| `data` | any |  |  |
| `timeout` | number | 5000 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/ajax.ts#L22">boost.js/src/ajax.ts#L22</a></div>

## toQueryString <span class="signature">(data: PostData): string</span>

Converts a JSON object to an HTML query string.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | PostData |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/animate.ts#L149">boost.js/src/animate.ts#L149</a></div>

## transition <span class="signature">($el: ElementView, properties: AnimationProperties, duration: number, _delay: number, easing: string): AnimationResponse</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `$el` | ElementView |  |  |
| `properties` | AnimationProperties |  |  |
| `duration` | number | 400 |  |
| `_delay` | number | 0 |  |
| `easing` | string | 'ease-in-out' |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/events.ts#L609">boost.js/src/events.ts#L609</a></div>

## unbindEvent <span class="signature">($el: ElementView, event: string, fn: EventCallback): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `$el` | ElementView |  |  |
| `event` | string |  |  |
| `fn` | EventCallback |  |  |


</div>