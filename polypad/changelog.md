---
layout: page
nav_order: 2
parent: Polypad API Docs
description: Polypad Changelog
---

# Polypad Changelog

## v4.7.0 (28 August 2023)

### New Features
* Set `exportToCL: true` to allow exporting of drop zone values. This happens using a new dropdown in the tile action bar to define exports using a list of different functions, and the new `Polypad.getExports()` and `instance.getExports()` methods and the new `instance.on('export')` event.
* Customisable text labels for polygon tiles (authoring mode).
* Border radius for rectangle tiles (authoring mode).
* Input fields for rectangle width/height and circle radius (authoring mode).
* New instruments and sound samples. The "Song" tile is now called a "Track".

### Bug Fixes
* Fix an issue that caused "cables" between different tiles to disappear when loading a canvas.
* Fix undo/redo issues with "colliding" tiles (number cards, prime factor circles, playing cards and number dot arrangements).
* Fix saving and moving bugs with geometry utensils (ruler, protractor, compass, set triangle).
* Enforce the "tile limit" of drop zones. Any additional tiles will cause an existing tiles to move out of the drop zone.
* Only highlight a single dropzone when moving tiles.
* Fix an issue with detecting loops in expression dependencies.
* Fix an issue with flipping number jump tiles.
* Hide the fixed size canvas outline when `canvasMargin: 0`.
* Fix issues with saving number grid colours.
* Fix issues with Song tile resizing


## v4.6.7 (19 July 2023)

### New Features
* Alpha and ellipse masking of images
* A “percussion” version of the Song tile
* Vertical grid lines for the Song tile
* Set the starting number for number grids (addition, multiplication, and 100 grid)
* Option to disable rotating of individual tiles in authoring mode
* Proxy performance improvements

### Bug Fixes
* Lots of bug fixes related to the categorizer / drop zone tile, including padding for small zones, issues when resizing zones containing tiles, issues with groups inside zones, and support for narrower zones.
* Disable double-click-to-roll/flip if the corresponding action bar item is disabled
* Fix tabulating multiple grouped coins in other languages
* Fix merging grouped number tiles


## v4.6.6 (6 July 2023)

### New Features
* Prefix and suffix options for number line labels

## v4.6.3 (25 June 2023)

### Bug Fixes
* Fix a bug where drop zones (e.g. on the balance scale) were not updated afer some changes (e.g. negating number cards, rolling dice, resizing fractions, or deleting tiles).
* Fix a bug where no "change" event was triggered after changing UI options (checkboxes in the sidebar, toolbar and actionbar) in authoring mode.
* Ensure that the instrument picker is always positioned within the visible viewport
* Increase the limits to resize images
* Fix a crashing bug when loading some canvases with tile "arpeggiate" options.
* Always load Google web fonts required by Polypad (Source Sans Pro). The `Polypad.loadFonts()` method is now deprecated.


## v4.6.2 (8 June 2023)

### Breaking Changes
* The `.on('options')` event has been removed. Instead, option changes now trigger a normal `.on('change')` event and are added to Polypad's undo/redo stack.

### Bug Fixes
* Add Polypad option changes (e.g. grid, background or algebra tile sizes) to the undo/redo stack.


## v4.6.1 (8 June 2023)

### Bug Fixes
* Correctly render fraction circles with degrees label.


## v4.6.0 (7 June 2023)

### Breaking Changes
* A new "Authoring Mode" that combines the previous "edit hidden tiles" and "select tiles and tools"
  modes. The UI "presets" have been removed. Instead, all options are shown in authoring mode, and
  there are new buttons to (de)select all features. Some actions (layer, interactivity, etc.) are
  only visible in authoring mode, and drop zones and input fields can only be added and edited in
  authoring mode.
* The "Arpeggiation" music option has been removed for all tiles. Instead, you can now pick from a
  "Scale" dropdown, including "None" for no arpeggiation.

### Bug Fixes
* Lots of undo/redo bug fixes (especially for geometry tools and exploding dots).
* Trigger change events even if undo/redo is disabled in canvas settings.
* Selection bug with hidden/locked tiles when the browser tab re-gains focus.

### New Features
* New Drop Zones that can be used to create drag-n-drop interactives.
* New Einstein Hat monotile.
* Degrees label option for fraction circles.
* Fraction simplification options for number line labels.
* Increment buttons for most number input fields in action bar.
* Redesigned instrument picker.
* Change the "width" property of number lines to non-integer values.
* Input fields to set the x/y position of tiles (available in authoring mode).
* Set the horizontal and vertical denominator of Algebra tiles to custom values (e.g. to make x/3).


## v4.5.6 (8 May 2023)

### Bug Fixes
* Don't trigger `options` change event when calling `.unSerialize()`.

## v4.5.4 (31 March 2023)

### New Features
* Option to display fraction bars and fraction circles without unit fraction subdivisions. Resize fraction bars and fraction circles. Increase maximum denominators from 32 to 64.
* New `setTool()` API method to change the currently enabled tool.
* Sonification for continuous function plots and for fraction circles. New "angles" and "area" animations for polygons. New instruments and instrument picker.
* New instruments and multi-page instrument picker.
* Clickable hyperlinks in text boxes.
* Tiles now remember the colour of their back side when flipped.
* Customise the width of "notebook" style canvases.
* Allow playing/animating grouped tiles.

### Bug Fixes
* The default aggregation method when tabulating probability tiles is "cumulative".
* Correctly shade table header background for coloured backgrounds or in dark mode.
* Prevent collisions for non-movable tiles.
* Fix infinite line drawing on notebook canvases.
* Fix label positioning for perimeter animations.
* Additional bug fixes related to grouping, input fields.


## v4.5.0 (1 February 2023)

### Breaking Changes
* The "Evaluate expression" option for the entire canvas has been removed. Instead individual equation tiles now have a toggle to tun on evaluating (which is disabled by default).

### New Features
* Group and ungroup tiles, and tabulate the sum of groups of dice or the sequence of groups of coins.
* Split algebra tiles into fractional tiles, horizontally or vertically.
* Improved actionbar UI. The actionbar will now always stay within the visible canvas area. New `.pinActionbar()` method to customise the actionbar position in the API.
* Arrows, decorations and display types (line/ray/segment) for dynamic geometry lines.
* Flip and rotate number line jumps.
* Custom accessible text for all tiles.
* Add option to "Hide handles" for fraction circles.
* Add scaling for custom rectangles.

### Bug Fixes
* Fix a number of undo/redo issues with geometric construction tiles. Fux a bug which caused some constructions to disappear when “merging” points.
* Fix some bugs with merging number tiles and splitting number cards. Better support for number cards with very large values or decimal values.
* Fix some audio playback bugs that could cause certain steps or animations to be skipped.


## v4.4.1 (12 January 2023)

### New Features
* Editable accessibility text for all tiles.

### Bug Fixes
* Fix moving and action bar positioning for exploding dots.
* Fix angle snapping for fraction circles.
* Fix textbook shortcut label.
* Fix music tempo bugs.
* Update translation strings.


## v4.4.0

### New Features
* Ability to switch between "fixed", "notebook" and "infinite" viewport modes. The infinite version is now _truly_ infinite, and expands dynamically based on the content. A new `canvasMargin` settings defines the minimum margins around the fixed or notebook canvas.
* Ability to set the canvas background colour.

### Bug Fixes
* Enable all Polypad features by default (rather than just the "common" ones).
* Fix a bug with Algebra tile collision testing when negating tiles.
* Fix bugs that allowed users to bypass certain disabled features (e.g. panning, deleting tiles, or switching tools).
* Don't allow users to scale polygons when set to "Cannot Move".
* Collapse the sidebar when dragging tiles onto the canvas, if the canvas size is small.


## v4.3.4 (18 November 2022)

### Breaking Changes
* Removed the fullscreen and download image buttons from the API.

### New Featurs
* New Piano and Song tiles for creating music.
* Ability to load external webfonts using `Polypad.loadFonts()`.
* Portuguese translations.

### Bug Fixes
* Many customisation and light-mode UI bug fixes.


## v4.3.2 (8 November 2022)

### New Features
* Translations for 8 additional languages.
* Significantly updated fraction circles, with ability to resize, rename, split and merge.
* New resizable circle tile.
* Ability to change the colour of individual spinner regions.
* Animation and sound effect for random number generators.
* The default multiplication symbol is now a dot.


## v4.3.1 (5 November 2022)

### Bug Fixes
* Pointer positions are now constrained to within the visible canvas area, so that users cannot drag tiles outside.


## v4.3.0 (2 November 2022)

### Breaking Changes
* The `sidebar` property when setting up a new canvas has been replaced by two `sidebarTiles` and `sidebarSettings` properties.
* The "Customise UI" popup has been replaced by a new tab in the sidebar with all settings for customising the UI and featurs of Polypad.
* The `getCustomiseOptions` method and  `sidebarTab` propetry have been removed.
* Updated UI for editing hidden or locked tiles on the canvas.

### New Feature
* Toggle to enable "high contract mode" for a canvas.

### Bug Fixes
* Better UI when just a single section of tiles is selected in the sidebar.


## v4.2.1 (22 October 2022)

### New Features
* Many new accessibility labels

### Bug Fixes
* Fixed some accessibility labels for tiles in the sidebar
* Make actions work correctly in non-English versions


## v4.2.0 (2 October 2022)

### New Features
* Sonification! Many types of polygons, number bars and fraction bars now have a play button together with detailed audio configuration and animation tools to represent their value or shape using music. This is useful for accessibility, and students can also create entire songs using Polypad.
* 3D Number cubes for customisable size, which can be used to learn about place value or to create 3D shapes.
* Slider to subdivide number bars into their factors, and the to split them into individual tiles.
* New "Clone when moving" interactivity type for tiles, that creates a copy when moving it.
* Canadian currency option for coins.
* New arrow options for number lines and coordinate axes.
* Hold shift key to resize rectangles as squares.
* Label option for individual sectors in Prime Factor Circles.

### Bug Fixes
* Updated Spanish translations.
* Scale polygons from their centroid, not their local origin.
* Don't show the evaluation result of equations if they are single negative numbers.
* Various bug fixes related to undo/redo.
* Fix bugs with playing card collisions.


## v4.1.0 (18 August 2022)

### New Features

* The API is not available in __Spanish__ using a separate bundle URL. Please note that the
  this and future English JS bundles now also include a `-en` in their file name.
* Light mode for a white/grey-coloured user interface (sidebar, toolbar and actionbar).
* New input field to specify a scale factor for polygon tiles.
* "cm" and "in" labels for the ruler tile. Option to hide all labels for the ruler.

### Bug Fixes

* Many bug fixes related to multiple Polypad instances on the same page.
* Many bug fixes for Safari browsers.


## v4.0 (12 July 2022)

This is a significant and backwards-compatibility-breaking change to the Polypad API. We have
significantly the internal change tracking and storage modal for Polypad tiles. There are three
important differences:

* Tiles and strokes are now stored in a map/object keyed by their ID, rather than in an array. This
  applies to both the serialized Polypad JSON, and the data passed to change events.
* The `options` of a tile are now broken up into multiple, typed properties, rather than a single
  string. More details about these new properties can be found at https://mathigon.io/polypad/tiles.
* The `colour` property of tiles or strokes has been renamed to `color`, the `order` property has
  been renamed to `layer`, and the `flipped` property has been renamed to `isFlipped`. The `hidden`,
  `locked` and `fixed` properties have been combined into a single `status` property.
* Some tile names have changed from `algebra-tile` to `algebra` and from `pentomino` to `polyomino`.
  The `grid` tile is no longer supported, and the `pentagon` tile is now just a normal `polygon` tile.
* Change events are much more granular, returning only the tile properties that have changed, rather than the whole object.

Together, these changes allow us to make very significant performance improvements, and enable a
number of upcoming features. We have a [migration script](https://static.mathigon.org/api/migration.js)
that can be used to update any existing, stored Polypad data. The updated data will have a
`version: 2` property for identification.

### Breaking Changes

* The structure of the `TileData`, `StrokeData` and `PolypadData` interfaces, `.paste()` arguments
  and `.on('change')` callback arguments have changed. See above for details.
* Updated colour scheme for number cards and number tiles, to be more consistent across tile types.
* Keyboard events (e.g. CTRL+Z to undo) are now bound just to the Polypad instance, rather than
  `document` and won't be triggered unless Polypad is focussed. Losing focus also clears the
  currentl selection. We have enabled many additional keyboard events that previously were not
  available in the API. They are now enabled using a new `.bindKeyboardEvents()` method, rather
  than a `bindKeyboardEvents?: boolean` property during setup (which has been removed). You can
  even customise some of the key bindings.

### New Features

* Ability to "tabulate" probability tiles (e.g. dice) and show their data in a table.
* Ability to resize the "x" and "y" values for algebra tiles, using sliders in the sidebar.
* Merge action for number bars.
* Split actions for number cards.
* Actions to quickly create charts linked to tables.
* Degree label while rotating tiles.
* Temporarily enable the "pan" tool while holding the spacebar.

* New `PolypadInstance.destroy()` method to clean up and remove a Polypad instance.
* New `Polypad.toImage()` method that converts JSON to PNG, JPG or SVG without having to create
  a Polypad instance.
* New `Polypad.getCustomiseOptions()` method that returns lists of all available options to
  customise the UI of Polypad.
* New `Polypad.translate()` method that can be used to update text boxes, equations or image URLs
  within Polypad.

### Bug Fixes

* Don't allow students to move, copy or delete question input boxes.
* Correctly compute quartiles and median in box plots with decimal data.
* Hide action bar for question builder tiles (in student mode).
* Fix issues with playing cards and coins in exported SVG files.
* Correctly set focus on the Polypad DOM element when clicking the canvas.


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
