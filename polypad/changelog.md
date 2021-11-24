---
layout: page
nav_order: 2
description: todo
---

# Polypad API Changelog

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
