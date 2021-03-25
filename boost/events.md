---
layout: page
nav_order: 8
parent: Boost.js
---

# Events

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/events.ts#L30">events.ts#L30</a></div>

## <span class="pill">Type alias</span> EventCallback

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/events.ts#L28">events.ts#L28</a></div>

## <span class="pill">Type alias</span> ScreenEvent

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/events.ts#L29">events.ts#L29</a></div>

## <span class="pill">Type alias</span> ScrollEvent

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/events.ts#L587">events.ts#L587</a></div>

## bindEvent <span class="signature">($el: ElementView, event: string, fn: EventCallback, options: EventListenerOptions): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `$el` | ElementView |  |  |
| `event` | string |  |  |
| `fn` | EventCallback |  |  |
| `options` | EventListenerOptions |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/events.ts#L63">events.ts#L63</a></div>

## canvasPointerPosition <span class="signature">(event: ScreenEvent, $canvas: CanvasView): Point</span>

Gets the pointer position from an event triggered on an `<canvas>` element,
in the coordinate system of the `<canvas>` element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `event` | ScreenEvent |  |  |
| `$canvas` | CanvasView |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/events.ts#L76">events.ts#L76</a></div>

## getEventTarget <span class="signature">(event: ScreenEvent): ElementView</span>

Get the target element for an event, including for touch/pointer events
that started on a different element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `event` | ScreenEvent |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/events.ts#L339">events.ts#L339</a></div>

## hover <span class="signature">($el: ElementView, options: HoverEventOptions): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `$el` | ElementView |  |  |
| `options` | HoverEventOptions |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/events.ts#L248">events.ts#L248</a></div>

## pointerOver <span class="signature">($el: ElementView, fns: OverEventOptions): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `$el` | ElementView |  |  |
| `fns` | OverEventOptions |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/events.ts#L37">events.ts#L37</a></div>

## pointerPosition <span class="signature">(e: any): Point</span>

Gets the pointer position from an event.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `e` | any |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/events.ts#L140">events.ts#L140</a></div>

## slide <span class="signature">($el: ElementView, fns: SlideEventOptions): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `$el` | ElementView |  |  |
| `fns` | SlideEventOptions |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/events.ts#L54">events.ts#L54</a></div>

## svgPointerPosn <span class="signature">(event: ScreenEvent, $svg: SVGParentView): Point</span>

Gets the pointer position from an event triggered on an `<svg>` element, in
the coordinate system of the `<svg>` element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `event` | ScreenEvent |  |  |
| `$svg` | SVGParentView |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/boost.js/tree/master/src/events.ts#L600">events.ts#L600</a></div>

## unbindEvent <span class="signature">($el: ElementView, event: string, fn: EventCallback): void</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `$el` | ElementView |  |  |
| `event` | string |  |  |
| `fn` | EventCallback |  |  |


</div>