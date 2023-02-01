---
layout: page
nav_order: 1
parent: Polypad API Docs
---

# Polypad Tile Types

## Algebra

### Algebra Tile

* `name: 'algebra'`
* `expr: string`
* `splitH: number`
* `splitV: number`

### Coordinate Axes

* `name: 'axes'`
* `xMin: number`
* `xMax: number`
* `yMin: number`
* `yMax: number`
* `xStep: string` – Pattern: `/^[-–]?[0-9,./]*[kmbtq]?[π%]?$/`.
* `yStep: string` – Pattern: `/^[-–]?[0-9,./]*[kmbtq]?[π%]?$/`.
* `arrows: 'both' | 'none' | 'positive'`

### Balance

* `name: 'balance'`
* `level: number`
* `size: number`

### Logarithm Bar

* `name: 'log-bar'`
* `value: number`

### Slider Tile

* `name: 'slider'`
* `variable: string` – Pattern: `/^\w+$/`.
* `min: number`
* `max: number`
* `stepN: number`
* `playback: 'bounce' | 'loop' | 'once'`
* `duration: number`
* `value: number`

### Algebra Token

* `name: 'token'`
* `shape: string` – Can be 'circle', 'square', 'cross', 'weight', 'star' or 'heart'

## Applications

### Chess Board Tile

* `name: 'chess-board'`
* `highlight: 'danger' | 'moves' | 'off'`

### Chess Piece Tile

* `name: 'chess-piece'`
* `piece: 'b' | 'k' | 'n' | 'p' | 'q' | 'r'`
* `dark: boolean`

### Clock

* `name: 'clock'`
* `clock: 'live'`
* `showSeconds: boolean`
* `clock: 'geared'`
* `ms: number`
* `showSeconds: boolean`
* `clock: 'free'`
* `h: number`
* `m: number`
* `s: number`
* `showSeconds: boolean`

### Currency Tile

* `name: 'currency'`
* `value: number`
* `currency: 'CAD' | 'EUR' | 'GBP' | 'USD'`

### Logic Gate

* `name: 'logic-gate'`
* `gate: 'and' | 'buffer' | 'd' | 'jk' | 'nand' | 'nor' | 'not' | 'or' | 'sr' | 't' | 'xnor' | 'xor'`

### Logic Speaker

* `name: 'logic-speaker'`

### Logic Metronome

* `name: 'logic-metronome'`
* `bpm: number`
* `running: boolean`

### Button Tile

* `name: 'logic-button'`

### Toggle Switch Tile

* `name: 'logic-switch'`
* `state: boolean`

### Bulb Tile

* `name: 'logic-bulb'`

### Logic Display

* `name: 'logic-display'`

### Piano

* `name: 'piano'`
* `width: number`
* `startNote: number`
* `musicScale: 'blues' | 'chromatic' | 'major' | 'minor' | 'pentatonic'`

### Song

* `name: 'song'`
* `width: number`
* `height: number`
* `loops: number`
* `musicScale: 'blues' | 'chromatic' | 'major' | 'minor' | 'none' | 'pentatonic'`
* `startNote: number`
* `playbackType: 'sequence' | 'timeline'`

## Fractions

### Fraction Bar

* `name: 'fraction-bar'`
* `denominator: number`
* `count: number`
* `active: number`

### Fraction Circle

* `name: 'fraction-circle'`
* `denominator: number`
* `count: number`
* `active: number`

## Geometry

### Circle Tile

* `name: 'circle'`
* `radius: number`

### Custom Polygon Tile

* `name: 'custom-polygon'`
* `shape: string` – Max length: 10000.
* `scale: number`

### Egg Tangram

* `name: 'egg'`
* `index: number` – An integer from 0 to 8.

### Fractal Tile

* `name: 'fractal'`
* `index: number` – An integer from 0 to 4.

### Garden Tile

* `name: 'garden'`
* `index: number` – An integer from 0 to 7.

### Kolam Tile

* `name: 'kolam'`
* `index: number` – An integer from 0 to 5.

### Penrose

* `name: 'penrose'`
* `index: number` – An integer from 0 to 1.

### Polyomino

* `name: 'polyomino'`
* `index: number` – An integer from 0 to 11 for pentominoes, and from 12 to 16 for tetroninoes.

### Polygon Tile

* `name: 'polygon'`
* `shape: string` – Either a named polygon like 'square', 'reg-hexagon' or 'kite', or a string of vertex coordinates like `0 0,1 0,1 1,0 1`. Max length: 10000.
* `scale: number`

### Polyhedron Tile

* `name: 'polyhedron'`
* `net: string` – Max length: 10000.
* `hinge: number`
* `rotation: string` – Pattern: `/^([0-9.-]+,?){3}$/`.

### Rectangle Tile

* `name: 'rectangle'`
* `width: number`
* `height: number`
* `scale: number`

### Regular Polygon Tile

* `name: 'reg-polygon'`
* `sides: number`
* `scale: number`

### Tangram

* `name: 'tangram'`
* `index: number` – An integer from 0 to 6.

### Tantrix Tile

* `name: 'tantrix'`
* `index: number` – An integer from 0 to 13.

### Ruler

* `name: 'ruler'`
* `width: number`
* `isFixed: boolean`

### Protractor

* `name: 'protractor'`
* `width: number`

### Set Triangle

* `name: 'set-triangle'`
* `width: number`

### Compass

* `name: 'compass'`
* `width: number`

## Numbers

### Abacus

* `name: 'abacus'`
* `positions: string` – Pattern: `/^[0-9.,-]+$/`. Max length: 50.

### Zero Bucket

* `name: 'bucket'`

### Decimal Grid

* `name: 'decimal-grid'`
* `width: number`
* `height: number`
* `base: number`

### Dot Machine

* `name: 'dot-machine'`
* `base: number`
* `boxes: number`

### Dot Tile

* `name: 'dot'`
* `value: number`

### Number Bar

* `name: 'number-bar'`
* `value: number`
* `denominator: number`

### Number Card

* `name: 'number-card'`
* `value: number`

### Number Cube

* `name: 'number-cube'`
* `vx: number`
* `vy: number`
* `vz: number`

### Number Dot

* `name: 'number-dot'`
* `factors: string` – Pattern: `/^[0-9-]+$/`.

### Number Frame Tile

* `name: 'number-frame'`
* `value: number`

### Number Grid Tile

* `name: 'number-grid'`
* `kind: 'addition' | 'multiplication' | 'number'`
* `cols: number`
* `rows: number`
* `colors: string` – Max length: 5000.

### Jump Tile

* `name: 'multi-jump'`
* `jumpSize: number`
* `jumps: number`
* `single: boolean`

### Number Line

* `name: 'number-line'`
* `start: string` – Pattern: `/^[-–]?[0-9,./]*[kmbtq]?[π%]?$/`.
* `step: string` – Pattern: `/^[-–]?[0-9,./]*[kmbtq]?[π%]?$/`.
* `width: number`
* `size: number`
* `minor: number`
* `arrows: 'both' | 'none' | 'positive'`

### Number Tile

* `name: 'number-tile'`
* `width: number`
* `value: number`

### Prime Disk

* `name: 'prime-disk'`
* `value: number`

### Ten Frame Tile

* `name: 'ten-frame'`
* `cols: number`
* `rows: number`

### Ten Frame Counter

* `name: 'ten-frame-counter'`
* `value: number`

## Others

### Equation Tile

* `name: 'equation'`
* `expr: string` – An ASCII-Math expressions. Max length: 1000.
* `evaluate: boolean`
* `fontSize: number`

### Geo Tile

* `name: 'geo'`
* `key: string` – All dynamic geometry objects have a unique key prefixed with '_x'. Pattern: `/^_x[0-9]+$/`.
* `expr: string` – A geometric expression like `point(10,20)` or `segment(_x1,_x2).` Max length: 100.
* `label: string` – Max length: 100.
* `arrows: 'both' | 'end' | 'start'`
* `marks: 'arrow' | 'arrow2' | 'bar' | 'bar2'`

### Group

* `name: 'group'`
* `children: string` – Max length: 1000.

### Image Tile

* `name: 'image'`
* `href: string` – The URL of the image, which should be returned by the `imageUpload()` config function. Max length: 100.
* `width: number`

### Blank Question Tile

* `name: 'question-blank'`
* `solution: string` – Max length: 50.
* `submitted: string` – Max length: 50.
* `attempts: number`
* `width: number`

### Text Tile

* `name: 'text'`
* `html: string` – The rich text HTML of the string. :warning: Remember to do XSS sanitisation before saving this in a DB. Max length: 10000.
* `fontSize: number`
* `width: number`

## Probability

### Playing Card

* `name: 'card'`
* `cards: string` – Pattern: `/^\w\wf?(:\w\wf?)*$/`. Max length: 1000.

### Coin

* `name: 'coin'`
* `value: 0 | 1`

### Dice

* `name: 'dice'`
* `value: number`
* `faces: string` – Pattern: `/^[0-9,]+$/`.

### Domino Tile

* `name: 'domino'`
* `a: number`
* `b: number`

### Polyhedral Dice

* `name: 'polyhedral-dice'`
* `value: number`
* `faceCount: number`

### Random Number

* `name: 'random'`
* `value: number`
* `dist: 'bernoulli' | 'binomial' | 'cauchy' | 'continuous' | 'discrete' | 'exponential' | 'geometric' | 'normal' | 'poisson'`
* `p1: number`
* `p2: number`

### Regular Spinner

* `name: 'spinner'`
* `sectorCount: number`
* `angle: number`
* `colors: string` – Max length: 200.

### Custom Spinner

* `name: 'custom-spinner'`
* `sectorSizes: string` – Pattern: `/^[0-9,]+$/`. Max length: 100.
* `angle: number`
* `colors: string` – Max length: 200.

## Statistics

### Box Whisker Tile

* `name: 'box-whisker'`
* `kind: 'area' | 'box-whisker' | 'column' | 'donut' | 'line' | 'pie' | 'row'`
* `layout: 'grouped' | 'outliers' | 'percentage' | 'stacked'`
* `width: number`
* `height: number`
* `colors: string` – Max length: 200.

### Chart Tile

* `name: 'chart'`
* `kind: 'area' | 'box-whisker' | 'column' | 'donut' | 'line' | 'pie' | 'row'`
* `layout: 'grouped' | 'outliers' | 'percentage' | 'stacked'`
* `width: number`
* `height: number`
* `colors: string` – Max length: 200.

### Pie Chart Tile

* `name: 'pie-chart'`
* `kind: 'area' | 'box-whisker' | 'column' | 'donut' | 'line' | 'pie' | 'row'`
* `width: number`
* `colors: string` – Max length: 200.

### Table Tile

* `name: 'table'`
* `data: string` – Max length: 10000.
* `aggregation: 'cumulative' | 'replace' | 'timeseries'`
* `links: string` – Max length: 2000.
