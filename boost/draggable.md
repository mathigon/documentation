---
layout: page
nav_order: 6
parent: Boost.js
---

# Draggable

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