---
url: https://www.jsdelivr.com/package/npm/@mermaid-js/parser
---

# Mermaid JS Parser

## How the package works
The package exports a parse function that has two parameters:

```js
declare function parse<T extends DiagramAST>(
  diagramType: keyof typeof initializers,
  text: string
): T;
```
### How does a Langium-based parser work?

```js
sequenceDiagram
actor Package
participant Module
participant TokenBuilder
participant Lexer
participant Parser
participant ValueConverter


Package ->> Module: Create services
Module ->> TokenBuilder: Override or/and<br>reorder rules
TokenBuilder ->> Lexer: Read the string and transform<br>it into a token stream
Lexer ->> Parser: Parse token<br>stream into AST
Parser ->> ValueConverter: Clean/modify tokenized<br>rules returned value
ValueConverter -->> Package: Return AST
```

### When to override TokenBuilder?

- To override keyword rules.
- To override terminal rules that need a custom function.
- To manually reorder the list of rules.

### When to override Lexer?

- To modify input before tokenizing.
- To insert/modify tokens that cannot or have not been parsed.

### When to override LangiumParser?

- To insert or modify attributes that can't be parsed.

### When to override ValueConverter?

- To modify the returned value from the parser.


## CDN

```html
<script type="module">
import mermaidJsparser from 'https://cdn.jsdelivr.net/npm/@mermaid-js/parser/+esm'
</script>
```