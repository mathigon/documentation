---
layout: page
nav_order: 5
parent: Boost.js
---

# Draggable

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/draggable.ts#L34">boost.js/src/draggable.ts#L34</a></div>

## <span class="pill">Class</span> Draggable

A draggable HTML element.

Extends EventTarget

<div class="docs-item" markdown="1">

### constructor <span class="signature">($el: ElementView, $parent: ElementView, options: DraggableOptions): Draggable</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `$el` | ElementView |  |  |
| `$parent` | ElementView |  |  |
| `options` | DraggableOptions | ... |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">readonly</span> <span class="pill">Property</span> .$el <span class="signature">: ElementView</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/draggable.ts#L37">boost.js/src/draggable.ts#L37</a></div>

### <span class="pill">Property</span> .disabled <span class="signature">: boolean</span>

Default value: `false`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/draggable.ts#L39">boost.js/src/draggable.ts#L39</a></div>

### <span class="pill">Property</span> .height <span class="signature">: number</span>

Default value: `0`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/draggable.ts#L35">boost.js/src/draggable.ts#L35</a></div>

### <span class="pill">Property</span> .options <span class="signature">: DraggableOptions</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/draggable.ts#L36">boost.js/src/draggable.ts#L36</a></div>

### <span class="pill">Property</span> .position <span class="signature">: Point</span>

Default value: `...`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/draggable.ts#L38">boost.js/src/draggable.ts#L38</a></div>

### <span class="pill">Property</span> .width <span class="signature">: number</span>

Default value: `0`

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/core.js/src/events.ts#L35">core.js/src/events.ts#L35</a></div>

### <span class="pill">Method</span> .off <span class="signature">(events: string, fn: EventCallback): void</span>

Removes an event listener from one or more events.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `events` | string |  |  |
| `fn` | EventCallback |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/core.js/src/events.ts#L18">core.js/src/events.ts#L18</a></div>

### <span class="pill">Method</span> .on <span class="signature">(events: string, fn: EventCallback): void</span>

Adds an event listener for one or more events.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `events` | string |  |  |
| `fn` | EventCallback |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/core.js/src/events.ts#L26">core.js/src/events.ts#L26</a></div>

### <span class="pill">Method</span> .one <span class="signature">(events: string, fn: EventCallback): void</span>

Adds a one-time event listener to one or more events.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `events` | string |  |  |
| `fn` | EventCallback |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/draggable.ts#L79">boost.js/src/draggable.ts#L79</a></div>

### <span class="pill">Method</span> .setDimensions <span class="signature">($parent: ElementView): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `$parent` | ElementView |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/boost.js/src/draggable.ts#L90">boost.js/src/draggable.ts#L90</a></div>

### <span class="pill">Method</span> .setPosition <span class="signature">(x: number, y: number): void</span>

Sets the position of the element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | number |  |  |
| `y` | number |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/core.js/src/events.ts#L44">core.js/src/events.ts#L44</a></div>

### <span class="pill">Method</span> .trigger <span class="signature">(events: string, arg: any): void</span>

Triggers one or more events, and executes all bound event listeners.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `events` | string |  |  |
| `arg` | any |  |  |


</div>

</div>