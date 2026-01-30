## Simple Flow

Basic linear flow with three nodes connected by solid arrows.

```
graph TD
  A[Start] --> B[Process] --> C[End]
```

StartProcessEnd

```
┌─────────┐
│         │
│  Start  │
│         │
└────┬────┘
     │
     │
     │
     │
     ▼
┌─────────┐
│         │
│ Process │
│         │
└────┬────┘
     │
     │
     │
     │
     ▼
┌─────────┐
│         │
│   End   │
│         │
└─────────┘
```

## Original Node Shapes

Rectangle, rounded, diamond, stadium, and circle.

```
graph LR
  A[Rectangle] --> B(Rounded)
  B --> C{Diamond}
  C --> D([Stadium])
  D --> E((Circle))
```

RectangleRoundedDiamondStadiumCircle

```
┌───────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌────────┐
│           │     │         │     │         │     │         │     │        │
│ Rectangle ├────►│ Rounded ├────►│ Diamond ├────►│ Stadium ├────►│ Circle │
│           │     │         │     │         │     │         │     │        │
└───────────┘     └─────────┘     └─────────┘     └─────────┘     └────────┘
```

## Batch 1 Shapes

Subroutine `[[text]]`, double circle `(((text)))`, and hexagon `{{text}}`.

```
graph LR
  A[[Subroutine]] --> B(((Double Circle)))
  B --> C{{Hexagon}}
```

SubroutineDouble CircleHexagon

```
┌────────────┐     ┌───────────────┐     ┌─────────┐
│            │     │               │     │         │
│ Subroutine ├────►│ Double Circle ├────►│ Hexagon │
│            │     │               │     │         │
└────────────┘     └───────────────┘     └─────────┘
```

## Batch 2 Shapes

Cylinder `[(text)]`, asymmetric `>text]`, trapezoid `[/text\]`, and inverse trapezoid `[\text/]`.

```
graph LR
  A[(Database)] --> B>Flag Shape]
  B --> C[/Wider Bottom\]
  C --> D[\Wider Top/]
```

DatabaseFlag ShapeWider BottomWider Top

```
┌──────────┐     ┌────────────┐     ┌──────────────┐     ┌───────────┐
│          │     │            │     │              │     │           │
│ Database ├────►│ Flag Shape ├────►│ Wider Bottom ├────►│ Wider Top │
│          │     │            │     │              │     │           │
└──────────┘     └────────────┘     └──────────────┘     └───────────┘
```

## All 12 Flowchart Shapes

Every supported flowchart shape in a single diagram.

```
graph LR
  A[Rectangle] --> B(Rounded)
  B --> C{Diamond}
  C --> D([Stadium])
  D --> E((Circle))
  E --> F[[Subroutine]]
  F --> G(((Double Circle)))
  G --> H{{Hexagon}}
  H --> I[(Database)]
  I --> J>Flag]
  J --> K[/Trapezoid\]
  K --> L[\Inverse Trap/]
```

RectangleRoundedDiamondStadiumCircleSubroutineDouble CircleHexagonDatabaseFlagTrapezoidInverse Trap

```
┌───────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌────────┐     ┌────────────┐     ┌───────────────┐     ┌─────────┐     ┌──────────┐     ┌──────┐     ┌───────────┐     ┌──────────────┐
│           │     │         │     │         │     │         │     │        │     │            │     │               │     │         │     │          │     │      │     │           │     │              │
│ Rectangle ├────►│ Rounded ├────►│ Diamond ├────►│ Stadium ├────►│ Circle ├────►│ Subroutine ├────►│ Double Circle ├────►│ Hexagon ├────►│ Database ├────►│ Flag ├────►│ Trapezoid ├────►│ Inverse Trap │
│           │     │         │     │         │     │         │     │        │     │            │     │               │     │         │     │          │     │      │     │           │     │              │
└───────────┘     └─────────┘     └─────────┘     └─────────┘     └────────┘     └────────────┘     └───────────────┘     └─────────┘     └──────────┘     └──────┘     └───────────┘     └──────────────┘
```

## All Edge Styles

Solid, dotted, and thick arrows with labels.

```
graph TD
  A[Source] -->|solid| B[Target 1]
  A -.->|dotted| C[Target 2]
  A ==>|thick| D[Target 3]
```

soliddottedthickSourceTarget 1Target 2Target 3

```
┌──────────┐
│          │
│  Source  ├─thickted─────┐
│          │        │     │
└─────┬────┘        └─────┼────────────────┐
      │                   │                │
      │                   │                │
    solid                 │                │
      │                   │                │
      ▼                   ▼                ▼
┌──────────┐        ┌──────────┐     ┌──────────┐
│          │        │          │     │          │
│ Target 1 │        │ Target 2 │     │ Target 3 │
│          │        │          │     │          │
└──────────┘        └──────────┘     └──────────┘
```

## No-Arrow Edges

Lines without arrowheads: solid `---`, dotted `-.-`, thick `===`.

```
graph TD
  A[Node 1] ---|related| B[Node 2]
  B -.- C[Node 3]
  C === D[Node 4]
```

relatedNode 1Node 2Node 3Node 4

```
┌─────────┐
│         │
│  Node 1 │
│         │
└────┬────┘
     │
     │
  related
     │
     ▼
┌─────────┐
│         │
│  Node 2 │
│         │
└────┬────┘
     │
     │
     │
     │
     ▼
┌─────────┐
│         │
│  Node 3 │
│         │
└────┬────┘
     │
     │
     │
     │
     ▼
┌─────────┐
│         │
│  Node 4 │
│         │
└─────────┘
```

## Bidirectional Arrows

Arrows in both directions: `<-->`, `<-.->`, `<==>`.

```
graph LR
  A[Client] <-->|sync| B[Server]
  B <-.->|heartbeat| C[Monitor]
  C <==>|data| D[Storage]
```

syncheartbeatdataClientServerMonitorStorage

```
┌────────┐      ┌────────┐           ┌─────────┐      ┌─────────┐
│        │      │        │           │         │      │         │
│ Client ├sync─►│ Server ├─heartbeat►│ Monitor ├data─►│ Storage │
│        │      │        │           │         │      │         │
└────────┘      └────────┘           └─────────┘      └─────────┘
```

## Parallel Links (&)

Using `&` to create multiple edges from/to groups of nodes.

```
graph TD
  A[Input] & B[Config] --> C[Processor]
  C --> D[Output] & E[Log]
```

InputConfigProcessorOutputLog

```
┌───────────┐     ┌────────┐
│           │     │        │
│   Input   │     │ Config │
│           │     │        │
└─────┬─────┘     └────┬───┘
      │                │
      │                │
      │                │
      │                │
      ▼                │
┌───────────┐          │
│           │          │
│ Processor ├◄─────────┤
│           │          │
└─────┬─────┘          │
      │                │
      │                │
      │                │
      │                │
      ▼                ▼
┌───────────┐     ┌────────┐
│           │     │        │
│   Output  │     │  Log   │
│           │     │        │
└───────────┘     └────────┘
```

## Chained Edges

A long chain of nodes demonstrating edge chaining syntax.

```
graph LR
  A[Step 1] --> B[Step 2] --> C[Step 3] --> D[Step 4] --> E[Step 5]
```

Step 1Step 2Step 3Step 4Step 5

```
┌────────┐     ┌────────┐     ┌────────┐     ┌────────┐     ┌────────┐
│        │     │        │     │        │     │        │     │        │
│ Step 1 ├────►│ Step 2 ├────►│ Step 3 ├────►│ Step 4 ├────►│ Step 5 │
│        │     │        │     │        │     │        │     │        │
└────────┘     └────────┘     └────────┘     └────────┘     └────────┘
```

## Direction: Left-Right (LR)

Horizontal layout flowing left to right.

```
graph LR
  A[Input] --> B[Transform] --> C[Output]
```

InputTransformOutput

```
┌───────┐     ┌───────────┐     ┌────────┐
│       │     │           │     │        │
│ Input ├────►│ Transform ├────►│ Output │
│       │     │           │     │        │
└───────┘     └───────────┘     └────────┘
```

## Direction: Bottom-Top (BT)

Vertical layout flowing from bottom to top.

```
graph BT
  A[Foundation] --> B[Layer 2] --> C[Top]
```

FoundationLayer 2Top

```
┌────────────┐
│            │
│    Top     │
│            │
└────────────┘
       ▲
       │
       │
       │
       │
┌──────┴─────┐
│            │
│  Layer 2   │
│            │
└────────────┘
       ▲
       │
       │
       │
       │
┌──────┴─────┐
│            │
│ Foundation │
│            │
└────────────┘
```

## Subgraphs

Grouped nodes inside labeled subgraph containers.

```
graph TD
  subgraph Frontend
    A[React App] --> B[State Manager]
  end
  subgraph Backend
    C[API Server] --> D[Database]
  end
  B --> C
```

FrontendBackendReact AppState ManagerAPI ServerDatabase

```
┌───────────────────┐
│     Frontend      │
│                   │
│                   │
│ ┌───────────────┐ │
│ │               │ │
│ │   React App   │ │
│ │               │ │
│ └───────┬───────┘ │
│         │         │
│         │         │
│         │         │
│         │         │
│         ▼         │
│ ┌───────────────┐ │
│ │               │ │
│ │ State Manager │ │
│ │               │ │
│ └───────┬───────┘ │
│         │         │
└─────────┼─────────┘
          │
          │
          │
┌─────────┼─────────┐
│      Backend      │
│         │         │
│         ▼         │
│ ┌───────────────┐ │
│ │               │ │
│ │   API Server  │ │
│ │               │ │
│ └───────┬───────┘ │
│         │         │
│         │         │
│         │         │
│         │         │
│         ▼         │
│ ┌───────────────┐ │
│ │               │ │
│ │    Database   │ │
│ │               │ │
│ └───────────────┘ │
│                   │
└───────────────────┘
```

## Nested Subgraphs

Subgraphs inside subgraphs for hierarchical grouping.

```
graph TD
  subgraph Cloud
    subgraph us-east [US East Region]
      A[Web Server] --> B[App Server]
    end
    subgraph us-west [US West Region]
      C[Web Server] --> D[App Server]
    end
  end
  E[Load Balancer] --> A
  E --> C
```

CloudUS East RegionUS West RegionLoad BalancerWeb ServerApp ServerWeb ServerApp Server

```
┌───────────────────────────────────────┐
│                 Cloud                 │
│                                       │
│                                       │
│ ┌────────────────┐ ┌────────────────┐ │
│ │US East Region  │ │US West Region  │ │
│ │                │ │                │ │
│ │                │ │                │ │
│ │ ┌────────────┐ │ │ ┌────────────┐ │ │ ┌───────────────┐
│ │ │            │ │ │ │            │ │ │ │               │
│ │ │ Web Server │◄┼┐│ │ Web Server │◄┼┬┼─┤ Load Balancer │
│ │ │            │ │││ │            │ │││ │               │
│ │ └──────┬─────┘ │││ └──────┬─────┘ │││ └───────────────┘
│ │        │       │││        │       │││
│ │        │       │││        │       │││
│ │        │       │└┼────────┼───────┼┘│
│ │        │       │ │        │       │ │
│ │        ▼       │ │        ▼       │ │
│ │ ┌────────────┐ │ │ ┌────────────┐ │ │
│ │ │            │ │ │ │            │ │ │
│ │ │ App Server │ │ │ │ App Server │ │ │
│ │ │            │ │ │ │            │ │ │
│ │ └────────────┘ │ │ └────────────┘ │ │
│ │                │ │                │ │
│ └────────────────┘ └────────────────┘ │
│                                       │
└───────────────────────────────────────┘
```

## Subgraph Direction Override

Using `direction LR` inside a subgraph while the outer graph flows TD.

```
graph TD
  subgraph pipeline [Processing Pipeline]
    direction LR
    A[Input] --> B[Parse] --> C[Transform] --> D[Output]
  end
  E[Source] --> A
  D --> F[Sink]
```

Processing PipelineSourceSinkInputParseTransformOutput

```
┌───────────────┐
│Processing Pipe│
│               │
│               │
│ ┌───────────┐ │   ┌────────┐
│ │           │ │   │        │
│ │   Input   │◄┼───┤ Source │
│ │           │ │   │        │
│ └─────┬─────┘ │   └────────┘
│       │       │
│       │       │
│       │       │
│       │       │
│       ▼       │
│ ┌───────────┐ │
│ │           │ │
│ │   Parse   │ │
│ │           │ │
│ └─────┬─────┘ │
│       │       │
│       │       │
│       │       │
│       │       │
│       ▼       │
│ ┌───────────┐ │
│ │           │ │
│ │ Transform │ │
│ │           │ │
│ └─────┬─────┘ │
│       │       │
│       │       │
│       │       │
│       │       │
│       ▼       │
│ ┌───────────┐ │
│ │           │ │
│ │   Output  │ │
│ │           │ │
│ └─────┬─────┘ │
│       │       │
└───────┼───────┘
        │
        │
        ▼
  ┌───────────┐
  │           │
  │    Sink   │
  │           │
  └───────────┘
```

## ::: Class Shorthand

Assigning classes with `:::` syntax directly on node definitions.

```
graph TD
  A[Normal]:::default --> B[Highlighted]:::highlight --> C[Error]:::error
  classDef default fill:#f4f4f5,stroke:#a1a1aa
  classDef highlight fill:#fbbf24,stroke:#d97706
  classDef error fill:#ef4444,stroke:#dc2626
```

NormalHighlightedError

```
┌─────────────┐
│             │
│    Normal   │
│             │
└──────┬──────┘
       │
       │
       │
       │
       ▼
┌─────────────┐
│             │
│ Highlighted │
│             │
└──────┬──────┘
       │
       │
       │
       │
       ▼
┌─────────────┐
│             │
│    Error    │
│             │
└─────────────┘
```

## Inline Style Overrides

Using `style` statements to override node fill and stroke colors.

```
graph TD
  A[Default] --> B[Custom Colors] --> C[Another Custom]
  style B fill:#3b82f6,stroke:#1d4ed8,color:#ffffff
  style C fill:#10b981,stroke:#059669
```

DefaultCustom ColorsAnother Custom

```
┌────────────────┐
│                │
│    Default     │
│                │
└────────┬───────┘
         │
         │
         │
         │
         ▼
┌────────────────┐
│                │
│ Custom Colors  │
│                │
└────────┬───────┘
         │
         │
         │
         │
         ▼
┌────────────────┐
│                │
│ Another Custom │
│                │
└────────────────┘
```

## CI/CD Pipeline

A realistic CI/CD pipeline with decision points, feedback loops, and deployment stages.

```
graph TD
  subgraph ci [CI Pipeline]
    A[Push Code] --> B{Tests Pass?}
    B -->|Yes| C[Build Image]
    B -->|No| D[Fix & Retry]
    D -.-> A
  end
  C --> E([Deploy Staging])
  E --> F{QA Approved?}
  F -->|Yes| G((Production))
  F -->|No| D
```

CI PipelineYesNoYesNoDeploy StagingQA Approved?ProductionPush CodeTests Pass?Build ImageFix & Retry

```
┌────────────────────────────────────────┐
│              CI Pipeline               │
│                                        │
│                                        │
│ ┌────────────────┐                     │
│ │                │                     │
│ │   Push Code    │◄───────────┐        │
│ │                │            │        │
│ └────────┬───────┘            │        │
│          │                    │        │
│          │                    │        │
│          │                    │        │
│          │                    │        │
│          ▼                    │        │
│ ┌────────────────┐            │        │
│ │                │            │        │
│ │  Tests Pass?   ├────No──────┤        │
│ │                │            │        │
│ └────────┬───────┘            │        │
│          │                    │        │
│          │                    │        │
│          │                    │        │
│          │                    │        │
│         Yes                   │        │
│          │                    │        │
│          │                    │        │
│          │                    │        │
│          ▼                    ▼        │
│ ┌────────────────┐     ┌──────┴──────┐ │
│ │                │     │             │ │
│ │  Build Image   │     │ Fix & Retry │ │
│ │                │     │             │ │
│ └────────┬───────┘     └─────────────┘ │
│          │                    ▲        │
└──────────┼────────────────────┼────────┘
           │                    │
           │                    │
           ▼                    │
  ┌────────────────┐            │
  │                │            │
  │ Deploy Staging │            │
  │                │            │
  └────────┬───────┘            │
           │                    │
           │                    │
           │                    │
           │                    │
           ▼                    │
  ┌────────────────┐            │
  │                │            │
  │  QA Approved?  ├────No──────┘
  │                │
  └────────┬───────┘
           │
           │
          Yes
           │
           ▼
  ┌────────────────┐
  │                │
  │   Production   │
  │                │
  └────────────────┘
```

## System Architecture

A microservices architecture with multiple services and data stores.

```
graph LR
  subgraph clients [Client Layer]
    A([Web App]) --> B[API Gateway]
    C([Mobile App]) --> B
  end
  subgraph services [Service Layer]
    B --> D[Auth Service]
    B --> E[User Service]
    B --> F[Order Service]
  end
  subgraph data [Data Layer]
    D --> G[(Auth DB)]
    E --> H[(User DB)]
    F --> I[(Order DB)]
    F --> J([Message Queue])
  end
```

Client LayerService LayerData LayerWeb AppAPI GatewayMobile AppAuth ServiceUser ServiceOrder ServiceAuth DBUser DBOrder DBMessage Queue

```
┌────────────────────────────────────┐ ┌───────────────────┐ ┌───────────────────┐
│           Client Layer             │ │   Service Layer   │ │    Data Layer     │
│                                    │ │                   │ │                   │
│                                    │ │                   │ │                   │
│ ┌────────────┐     ┌─────────────┐ │ │ ┌───────────────┐ │ │ ┌───────────────┐ │
│ │            │     │             │ │ │ │               │ │ │ │               │ │
│ │  Web App   ├────►│ API Gateway ├─┼─┼►│  Auth Service ├─┼─┼►│    Auth DB    │ │
│ │            │     │             │ │ │ │               │ │ │ │               │ │
│ └────────────┘     └──────┬──────┘ │ │ └───────────────┘ │ │ └───────────────┘ │
│                           ▲        │ │                   │ │                   │
│                           │        │ │                   │ │                   │
│                           │        │ │                   │ │                   │
│                           │        │ │                   │ │                   │
│                           │        │ │                   │ │                   │
│ ┌────────────┐            │        │ │ ┌───────────────┐ │ │ ┌───────────────┐ │
│ │            │            │        │ │ │               │ │ │ │               │ │
│ │ Mobile App ├────────────┼────────┼─┼►│  User Service ├─┼─┼►│    User DB    │ │
│ │            │            │        │ │ │               │ │ │ │               │ │
│ └────────────┘            │        │ │ └───────────────┘ │ │ └───────────────┘ │
│                           │        │ │                   │ │                   │
└───────────────────────────┼────────┘ │                   │ │                   │
                            │          │                   │ │                   │
                            │          │                   │ │                   │
                            │          │                   │ │                   │
                            │          │ ┌───────────────┐ │ │ ┌───────────────┐ │
                            │          │ │               │ │ │ │               │ │
                            └──────────┼►│ Order Service ├─┼─┼►│    Order DB   │ │
                                       │ │               │ │ │ │               │ │
                                       │ └───────┬───────┘ │ │ └───────────────┘ │
                                       │         │         │ │                   │
                                       └─────────┼─────────┘ │                   │
                                                 │           │                   │
                                                 │           │                   │
                                                 │           │                   │
                                                 │           │ ┌───────────────┐ │
                                                 │           │ │               │ │
                                                 └───────────┼►│ Message Queue │ │
                                                             │ │               │ │
                                                             │ └───────────────┘ │
                                                             │                   │
                                                             └───────────────────┘
```

## Decision Tree

A branching decision flowchart with multiple outcomes.

```
graph TD
  A{Is it raining?} -->|Yes| B{Have umbrella?}
  A -->|No| C([Go outside])
  B -->|Yes| D([Go with umbrella])
  B -->|No| E{Is it heavy?}
  E -->|Yes| F([Stay inside])
  E -->|No| G([Run for it])
```

YesNoYesNoYesNoIs it raining?Have umbrella?Go outsideGo with umbrellaIs it heavy?Stay insideRun for it

```
┌──────────────────┐
│                  │
│  Is it raining?  │ ├─────No───────┐
│                  │                │
└─────────┬────────┘                │
          │                         │
          │                         │
         Yes                        │
          │                         │
          ▼                         ▼
┌──────────────────┐        ┌──────────────┐
│                  │        │              │
│  Have umbrella?  │ ├No─┐  │  Go outside  │
│                  │     │  │              │
└─────────┬────────┘     │  └──────────────┘
          │              │
          │              │
         Yes             └──────────┐
          │                         │
          ▼                         ▼
┌──────────────────┐        ┌──────────────┐
│                  │        │              │
│ Go with umbrella │     Yes┤ Is it heavy? │
│                  │     │  │              │
└──────────────────┘     │  └───────┬──────┘
                         │          │
                         │          │
          ┌──────────────┘         No
          │                         │
          ▼                         ▼
┌──────────────────┐        ┌──────────────┐
│                  │        │              │
│   Stay inside    │        │  Run for it  │
│                  │        │              │
└──────────────────┘        └──────────────┘
```

## Git Branching Workflow

A git flow showing feature branches, PRs, and release cycle.

```
graph LR
  A[main] --> B[develop]
  B --> C[feature/auth]
  B --> D[feature/ui]
  C --> E{PR Review}
  D --> E
  E -->|approved| B
  B --> F[release/1.0]
  F --> G{Tests?}
  G -->|pass| A
  G -->|fail| F
```

approvedpassfailmaindevelopfeature/authfeature/uiPR Reviewrelease/1.0Tests?

```
┌──────┐     ┌─────────┐     ┌──────────────┐      ┌───────────┐
│      │     │         │     │              │      │           │
│ main ├────►│ develop ├────►│ feature/auth ├───┬─►│ PR Review │
│      │     │         │     │              │   │  │           │
└──────┘     └────┬────┘     └──────────────┘   │  └─────┬─────┘
    ▲             ▲                             │    approved
    │             │                             │        │
    └─────────────┼──────────────────┬──────────┼────────┘
                  │                  │          │
                  │                  │          │
                  │          ┌───────┴──────┐   │  ┌───────────┐
                  │          │              │   │  │           │
                  ├─────────►│  feature/ui  │  fail┤   Tests?  │
                  │          │              │   │  │           │
                  │          └──────────────┘   │  └───────────┘
                  │                             │        ▲
                  │                             │        │
                  │                  ┌──────────┘        │
                  │                  │                   │
                  │                  ▼                   │
                  │          ┌──────────────┐            │
                  │          │              │            │
                  └─────────►│ release/1.0  ├────────────┘
                             │              │
                             └──────────────┘
```
