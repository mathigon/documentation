[Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) is
a common language used for writing technical documents, and much simpler to
edit than HTML.

At Mathigon, we added many new features to the standard Markdown implementation,
that make it easy to insert interactive components, custom styles, or even
arbitrary HTML.

This example gives a simple overview of the structure of a chapter:

```md
# Chapter Title

> stage: foundations
> description: This is an example chapter

---
> id: step-1
> goals: my-goal

## First Section

Here is a paragraph

---
> id: step-2
> title: The Second Step

Here is another paragraph
```

As you can see, every chapter is split into multiple short steps, divided by the
`---` characters. Every section, as well as the chapter as a whole, contains
some _metadata_, indicated by lines starting with `>`. The metadata is parsed as
[YAML](http://yaml.org/).

The chapter metadata object should contain a `stage` (foundations, intermediate
or advanced), a `description`, and optionally a `next` chapter and an `icon`.
The step metadata objects have to contain a unique `id`, as well as an optional
`title` and `goals`. The goals are a string-separated list of events that need
to be triggered before the next step is revealed.


## Simple Markup

Mathigon supports almost all plain Markdown features. The only exceptions are
dividers (`---`) which always indicate a step break and blockquotes (`>`) which
are used for metadata.

### Titles

Every chapter should contain a single h1-level title (`#`) at the top, and
between five and ten h2-level titles (`##`) that divide the chapter into
different sections. Additional h3-level titles (`###`) are optional.

```
## Solving Quadratic Equations
```

### Strong, Italic

Important keywords should be bold, and emphasised words should be italic. These
can be styled just like in plain Markdown.

```
Here is a __keyword__ and an _emphasis_.
```

### Equations

Content between backticks is parsed as [AsciiMath](http://asciimath.org/) and
converted to MathML.

```
The probability of rolling a 6 is `(1+x)/3`.
```

### Blanks and Input Fields

You can create blanks for students to fill in using double square brackets.
These can contain either be a single number (for input field) or multiple words
separated by `|` (for multiple choice popups).

Input fields except the solution both as digits, or as a typed number string.
For multiple choice questions, the first choice is always the correct one (but
the answers are shuffled when displayed to students).

```
There are numbers like [[10]] or [[ten]] and [[many|few|no]] choices.
```

### Links, Biographies, Glossary, Targets

You can add external links just like in normal markdown. In addition, you can
use the `bio:` or `gloss:` prefix to add biography or glossary popups. The
corresponding IDs must match one of the items in the corresponding YAML files in
the [shared](https://github.com/mathigon/textbooks/tree/master/content/shared)
directory.

Using `->`, you can also add _pointers_ to specific elements of the page. If
users hover over the link, Mathigon will highlight all elements that match the
given CSS selector (and, if needed, scroll them into view.)

```
We can have [links](http://mathigon.org) or [biographies](bio:gauss) or
[glossary words](gloss:prime) or [targets](->#s1.bio)
```

### Variable Sliders

In order to make the content as dynamic and interactive as possible, you can
easily add inline variables that can be manipulated by the student. There is a
separate syntax for initialising variables (resulting in interactive sliders)
and expressions that depend on these variables.

```
The square of ${a}{a|1|-4,4,1} is ${a*a}.
```

This example would produce a slider for a variable `a` that is initially 1 and
can be changed from -4 to 4 in steps of 1. Variables are always scoped within
the current step.

## Custom HTML

Any content indented by four characters is parsed a [Pug](https://pugjs.org/)
and converted to HTML:

```
Here is a paragraph

    div
      img(src="images/example.jpg")
      .caption Here is some custom HTML
```

Pug content before the start for the first step can be used to define mixins
than are accessible in all later Pug blogs.

All relative urls in `src` and `href` attributes are parsed relative to the
root directory for this chapter.

## Custom Classes, Attributes and Tags

For customisation and styling, it is possible to add ids, classes and attributes
to paragraphs or inline elements. Simply start the body of that element with the
required CSS selector inside `{}`:

```
{.class1.class2(attr="value")} Some _{#id1}text_ and [{.red}link](url).
```

You can even use this method to change the tag name of an element:

```
Here is a span element: _{span.red} Text_
```
