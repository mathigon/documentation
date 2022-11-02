---
layout: page
nav_order: 7
has_children: true
---

# Polypad API Docs

## Setup

Our JavaScript API allows you to add interactive Polypad canvases to any website. You simply need to include our JS source file, create a parent element for Polypad, and then call `Polypad.create()`:

```html
<script src="https://static.mathigon.org/api/polypad-en-v4.3.0.js"></script>
<div id="polypad" style="width: 800px; height: 500px;"></div>
<script>Polypad.create(document.querySelector('#polypad'), {apiKey: 'test'})</script>
```

Polypad requires [Custom Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) and the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API). If you want to use browsers that don't support these APIs, you have to include a polyfill, e.g. [mathigon.org/polyfill.js](https://mathigon.org/polyfill.js).

Our goal is to support the latest version of Chrome, Firefox, Opera and Edge on all mobile and desktop devices.

Note: the `polypad-en-v4.x.x.js` script needs to be included in the `<body>`, not the `<head>` of your HTML document.


## JSON Schema

Every Polypad canvas consists of a collection of __tiles__ and __strokes__. The state of a Polypad can be serialised as JSON, with the following schema:

```ts
interface TileData {
  name: string,       // The tile type (since 'type' is a reserved field in many databases)
  x?: number,         // X-position
  y?: number,         // Y-position
  rot?: number,       // Rotation (in degrees)
  color?: string;     // HEX colour (e.g. "#ff0044")
  isFlipped?: boolean;
  status?: 'locked'|'fixed'|'hidden';
  hideHandles?: boolean;
  layer?: 'front'|'normal'|'back'
  labels?: 'fraction'|'percentage'|'decimal'|'hidden';
  cables?: {fromPort?: string, toPort?: string, toTileId: string}[];
  // Many other tile-specific options, as described in tiles.md
}

interface StrokeData {
  points: string;      // SVG path, or geometric expression
  color?: string;      // HEX colour
  brush: 'pen'|'marker'|'highlighter'
}

interface PolypadOptions {
  toolbar?: string;     // Comma-separated list of toolbar icons to show
  settings?: string;    // Comma-separated list of settings bar icons to show
  sidebar?: string;     // Comma-separated list of sidebar sections to show
  actionbar?: string;   // Comma-separated list of actionbar items to show

  uiPreset?: 'simple'|'default'|'advanced'|'custom';
  grid?: 'none'|'square2-grid'|'square-dots'|'square-grid'|'tri-dots'|'tri-grid'|'tri2-dots'|'tri2-grid';

  altColors?: boolean;      // Alternate colour scheme for polygons and number bars
  mergeTiles?: boolean;     // Merge number cards or prime factor circles when hovering
  evalEquations?: boolean;  // Evaluate equations
  tileWeights?: string;     // Used for balance scales
  algebraXSize?: number;
  algebraYSize?: number;

  noCopyPaste?: boolean;
  noUndoRedo?: boolean;
  noPinchPan?: boolean;
  noDeleting?: boolean;
  noAudio?: boolean;        // Disable sound effects
  noMusic?: boolean;        // Disable sonification tools
  noRotating?: boolean;
  noSnapping?: boolean;
  highContrast?: boolean;
}

interface PolypadData {
  title?: string;
  version?: number;
  options?: PolypadOptions;
  tiles?: Record<string, TileData>;
  strokes?: Record<string, StrokeData>;
}
```

By default, the maximum length of the `tiles` and `strokes` array is 2000. With more items on the
same page, you might see performance issues on some devices.


## Methods

The `Polypad.create()` function takes an options argument with many ways to customise Polypad:

```ts
interface Polypad {
  create: (options: {
    apiKey?: string;            // Mathigon-issued API key
    userKey?: string;           // Unique identifier for the current user

    sidebarTiles?: boolean;     // Whether to show the tiles sidebar
    sidebarSettings?: boolean;  // Whether to show the settings sidebar
    toolbar?: boolean;          // Whether to show the toolbar
    settings?: boolean;         // Whether to show the settings bar

    initial?: PolypadData;      // Initial data to show
    isTeacher?: boolean;        // Whether to show editable question fields

    // Whether to show a second sidebar tab, or a custom tiles sidebar panel
    customSidebar?: {title: string, tiles: TileData[]};

    // Override the default theme colours 'red', 'blue', 'green', ...
    themeColours?: Record<string, string>;

    // Provide a way to upload image files: you need to upload the file object to a storage
    // backend and return a promise that resolves with the URL of the uploaded file.
    imageUpload?: (file: File) => Promise<string>;
  }) => PolypadInstance;

  // Get a static image corresponding to a Polypad data object.
  toImage: (data: PolypadData, type?: 'png'|'svg'|'jpg', width?: number, height?: number) => string;

  // Translates a textbox, equation and image URL instances in a Polypad data object. This function
  // modifies the first argument, and uses the second argument to generate translations.
  translate: (data: PolypadData, translate: (value: string, type: 'html'|'url'|'expr') => string) => string;
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

  // Create an image of a given size. This asynchronous function returns a Data URI string.
  image: (width: number, height: number, type?: 'png'|'jpg'|'svg') => Promise<string>;

  // Add, update or delete a tile or stroke. .add() returns the ID of the new item. Note that
  // you cannot update strokes, or update the 'name' property of a tile once created.
  add: (data: TileData|StrokeData) => string;
  update: (id: string, properties: Partial<TileData>) => void;
  delete: (...ids: string[]) => void;

  // Paste new tile data. Unlilke the "add" function, this de-dupes any tile IDs, dynamic geometry
  // keys and connection cables, so that the same data can be pasted multiple times.
  paste: (data: Record<string, TileData>) => void;

  // Get the current user selection, or programmatically select multiple existing tiles.
  getSelection: () => string[];
  select: (...tileIds: string[]) => void;

  // Undo or redo the latest changes to the canvas.
  undo: () => void;
  redo: () => void;

  // Set the background grid or display options. See the `options` event for more details.
  setOptions: (e: Partial<PolypadOptions>) => void;

  // Clear all tiles on the current canvas. Unline .unSerialize({}), this action can be undone.
  clear: () => void;

  // Get or update the visible viewport of the canvas, or reset it to its initia position.
  getViewport: () => {x: number; y: number; zoom: number};
  setViewport: (x: number, y: number, zoom: number) => void;
  resetViewport: () => void;

  // Call this function to manually trigger a resize of the Polypad container. We are already
  // using window.resize() and the ResizeObserver API (if available in the Browser).
  resize: () => void;
  
  // Show a floating hand gesture that animates either clicking on a DOM element (no slide)
  // or dragging a DOM element by a certain distance (with slide). The gesture disappears as
  // soon as the target is interacted with.
  showGesture: (selector: string, slide?: {x: number, y: number}) => void;

  // Enable keyboard and accessibility shortcuts. See below for details
  bindKeyboardEvents: (keys?: KeyboardShortcuts) => void;
  
  // Remove and clean up this Polypad instance. This action is irreversible, and any further
  // interaction with the instance class may throw undefined Errors.
  destroy(): void;

  // Expand, collapase or toggle the sidebar on the left. With no arguments, the current state
  // is flipped, or you can explicitly specify and expanded or collapsed state.
  toggleSidebar: (expanded?: boolean) => void;

  // Add a custom button to the toolbar or sidebar. You can provide either an HTML string or a
  // DOM Element, and the method returns the new <button> DOM element.
  addCustomButton: (target: 'toolbar'|'settings', body: string|Element = '') => Element
}
```

## Keyboard Events

Using the `.bindKeyboardEvents()` method, you can enable a large number of built-in keyboard
shortcuts. You can always also use the `META/CMD` key instead of `CTRL`. Events are bound just to
the Polypad instance, and won't be triggered unless Polypad is focussed. Events always include:

* Press `SPACE` or `ENTER` to "click" the currently focussed button (for accessibility).
* `CTRL+Z` to undo (or redo if `SHIFT` is also pressed) and `CTRL+Y` to redo.
* `BACKSPACE`, `CLEAR` or `DELETE` to delete all currently selected tiles.
* `C` to create a copy of all currently selected tiles.
* `CTRL+A` to select all tiles.
* Default browser `CUT`, `COPY` and `PASTE` events (e.g. using `CTRL+C`).
* Hold `SPACE` to temporarily switch to the pan tool.
* `R` to rotate the current selection (reverse rotation of `SHIFT` is also pressed).
* `ARROW` keys to move the currently selected tiles up, down left or right.

In addition, you can pass a parameter to enable some additional shortcuts when specific letter
keys are pressed. To prevent this, pass `{}` as an argument. If you do not pass an arguments, these
defaults will be used:

```ts
type ToolShortcut = ['tool', 'move'|'pen'|'eraser'|'text'|'pan'|'geo'|'equation'];
type FocusShortcut = ['focus', 'sidebar'|'toolbar'|'canvas'|'actionbar'];
type KeyboardShortcuts = Record<string, ToolShortcut|FocusShortcut>;

const KEYBOARD_SHORTCUTS: KeyboardShortcuts = {
  v: ['tool', 'move'],
  p: ['tool', 'pen'],
  g: ['tool', 'geo'],
  t: ['tool', 'text'],
  q: ['tool', 'equation'],
  e: ['tool', 'eraser'],
  s: ['focus', 'sidebar'],
  d: ['focus', 'toolbar'],
  f: ['focus', 'canvas'],
  a: ['focus', 'actionbar']
};
```

## UI Customisation

The `PolypadData.options` object contains properties to customise which UI elements are visible,
using comma-separated strings. If this field is empty, all items will be shown. Otherwise, only
the selected items will be shown.

### Toolbar

Options include `move`, `pen`, `geo`, `text`, `equation`, `eraser`, `image`, and `color`.

### Settings Bar

Options include `fullscreen`, `grid`, `customise` and `download`. The undo/redo buttons can be
hidden using the `.noUndoRedo` Polypad option, and the pan/zoom buttons can be hidden using the
`.noPinchPan` option.

### Sidebar

Options include `geometry`, `polygons`, `polyominoes`, `tangram`, `penrose`, `pentagons`, `solids`,
`measuring`, `patterns`, `numbers`, `number-tiles`, `number-bars`, `number-frames`, `number-cards`,
`number-line`, `primes`, `number-dots`, `number-grid`, `number-tools`, `fractions`, `fraction-bars`,
`fraction-circles`, `algebra`, `algebra`, `balance`, `axes`, `sliders`, `probability`,
`probability`, `charts`, `playing-cards`, `polyhedral-dice`, `non-trans-dice`, `applications`,
`logic`, `chess`, `clocks` and `dominoes`.

### Actionbar

Many options, that are simply the label/tooltip of each item, in lowercase and kebab-case. Examples
include `copy`, `delete` or `split-tiles`.


## Events

Using the `.on()` and `.off()` methods on `PolypadInstance`, you can bind and unbind many different
event listeners. The following events are supported:

### `.on('change')`

This event is triggered whenever the state of the Polypad changes because the user has added,
updated or deleted a stroke or tile. Note that multiple different tiles can change at once, but the
event is only triggered once at the _end_ of a move or rotate action.

__Callback Options__: `Record<string, [TileData|StrokeData|undefined, TileData|StrokeData|undefined]>`

The callback options is a map of every added, deleted or modified tile or stroke, keyed by their
IDs. Every value is an array of the `[pevious, updated]` state of the corresponding tile or stroke.
For example, added items are of the form `[undefined, TileData|StrokeData]`, deleted items are of
the form `[TileData|StrokeData, undefined]`, and modified tiles are of the form
`[Partial<TileData>, Partial<TileData>]` containing just the changed properties. This is useful for
maintaining your own undo/redo stacks. Note that strokes cannot be modified – only created or deleted.

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

### `.on('options')`

Triggered whenever the user changes the canvas options using the settings bar on the left. The
available options are listed in the `PolypadOptions` object.

__Callback Options__: `Partial<PolypadOptions>`

### `.on('selection')`

Triggered whenever the current selection changes.

__Callback Options__: `{tiles: string[]}`

### `.on('move')`

This event is triggered continuously while users are moving one or more tiles. The Callback argument
contains the ID and the current position of all currently selected tiles.

__Callback Options__: `{tiles: {id: string, x: number, y: number}[]}`


## Internationalisation

The Polypad API is currently available in two different languages, each ith separate JS bundles:

* `polypad-en-v4.x.x.js` – English
* `polypad-es-v4.x.x.js` – Spanish

Additional languages will be added in the future.
