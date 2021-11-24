---
layout: page
nav_order: 10
parent: Fermat.js
---

# Vector

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/vector.ts#L12">fermat.js/src/vector.ts#L12</a></div>

## <span class="pill">Class</span> Vector

A n-dimensional Vector class.

Extends Array&lt;number&gt;

<div class="docs-item" markdown="1">

### constructor <span class="signature">(args: Array&lt;number&gt;): Vector</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `args` | Array&lt;number&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/documentation/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts#L314">documentation/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts#L314</a></div>

### <span class="pill">readonly</span> <span class="pill">Property</span> .[Symbol.species] <span class="signature">: ArrayConstructor</span>

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/documentation/node_modules/typescript/lib/lib.es5.d.ts#L1224">documentation/node_modules/typescript/lib/lib.es5.d.ts#L1224</a></div>

### <span class="pill">Property</span> .length <span class="signature">: number</span>

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/vector.ts#L20">fermat.js/src/vector.ts#L20</a></div>

### <span class="pill">Accessor</span> .magnitude <span class="signature">: number</span>

Returns the magnitude of the Vector

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/vector.ts#L27">fermat.js/src/vector.ts#L27</a></div>

### <span class="pill">Accessor</span> .unitVector

Returns the unitVector of the Vector

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .[Symbol.iterator] <span class="signature">(): IterableIterator&lt;number&gt;</span>

Iterator

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .[Symbol.unscopables] <span class="signature">(): {copyWithin: boolean, entries: boolean, fill: boolean, find: boolean, findIndex: boolean, keys: boolean, values: boolean}</span>

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .at <span class="signature">(index: number): undefined|number</span>

Takes an integer value and returns the item at that index,
allowing for positive and negative integers.
Negative integers count back from the last item in the array.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `index` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .concat <span class="signature">(items: Array&lt;ConcatArray&lt;number&gt;&gt;): Array&lt;number&gt;</span>

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | Array&lt;ConcatArray&lt;number&gt;&gt; |  |  |


Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | Array&lt;number|ConcatArray&lt;number&gt;&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .copyWithin <span class="signature">(target: number, start: number, end: number): Vector</span>

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `target` | number |  |  |
| `start` | number |  |  |
| `end` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .entries <span class="signature">(): IterableIterator&lt;[number, number]&gt;</span>

Returns an iterable of key, value pairs for every entry in the array

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .every <span class="signature">(predicate: (value: number, index: number, array: Array&lt;number&gt;): value is S, thisArg: any): this is Array&lt;S&gt;</span>

Determines whether all the members of an array satisfy the specified test.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `predicate` | (value: number, index: number, array: Array&lt;number&gt;): value is S |  |  |
| `thisArg` | any |  |  |


Determines whether all the members of an array satisfy the specified test.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `predicate` | (value: number, index: number, array: Array&lt;number&gt;): unknown |  |  |
| `thisArg` | any |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .fill <span class="signature">(value: number, start: number, end: number): Vector</span>

Returns the this object after filling the section identified by start and end with value

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | number |  |  |
| `start` | number |  |  |
| `end` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .filter <span class="signature">(predicate: (value: number, index: number, array: Array&lt;number&gt;): value is S, thisArg: any): Array&lt;S&gt;</span>

Returns the elements of an array that meet the condition specified in a callback function.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `predicate` | (value: number, index: number, array: Array&lt;number&gt;): value is S |  |  |
| `thisArg` | any |  |  |


Returns the elements of an array that meet the condition specified in a callback function.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `predicate` | (value: number, index: number, array: Array&lt;number&gt;): unknown |  |  |
| `thisArg` | any |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .find <span class="signature">(predicate: (value: number, index: number, obj: Array&lt;number&gt;): value is S, thisArg: any): undefined|S</span>

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `predicate` | (value: number, index: number, obj: Array&lt;number&gt;): value is S |  |  |
| `thisArg` | any |  |  |


| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `predicate` | (value: number, index: number, obj: Array&lt;number&gt;): unknown |  |  |
| `thisArg` | any |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .findIndex <span class="signature">(predicate: (value: number, index: number, obj: Array&lt;number&gt;): unknown, thisArg: any): number</span>

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `predicate` | (value: number, index: number, obj: Array&lt;number&gt;): unknown |  |  |
| `thisArg` | any |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .flat <span class="signature">(depth: D): Array&lt;FlatArray&lt;A, D&gt;&gt;</span>

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `depth` | D |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .flatMap <span class="signature">(callback: (value: number, index: number, array: Array&lt;number&gt;): U|, thisArg: This): Array&lt;U&gt;</span>

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callback` | (value: number, index: number, array: Array&lt;number&gt;): U| |  |  |
| `thisArg` | This |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .forEach <span class="signature">(callbackfn: (value: number, index: number, array: Array&lt;number&gt;): void, thisArg: any): void</span>

Performs the specified action for each element in an array.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callbackfn` | (value: number, index: number, array: Array&lt;number&gt;): void |  |  |
| `thisArg` | any |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .from <span class="signature">(arrayLike: ArrayLike&lt;T&gt;): Array&lt;T&gt;</span>

Creates an array from an array-like object.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `arrayLike` | ArrayLike&lt;T&gt; |  |  |


Creates an array from an iterable object.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `arrayLike` | ArrayLike&lt;T&gt; |  |  |
| `mapfn` | (v: T, k: number): U |  |  |
| `thisArg` | any |  |  |


Creates an array from an iterable object.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `iterable` | Iterable&lt;T&gt;|ArrayLike&lt;T&gt; |  |  |


Creates an array from an iterable object.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `iterable` | Iterable&lt;T&gt;|ArrayLike&lt;T&gt; |  |  |
| `mapfn` | (v: T, k: number): U |  |  |
| `thisArg` | any |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .includes <span class="signature">(searchElement: number, fromIndex: number): boolean</span>

Determines whether an array includes a certain element, returning true or false as appropriate.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `searchElement` | number |  |  |
| `fromIndex` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .indexOf <span class="signature">(searchElement: number, fromIndex: number): number</span>

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `searchElement` | number |  |  |
| `fromIndex` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .isArray <span class="signature">(arg: any): arg is Array&lt;any&gt;</span>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `arg` | any |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .join <span class="signature">(separator: string): string</span>

Adds all the elements of an array into a string, separated by the specified separator string.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `separator` | string |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .keys <span class="signature">(): IterableIterator&lt;number&gt;</span>

Returns an iterable of keys in the array

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .lastIndexOf <span class="signature">(searchElement: number, fromIndex: number): number</span>

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `searchElement` | number |  |  |
| `fromIndex` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .map <span class="signature">(callbackfn: (value: number, index: number, array: Array&lt;number&gt;): U, thisArg: any): Array&lt;U&gt;</span>

Calls a defined callback function on each element of an array, and returns an array that contains the results.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callbackfn` | (value: number, index: number, array: Array&lt;number&gt;): U |  |  |
| `thisArg` | any |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .of <span class="signature">(items: Array&lt;T&gt;): Array&lt;T&gt;</span>

Returns a new array from a set of elements.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | Array&lt;T&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .pop <span class="signature">(): undefined|number</span>

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .push <span class="signature">(items: Array&lt;number&gt;): number</span>

Appends new elements to the end of an array, and returns the new length of the array.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | Array&lt;number&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .reduce <span class="signature">(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Array&lt;number&gt;): number): number</span>

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callbackfn` | (previousValue: number, currentValue: number, currentIndex: number, array: Array&lt;number&gt;): number |  |  |


| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callbackfn` | (previousValue: number, currentValue: number, currentIndex: number, array: Array&lt;number&gt;): number |  |  |
| `initialValue` | number |  |  |


Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callbackfn` | (previousValue: U, currentValue: number, currentIndex: number, array: Array&lt;number&gt;): U |  |  |
| `initialValue` | U |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .reduceRight <span class="signature">(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Array&lt;number&gt;): number): number</span>

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callbackfn` | (previousValue: number, currentValue: number, currentIndex: number, array: Array&lt;number&gt;): number |  |  |


| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callbackfn` | (previousValue: number, currentValue: number, currentIndex: number, array: Array&lt;number&gt;): number |  |  |
| `initialValue` | number |  |  |


Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `callbackfn` | (previousValue: U, currentValue: number, currentIndex: number, array: Array&lt;number&gt;): U |  |  |
| `initialValue` | U |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .reverse <span class="signature">(): Array&lt;number&gt;</span>

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/vector.ts#L32">fermat.js/src/vector.ts#L32</a></div>

### <span class="pill">Method</span> .scale <span class="signature">(q: number): Array&lt;number&gt;</span>

Scales this vector by a factor q.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `q` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .shift <span class="signature">(): undefined|number</span>

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .slice <span class="signature">(start: number, end: number): Array&lt;number&gt;</span>

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `start` | number |  |  |
| `end` | number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .some <span class="signature">(predicate: (value: number, index: number, array: Array&lt;number&gt;): unknown, thisArg: any): boolean</span>

Determines whether the specified callback function returns true for any element of an array.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `predicate` | (value: number, index: number, array: Array&lt;number&gt;): unknown |  |  |
| `thisArg` | any |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .sort <span class="signature">(compareFn: (a: number, b: number): number): Vector</span>

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `compareFn` | (a: number, b: number): number |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .splice <span class="signature">(start: number, deleteCount: number): Array&lt;number&gt;</span>

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `start` | number |  |  |
| `deleteCount` | number |  |  |


Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `start` | number |  |  |
| `deleteCount` | number |  |  |
| `items` | Array&lt;number&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .toLocaleString <span class="signature">(): string</span>

Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .toString <span class="signature">(): string</span>

Returns a string representation of an array.

</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .unshift <span class="signature">(items: Array&lt;number&gt;): number</span>

Inserts new elements at the start of an array, and returns the new length of the array.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | Array&lt;number&gt; |  |  |


</div>

<div class="docs-item" markdown="1">

### <span class="pill">Method</span> .values <span class="signature">(): IterableIterator&lt;number&gt;</span>

Returns an iterable of values in the array

</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/vector.ts#L62">fermat.js/src/vector.ts#L62</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .cross <span class="signature">(v1: Vector, v2: Vector): Vector</span>

Finds the cross product of two 3-dimensional vectors v1 and v2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `v1` | Vector |  |  |
| `v2` | Vector |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/vector.ts#L45">fermat.js/src/vector.ts#L45</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .difference <span class="signature">(v1: Vector, v2: Vector): Array&lt;number&gt;</span>

Calculates the difference of two vectors v1 and v2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `v1` | Vector |  |  |
| `v2` | Vector |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/vector.ts#L57">fermat.js/src/vector.ts#L57</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .dot <span class="signature">(v1: Vector, v2: Vector): number</span>

Calculates the dot product of two vectors v1 and v2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `v1` | Vector |  |  |
| `v2` | Vector |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/vector.ts#L72">fermat.js/src/vector.ts#L72</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .equals <span class="signature">(v1: Vector, v2: Vector): boolean</span>

Checks if two vectors are equal.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `v1` | Vector |  |  |
| `v2` | Vector |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/vector.ts#L51">fermat.js/src/vector.ts#L51</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .product <span class="signature">(v1: Vector, v2: Vector): Array&lt;number&gt;</span>

Calculates the element-wise product of two vectors v1 and v2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `v1` | Vector |  |  |
| `v2` | Vector |  |  |


</div>

<div class="docs-item" markdown="1">

<div><a class="source" target="_blank" href="https://github.com/mathigon/fermat.js/tree/master/src/fermat.js/src/vector.ts#L39">fermat.js/src/vector.ts#L39</a></div>

### <span class="pill">static</span> <span class="pill">Method</span> .sum <span class="signature">(v1: Vector, v2: Vector): Array&lt;number&gt;</span>

Calculates the sum of two vectors v1 and v2.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `v1` | Vector |  |  |
| `v2` | Vector |  |  |


</div>

</div>