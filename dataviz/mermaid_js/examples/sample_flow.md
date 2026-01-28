---
rankdir: LR
nodesep: 120
ranksep: 140
startGap: 16
endGap: 24
labelOffset: 16
roughness: 1.8
curveTightness: 0.25
fontFamily: 'Architects Daughter, cursive'
fontMaxPx: 18
fontMinPx: 10
stroke: '#7B61FF'
fill: '#EFEAFF'
---

```mermaid
flowchart LR
A(["Start"]) --> B{"Need Auth?"}
B -->|Yes| C["Login"]
B -->|No| D["Guest Mode"]
C --> E{"Valid?"}
E -->|Yes| F["Dashboard"]
E -->|No| C
D --> G["Limited Access"]
F --> H["Full Features"]
G --> I["Upgrade Prompt"]
H --> J(["End"]) 
I --> C
F --> K["Settings"]
K --> F
```
