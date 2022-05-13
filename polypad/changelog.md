---
layout: page
nav_order: 2
parent: Polypad API Docs
---

# Polypad Changelog

## Future

* [ ] __v4.0__ Break up the `.options` string for tiles into typed, self-documenting objects with
  multiple different properties.
* [ ] __v4.0__ Support non-English languages.
* [ ] __v4.0__ Refactored change/undo/redo handling with many bug fixes.
* [ ] Animate the position of tiles in `.update()`, rather than changing the position instantly, and animate the drawing of strokes in `.add()`.
* [ ] Customise the maximum zoom/pan limits
* [ ] Switch colour scheme (light/dark)
* [ ] Support including the script in the `<head>`. Currently, it accesses `document.body`, so it needs to be included in the `<body>`.


## v3.6 (13 May 2022)

### Fixes

* Fix loading error when `teacherMode` is not enabled.


## v3.5 (12 May 2022)

### New Features

* Coin tiles for USD, EUR and GBP.
* Support fraction, percentage and π multiple labels for number lines and coordinate axes.
* New random number generator tiles with many different discrete and continuous distributions.
* New `.paste()` utility for Polypad instances. Unlike `.add()`, this de-dupes any tile IDs, dynamic
  geometry keys and connection cables, so that the same data can be pasted multiple times.
* Width and height labels for number tiles.
* New `.isTeacher` property when setting up a new canvas, which allows users to add editable question fields to the canvas.
* New "fill" button for number frames.

### Breaking Changes

* The size of `number-card` tiles has been reduced from 75x75 px to 50x50 px, to be more consistent
  with other tiles and the grid background.

### Fixes

* Hide question field answers when generating thumbnails.
* Many bug fixes with copy+paste (including cables and dynamic geometry tiles).
* Improved point ordering for un-sorted line/area chart series.
* Center new tiles that are being dragged from the sidebar.
* Fix bug with storing the active side of some polyhedral dice.
* Reduced API file size!


## v3.4 (29 March 2022)

### New Features

* Ten-sided dice
* Sound effects, binary display and metronome input for logic gates.
* Keyboard shortcut for selecting _all_ tiles and deleting tiles.
* Show radians labels as multiples of _π_ when relevant.

### Fixes

* Allow hiding the "customise" panel in the settings bar.
* Fix the knight moves on the chessboard.
* Correctly plot tabular data with numbers containing units or ,s.
* Keep focus on pasted tiles.
* Fix clicking on colour picker RGB fields.
* Don't preload sound effects.
* Fix copy+paste for dynamic geometry tiles.
* Fix action bar positioning for dynamic geometry tiles.
* Fix keyboard shortcuts for toolbar buttons.


## v3.3 (24 February 2022)

### Breaking Changes

* The `.pngImage()` method has been renamed to `.image()` and accepts and additional `type` argument
  that can be PNG, JPG or SVG. PNG exports now have a transparent background, rather than white.
* Reorganised "polygons" section in the sidebar, with new tools. Hide 10 and 12-sided regular
  polygons (these can be created manually using the new generic "regular polygon" tile).

### New Features

* New "rectangle" and "regular polygon" tiles that can be customised.
* New gemetry tool for drawing angles.
* Ability to add labels to dynamic geometry elements (including their current value)
* Export canvas as JPG or SVG, in addition to PNG.

### Fixes

* Lots of dynamic geometry fixes when deleting, snapping, or undo/redoing.
* Hide "flip" button for symmetric polygons that are not rotated.


## v3.2 (17 February 2022)

### Breaking Changes

* The "grid" and "settings" panels in the settings bar have changed significantly – see below.
* Tile weights for the balance scale components are now stored in `.options.tileWeights` rather than
  the options strings for each individual balance scale. This used to cause various bugs with
  multiple balance scales on the same canvas.

### New Features

* New panel to customise the UI of Polypad and select which features are available. Some options
  from the old settings panel have moved into the "grid" selection panel (e.g. editing hidden tiles
  or resetting the viewport).
* New mode for editing locked or hidden tiles.
* Reset the Polypad viewport when exiting fullscreen mode.
* New geometry tool for drawing rectangles.
* Support fraction bar denominators up to 32.
* New `.showGesture()` method to help with building onboarding flows.

### Fixes

* Fix loading of initial Polypad options when instantiating API (e.g. grid).
* XSS escaping for content of rich text boxes.
* Fix multiple SVG display bugs in Safari (compass, spinners, and number line).
* Fix label type when splitting fraction bars into multiple segments.
* Hide the actionbar when no valid actions are selected.
* Improved snapping when moving geometry construction paths.


## v3.1 (7 February 2022)

### Breaking Changes

* Replace the canvas-wide `labelType` and `noLabels` options with a tile-specific `labels` option.
  You can now have tiles with multiple different label types on the same canvas, and there is a new
  selector for fraction bars and circles.

### Fixes

* Fix equation editor tool selection
* Fix initial loading of cached options


## v3.0 (4 February 2022)

### Breaking Changes

* Significantly improved options handling, with many additional ways to customise the UI and
  features of Polypad:
  * All options (e.g. `grid`, `noLabels`, `altColors`, `mergeTiles` and `evalEquations`) are now
    grouped under a `PolypadData.options` object.
  * New `toolbar`, `settings`, `sidebar` and `actionbar` options can be used to show only a subset
    of available tiles or buttons in the UI, using a comma-separated string.
  * Additional options for `noCopyPaste`, `noUndoRedo`, `noPinchPan`, `noDeleting`, `noAudio`,
    `noRotating` and  `noSnapping`.
  * The `.setGrid()` method and the `.on('grid')` event have been removed. You can now just use the
    `.setOptions()` method and the `.on('options')` event.
  * The `noPanAndZoom` property has been removed when setting up Polypad, and is now an option
    that can be changed dynamically, like the ones above.
* New __Action Bar__ that floats under your current selection of tiles or can be pinned to the
  bottom. This can be used to customise properties of the tile, or apply actions.

### New Features

* Logic gate tiles, including switches, flip-flops and light bulbs, for learning computer science.
* Significantly improved snapping and drawing logic, including snapping to intersections or paths
  generated using the ruler or protractor utensils. The `Stroke.points` property can now be both
  an SVG path string or a geometric expression like `segment(point(1,1),point(2,2))`.
* Inches units for ruler, updated labels for ruler and protractor.
* Advanced option to hide the "handles" for different tiles (`TileData.hideHandles`).
* The table and coordinate system icons now appear both in the "algebra" and "data science" sections
  of the sidebar.

### Fixes

* Fix undo/redo events when adding geo points that snap to existing constructions.
* Split number tiles first into rows, then into individual tiles.
* Various improvements to the linking system (styling and UX tweaks).
* Various performance improvements and reduced JS bundle size.
* Updated "copy" icon.


## v2.3 (3 January 2022)

### Breaking Changes

* Changed the order and position of some sidebar items. Coordinate systems and sliders are now in
  the "Algebra" selection, while the number line is now in the "Numbers" section. The last
  section has been renamed to "Games and Applications" and contains a number of new features.
* Updated "linking" system that now allows the same tile (e.g. table or equation) to be linked to
  multiple other tiles (e.g. a coordinate system). The link data is now stored as an array in the
  `cables` property of `TileData`, rather than the previous `link` string. For any existing, saved
  Polypad canvases, `link: 'abc'` needs to be converted to `cables: [{toTileId: 'abc'}]`.

### New Features

* Create scatter plots that can be created by linkin a table to a coordinate system.
* New chessboard and chess pieces tiles, including move hints.
* New "ten-frame" tile and two-sided counters.
* New number line multiples jumps tile.
* New resize handle for the balance scale plates.
* Sound effects when applying certain actions (e.g. rolling a die)
* Double-click on a function or scatter plot in the coordinate system to change its colour.
* Keyboard shortcuts for bold/italic/underlined in rich text boxes.

### Fixes

* Correctly apply tile transformations when a tile's position is changed by another tile (e.g. the balance scale or bucket of zero).
* Fix tile transforms if the x or y coordinates are 0. (This could happen after curring unfolded 3D nets.)
* When copying a geometric construction, include all dependency points in the change event data (e.g. the center point when copying a circle).
* Improved parsing of equations involving implicit multiplication or mixed numbers.
* Add XSS escaping for table tiles.


## v2.2 (24 November 2021)

### New Features

* 3D Polyhedra folding
* Charts and statistics (row, column, line, area, pie and donut charts, box-and-whiskers plots)
* Variable sliders and automatic evaluation of expressions
* New compass and set triangle geometry utensils
* New clock tile
* Transpose action for tables
* Sound effects for Polypad actions
* Options to disable sound effects and the evaluation of equations

### Fixes

* Various fixes related to the "Bucket of Zero" tool
* Fix issues with hiding and locking some tiles


## v2.1 (27 July 2021)

### Breaking Changes

* Simplified sidebar with renamed sections and grouped tools
* Separate toolbar buttons for text boxes and equation editor
* New keyboard shortcuts for every tool type (see tooltips), and changed shortcuts for focussing the toolbar and canvas
* New option to "negate" number cards, and changed default colours for number cards

### New Features

* New option to show a second tab in the sidebar
* New "number frame", "number dot" and "number grid" tile types
* New Polyhedral dice tile
* New advanced options to "hide" and "lock the position" of tiles
* Algebra tiles for y, y2 and xy
* New "join" action to merge multiple polygon tiles
* "Expand" and "reduce" options for fraction bars, including denominators up to 1/24
* Shuffle, draw and stack options for playing cards
* Double-click tiles (e.g. dice and spinners) to randomise or to draw a card
* "Flip" action for ruler and protractor

### Fixes

* Better support for algebra tiles on balance scales, including to solve quadratic equations
* Only trigger change events at the end of moving a colour picker slider
* Fix numberline resizing when rotated, snap tiles to numberline subdivisions
* Hide "exploding dot machine" labels if "hide number labels" option is selected
* Fix equation colouring and tile collision bugs
* Fix undo/redo issues with "lock" option
* Updated icons and resized undo/redo icons
* Fix weight of "10" playing card
* Fix issues with pressing enter to navigate between table cells


## v2.0

### Breaking Changes

* Updated change and undo/redo handling
  * The undo and redo button now only apply to actions by the user, not to tiles added or modified programatically
  * The `.on('change')` event now returns arrays with the previous and updated state of tiles that have changed

### New Features

* Significantly improved undo/redo and serialisation performance
* Selection is preserved for many undo/redo actions

### Fixes

* Improved change detection when dealing with geometry construction tools, balance scales merging, splitting number cards or prime factor circles, linking equations to coordinate systems, and dragging new tiles from the sidebar onto the canvas
* Improved function plotting of implicit equations and containing chained multiplication
* Number lines now rotate around their actual center


## v1.10

### New Features

* New tables, dominoes and irregular pentagon tiles
* Graph functions by linking equations to coordinate systems
* Support for layering and locking tiles using a new `advancedOptions` setting
* New `labelType` setting for decimal and percentage labels for fraction bars and circles
* Number input fields for RGB colour picker, new transparency slider
* New Handle to partially shade fraction bars
* Improved design for toolbar action buttons
* New geometry properties popup in toolbar

### Breaking Changes

* New "tools" section in the sidebar, including tables, utensils, number lines and coordinate systems
* Reduce precision of numbers in stroke strings to 2 decimal places, to reduce size

### Fixes

* Fix change events for fraction bars, prime factor circles and number tiles
* Equation editor bugs
  * Super and subscript typing, better spacing
  * Serialisation of some expressions
  * Correctly layout equations when elements are hidden
* Additional sanity checks in case pointer move/end events are triggered before a start event
* Prevent right-click events


## v1.9

### New Features

* Rich text support for text boxes
* New playing cards component
* New `mergeTiles` settings option to disable merging of number cards
* Include settings options(`noLabels`, `altColors`, `mergeTiles`) when serialising and restoring Polypad state
* New `selection` change event

### Breaking Changes

* Updated sidebar order and new "Tools and Utensils" section
* Always switch to the `move` tool after pasting or uploading an image

### Fixes

* Fix `change` events triggered by certain actions (merging/splitting fraction bars and number tiles, locking custom polygons)
* Prevent erasing of locked tiles
* Fix `.toggleSidebar()`
* Trigger a change event for balance scales if their configuration changes
* Trigger a `change` event when pasting images from clipboard
* Prioritise geo points over other points (or grid points) when snapping vertices
* Various equation parsing and editing fixes


## v1.8

### Fixes

* Improved support for custom undo/redo stacks


## v1.7

### Fixes

* Fix polypad.getSelection() and locking of tiles
* Fix bugs when deleting dots in dot machine
* Fix bugs where the dice options value doesn't match the visible face


## v1.6

### New Features

* Return full stroke data in `change` events (no more max-length). Add options for max number of tiles, strokes and stroke length in `.serialize()` method.
* Add `.preventDefault()` to `undo` and `redo` events.
* New `options` event for the alternate colours and number labels settings, as well as a `.setOptions()` method to change these values programatically.
* New `.toggleSidebar()` method to expand or collapse the sidebar.
* New `.addCustomButton()` method to create custom toolbar or settings bar buttons.
* Paste images directly from the clipboard onto the canvas.

### Fixes

* Don't delete tiles when clicking backspace inside an input field (e.g. the number line or exploding dots settings fields).
* Trigger correct event (`added`, not `changed`) when creating text or equation tiles.
* Fix bugs when changing the number of exploding dots machine boxes.
* Correctly center pasted tiles on the canvas, even when the sidebar is open.
* Fix some bugs when pressing escape or shift keys while dragging tiles.
* Fix erasing and positioning of fraction circle tiles.
* Fix change event data for Abacus tile and equation boxes


## v1.5

### Breaking Changes

* The `'move'` event is now triggered continuously, rather than throttled to once every second.

### New Features

* New `noPanAndZoom` parameter when setting up a Polypad instance.
* Support text selection within equation editor

### Fixes

* Fixed ID generation and change events for Abakus and Equation tiles
* Fixed positioning of tile settings panels (e.g. for numerline)
* Trigger `change` when erasing with a single click (rather than click and drag)
* Trigger `delete`, rather than `change`, when deleting a text box by making its content `''`.
* Don't trigger a `change` event when adding a new Numberline or Axes tiles
* Don't close colour or settings popups when clicking on a button inside
* Fix motion of geometry utensil handles, range of colour picker sliders
* Fix equation editor cursor bugs, nicer styling for Abakus tiles


## v1.4

### New Features

* Abacus tool in sidebar
* Equation editor (option for "text box" tool)
* Pan tool (under zoom in/out)

### Fixes

* Improved accessibility for fractions
* Trigger "add" not "change" event when dragging tiles from the sidebar
* Fixed analytics scripts
* Fixed black background in fullscreen mode
* Fixed duplicate tile IDs when using copy+paste
* Trigger "add" event when drawing a single-dot stroke
* Fix colour for Tantrix tiles
* Fix cursor bugs in some browsers
