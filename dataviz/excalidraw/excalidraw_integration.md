# Excalidraw Integration

## Module bundler [​](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/integration\#module-bundler "Direct link to heading")

If you are using a module bundler (for instance, Webpack), you can import it as an ES6 module as shown below

```jsx
import { Excalidraw } from "@excalidraw/excalidraw";

```

info

Throughout the documentation we use live, editable Excalidraw examples like the one shown below.

While we aim for the examples to closely reflect what you'd get if you rendered it yourself, we actually initialize it with some props behind the scenes.
For example, we're passing a `theme` prop to it based on the current color theme of the docs you're just reading.

Live Editor

```jsx
function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Excalidraw Example</h1>
      <div style={{ height: "500px" }}>
        <Excalidraw />
      </div>
    </>
  );
}
```

Result

# Excalidraw Example

To move canvas, hold mouse wheel or spacebar while dragging, or use the hand tool

## Shapes

1

2

3

4

5

6

7

8

9

0

Library

Drawing canvas

### Next.js [​](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/integration\#nextjs "Direct link to heading")

Since Excalidraw doesn't support `server side rendering` so it should be rendered only on `client`. The way to achieve this in next.js is using `next.js dynamic import`.

If you want to only import `Excalidraw` component you can do 👇

```jsx
import dynamic from "next/dynamic";
import "@excalidraw/excalidraw/index.css";

const Excalidraw = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
  },
);
export default function App() {
  return <Excalidraw />;
}

```

However the above component only works for named component exports. If you want to import some util / constant or something else apart from Excalidraw, then this approach will not work. Instead you can write a wrapper over Excalidraw and import the wrapper dynamically.

If you are using `pages router` then importing the wrapper dynamically would work, where as if you are using `app router` then you will have to also add `useClient` directive on top of the file in addition to dynamically importing the wrapper as shown 👇

- Excalidraw Wrapper
- Pages router
- App router

```jsx
"use client";
import { Excalidraw, convertToExcalidrawElements } from "@excalidraw/excalidraw";

import "@excalidraw/excalidraw/index.css";

const ExcalidrawWrapper: React.FC = () => {
  console.info(convertToExcalidrawElements([{\
    type: "rectangle",\
    id: "rect-1",\
    width: 186.47265625,\
    height: 141.9765625,\
  },]));
  return (
    <div style={{height:"500px", width:"500px"}}>
      <Excalidraw />
    </div>
  );
};
export default ExcalidrawWrapper;

```

{/ _Link should be updated to point to the latest!_/}
Here is a [source code](https://github.com/excalidraw/excalidraw/tree/master/examples/with-nextjs) for the example with app and pages router. You you can try it out [here](https://excalidraw-package-example-with-nextjs.vercel.app/).

The `types` are available at `@excalidraw/excalidraw/types`, check [CodeSandbox](https://codesandbox.io/p/sandbox/github/excalidraw/excalidraw/tree/master/examples/with-script-in-browser) example for details.

### Preact [​](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/integration\#preact "Direct link to heading")

Since we support `umd` build ships with `react/jsx-runtime` and `react-dom/client` inlined with the package. This conflicts with `Preact` and hence the build doesn't work directly with `Preact`.

However we have shipped a separate build for `Preact` so if you are using `Preact` you need to set `process.env.IS_PREACT` to `true` to use the `Preact` build.

Once the above `env` variable is set, you will be able to use the package in `Preact` as well.

info

When using `vite` or any build tools, you will have to make sure the `process` is accessible as we are accessing `process.env.IS_PREACT` to decide whether to use `preact` build.

Since Vite removes env variables by default, you can update the vite config to ensure its available 👇

```jsx
 define: {
    "process.env.IS_PREACT": JSON.stringify("true"),
  },

```

## Browser [​](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/integration\#browser "Direct link to heading")

To use it Excalidraw in a browser directly, use the following setup 👇

> **Note**: We rely on import maps to de-duplicate `react`, `react-dom` and `react/jsx-runtime` versions.

- html
- Javascript

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Excalidraw in browser</title>
    <meta charset="UTF-8" />
    <link
      rel="stylesheet"
      href="https://esm.sh/@excalidraw/excalidraw@0.18.0/dist/dev/index.css"
    />
    <link rel="stylesheet" href="./index.css" />
    <script>
        window.EXCALIDRAW_ASSET_PATH = "https://esm.sh/@excalidraw/excalidraw@0.18.0/dist/prod/";
        </script>
    <script type="importmap">
      {
        "imports": {
          "react": "https://esm.sh/react@19.0.0",
          "react/jsx-runtime": "https://esm.sh/react@19.0.0/jsx-runtime",
          "react-dom": "https://esm.sh/react-dom@19.0.0"
          }
      }
    </script>
  </head>

  <body>
    <div class="container">
      <h1>Excalidraw Embed Example</h1>
      <div id="app"></div>
    </div>
    <script type="text/javascript" src="packages/excalidraw/index.js"></script>
  </body>
</html>

```

You can try it out [here](https://jsfiddle.net/vfn6dm14/3/).

- [Module bundler](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/integration#module-bundler)
  - [Next.js](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/integration#nextjs)
  - [Preact](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/integration#preact)
- [Browser](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/integration#browser)