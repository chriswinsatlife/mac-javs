## Basic State Diagram

A simple `stateDiagram-v2` with start/end pseudostates and transitions.

```
stateDiagram-v2
  [*] --> Idle
  Idle --> Active : start
  Active --> Idle : cancel
  Active --> Done : complete
  Done --> [*]
```

startcancelcompleteIdleActiveDone

```
┌──────────┐
│          │
│          │
│          │
└─────┬────┘
      │
      │
      │
      │
      ▼
┌──────────┐
│          │
│   Idle   │
│          │
└─────┬────┘
      ▲
      │
   cancel
      │
      ▼
┌─────┴────┐
│          │
│  Active  │
│          │
└─────┬────┘
      │
      │
  complete
      │
      ▼
┌──────────┐
│          │
│   Done   │
│          │
└─────┬────┘
      │
      │
      │
      │
      ▼
┌──────────┐
│          │
│          │
│          │
└──────────┘
```

## State: Composite States

Nested composite states with inner transitions.

```
stateDiagram-v2
  [*] --> Idle
  Idle --> Processing : submit
  state Processing {
    parse --> validate
    validate --> execute
  }
  Processing --> Complete : done
  Processing --> Error : fail
  Error --> Idle : retry
  Complete --> [*]
```

ProcessingsubmitdonefailretryIdleCompleteErrorparsevalidateexecute

```
                      ┌──────────────┐
                      │ Processing   │
                      │              │
                      │              │
┌────────────┐        │ ┌──────────┐ │
│            │        │ │          │ │
│            │        │ │  parse   │ │
│            │        │ │          │ │
└──────┬─────┘        │ └─────┬────┘ │
       │              │       │      │
       │              │       │      │
       │              │       │      │
       │              │       │      │
       ▼              │       ▼      │
┌────────────┐        │ ┌──────────┐ │
│            │        │ │          │ │
│    Idle    │   ◄───┐│ │ validate │ │
│            │       ││ │          │ │
└──────┬─────┘       ││ └─────┬────┘ │
       │             ││       │      │
       │             ││       │      │
    submit           ││       │      │
       │             ││       │      │
       ▼             ││       ▼      │
┌────────────┐       ││ ┌──────────┐ │
│            │       ││ │          │ │
│ Processing │  fail─┤│ │ execute  │ │
│            │       ││ │          │ │
└──────┬─────┘       ││ └──────────┘ │
       │             ││              │
       │             │└──────────────┘
     done            └────────┐
       │                    retry
       ▼                      ▼
┌────────────┐          ┌─────┴────┐
│            │          │          │
│  Complete  │          │  Error   │
│            │          │          │
└──────┬─────┘          └──────────┘
       │
       │
       │
       │
       ▼
┌────────────┐
│            │
│            │
│            │
└────────────┘
```

## State: Connection Lifecycle

TCP-like connection state machine with multiple states.

```
stateDiagram-v2
  [*] --> Closed
  Closed --> Connecting : connect
  Connecting --> Connected : success
  Connecting --> Closed : timeout
  Connected --> Disconnecting : close
  Connected --> Reconnecting : error
  Reconnecting --> Connected : success
  Reconnecting --> Closed : max_retries
  Disconnecting --> Closed : done
  Closed --> [*]
```

connectsuccesstimeoutcloseerrorsuccessmax_retriesdoneClosedConnectingConnectedDisconnectingReconnecting

```
┌───────────────┐
│               │
│               │
│               │
└───────┬───────┘
        │
        │
        │
        │
        ▼
┌───────────────┐
│               │
│     Closed    │  ├◄────┬───────────┐
│               │        │           │
└───────┬───────┘        │           │
        ▲                │           │
        │                │           │
     timeout             │           │
        │                │           │
        ▼                │           ▼
┌───────┴───────┐        │   ┌──────────────┐
│               │        │   │              │
│   Connecting  │        │   │              │
│               │        │   │              │
└───────┬───────┘        │   └──────────────┘
        │                │
        │                │
     success             │
        │                │
        ▼                │
┌───────────────┐        ├───┐
│               │        │   │
│   Connected   │  ├◄────┼error──────┐
│               │        │   │       │
└───────┬───────┘        │   │       │
        │                │   │       │
        │                │   │    success
      close              │   └───────┤
        │                │      max_retries
        ▼                │           ▼
┌───────────────┐        │   ┌───────┴──────┐
│               │        │   │              │
│ Disconnecting │  ├done─┘   │ Reconnecting │
│               │            │              │
└───────────────┘            └──────────────┘
```
