---
name: d3
description: Use when doing any data visualization, diagrams, animation, or other front end with d3.js
---

# D3 Skill

D3 is a low-level JavaScript library for creating data-driven visualizations. It provides fine-grained control over every visual element, enabling complex interactive graphics, animations, and custom chart types.

## Version

7.9.0

## Core Philosophy

D3 is not a charting library—it's a **toolbox** for data visualization. You compose primitives (selections, scales, shapes, axes, transitions) to build visualizations from scratch. This flexibility comes at the cost of more code than higher-level libraries, but grants complete creative control.

## Mental Model

D3 workflow: **Data → Scale → Shape → Selection → Join → Render → Interact**

1. **Data**: Load or define your dataset
2. **Scale**: Map data values to visual properties (position, color, size)
3. **Shape**: Define how to draw (lines, arcs, areas, symbols)
4. **Selection**: Target DOM elements using CSS selectors
5. **Data Join**: Bind data to DOM elements (enter, update, exit)
6. **Render**: Apply attributes and styles to create visual output
7. **Interact**: Add transitions, events, dragging, zooming

## Quick Start Template

```html
<script type="module">
  import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

  // Set dimensions
  const width = 800,
    height = 600,
    margin = { top: 20, right: 20, bottom: 30, left: 60 };

  // Create SVG
  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Create scales
  const x = d3
    .scaleLinear()
    .domain([0, 100])
    .range([margin.left, width - margin.right]);

  const y = d3
    .scaleLinear()
    .domain([0, 100])
    .range([height - margin.bottom, margin.top]);

  // Load data and bind
  const data = [10, 20, 30, 40, 50];
  svg
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d) => x(d))
    .attr("cy", (d) => y(d))
    .attr("r", 5);

  // Add axes
  svg
    .append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x));

  svg
    .append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));
</script>
```

## Key Modules

### Data & Arrays

- **d3-array**: Transform and aggregate data (sort, group, min, max, extent, bin, summarize)
- **d3-dsv**: Parse CSV and TSV files
- **d3-fetch**: Load external data files
- **d3-format**: Format numbers and strings
- **d3-time**: Parse and manipulate dates/times
- **d3-time-format**: Format and parse dates

### Scales

Map data values to visual properties. Key scale types:

- **d3-scale/linear**: Linear mapping for continuous numerical data
- **d3-scale/log, pow, symlog**: Non-linear scales for skewed data
- **d3-scale/band, point**: Ordinal scales for categorical data
- **d3-scale/sequential, diverging**: Color scales for continuous/sequential data
- **d3-scale/quantize, quantile, threshold**: Binned scales
- **d3-scale/time**: Date/time scales
- **d3-scale-chromatic**: Built-in color schemes (Viridis, Tableau, Spectral, etc.)

### Shapes & Geometry

- **d3-shape**: Generate SVG path data for lines, areas, curves, arcs, symbols, stacks, ribbons
- **d3-geo**: Geographic projections and path generation for maps
- **d3-hierarchy**: Layouts for hierarchical data (tree, treemap, pack, sunburst, cluster, partition)
- **d3-force**: Physics simulation for network graphs
- **d3-delaunay**: Voronoi and Delaunay triangulation
- **d3-polygon**: Polygon utilities
- **d3-chord**: Chord diagram layout
- **d3-contour**: Contour and density estimation

### Selection & DOM

- **d3-selection**: Select, modify, and bind data to DOM elements
  - `d3.select(selector)` — select first matching element
  - `d3.selectAll(selector)` — select all matching elements
  - `.data(data)` — bind data to selection
  - `.enter()` — access entering elements
  - `.update()` — access existing elements
  - `.exit()` — access exiting elements

### Animation & Interaction

- **d3-transition**: Smooth animated transitions between states
- **d3-ease**: Easing functions for timing control
- **d3-interpolate**: Interpolate between values (colors, numbers, paths, objects)
- **d3-timer**: Efficient animation loops
- **d3-drag**: Dragging interaction
- **d3-zoom**: Pan and zoom interaction
- **d3-brush**: 1D/2D brushing selection
- **d3-dispatch**: Custom event system

### Utilities

- **d3-color**: Parse and manipulate colors
- **d3-random**: Random number generators
- **d3-quadtree**: 2D spatial index for collision detection
- **d3-path**: Canvas path builder (alternative to SVG)

## Common Patterns

### Data Join (Enter-Update-Exit)

The fundamental D3 pattern for binding data to DOM:

```js
const circles = svg.selectAll("circle").data(data, (d) => d.id); // optional key function

circles.exit().remove(); // remove exiting elements

circles
  .enter()
  .append("circle") // add new elements
  .merge(circles) // merge with existing
  .attr("cx", (d) => x(d.value))
  .attr("cy", (d) => y(d.value))
  .attr("r", 5);
```

### Scales + Axes

```js
const x = d3.scaleLinear().domain([0, 100]).range([0, 800]);
const y = d3.scaleBand().domain(categories).range([0, 600]).padding(0.1);

svg
  .append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(
    d3
      .axisBottom(x)
      .tickSize(-height)
      .tickFormat((d) => `${d}%`),
  );

svg
  .append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y));
```

### Transitions

```js
svg
  .selectAll("rect")
  .transition()
  .duration(750)
  .ease(d3.easeLinear)
  .attr("height", (d) => y(d.value));
```

### Color Scales

```js
const color = d3.scaleOrdinal().domain(categories).range(d3.schemeCategory10);

// Or sequential
const colorSeq = d3.scaleSequential(d3.interpolateViridis).domain([min, max]);
```

### Force Simulation (Networks)

```js
const simulation = d3
  .forceSimulation(nodes)
  .force(
    "link",
    d3
      .forceLink(links)
      .id((d) => d.id)
      .distance(50),
  )
  .force("charge", d3.forceManyBody().strength(-300))
  .force("center", d3.forceCenter(width / 2, height / 2));

simulation.on("tick", () => {
  link
    .attr("x1", (d) => d.source.x)
    .attr("y1", (d) => d.source.y)
    .attr("x2", (d) => d.target.x)
    .attr("y2", (d) => d.target.y);
  node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
});
```

## Gotchas & Tips

- **Use `merge()` to update both entering and existing elements** in a single chain
- **Key functions in `.data()` prevent unnecessary element recreation** when reordering
- **SVG coordinate system has origin at top-left**; y increases downward
- **Scales are the bridge** between data space and visual space; think in terms of scales
- **Selections are lazy**; operations queue and execute in order
- **Use `.attr()` for SVG/HTML attributes; use `.style()` for CSS properties**
- **Performance matters**: Use canvas (via d3-path) for 10,000+ elements
- **Transitions don't block**: Stack multiple transitions or use `.on("end", callback)`
- **Geographic projections distort**; choose based on use case (Mercator, Albers, etc.)
- **Force simulations converge**; stop listening after alpha < threshold

## Chart Type Strategies

- **Line/Area Charts**: Use d3-shape's line/area generators + scales + axes
- **Bar Charts**: Use scaleBand for positioning, transitions for updates
- **Scatterplots**: Use scaleLinear for both axes, circles for marks
- **Pie/Donut**: Use d3.pie() + d3.arc() shape generators
- **Treemaps**: Use d3.treemap() hierarchy layout
- **Trees/Dendrograms**: Use d3.tree() or d3.cluster() layouts
- **Networks**: Use d3.forceSimulation() + link/node groups
- **Maps**: Use d3.geoProjection() + d3.geoPath()
- **Heatmaps**: Use scaleBand + scaleSequential color scale

## Resources

- **Official docs**: d3js.org (API reference by module)
- **Observable notebooks**: observablehq.com/@d3 (173+ working examples)
- **Gallery**: Full catalog at observablehq.com/@d3/gallery
- **Community**: Lots of StackOverflow questions tagged d3.js

## Reference Library Contents

The `.opencode/skill/d3/references/` directory contains complete API documentation organized by module, code examples, Vue components, and sample data for hands-on learning.
