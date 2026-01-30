## Sequence: Basic Messages

Simple request/response between two participants.

```
sequenceDiagram
  Alice->>Bob: Hello Bob!
  Bob-->>Alice: Hi Alice!
```

Hello Bob!Hi Alice!AliceBob

```
 ┌───────┐        ┌─────┐
 │ Alice │        │ Bob │
 └───┬───┘        └──┬──┘
     │               │
     │  Hello Bob!   │
     │───────────────▶
     │               │
     │   Hi Alice!   │
     ◀╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌│
     │               │
 ┌───┴───┐        ┌──┴──┐
 │ Alice │        │ Bob │
 └───────┘        └─────┘
```

## Sequence: Participant Aliases

Using `participant ... as ...` for compact diagram IDs with readable labels.

```
sequenceDiagram
  participant A as Alice
  participant B as Bob
  participant C as Charlie
  A->>B: Hello
  B->>C: Forward
  C-->>A: Reply
```

HelloForwardReplyAliceBobCharlie

```
 ┌───────┐   ┌─────┐    ┌─────────┐
 │ Alice │   │ Bob │    │ Charlie │
 └───┬───┘   └──┬──┘    └────┬────┘
     │          │            │
     │  Hello   │            │
     │──────────▶            │
     │          │            │
     │          │  Forward   │
     │          │────────────▶
     │          │            │
     │         Reply         │
     ◀╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌│
     │          │            │
 ┌───┴───┐   ┌──┴──┐    ┌────┴────┐
 │ Alice │   │ Bob │    │ Charlie │
 └───────┘   └─────┘    └─────────┘
```

## Sequence: Actor Stick Figures

Using `actor` instead of `participant` renders stick figures instead of boxes.

```
sequenceDiagram
  actor U as User
  participant S as System
  participant DB as Database
  U->>S: Click button
  S->>DB: Query
  DB-->>S: Results
  S-->>U: Display
```

Click buttonQueryResultsDisplayUserSystemDatabase

```
┌──────┐         ┌────────┐  ┌──────────┐
│ User │         │ System │  │ Database │
└───┬──┘         └────┬───┘  └─────┬────┘
    │                 │            │
    │  Click button   │            │
    │─────────────────▶            │
    │                 │            │
    │                 │   Query    │
    │                 │────────────▶
    │                 │            │
    │                 │  Results   │
    │                 ◀╌╌╌╌╌╌╌╌╌╌╌╌│
    │                 │            │
    │     Display     │            │
    ◀╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌│            │
    │                 │            │
┌───┴──┐         ┌────┴───┐  ┌─────┴────┐
│ User │         │ System │  │ Database │
└──────┘         └────────┘  └──────────┘
```

## Sequence: Arrow Types

All arrow types: solid `->>` and dashed `-->>` with filled arrowheads, open arrows `-)` .

```
sequenceDiagram
  A->>B: Solid arrow (sync)
  B-->>A: Dashed arrow (return)
  A-)B: Open arrow (async)
  B--)A: Open dashed arrow
```

Solid arrow (sync)Dashed arrow (return)Open arrow (async)Open dashed arrowAB

```
 ┌───┐                      ┌───┐
 │ A │                      │ B │
 └─┬─┘                      └─┬─┘
   │                          │
   │   Solid arrow (sync)     │
   │──────────────────────────▶
   │                          │
   │  Dashed arrow (return)   │
   ◀╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌│
   │                          │
   │   Open arrow (async)     │
   │──────────────────────────▷
   │                          │
   │    Open dashed arrow     │
   ◁╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌│
   │                          │
 ┌─┴─┐                      ┌─┴─┐
 │ A │                      │ B │
 └───┘                      └───┘
```

## Sequence: Activation Boxes

Using `+` and `-` to show when participants are active.

```
sequenceDiagram
  participant C as Client
  participant S as Server
  C->>+S: Request
  S->>+S: Process
  S->>-S: Done
  S-->>-C: Response
```

RequestProcessDoneResponseClientServer

```
┌────────┐    ┌────────┐
│ Client │    │ Server │
└────┬───┘    └────┬───┘
     │             │
     │   Request   │
     │─────────────▶
     │             │
     │             ├───┐
     │             │   │ Process
     │             ◀───┘
     │             │
     │             ├───┐
     │             │   │ Done
     │             ◀───┘
     │             │
     │  Response   │
     ◀╌╌╌╌╌╌╌╌╌╌╌╌╌│
     │             │
┌────┴───┐    ┌────┴───┐
│ Client │    │ Server │
└────────┘    └────────┘
```

## Sequence: Self-Messages

A participant sending a message to itself (displayed as a loop arrow).

```
sequenceDiagram
  participant S as Server
  S->>S: Internal process
  S->>S: Validate
  S-->>S: Log
```

Internal processValidateLogServer

```
┌────────┐
│ Server │
└────┬───┘
     │
     ├───┐
     │   │ Internal process
     ◀───┘
     │
     ├───┐
     │   │ Validate
     ◀───┘
     │
     ├╌╌╌┐
     │   │ Log
     ◀╌╌╌┘
     │
┌────┴───┐
│ Server │
└────────┘
```

## Sequence: Loop Block

A `loop` construct wrapping repeated message exchanges.

```
sequenceDiagram
  participant C as Client
  participant S as Server
  C->>S: Connect
  loop Every 30s
    C->>S: Heartbeat
    S-->>C: Ack
  end
  C->>S: Disconnect
```

loop \[Every 30s\]ConnectHeartbeatAckDisconnectClientServer

```
┌────────┐      ┌────────┐
│ Client │      │ Server │
└────┬───┘      └────┬───┘
     │               │
     │    Connect    │
     │───────────────▶
     │               │
 ┌loop [Every 30s]───────┐
 │   │               │   │
 │   │   Heartbeat   │   │
 │   │───────────────▶   │
 │   │               │   │
 │   │      Ack      │   │
 │   ◀╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌│   │
 │   │               │   │
 └───────────────────────┘
     │               │
     │  Disconnect   │
     │───────────────▶
     │               │
┌────┴───┐      ┌────┴───┐
│ Client │      │ Server │
└────────┘      └────────┘
```

## Sequence: Alt/Else Block

Conditional branching with `alt` (if) and `else` blocks.

```
sequenceDiagram
  participant C as Client
  participant S as Server
  C->>S: Login
  alt Valid credentials
    S-->>C: 200 OK
  else Invalid
    S-->>C: 401 Unauthorized
  else Account locked
    S-->>C: 403 Forbidden
  end
```

alt \[Valid credentials\]\[Invalid\]\[Account locked\]Login200 OK401 Unauthorized403 ForbiddenClientServer

```
┌────────┐            ┌────────┐
│ Client │            │ Server │
└────┬───┘            └────┬───┘
     │                     │
     │        Login        │
     │─────────────────────▶
     │                     │
 ┌alt [Valid credentials]──────┐
 │   │                     │   │
 │   │       200 OK        │   │
 │   ◀╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌│   │
 │   │                     │   │
 ├[Invalid]╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤
 │   │                     │   │
 │   │  401 Unauthorized   │   │
 │   ◀╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌│   │
 │   │                     │   │
 ├[Account locked]╌╌╌╌╌╌╌╌╌╌╌╌╌┤
 │   │                     │   │
 │   │    403 Forbidden    │   │
 │   ◀╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌│   │
 │   │                     │   │
 └─────────────────────────────┘
     │                     │
┌────┴───┐            ┌────┴───┐
│ Client │            │ Server │
└────────┘            └────────┘
```

## Sequence: Opt Block

Optional block — executes only if condition is met.

```
sequenceDiagram
  participant A as App
  participant C as Cache
  participant DB as Database
  A->>C: Get data
  C-->>A: Cache miss
  opt Cache miss
    A->>DB: Query
    DB-->>A: Results
    A->>C: Store in cache
  end
```

opt \[Cache miss\]Get dataCache missQueryResultsStore in cacheAppCacheDatabase

```
 ┌─────┐            ┌───────┐  ┌──────────┐
 │ App │            │ Cache │  │ Database │
 └──┬──┘            └───┬───┘  └─────┬────┘
    │                   │            │
    │     Get data      │            │
    │───────────────────▶            │
    │                   │            │
    │    Cache miss     │            │
    ◀╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌│            │
    │                   │            │
┌opt [Cache miss]────────────────────────┐
│   │                   │            │   │
│   │             Query │            │   │
│   │────────────────────────────────▶   │
│   │                   │            │   │
│   │            Results│            │   │
│   ◀╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌│   │
│   │                   │            │   │
│   │  Store in cache   │            │   │
│   │───────────────────▶            │   │
│   │                   │            │   │
└────────────────────────────────────────┘
    │                   │            │
 ┌──┴──┐            ┌───┴───┐  ┌─────┴────┐
 │ App │            │ Cache │  │ Database │
 └─────┘            └───────┘  └──────────┘
```

## Sequence: Par Block

Parallel execution with `par`/`and` constructs.

```
sequenceDiagram
  participant C as Client
  participant A as AuthService
  participant U as UserService
  participant O as OrderService
  C->>A: Authenticate
  par Fetch user data
    A->>U: Get profile
  and Fetch orders
    A->>O: Get orders
  end
  A-->>C: Combined response
```

par \[Fetch user data\]\[Fetch orders\]AuthenticateGet profileGet ordersCombined responseClientAuthServiceUserServiceOrderService

```
┌────────┐           ┌─────────────┐   ┌─────────────┐  ┌──────────────┐
│ Client │           │ AuthService │   │ UserService │  │ OrderService │
└────┬───┘           └──────┬──────┘   └──────┬──────┘  └───────┬──────┘
     │                      │                 │                 │
     │    Authenticate      │                 │                 │
     │──────────────────────▶                 │                 │
     │                      │                 │                 │
     │                  ┌par [Fetch user data]──────────────────────┐
     │                  │   │                 │                 │   │
     │                  │   │   Get profile   │                 │   │
     │                  │   │─────────────────▶                 │   │
     │                  │   │                 │                 │   │
     │                  ├[Fetch orders]╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤
     │                  │   │                 │                 │   │
     │                  │   │            Get orders             │   │
     │                  │   │───────────────────────────────────▶   │
     │                  │   │                 │                 │   │
     │                  └───────────────────────────────────────────┘
     │                      │                 │                 │
     │  Combined response   │                 │                 │
     ◀╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌│                 │                 │
     │                      │                 │                 │
┌────┴───┐           ┌──────┴──────┐   ┌──────┴──────┐  ┌───────┴──────┐
│ Client │           │ AuthService │   │ UserService │  │ OrderService │
└────────┘           └─────────────┘   └─────────────┘  └──────────────┘
```

## Sequence: Critical Block

Critical section that must complete atomically.

```
sequenceDiagram
  participant A as App
  participant DB as Database
  A->>DB: BEGIN
  critical Transaction
    A->>DB: UPDATE accounts
    A->>DB: INSERT log
  end
  A->>DB: COMMIT
```

critical \[Transaction\]BEGINUPDATE accountsINSERT logCOMMITAppDatabase

```
 ┌─────┐           ┌──────────┐
 │ App │           │ Database │
 └──┬──┘           └─────┬────┘
    │                    │
    │       BEGIN        │
    │────────────────────▶
    │                    │
┌critical [Transaction]──────┐
│   │                    │   │
│   │  UPDATE accounts   │   │
│   │────────────────────▶   │
│   │                    │   │
│   │    INSERT log      │   │
│   │────────────────────▶   │
│   │                    │   │
└────────────────────────────┘
    │                    │
    │      COMMIT        │
    │────────────────────▶
    │                    │
 ┌──┴──┐           ┌─────┴────┐
 │ App │           │ Database │
 └─────┘           └──────────┘
```

## Sequence: Notes (Right/Left/Over)

Notes positioned to the right, left, or over participants.

```
sequenceDiagram
  participant A as Alice
  participant B as Bob
  Note left of A: Alice prepares
  A->>B: Hello
  Note right of B: Bob thinks
  B-->>A: Reply
  Note over A,B: Conversation complete
```

HelloReplyAlice preparesBob thinksConversation completeAliceBob

```
 ┌───────┐   ┌─────┐
 │ Alice │   │ Bob │
 └───┬───┘   └──┬──┘
     │          │
     │  Hello   │
     │──────────▶
     │          │
     │          │ ┌────────────┐
     │          │ │ Bob thinks │
     │          │ └────────────┘
     │          │
     │  Reply   │
     ◀╌╌╌╌╌╌╌╌╌╌│
     │          │
┌───────────────────────┐
│ Conversation complete │
└───────────────────────┘
     │          │
 ┌───┴───┐   ┌──┴──┐
 │ Alice │   │ Bob │
 └───────┘   └─────┘
```

## Sequence: OAuth 2.0 Flow

Full OAuth 2.0 authorization code flow with token exchange.

```
sequenceDiagram
  actor U as User
  participant App as Client App
  participant Auth as Auth Server
  participant API as Resource API
  U->>App: Click Login
  App->>Auth: Authorization request
  Auth->>U: Login page
  U->>Auth: Credentials
  Auth-->>App: Authorization code
  App->>Auth: Exchange code for token
  Auth-->>App: Access token
  App->>API: Request + token
  API-->>App: Protected resource
  App-->>U: Display data
```

Click LoginAuthorization requestLogin pageCredentialsAuthorization codeExchange code for tokenAccess tokenRequest + tokenProtected resourceDisplay dataUserClient AppAuth ServerResource API

```
┌──────┐       ┌────────────┐               ┌─────────────┐  ┌──────────────┐
│ User │       │ Client App │               │ Auth Server │  │ Resource API │
└───┬──┘       └──────┬─────┘               └──────┬──────┘  └───────┬──────┘
    │                 │                            │                 │
    │   Click Login   │                            │                 │
    │─────────────────▶                            │                 │
    │                 │                            │                 │
    │                 │   Authorization request    │                 │
    │                 │────────────────────────────▶                 │
    │                 │                            │                 │
    │                 Login page                   │                 │
    ◀──────────────────────────────────────────────│                 │
    │                 │                            │                 │
    │                 Credentials                  │                 │
    │──────────────────────────────────────────────▶                 │
    │                 │                            │                 │
    │                 │    Authorization code      │                 │
    │                 ◀╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌│                 │
    │                 │                            │                 │
    │                 │  Exchange code for token   │                 │
    │                 │────────────────────────────▶                 │
    │                 │                            │                 │
    │                 │       Access token         │                 │
    │                 ◀╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌│                 │
    │                 │                            │                 │
    │                 │               Request + token                │
    │                 │──────────────────────────────────────────────▶
    │                 │                            │                 │
    │                 │             Protected resource               │
    │                 ◀╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌│
    │                 │                            │                 │
    │  Display data   │                            │                 │
    ◀╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌│                            │                 │
    │                 │                            │                 │
┌───┴──┐       ┌──────┴─────┐               ┌──────┴──────┐  ┌───────┴──────┐
│ User │       │ Client App │               │ Auth Server │  │ Resource API │
└──────┘       └────────────┘               └─────────────┘  └──────────────┘
```

## Sequence: Database Transaction

Multi-step database transaction with rollback handling.

```
sequenceDiagram
  participant C as Client
  participant S as Server
  participant DB as Database
  C->>S: POST /transfer
  S->>DB: BEGIN
  S->>DB: Debit account A
  alt Success
    S->>DB: Credit account B
    S->>DB: INSERT audit_log
    S->>DB: COMMIT
    S-->>C: 200 OK
  else Insufficient funds
    S->>DB: ROLLBACK
    S-->>C: 400 Bad Request
  end
```

alt \[Success\]\[Insufficient funds\]POST /transferBEGINDebit account ACredit account BINSERT audit_logCOMMIT200 OKROLLBACK400 Bad RequestClientServerDatabase

```
┌────────┐           ┌────────┐           ┌──────────┐
│ Client │           │ Server │           │ Database │
└────┬───┘           └────┬───┘           └─────┬────┘
     │                    │                     │
     │  POST /transfer    │                     │
     │────────────────────▶                     │
     │                    │                     │
     │                    │        BEGIN        │
     │                    │─────────────────────▶
     │                    │                     │
     │                    │   Debit account A   │
     │                    │─────────────────────▶
     │                    │                     │
 ┌alt [Success]─────────────────────────────────────┐
 │   │                    │                     │   │
 │   │                    │  Credit account B   │   │
 │   │                    │─────────────────────▶   │
 │   │                    │                     │   │
 │   │                    │  INSERT audit_log   │   │
 │   │                    │─────────────────────▶   │
 │   │                    │                     │   │
 │   │                    │       COMMIT        │   │
 │   │                    │─────────────────────▶   │
 │   │                    │                     │   │
 │   │      200 OK        │                     │   │
 │   ◀╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌│                     │   │
 │   │                    │                     │   │
 ├[Insufficient funds]╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤
 │   │                    │                     │   │
 │   │                    │      ROLLBACK       │   │
 │   │                    │─────────────────────▶   │
 │   │                    │                     │   │
 │   │  400 Bad Request   │                     │   │
 │   ◀╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌│                     │   │
 │   │                    │                     │   │
 └──────────────────────────────────────────────────┘
     │                    │                     │
┌────┴───┐           ┌────┴───┐           ┌─────┴────┐
│ Client │           │ Server │           │ Database │
└────────┘           └────────┘           └──────────┘
```

## Sequence: Microservice Orchestration

Complex multi-service flow with parallel calls and error handling.

```
sequenceDiagram
  participant G as Gateway
  participant A as Auth
  participant U as Users
  participant O as Orders
  participant N as Notify
  G->>A: Validate token
  A-->>G: Valid
  par Fetch data
    G->>U: Get user
    U-->>G: User data
  and
    G->>O: Get orders
    O-->>G: Order list
  end
  G->>N: Send notification
  N-->>G: Queued
  Note over G: Aggregate response
```

par \[Fetch data\]Validate tokenValidGet userUser dataGet ordersOrder listSend notificationQueuedAggregate responseGatewayAuthUsersOrdersNotify

```
 ┌─────────┐          ┌──────┐   ┌───────┐  ┌────────┐  ┌────────┐
 │ Gateway │          │ Auth │   │ Users │  │ Orders │  │ Notify │
 └────┬────┘          └───┬──┘   └───┬───┘  └────┬───┘  └────┬───┘
      │                   │          │           │           │
      │  Validate token   │          │           │           │
      │───────────────────▶          │           │           │
      │                   │          │           │           │
      │       Valid       │          │           │           │
      ◀╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌│          │           │           │
      │                   │          │           │           │
  ┌par [Fetch data]──────────────────────────────────┐       │
  │   │                   │          │           │   │       │
  │   │          Get user │          │           │   │       │
  │   │──────────────────────────────▶           │   │       │
  │   │                   │          │           │   │       │
  │   │          User data│          │           │   │       │
  │   ◀╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌│           │   │       │
  │   │                   │          │           │   │       │
  ├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤       │
  │   │                   │          │           │   │       │
  │   │               Get orders     │           │   │       │
  │   │──────────────────────────────────────────▶   │       │
  │   │                   │          │           │   │       │
  │   │               Order list     │           │   │       │
  │   ◀╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌│   │       │
  │   │                   │          │           │   │       │
  └──────────────────────────────────────────────────┘       │
      │                   │          │           │           │
      │                  Send notification       │           │
      │──────────────────────────────────────────────────────▶
      │                   │          │           │           │
      │                   │   Queued │           │           │
      ◀╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌│
      │                   │          │           │           │
┌────────────────────┐    │          │           │           │
│ Aggregate response │    │          │           │           │
└────────────────────┘    │          │           │           │
      │                   │          │           │           │
 ┌────┴────┐          ┌───┴──┐   ┌───┴───┐  ┌────┴───┐  ┌────┴───┐
 │ Gateway │          │ Auth │   │ Users │  │ Orders │  │ Notify │
 └─────────┘          └──────┘   └───────┘  └────────┘  └────────┘
```
