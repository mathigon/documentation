---
layout: page
nav_order: 1
description: todo
---

# Polypad Tile Types

Polypad supports a large number of different tile types. Each of these can be customised using an
`options` string. The options can vary from very simple (e.g. a number) to much more complex (e.g.
stringified JSON):


## Geometry

### Polygons `polygon`
Either a named polygon like `square`, `reg-hexagon` or `kite`, or a string of vertex coordinates, e.g. `0 0,1 0,1 1,0 1`

### Custom Polygons  `custom-polygon`
_Same as for Polygon_

### Polyominoes `pentomino`
Index from `0` to `11` for pentominoes and `12` to `16` for tetrominoes

### Tangram `tangram`
Index from `0` to `6`

### Tangram Egg `egg`
Index from `0` to `8`

### Penrose Tiles `penrose`
Either `0` or `1`

### Penrose Nature `garden`
Index from `0` to `7`

### Pentagon Tile `pentagon`
Index from `0` to `17`

### Fractals `fractal`
Index from `0` (large) to `4` (small)

### Kolam Tiles `kolam`
Index from `0` to `5`

### Tantrix Tiles `tantrix`
Index from `0` to `13`

### Ruler `ruler`
Width, e.g. `400`

### Protractor `protractor`
Width, e.g. `200`


## Numbers

### Number Tiles `number-tile`
`${width}:${count}`, e.g. `10:100` for a 10x10 block of tiles

### Number Bars `number-bar`
Width from `1` to `10`

### Number Frame `number-frame`
TODO

### Number Card `number-card`
TODO

### Prime Circle `prime-disk`
TODO

### Dot Arrangement `number-dot`
TODO

### Number Grid `number-grid`
TODO

### Multiplication Grid `decimal-grid`
TODO

### Abacus `abacus`
TODO

### Exploding Dot `dot`
TODO

### Dot Machine `dot-machine`
TODO

### Bucket of Zero `bucket`
TODO

## Fractions

### Fraction Bars `fraction-bar`
TODO

### Fraction Circles `fraction-circle`
TODO


## Algebra

### Algebra Tiles `algebra-tile`
TODO

### Algebra Grid `grid`
TODO

### Balance Scale `balance`
TODO

### Balance Tokens `token`
TODO


## Probability

### Dice `dice`
TODO

### Coin `coin`
TODO

### Spinner `spinner`
TODO

### Custom Spinner `custom-spinner`
TODO

### Playing Card `card`
TODO

### Polyhedral Dice `polyhedral-dice`
TODO

### Domino `domino`
TODO


## Tools

### Number Line `number-line`
TODO

### Coordinate Axes `axes`
TODO


## Others

### Table `table`
TODO

### Image `image`
The URL of the image, which should be returned by the `imageUpload()` config function.

### Text `text`
:warning: The rich text HTML of the string. Remember to do XSS sanitisation before saving this in a DB.

### Equation `equation`
The ASCII-Math expressions

### Geometry `geo`
A geometric expression, e.g. `a=point(10,20)` or `c=segment(a,b)`
