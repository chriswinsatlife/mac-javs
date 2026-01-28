# Mermaid with SVG to Rough JS Styling Config

Here's what each option does:

## **Sketchy Style Options:**
- **`roughness`**: How sketchy it looks (0 = smooth, 10 = super rough)
- **`bowing`**: How much lines curve (0 = straight, 10 = very curvy)
- **`fillStyle`**: Fill patterns - try `'zigzag'`, `'cross-hatch'`, `'dots'`, `'solid'`
- **`fillWeight`**: Thickness of the fill pattern lines
- **`hachureAngle`**: Angle of the fill lines (try 0, 45, 90)
- **`stroke`**: Line color (`'#red'`, `'#333'`, etc.)

## **Font & Effects:**
- **`fontFamily`**: Change to any font (`'Gaegu'`, `'Times'`, `'Helvetica'`)
- **`backgroundColor`**: Set background color or `'transparent'`
- **`pencilFilter`**: Adds pencil texture (try `true` vs `false`)
- **`seed`**: Change the number for different random variations

## **To Change Mermaid Colors Before Conversion:**
Add this before the Mermaid code:

```javascript
// Change Mermaid colors first
let mermaidCode = `
%%{init: {'pie': {'textPosition': 0.5}, 'themeVariables': { 'pie1': '#ff6b6b', 'pie2': '#4ecdc4', 'pie3': '#45b7d1', 'pie4': '#f9ca24', 'pieTitleTextColor': '#2c3e50'}}}%%
pie title ${data.title}`;
```