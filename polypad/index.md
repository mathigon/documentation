---
layout: page
nav_order: 7
has_children: true
description: todo
---

# Polypad API Docs

## Setup

Our JavaScript API allows you to add interactive Polypad canvases to any website. You simply need to include our JS source file, create a parent element for Polypad, and then call `Polypad.create()`:

```html
<script src="https://static.mathigon.org/api/polypad-v2.3.js"></script>
<div id="polypad" style="width: 800px; height: 500px;"></div>
<script>Polypad.create(document.querySelector('#polypad'), {apiKey: 'test'})</script>
```

Polypad requires [Custom Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) and the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API). If you want to use browsers that don't support these APIs, you have to include a polyfill, e.g. [mathigon.org/polyfill.js](https://mathigon.org/polyfill.js).

Our goal is to support the latest version of Chrome, Firefox, Opera and Edge on all mobile and desktop devices.

Note: the `polypad-v2.3.js` script needs to be included in the `<body>`, not the `<head>` of your HTML document.


## JSON Schema

Every Polypad canvas consists of a collection of __tiles__ and __strokes__. The state of a Polypad can be serialised as JSON, with the following schema:

```ts
interface TileData {
  name: string,       // The tile type (since 'type' is a reserved field in many databases)
  options?: string,   // Parameters for this tile
  id?: string;        // Unique identifier
  x?: number,         // X-position
  y?: number,         // Y-position
  rot?: number,       // Rotation (in degrees)
  size?: number;      // Used for some resizable tiles like images or text boxes
  colour?: string;    // HEX colour (e.g. "#ff0044")
  flipped?: boolean;
  locked?: boolean;
  fixed?: boolean;
  hidden?: boolean;
  order?: 'front'|'back'
  cables?: {fromPort?: string, toPort?: string, toTileId: string}[];
}

interface StrokeData {
  id?: string;         // Unique identifier
  points: string;      // SVG path
  colour?: string;     // HEX colour
  brush: 'pen'|'marker'|'highlighter'
}

type GridType = 'none'|'square2-grid'|'square-dots'|'square-grid'|'tri-dots'|'tri-grid'|'tri2-dots'|'tri2-grid';

interface PolypadData {
  title: string;         // Polypad title
  grid: GridType;
  noLabels: boolean;
  altColors?: boolean;
  mergeTiles?: boolean;
  evalEquations?: boolean;
  labelType?: 'fraction'|'percentage'|'decimal';
  tiles: TileData[];
  strokes: StrokeData[];
}
```

Please that the maximum length of the `tiles` and `strokes` array is 2000. With more items on the
same page, you might see performance issues on some devices.


## Methods

The `Polypad.create()` function takes an options argument with many ways to customise Polypad:

```ts
interface Polypad {
  create: (options: {
    apiKey?: string;        // Mathigon-issued API key
    userKey?: string;       // Unique identifier for the current user

    sidebar?: boolean;      // Whether to show the sidebar
    toolbar?: boolean;      // Whether to show the toolbar
    settings?: boolean;     // Whether to show the settings bar

    initial?: PolypadData;  // Initial data to show

    // Whether to show a second, custom sidebar tab
    sidebarTab?: {title: string, icon: string};

    // Override the default theme colours 'red', 'blue', 'green', ...
    themeColours?: Record<string, string>;

    // Whether to prevent panning and zooming of the canvas using touch gestures.
    noPanAndZoom?: boolean;

    // Whether to bind keyboard events for undo/redo and cut/copy/paste. Default is false.
    bindKeyboardEvents?: boolean;

    // Provide a way to upload image files: you need to upload the file object to a storage
    // backend and return a promise that resolves with the URL of the uploaded file.
    imageUpload?: (file: File) => Promise<string>;
  }) => PolypadInstance;
}
```

`Polypad.create()` then returns a `PolypadInstance` object with additional methods for manipulating the canvas. Please note that most of these methods don't type-check their input arguments. If you pass in incorrect data, the behaviour is undefined.

```ts
interface PolypadInstance {
  // Bind or unbind event listeners. See below for all supported events.
  on: (event: string, callback: (e: unknown) => void) => void;
  off: (event: string, callback: (e: unknown) => void) => void;

  // Serialize or un-serialize a polypad state from JSON data. See above for types.
  serialize: (maxTiles?: number, maxStrokes?: number, maxStrokeLength?: number) => PolypadData;
  unSerialize: (data: PolypadData) => void;

  // Create a PNG image of a given size. This asynchronous function returns a Data URI string.
  pngImage: (width: number, height: number) => Promise<string>;

  // Add, update or delete a tile or stroke. .add() returns the ID of the new item. Note that
  // you cannot update strokes, or update the 'name' property of a tile once created.
  add: (data: TileData|StrokeData) => string;
  update: (id: string, properties: TileData) => void;
  delete: (...ids: string[]) => void;

  // Get the current user selection, or programmatically select multiple existing tiles.
  getSelection: () => string[];
  select: (...tileIds: string[]) => void;

  // Undo or redo the latest changes to the canvas.
  undo: () => void;
  redo: () => void;

  // Set the background grid or display options. See the `options` event for more details.
  setGrid: (string: GridType) => void;
  setOptions: (e: {
    altColors?: boolean;
    advancedOptions?: boolean;
    mergeTiles?: boolean;
    labelType?: 'fraction'|'percentage'|'decimal';
    noLabels?: boolean;
    evalEquations?: boolean;
    playAudio?: boolean;
  }) => void;

  // Clear all tiles on the current canvas. Unline .unSerialize({}), this action can be undone.
  clear: () => void;

  // Get or update the visible viewport of the canvas, or reset it to its initia position.
  getViewport: () => {x: number; y: number; zoom: number};
  setViewport: (x: number, y: number, zoom: number) => void;
  resetViewport: () => void;

  // Expand, collapase or toggle the sidebar on the left. With no arguments, the current state
  // is flipped, or you can explicitly specify and expanded or collapsed state.
  toggleSidebar: (expanded?: boolean) => void;

  // Add a custom button to the toolbar or sidebar. You can provide either an HTML string or a
  // DOM Element, and the method returns the new <button> DOM element.
  addCustomButton: (target: 'toolbar'|'settings', body: string|Element = '') => Element
}
```


## Custom Sidebar Tab

Using the `sidebarTab` property, you can enable a second, custom tab for the sidebar, similar to
Mathigon's version of Polypad. You need to specify a title, as well as an icon ID, which could be
one of these options:

```
'tiles', 'controls', 'shapes', 'geometry', 'numbers', 'fractions', 'algebra', 'probability', 'undo',
'redo', 'grid', 'construction', 'text', 'color', 'pen', 'axes', 'screenshot', 'zoom-in', 'zoom-out',
'move', 'cursor', 'pen', 'marker', 'highlighter', 'ruler', 'text', 'eraser', 'add-image',
'text-alt', 'fraction', 'power', 'sqrt', 'copy', 'delete', 'geo-line', 'geo-circle', 'equation',
'fullscreen-reverse', 'fullscreen', 'spades', 'clubs', 'hearts', 'diamonds', 'bold', 'italic',
'underlined', 'quiz', 'settings', 'unlocked', 'lock', 'layer-back', 'layer-front', 'folder-shared',
'move-off', 'eye-off', 'fraction-up', 'fraction-down', 'combine-dots', 'split-dots'
```

The content of the sidebar can be simply added into the `<div></div>` that the Polypad instance is
attached to. It will be automatically shown in the correct place using the `<slot></slot>`
element. See [example.html](example.html) for an example!


## Events

Using the `.on()` and `.off()` methods on `PolypadInstance`, you can bind and unbind many different
event listeners. The following events are supported:

### `.on('change')`

This event is triggered whenever the state of the Polypad changes because the user has added,
updated or deleted a stroke or tile. Note that multiple different tiles can change at once, but the
event is only triggered once at the _end_ of a move or rotate action.

The `.change()` event returns an array with the `[pevious, updated]` state of every tile that was
changed. This can be useful for maintaining your own undo/redo stacks. Note that strokes cannot
change, only be created or deleted.

__Callback Options__: `{added: (TileData|StrokeData)[], changed: [TileData, TileData][], deleted: (TileData|StrokeData)[]}`

### `.on('viewport')`

Triggered whenever the position of the visible viewport changes, for example because the user
pans or zooms. Note that the viewport is not part of the "state" of a polypad. When calling
`.unSerialize()` or `.resetViewport()`, we update the viewport so that all tiles and strokes are
visible and centered.

__Callback Options__: `{x: number, y: number, zoom: number}`

### `.on('undo')`, `.on('redo')`

Triggered on undo and redo: both from a user input (e.g. clicking the undo button or `CTRL` + `Z` on
the keyboard), or programatically (e.g. calling `.undo()` above), You can call `.preventDefault()` on
the event object to prevent the built-in undo/redo handling, and instead apply changes from a custom
stack of changes.

__Callback Options__: `Event`

### `.on('grid')`

Triggered whenever the user changes the grid background of the canvas.

__Callback Options__: `{grid: GridType}`

### `.on('options')`

Triggered whenever the user changes the canvas options using the settings bar on the left. Options
include whether to use an alternate colour scheme (`altColors`), whether to show number labels for
some tiles (`noLabels`), whether to merge number cards or prime factor circles (`mergeTiles`),
whether to play sound effects (`playAudio`), and whether to evaluate equations (`evalEquations`).
This event will always be called after the `.setOptions()` method.

__Callback Options__: `{altColors?: boolean, advancedOptions?: boolean, noLabels?: boolean, mergeTiles?: boolean, labelType?: 'fraction'|'percentage'|'decimal', evalEquations?: boolean, playAudio?: boolean}`

### `.on('selection')`

Triggered whenever the current selection changes.

__Callback Options__: `{tiles: string[]}`

### `.on('move')`

This event is triggered continuously while users are moving one or more tiles. The Callback argument
contains the ID and the current position of all currently selected tiles.

__Callback Options__: `{tiles: {id: string, x: number, y: number}[]}`


## Future Features

* [ ] Customisation options for which items to show in the sidebar, toolbar and settings menu
* [ ] Animate the position of tiles in `.update()`, rather than changing the position instantly.
* [ ] Animate the drawing of strokes in `.add()`.
* [ ] Expose additional, internal methods and events
* [ ] Customise the maximum zoom/pan limits
* [ ] Switch colour scheme (light/dark)
* [ ] Support non-English languages
* [ ] Support including the script in the `<head>`. Currently, it accesses `document.body`, so it needs to be included in the `<body>`.
