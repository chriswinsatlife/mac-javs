# Excalidraw Codebase Documentation

## JSON Schema
The Excalidraw data format uses plaintext JSON.

### Excalidraw files
When saving an Excalidraw scene locally to a file, the JSON file (.excalidraw) is using the below format.

#### Attributes
| Attribute  | Description                                   | Value                                         |
|------------|-----------------------------------------------|-----------------------------------------------|
| type       | The type of the Excalidraw schema             | "excalidraw"                                  |
| version    | The version of the Excalidraw schema          | number                                        |
| source     | The source URL of the Excalidraw application  | "https://excalidraw.com"                      |
| elements   | Excalidraw elements on canvas                 | Array containing excalidraw element objects   |
| appState   | Application state/configuration               | Object containing application state properties|
| files      | Data for excalidraw image elements            | Object containing image data                  |

#### JSON Schema example
```json
{
  // schema information
  "type": "excalidraw",
  "version": 2,
  "source": "https://excalidraw.com",

  // elements on canvas
  "elements": [
    // example element
    {
      "id": "pologsyG-tAraPgiN9xP9b",
      "type": "rectangle",
      "x": 928,
      "y": 319,
      "width": 134,
      "height": 90
      /* ...other element properties */
    }
    /* other elements */
  ],

  // editor state (canvas config, preferences, ...)
  "appState": {
    "gridSize": 20,
    "viewBackgroundColor": "#ffffff"
  },

  // files data for "image" elements, using format `{ [fileId]: fileData }`
  "files": {
    // example of an image data object
    "3cebd7720911620a3938ce77243696149da03861": {
      "mimeType": "image/png",
      "id": "3cebd7720911620a3938c.77243626149da03861",
      "dataURL": "data:image/png;base64,iVBORWOKGgoAAAANSUhEUgA=",
      "created": 1690295874454,
      "lastRetrieved": 1690295874454
    }
    /* ...other image data objects */
  }
}
```

### Excalidraw clipboard format
When copying selected excalidraw elements to clipboard, the JSON schema is similar to .excalidraw format, except it differs in attributes.

#### Attributes
| Attribute | Description | Example Value |
| type  | The type of the Excalidraw document.  | "excalidraw/clipboard" |
| elements  | An array of objects representing excalidraw elements on canvas. | Array containing excalidraw element objects (see example below) |
| files | Data for excalidraw image elements. | Object containing image data  |

---

## Frames

### Ordering

Frames should be ordered where frame children come first, followed by the frame element itself:

```json
[
  other_element,
  frame1_child1,
  frame1_child2,
  frame1,
  other_element,
  frame2_child1,
  frame2_child2,
  frame2,
  other_element,
  ...
]
```

If not ordered correctly, the editor will still function, but the elements may not be rendered and clipped correctly. Further, the renderer relies on this ordering for performance optimizations.