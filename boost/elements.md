---
layout: page
nav_order: 7
parent: Boost.js
---

# Elements

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L42">elements.ts#L42</a></div>

## <span class="pill">Class</span> BaseView

<div class="docs-item" markdown="1">

### constructor <span class="signature">(_el: T): BaseView&lt;T&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `_el` | T |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L186">elements.ts#L186</a></div>

### <span class="pill">Property</span> .$placeholder

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L43">elements.ts#L43</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> ._data <span class="signature">: Obj&lt;any&gt;</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> ._el <span class="signature">: T</span>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L320">elements.ts#L320</a></div>

### <span class="pill">Accessor</span> .height <span class="signature">: number</span>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L539">elements.ts#L539</a></div>

### <span class="pill">Accessor</span> .parent <span class="signature">: HTMLView</span>

Returns this element's parent, or undefined.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L322">elements.ts#L322</a></div>

### <span class="pill">Accessor</span> .positionLeft <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L324">elements.ts#L324</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L318">elements.ts#L318</a></div>

### <span class="pill">Accessor</span> .width <span class="signature">: number</span>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L709">elements.ts#L709</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L736">elements.ts#L736</a></div>

### <span class="pill">Method</span> .effect <span class="signature">(className: string): void</span>

Triggers a CSS animation in an element by adding a class and removing it
after the `animationEnd` event.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L721">elements.ts#L721</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L728">elements.ts#L728</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L204">elements.ts#L204</a></div>

### <span class="pill">Method</span> .makeDynamicAttribute <span class="signature">(name: string, value: string, model: any): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string |  |  |
| `value` | string |  |  |
| `model` | any |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L249">elements.ts#L249</a></div>

### <span class="pill">Method</span> .makeDynamicList <span class="signature">(model: any): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `model` | any |  |  |


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

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L680">elements.ts#L680</a></div>

### <span class="pill">Method</span> .onAttr <span class="signature">(name: string, callback: (value: string, initial: boolean): void): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string |  |  |
| `callback` | (value: string, initial: boolean): void |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L665">elements.ts#L665</a></div>

### <span class="pill">Method</span> .onKey <span class="signature">(keys: string, callback: (e: KeyboardEvent, key: string): void, options: {meta?: undefined|boolean, up?: undefined|boolean}): void</span>

Binds an event listener for a specific key that is pressed while this
element is in focus.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `keys` | string |  |  |
| `callback` | (e: KeyboardEvent, key: string): void |  |  |
| `options` | {meta?: undefined|boolean, up?: undefined|boolean} |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L696">elements.ts#L696</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1285">elements.ts#L1285</a></div>

## <span class="pill">Class</span> CanvasView

Extends HTMLBaseView&lt;HTMLCanvasElement&gt;

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1286">elements.ts#L1286</a></div>

### <span class="pill">Property</span> ._ctx

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1287">elements.ts#L1287</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'canvas'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1305">elements.ts#L1305</a></div>

### <span class="pill">Accessor</span> .canvasHeight <span class="signature">: number</span>

Returns the intrinsic pixel height of this `<canvas>` element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1300">elements.ts#L1300</a></div>

### <span class="pill">Accessor</span> .canvasWidth <span class="signature">: number</span>

Returns the intrinsic pixel width of this `<canvas>` element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1310">elements.ts#L1310</a></div>

### <span class="pill">Accessor</span> .ctx <span class="signature">: CanvasRenderingContext2D</span>

Cached reference to the 2D context for this `<canvas>` element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1323">elements.ts#L1323</a></div>

### <span class="pill">Method</span> .clear <span class="signature">(): void</span>

Clears this canvas.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1336">elements.ts#L1336</a></div>

### <span class="pill">Method</span> .clearCircle <span class="signature">(center: Point, radius: number): void</span>

Erase a specific circle of the canvas.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `center` | Point |  |  |
| `radius` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1345">elements.ts#L1345</a></div>

### <span class="pill">Method</span> .downloadImage <span class="signature">(fileName: string): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fileName` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1316">elements.ts#L1316</a></div>

### <span class="pill">Method</span> .draw <span class="signature">(obj: GeoShape, options: CanvasDrawingOptions): void</span>

Draws a generic geometry object ont a `<canvas>` element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `obj` | GeoShape |  |  |
| `options` | CanvasDrawingOptions | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1328">elements.ts#L1328</a></div>

### <span class="pill">Method</span> .fill <span class="signature">(color: string): void</span>

Clears this canvas.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1290">elements.ts#L1290</a></div>

### <span class="pill">Method</span> .getContext <span class="signature">(c: string, options: WebGLContextAttributes): |CanvasRenderingContext2D|ImageBitmapRenderingContext|WebGLRenderingContext|WebGL2RenderingContext</span>

Returns the drawing context for a `<canvas>` element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c` | string | '2d' |  |
| `options` | WebGLContextAttributes | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1295">elements.ts#L1295</a></div>

### <span class="pill">Method</span> .image <span class="signature">(type: png|jpg): string</span>

Converts a Canvas element into a PNG or JPEG data URI.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | png|jpg | 'png' |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1167">elements.ts#L1167</a></div>

## <span class="pill">Class</span> FormView

Extends HTMLBaseView&lt;HTMLFormElement&gt;

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1168">elements.ts#L1168</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'form'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1170">elements.ts#L1170</a></div>

### <span class="pill">Accessor</span> .action <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1175">elements.ts#L1175</a></div>

### <span class="pill">Accessor</span> .formData <span class="signature">: Obj&lt;string&gt;</span>

Summarises the data for an HTML <form> element in an JSON Object.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1184">elements.ts#L1184</a></div>

### <span class="pill">Accessor</span> .isValid <span class="signature">: boolean</span>

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L748">elements.ts#L748</a></div>

## <span class="pill">Class</span> HTMLBaseView

Extends BaseView&lt;T&gt;

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L780">elements.ts#L780</a></div>

### <span class="pill">Accessor</span> .innerHeight <span class="signature">: number</span>

Returns this element's height, excluding border and padding.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L773">elements.ts#L773</a></div>

### <span class="pill">Accessor</span> .innerWidth <span class="signature">: number</span>

Returns this element's width, excluding border and padding.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L754">elements.ts#L754</a></div>

### <span class="pill">Accessor</span> .offsetLeft <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L758">elements.ts#L758</a></div>

### <span class="pill">Accessor</span> .offsetParent <span class="signature">: ElementView</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L750">elements.ts#L750</a></div>

### <span class="pill">Accessor</span> .offsetTop <span class="signature">: number</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L794">elements.ts#L794</a></div>

### <span class="pill">Accessor</span> .outerHeight <span class="signature">: number</span>

Returns this element's height, including margins.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L787">elements.ts#L787</a></div>

### <span class="pill">Accessor</span> .outerWidth <span class="signature">: number</span>

Returns this element's width, including margins.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L827">elements.ts#L827</a></div>

### <span class="pill">Method</span> .offset <span class="signature">(parent: HTMLView): {bottom: number, left: number, right: number, top: number}</span>

Calculates the element offset relative to any other parent element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `parent` | HTMLView |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1189">elements.ts#L1189</a></div>

## <span class="pill">Class</span> InputView

Extends HTMLBaseView&lt;InputFieldElement&gt;

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1190">elements.ts#L1190</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'input'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1192">elements.ts#L1192</a></div>

### <span class="pill">Accessor</span> .checked <span class="signature">: boolean</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1276">elements.ts#L1276</a></div>

### <span class="pill">Accessor</span> .isValid <span class="signature">: boolean</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1200">elements.ts#L1200</a></div>

### <span class="pill">Accessor</span> .value <span class="signature">: string</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1208">elements.ts#L1208</a></div>

### <span class="pill">Method</span> .bindVariable <span class="signature">(model: any, name: string): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `model` | any |  |  |
| `name` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1258">elements.ts#L1258</a></div>

### <span class="pill">Method</span> .change <span class="signature">(callback: (val: string): void): void</span>

Binds a change event listener.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callback` | (val: string): void |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1250">elements.ts#L1250</a></div>

### <span class="pill">Method</span> .setInputPattern <span class="signature">(value: string): void</span>

Polyfill for type and inputmode attributes.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1272">elements.ts#L1272</a></div>

### <span class="pill">Method</span> .setValidity <span class="signature">(str: string): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `str` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1268">elements.ts#L1268</a></div>

### <span class="pill">Method</span> .validate <span class="signature">(callback: (value: string): string): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callback` | (value: string): string |  |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1357">elements.ts#L1357</a></div>

## <span class="pill">Class</span> MediaView

Extends HTMLBaseView&lt;HTMLMediaElement&gt;

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1365">elements.ts#L1365</a></div>

### <span class="pill">Method</span> .pause <span class="signature">(): void</span>

Pauses playback on a media element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1360">elements.ts#L1360</a></div>

### <span class="pill">Method</span> .play <span class="signature">(): Promise&lt;void&gt;</span>

Starts playback on a media element.

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L854">elements.ts#L854</a></div>

## <span class="pill">Class</span> SVGBaseView

Extends BaseView&lt;T&gt;

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L855">elements.ts#L855</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'svg'`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L858">elements.ts#L858</a></div>

### <span class="pill">Accessor</span> .$ownerSVG <span class="signature">: SVGParentView</span>

Returns the owner `<svg>` which this element is a child of.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L964">elements.ts#L964</a></div>

### <span class="pill">Accessor</span> .center <span class="signature">: Point</span>

Finds the center of an SVG `<circle>` element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L886">elements.ts#L886</a></div>

### <span class="pill">Accessor</span> .inverseTransformMatrix

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L947">elements.ts#L947</a></div>

### <span class="pill">Accessor</span> .points

Returns a list of all points along an SVG `<path>` element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L916">elements.ts#L916</a></div>

### <span class="pill">Accessor</span> .strokeLength <span class="signature">: number</span>

Finds the total stroke length of this element. Similar to the SVG
`getTotalLength()` function, but works for a wider variety of elements.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L958">elements.ts#L958</a></div>

### <span class="pill">Method</span> .addPoint <span class="signature">(p: SimplePoint): void</span>

Appends a new point to an SVG `<path>` element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L993">elements.ts#L993</a></div>

### <span class="pill">Method</span> .draw <span class="signature">(obj: undefined|GeoShape, options: SVGDrawingOptions): void</span>

Draws a generic geometry object onto an SVG `<path>` element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `obj` | undefined|GeoShape |  |  |
| `options` | SVGDrawingOptions | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L942">elements.ts#L942</a></div>

### <span class="pill">Method</span> .getPointAt <span class="signature">(p: number): Point</span>

Gets the coordinates of the point at a position `p` along the length of the
stroke of this `<path>` element, where `0 ≤ p ≤ 1`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L929">elements.ts#L929</a></div>

### <span class="pill">Method</span> .getPointAtLength <span class="signature">(d: number): Point</span>

Gets the coordinates of the point at a distance `d` along the length of the
stroke of this `<path>` element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `d` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L971">elements.ts#L971</a></div>

### <span class="pill">Method</span> .setCenter <span class="signature">(c: SimplePoint): void</span>

Sets the center of an SVG `<circle>` or `<text>` element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `c` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L977">elements.ts#L977</a></div>

### <span class="pill">Method</span> .setLine <span class="signature">(p: SimplePoint, q: SimplePoint): void</span>

Sets the end points of an SVG `<line>` element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `p` | SimplePoint |  |  |
| `q` | SimplePoint |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L985">elements.ts#L985</a></div>

### <span class="pill">Method</span> .setRect <span class="signature">(rect: Rectangle): void</span>

Sets the bounds of an SVG `<rectangle>` element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `rect` | Rectangle |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L902">elements.ts#L902</a></div>

### <span class="pill">Method</span> .setTransform <span class="signature">(posn: SimplePoint, angle: number, scale: number): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `posn` | SimplePoint |  |  |
| `angle` | number | 0 |  |
| `scale` | number | 1 |  |


</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1005">elements.ts#L1005</a></div>

## <span class="pill">Class</span> SVGParentView

Extends SVGBaseView&lt;SVGSVGElement&gt;

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1029">elements.ts#L1029</a></div>

### <span class="pill">Accessor</span> .svgHeight <span class="signature">: number</span>

Returns the intrinsic height of this `<svg>` element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1024">elements.ts#L1024</a></div>

### <span class="pill">Accessor</span> .svgWidth <span class="signature">: number</span>

Returns the intrinsic width of this `<svg>` element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1007">elements.ts#L1007</a></div>

### <span class="pill">Accessor</span> .viewBox <span class="signature">: DOMRect</span>

Returns the viewport coordinates of this `<svg>` element.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1082">elements.ts#L1082</a></div>

### <span class="pill">Method</span> .downloadImage <span class="signature">(fileName: string, width: number, height: number, viewBox: string): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fileName` | string |  |  |
| `width` | number |  |  |
| `height` | number |  |  |
| `viewBox` | string |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1034">elements.ts#L1034</a></div>

### <span class="pill">Method</span> .drawPath <span class="signature">(obj: GeoShape, attributes: Obj&lt;any&gt;, options: SVGDrawingOptions): SVGView</span>

Create a new `<path>` element child and draw a geometry object onto it.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `obj` | GeoShape |  |  |
| `attributes` | Obj&lt;any&gt; | ... |  |
| `options` | SVGDrawingOptions | ... |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1041">elements.ts#L1041</a></div>

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

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1107">elements.ts#L1107</a></div>

## <span class="pill">Class</span> WindowView

Extends HTMLBaseView&lt;HTMLHtmlElement|HTMLBodyElement&gt;

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1108">elements.ts#L1108</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .type

Default value: `'window'`

</div>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L742">elements.ts#L742</a></div>

## <span class="pill">Type alias</span> ElementView <span class="signature">: BaseView&lt;HTMLElement|SVGElement&gt;</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L848">elements.ts#L848</a></div>

## <span class="pill">Type alias</span> HTMLView <span class="signature">: HTMLBaseView&lt;HTMLElement&gt;</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1101">elements.ts#L1101</a></div>

## <span class="pill">Type alias</span> SVGView <span class="signature">: SVGBaseView&lt;SVGGraphicsElement&gt;</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1476">elements.ts#L1476</a></div>

## $body <span class="signature">: WindowView</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1477">elements.ts#L1477</a></div>

## $html <span class="signature">: WindowView</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1411">elements.ts#L1411</a></div>

## $ <span class="signature">(query: T, context: ElementView): QueryResult&lt;T&gt;</span>

Finds the Element that matches a specific CSS selector, or creates a new
Element wrapper around a native HTMLElement instance.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `query` | T |  |  |
| `context` | ElementView |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1442">elements.ts#L1442</a></div>

## $$ <span class="signature">(selector: T, context: ElementView): QueryResults&lt;T&gt;</span>

Finds all elements that match a specific CSS selector.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `selector` | T |  |  |
| `context` | ElementView |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/elements.ts#L1450">elements.ts#L1450</a></div>

## $N <span class="signature">(tag: T, attributes: Obj&lt;any&gt;, parent: ElementView): CreateResult&lt;T&gt;</span>

Creates a new Element instance from a given set of options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `tag` | T |  |  |
| `attributes` | Obj&lt;any&gt; | ... |  |
| `parent` | ElementView |  |  |


</div>