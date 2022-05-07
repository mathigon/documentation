---
layout: page
nav_order: 15
parent: Boost.js
---

# Webcomponents

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/webcomponents.ts#L99">webcomponents.ts#L99</a></div>

## <span class="pill">Class</span> CustomElementView

Base class for custom HTML elements. In addition to other custom methods,
it can implement `created()` and `ready()` methods that are executed during
the element lifecycle.

Extends HTMLBaseView&lt;CustomHTMLElement&gt;

<div class="docs-item" markdown="1">

### constructor <span class="signature">(_el: CustomHTMLElement): CustomElementView</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_el` | CustomHTMLElement |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L43">elements.ts#L43</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> ._data <span class="signature">: Obj&lt;any&gt;</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> ._el <span class="signature">: CustomHTMLElement</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L44">elements.ts#L44</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> ._events <span class="signature">: Obj&lt;Array&lt;EventCallback&gt;&gt;</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L46">elements.ts#L46</a></div>

### <span class="pill">Property</span> .model <span class="signature">?: any</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L45">elements.ts#L45</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type <span class="signature">: string</span>

Default value: `'default'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L115">elements.ts#L115</a></div>

### <span class="pill">Accessor</span> .attributes

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L288">elements.ts#L288</a></div>

### <span class="pill">Accessor</span> .bounds <span class="signature">: DOMRect</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L292">elements.ts#L292</a></div>

### <span class="pill">Accessor</span> .boundsRect <span class="signature">: Rectangle</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L313">elements.ts#L313</a></div>

### <span class="pill">Accessor</span> .boxCenter <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L572">elements.ts#L572</a></div>

### <span class="pill">Accessor</span> .childNodes

Returns an array of all child nodes, including text nodes.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L567">elements.ts#L567</a></div>

### <span class="pill">Accessor</span> .children

Returns an array of all children of this element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L57">elements.ts#L57</a></div>

### <span class="pill">Accessor</span> .data <span class="signature">: DOMStringMap</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L760">elements.ts#L760</a></div>

### <span class="pill">Accessor</span> .height <span class="signature">: number</span>

Returns this element's height, including border and padding.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L120">elements.ts#L120</a></div>

### <span class="pill">Accessor</span> .html <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L53">elements.ts#L53</a></div>

### <span class="pill">Accessor</span> .id <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L772">elements.ts#L772</a></div>

### <span class="pill">Accessor</span> .innerHeight <span class="signature">: number</span>

Returns this element's height, excluding border and padding.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L765">elements.ts#L765</a></div>

### <span class="pill">Accessor</span> .innerWidth <span class="signature">: number</span>

Returns this element's width, excluding border and padding.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L302">elements.ts#L302</a></div>

### <span class="pill">Accessor</span> .isInViewport <span class="signature">: boolean</span>

Checks if this element is currently visible in the viewport.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L519">elements.ts#L519</a></div>

### <span class="pill">Accessor</span> .next <span class="signature">: ElementView</span>

Returns this element's next sibling, or undefined.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L746">elements.ts#L746</a></div>

### <span class="pill">Accessor</span> .offsetLeft <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L750">elements.ts#L750</a></div>

### <span class="pill">Accessor</span> .offsetParent <span class="signature">: ElementView</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L742">elements.ts#L742</a></div>

### <span class="pill">Accessor</span> .offsetTop <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L786">elements.ts#L786</a></div>

### <span class="pill">Accessor</span> .outerHeight <span class="signature">: number</span>

Returns this element's height, including margins.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L779">elements.ts#L779</a></div>

### <span class="pill">Accessor</span> .outerWidth <span class="signature">: number</span>

Returns this element's width, including margins.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L539">elements.ts#L539</a></div>

### <span class="pill">Accessor</span> .parent <span class="signature">: HTMLView</span>

Returns this element's parent, or undefined.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L806">elements.ts#L806</a></div>

### <span class="pill">Accessor</span> .positionLeft <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L793">elements.ts#L793</a></div>

### <span class="pill">Accessor</span> .positionTop <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L524">elements.ts#L524</a></div>

### <span class="pill">Accessor</span> .prev <span class="signature">: ElementView</span>

Returns this element's previous sibling, or undefined.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L415">elements.ts#L415</a></div>

### <span class="pill">Accessor</span> .scale

Finds the x and y scale of this element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L330">elements.ts#L330</a></div>

### <span class="pill">Accessor</span> .scrollHeight <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L343">elements.ts#L343</a></div>

### <span class="pill">Accessor</span> .scrollLeft <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L334">elements.ts#L334</a></div>

### <span class="pill">Accessor</span> .scrollTop <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L326">elements.ts#L326</a></div>

### <span class="pill">Accessor</span> .scrollWidth <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L61">elements.ts#L61</a></div>

### <span class="pill">Accessor</span> .tagName <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L128">elements.ts#L128</a></div>

### <span class="pill">Accessor</span> .text <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L137">elements.ts#L137</a></div>

### <span class="pill">Accessor</span> .textStr

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L308">elements.ts#L308</a></div>

### <span class="pill">Accessor</span> .topLeftPosition <span class="signature">: Point</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L398">elements.ts#L398</a></div>

### <span class="pill">Accessor</span> .transform <span class="signature">: string</span>

Shortcut for getting the CSS transform style of an element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L402">elements.ts#L402</a></div>

### <span class="pill">Accessor</span> .transformMatrix

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L755">elements.ts#L755</a></div>

### <span class="pill">Accessor</span> .width <span class="signature">: number</span>

Returns this element's width, including border and padding.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L529">elements.ts#L529</a></div>

### <span class="pill">Method</span> .$ <span class="signature">(selector: T): QueryResult&lt;T&gt;</span>

The first child element matching a given selector.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `selector` | T |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L534">elements.ts#L534</a></div>

### <span class="pill">Method</span> .$$ <span class="signature">(selector: T): QueryResults&lt;T&gt;</span>

All child elements matching a given selector.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `selector` | T |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L70">elements.ts#L70</a></div>

### <span class="pill">Method</span> .addClass <span class="signature">(className: string): void</span>

Adds one or more space-separated classes to this element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L701">elements.ts#L701</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L499">elements.ts#L499</a></div>

### <span class="pill">Method</span> .append <span class="signature">(newChild: ElementView|Text): void</span>

Adds a new child element at the end of this one.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `newChild` | ElementView|Text |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L95">elements.ts#L95</a></div>

### <span class="pill">Method</span> .attr <span class="signature">(attr: string): string</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `attr` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L159">elements.ts#L159</a></div>

### <span class="pill">Method</span> .bindModel <span class="signature">(model: any, recursive: boolean): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `model` | any |  |  |
| `recursive` | boolean | true |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L182">elements.ts#L182</a></div>

### <span class="pill">Method</span> .bindVariable <span class="signature">(_model: any, _name: string): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_model` | any |  |  |
| `_name` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L142">elements.ts#L142</a></div>

### <span class="pill">Method</span> .blur <span class="signature">(): void</span>

Blurs this DOM element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L297">elements.ts#L297</a></div>

### <span class="pill">Method</span> .contains <span class="signature">(point: Point): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `point` | Point |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L609">elements.ts#L609</a></div>

### <span class="pill">Method</span> .copy <span class="signature">(recursive: boolean): ElementView</span>

Creates a copy of this element, and optionally its children.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `recursive` | boolean | true |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/webcomponents.ts#L100">webcomponents.ts#L100</a></div>

### <span class="pill">Method</span> .created <span class="signature">(): void</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L384">elements.ts#L384</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L589">elements.ts#L589</a></div>

### <span class="pill">Method</span> .detach <span class="signature">(): void</span>

Detaches an element from the DOM.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L728">elements.ts#L728</a></div>

### <span class="pill">Method</span> .effect <span class="signature">(className: string): void</span>

Triggers a CSS animation in an element by adding a class and removing it
after the `animationEnd` event.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L713">elements.ts#L713</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L65">elements.ts#L65</a></div>

### <span class="pill">Method</span> .equals <span class="signature">(el: ElementView): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `el` | ElementView |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L720">elements.ts#L720</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L147">elements.ts#L147</a></div>

### <span class="pill">Method</span> .focus <span class="signature">(): void</span>

Focuses this DOM element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L154">elements.ts#L154</a></div>

### <span class="pill">Method</span> .getParentModel <span class="signature">(): any</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L99">elements.ts#L99</a></div>

### <span class="pill">Method</span> .hasAttr <span class="signature">(attr: string): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `attr` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L78">elements.ts#L78</a></div>

### <span class="pill">Method</span> .hasClass <span class="signature">(className: string): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L556">elements.ts#L556</a></div>

### <span class="pill">Method</span> .hasParent <span class="signature">($p: Array&lt;ElementView&gt;): boolean</span>

Checks if this element has one of the given elements as parent.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `$p` | Array&lt;ElementView&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L453">elements.ts#L453</a></div>

### <span class="pill">Method</span> .hide <span class="signature">(): void</span>

Makes the element invisible, using CSS visibility (if
`data-display="visibility"`), or `display: none`.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L481">elements.ts#L481</a></div>

### <span class="pill">Method</span> .index <span class="signature">(): number</span>

Finds the index of an elements, in the list of its siblings.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L509">elements.ts#L509</a></div>

### <span class="pill">Method</span> .insertAfter <span class="signature">(newChild: ElementView): void</span>

Adds a new element immediately after this one, as a sibling.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `newChild` | ElementView |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L504">elements.ts#L504</a></div>

### <span class="pill">Method</span> .insertBefore <span class="signature">(newChild: ElementView): void</span>

Adds a new element immediately before this one, as a sibling.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `newChild` | ElementView |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L475">elements.ts#L475</a></div>

### <span class="pill">Method</span> .is <span class="signature">(selector: string): boolean</span>

Checks if an element matches a given CSS selector.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `selector` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L644">elements.ts#L644</a></div>

### <span class="pill">Method</span> .off <span class="signature">(events: string, callback: EventCallback): void</span>

Removes an event listener on this element. If callback is undefined, it
removes all event listeners for this event.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `events` | string |  |  |
| `callback` | EventCallback |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L819">elements.ts#L819</a></div>

### <span class="pill">Method</span> .offset <span class="signature">(parent: HTMLView): {bottom: number, left: number, right: number, top: number}</span>

Calculates the element offset relative to any other parent element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `parent` | HTMLView |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L618">elements.ts#L618</a></div>

### <span class="pill">Method</span> .on <span class="signature">(events: string, callback: EventCallback, options: EventListenerOptions): void</span>

Binds one ore more space-separated event listeners on this element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `events` | string |  |  |
| `callback` | EventCallback |  |  |
| `options` | EventListenerOptions |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L672">elements.ts#L672</a></div>

### <span class="pill">Method</span> .onAttr <span class="signature">(name: string, callback: (value: string, initial: boolean): void): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string |  |  |
| `callback` | (value: string, initial: boolean): void |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L665">elements.ts#L665</a></div>

### <span class="pill">Method</span> .onKeyDown <span class="signature">(keys: string, callback: (e: KeyboardEvent): void): void</span>

Binds an event listener for a specific key that is pressed while this
element is in focus.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `keys` | string |  |  |
| `callback` | (e: KeyboardEvent): void |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L688">elements.ts#L688</a></div>

### <span class="pill">Method</span> .onPromise <span class="signature">(event: string, resolveImmediately: boolean): Promise&lt;void&gt;</span>

Returns a promise that is resolved when an event is triggered.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `event` | string |  |  |
| `resolveImmediately` | boolean | false |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L632">elements.ts#L632</a></div>

### <span class="pill">Method</span> .one <span class="signature">(events: string, callback: EventCallback, options: EventListenerOptions): void</span>

Binds a one-time event listener on this element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `events` | string |  |  |
| `callback` | EventCallback |  |  |
| `options` | EventListenerOptions |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L545">elements.ts#L545</a></div>

### <span class="pill">Method</span> .parents <span class="signature">(selector: string): Array&lt;HTMLView&gt;</span>

Finds all parent elements that match a specific selector.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `selector` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L489">elements.ts#L489</a></div>

### <span class="pill">Method</span> .prepend <span class="signature">(newChild: ElementView): void</span>

Adds a new child element at the beginning of this one.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `newChild` | ElementView |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/webcomponents.ts#L104">webcomponents.ts#L104</a></div>

### <span class="pill">Method</span> .ready <span class="signature">(): void</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L596">elements.ts#L596</a></div>

### <span class="pill">Method</span> .remove <span class="signature">(): void</span>

Removes this element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L111">elements.ts#L111</a></div>

### <span class="pill">Method</span> .removeAttr <span class="signature">(attr: string): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `attr` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L604">elements.ts#L604</a></div>

### <span class="pill">Method</span> .removeChildren <span class="signature">(): void</span>

Removes all children of this element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L74">elements.ts#L74</a></div>

### <span class="pill">Method</span> .removeClass <span class="signature">(className: string): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L581">elements.ts#L581</a></div>

### <span class="pill">Method</span> .restartAnimation <span class="signature">(): void</span>

Detach and re-insert to restart CSS animations.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L369">elements.ts#L369</a></div>

### <span class="pill">Method</span> .scrollBy <span class="signature">(distance: number, time: number, easing: string): void</span>

Scrolls the element by a given distance.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `distance` | number |  |  |
| `time` | number | 1000 |  |
| `easing` | string | 'cubic' |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L353">elements.ts#L353</a></div>

### <span class="pill">Method</span> .scrollTo <span class="signature">(pos: number, time: number, easing: string): void</span>

Scrolls the element to a specific position.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `pos` | number |  |  |
| `time` | number | 1000 |  |
| `easing` | string | 'cubic' |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L103">elements.ts#L103</a></div>

### <span class="pill">Method</span> .setAttr <span class="signature">(attr: string, value: any): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `attr` | string |  |  |
| `value` | any |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L87">elements.ts#L87</a></div>

### <span class="pill">Method</span> .setClass <span class="signature">(className: string, condition: boolean): void</span>

Toggles multiple space-separated class names based on a condition.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | string |  |  |
| `condition` | boolean |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L421">elements.ts#L421</a></div>

### <span class="pill">Method</span> .setTransform <span class="signature">(posn: SimplePoint, angle: number, scale: number): void</span>

Sets the CSS transform on this element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `posn` | SimplePoint |  |  |
| `angle` | number | 0 |  |
| `scale` | number | 1 |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L439">elements.ts#L439</a></div>

### <span class="pill">Method</span> .show <span class="signature">(): void</span>

Makes the element visible. Use the `data-display` attribute to determine
how this is done. Possible options are `visibility`, to use CSS visibility,
or CSS display values. The default is `display: block`.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L462">elements.ts#L462</a></div>

### <span class="pill">Method</span> .toggle <span class="signature">(show: boolean): void</span>

Hides or shows the element based on a boolean value.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `show` | boolean |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L82">elements.ts#L82</a></div>

### <span class="pill">Method</span> .toggleClass <span class="signature">(className: string): boolean</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L189">elements.ts#L189</a></div>

### <span class="pill">Method</span> .toggleDOM <span class="signature">(show: boolean): void</span>

Conditionally hide this element from the DOM (using placeholder comments).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `show` | boolean | true |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L430">elements.ts#L430</a></div>

### <span class="pill">Method</span> .translate <span class="signature">(x: number, y: number): void</span>

Sets the CSS transform of this element to an x/y translation.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `y` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L654">elements.ts#L654</a></div>

### <span class="pill">Method</span> .trigger <span class="signature">(events: string, args: any): void</span>

Triggers a specific event on this element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `events` | string |  |  |
| `args` | any | ... |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/webcomponents.ts#L113">webcomponents.ts#L113</a></div>

## register <span class="signature">(tagName: string, options: CustomElementOptions): (ElementClass: CustomElementConstructor): void</span>

Decorator for registering a new custom HTML element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `tagName` | string |  |  |
| `options` | CustomElementOptions | ... |  |


</div>