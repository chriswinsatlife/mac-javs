## Class: Basic Class

A single class with attributes and methods, rendered as a 3-compartment box.

```
classDiagram
  class Animal {
    +String name
    +int age
    +eat() void
    +sleep() void
  }
```

Animal\+ name: String\+ age: int\+ eat: void\+ sleep: void

```
┌───────────────┐
│ Animal        │
├───────────────┤
│ +name: String │
│ +age: int     │
├───────────────┤
│ +eat: void    │
│ +sleep: void  │
└───────────────┘

```

## Class: Visibility Markers

All four visibility levels: `+` (public), `-` (private), `#` (protected), `~` (package).

```
classDiagram
  class User {
    +String name
    -String password
    #int internalId
    ~String packageField
    +login() bool
    -hashPassword() String
    #validate() void
    ~notify() void
  }
```

User\+ name: String\- password: String# internalId: int~ packageField: String\+ login: bool\- hashPassword: String# validate: void~ notify: void

```
┌───────────────────────┐
│ User                  │
├───────────────────────┤
│ +name: String         │
│ -password: String     │
│ #internalId: int      │
│ ~packageField: String │
├───────────────────────┤
│ +login: bool          │
│ -hashPassword: String │
│ #validate: void       │
│ ~notify: void         │
└───────────────────────┘

```

## Class: Interface Annotation

Using `<>` annotation above the class name.

```
classDiagram
  class Serializable {
    <<interface>>
    +serialize() String
    +deserialize(data) void
  }
```

<<interface>>Serializable\+ serialize: String\+ deserialize: void

```
┌────────────────────┐
│ <<interface>>      │
│ Serializable       │
├────────────────────┤
│                    │
├────────────────────┤
│ +serialize: String │
│ +deserialize: void │
└────────────────────┘

```

## Class: Abstract Annotation

Using `<>` annotation for abstract classes.

```
classDiagram
  class Shape {
    <<abstract>>
    +String color
    +area() double
    +draw() void
  }
```

<<abstract>>Shape\+ color: String\+ area: double\+ draw: void

```
┌────────────────┐
│ <<abstract>>   │
│ Shape          │
├────────────────┤
│ +color: String │
├────────────────┤
│ +area: double  │
│ +draw: void    │
└────────────────┘

```

## Class: Enum Annotation

Using `<>` annotation for enum types.

```
classDiagram
  class Status {
    <<enumeration>>
    ACTIVE
    INACTIVE
    PENDING
    DELETED
  }
```

<<enumeration>>StatusACTIVEINACTIVEPENDINGDELETED

```
┌─────────────────┐
│ <<enumeration>> │
│ Status          │
├─────────────────┤
│ ACTIVE          │
│ INACTIVE        │
│ PENDING         │
│ DELETED         │
└─────────────────┘

```

## Class: Inheritance (<\|--)

Inheritance relationship rendered with a hollow triangle marker.

```
classDiagram
  class Animal {
    +String name
    +eat() void
  }
  class Dog {
    +String breed
    +bark() void
  }
  class Cat {
    +bool isIndoor
    +meow() void
  }
  Animal <|-- Dog
  Animal <|-- Cat
```

Animal\+ name: String\+ eat: voidDog\+ breed: String\+ bark: voidCat\+ isIndoor: bool\+ meow: void

```
┌───────────────┐
│ Animal        │
├───────────────┤
│ +name: String │
├───────────────┤
│ +eat: void    │
└───────────────┘
        △
        └──────────────────────┐
         │                     │
┌────────────────┐    ┌─────────────────┐
│ Dog            │    │ Cat             │
├────────────────┤    ├─────────────────┤
│ +breed: String │    │ +isIndoor: bool │
├────────────────┤    ├─────────────────┤
│ +bark: void    │    │ +meow: void     │
└────────────────┘    └─────────────────┘

```

## Class: Composition (\*--)

Composition — "owns" relationship with filled diamond marker.

```
classDiagram
  class Car {
    +String model
    +start() void
  }
  class Engine {
    +int horsepower
    +rev() void
  }
  Car *-- Engine
```

Car\+ model: String\+ start: voidEngine\+ horsepower: int\+ rev: void

```
┌────────────────┐
│ Car            │
├────────────────┤
│ +model: String │
├────────────────┤
│ +start: void   │
└────────────────┘
         ◆
         └┐
          │
┌──────────────────┐
│ Engine           │
├──────────────────┤
│ +horsepower: int │
├──────────────────┤
│ +rev: void       │
└──────────────────┘

```

## Class: Aggregation (o--)

Aggregation — "has" relationship with hollow diamond marker.

```
classDiagram
  class University {
    +String name
  }
  class Department {
    +String faculty
  }
  University o-- Department
```

University\+ name: StringDepartment\+ faculty: String

```
┌───────────────┐
│ University    │
├───────────────┤
│ +name: String │
└───────────────┘
        ◇
        └─┐
          │
┌──────────────────┐
│ Department       │
├──────────────────┤
│ +faculty: String │
└──────────────────┘

```

## Class: Association (-->)

Basic association — simple directed arrow.

```
classDiagram
  class Customer {
    +String name
  }
  class Order {
    +int orderId
  }
  Customer --> Order
```

Customer\+ name: StringOrder\+ orderId: int

```
┌───────────────┐
│ Customer      │
├───────────────┤
│ +name: String │
└───────────────┘
        │
        │
        ▼
┌───────────────┐
│ Order         │
├───────────────┤
│ +orderId: int │
└───────────────┘

```

## Class: Dependency (..>)

Dependency — dashed line with open arrow.

```
classDiagram
  class Service {
    +process() void
  }
  class Repository {
    +find() Object
  }
  Service ..> Repository
```

Service\+ process: voidRepository\+ find: Object

```
┌────────────────┐
│ Service        │
├────────────────┤
│                │
├────────────────┤
│ +process: void │
└────────────────┘
         ┊
        ┌┘
        ▼
┌───────────────┐
│ Repository    │
├───────────────┤
│               │
├───────────────┤
│ +find: Object │
└───────────────┘

```

## Class: Realization (..\|>)

Realization — dashed line with hollow triangle (implements interface).

```
classDiagram
  class Flyable {
    <<interface>>
    +fly() void
  }
  class Bird {
    +fly() void
    +sing() void
  }
  Bird ..|> Flyable
```

<<interface>>Flyable\+ fly: voidBird\+ fly: void\+ sing: void

```
┌───────────────┐
│ <<interface>> │
│ Flyable       │
├───────────────┤
│               │
├───────────────┤
│ +fly: void    │
└───────────────┘
        △
       ┌┘
       ┊
┌─────────────┐
│ Bird        │
├─────────────┤
│             │
├─────────────┤
│ +fly: void  │
│ +sing: void │
└─────────────┘

```

## Class: All 6 Relationship Types

Every relationship type in a single diagram for comparison.

```
classDiagram
  A <|-- B : inheritance
  C *-- D : composition
  E o-- F : aggregation
  G --> H : association
  I ..> J : dependency
  K ..|> L : realization
```

ABCDEFGHIJKLinheritancecompositionaggregationassociationdependencyrealization

```
┌───┐    ┌───┐    ┌───┐    ┌───┐    ┌───┐    ┌───┐
│ A │    │ C │    │ E │    │ G │    │ I │    │ L │
└───┘    └───┘    └───┘    └───┘    └───┘    └───┘
  △        ◆        ◇        │        ┊        △
erita composit aggregat associat dependen realization
  │        │        │        ▼        ▼        ┊
┌───┐    ┌───┐    ┌───┐    ┌───┐    ┌───┐    ┌───┐
│ B │    │ D │    │ F │    │ H │    │ J │    │ K │
└───┘    └───┘    └───┘    └───┘    └───┘    └───┘

```

## Class: Relationship Labels

Labeled relationships between classes with descriptive text.

```
classDiagram
  class Teacher {
    +String name
  }
  class Student {
    +String name
  }
  class Course {
    +String title
  }
  Teacher --> Course : teaches
  Student --> Course : enrolled in
```

Teacher\+ name: StringStudent\+ name: StringCourse\+ title: Stringteachesenrolled in

```
┌───────────────┐    ┌───────────────┐
│ Teacher       │    │ Student       │
├───────────────┤    ├───────────────┤
│ +name: String │    │ +name: String │
└───────────────┘    └───────────────┘
        │                    │
     teac┌─── enrolled in ───┘
         ▼
┌────────────────┐
│ Course         │
├────────────────┤
│ +title: String │
└────────────────┘

```

## Class: Design Pattern — Observer

The Observer (publish-subscribe) design pattern with interface + concrete implementations.

```
classDiagram
  class Subject {
    <<interface>>
    +attach(Observer) void
    +detach(Observer) void
    +notify() void
  }
  class Observer {
    <<interface>>
    +update() void
  }
  class EventEmitter {
    -List~Observer~ observers
    +attach(Observer) void
    +detach(Observer) void
    +notify() void
  }
  class Logger {
    +update() void
  }
  class Alerter {
    +update() void
  }
  Subject <|.. EventEmitter
  Observer <|.. Logger
  Observer <|.. Alerter
  EventEmitter --> Observer
```

<<interface>>Subject\+ attach: void\+ detach: void\+ notify: void<<interface>>Observer\+ update: voidEventEmitter\- observers: List~Observer~\+ attach: void\+ detach: void\+ notify: voidLogger\+ update: voidAlerter\+ update: void

```
┌───────────────┐
│ <<interface>> │
│ Subject       │
├───────────────┤
│               │
├───────────────┤
│ +attach: void │
│ +detach: void │
│ +notify: void │
└───────────────┘
        △
        └╌╌╌╌╌╌┐
               ┊
┌────────────────────────────┐
│ EventEmitter               │
├────────────────────────────┤
│ -observers: List~Observer~ │
├────────────────────────────┤
│ +attach: void              │
│ +detach: void              │
│ +notify: void              │
└────────────────────────────┘
               │
        ┌──────┘
        ▼
┌───────────────┐
│ <<interface>> │
│ Observer      │
├───────────────┤
│               │
├───────────────┤
│ +update: void │
└───────────────┘
        △
        └╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┐
        ┊                    ┊
┌───────────────┐    ┌───────────────┐
│ Logger        │    │ Alerter       │
├───────────────┤    ├───────────────┤
│               │    │               │
├───────────────┤    ├───────────────┤
│ +update: void │    │ +update: void │
└───────────────┘    └───────────────┘

```

## Class: MVC Architecture

Model-View-Controller pattern showing relationships between layers.

```
classDiagram
  class Model {
    -data Map
    +getData() Map
    +setData(key, val) void
    +notify() void
  }
  class View {
    -model Model
    +render() void
    +update() void
  }
  class Controller {
    -model Model
    -view View
    +handleInput(event) void
    +updateModel(data) void
  }
  Controller --> Model : updates
  Controller --> View : refreshes
  View --> Model : reads
  Model ..> View : notifies
```

Model\- Map: data\+ getData: Map\+ setData: void\+ notify: voidView\- Model: model\+ render: void\+ update: voidController\- Model: model\- View: view\+ handleInput: void\+ updateModel: voidupdatesrefreshesreadsnotifies

```
┌────────────────────┐
│ Controller         │
├────────────────────┤
│ -Model: model      │
│ -View: view        │
├────────────────────┤
│ +handleInput: void │
│ +updateModel: void │
└────────────────────┘
           │
       upda│es
         ▼ │
┌──────────│─────┐
│ Model    │     │
├──────────│─────┤
│ -Map: dat│     │
├─── refreshes ──┤
│ +getDa│a: Map  │
│ +setDa│a: void │
│ +notif│: void  │
└───────│────────┘
        │┊
    notifies
        ▼
┌───────────────┐
│ View          │
├───────────────┤
│ -Model: model │
├───────────────┤
│ +render: void │
│ +update: void │
└───────────────┘

```

## Class: Full Hierarchy

A complete class hierarchy with abstract base, interfaces, and concrete classes.

```
classDiagram
  class Animal {
    <<abstract>>
    +String name
    +int age
    +eat() void
    +sleep() void
  }
  class Mammal {
    +bool warmBlooded
    +nurse() void
  }
  class Bird {
    +bool canFly
    +layEggs() void
  }
  class Dog {
    +String breed
    +bark() void
  }
  class Cat {
    +bool isIndoor
    +purr() void
  }
  class Parrot {
    +String vocabulary
    +speak() void
  }
  Animal <|-- Mammal
  Animal <|-- Bird
  Mammal <|-- Dog
  Mammal <|-- Cat
  Bird <|-- Parrot
```

<<abstract>>Animal\+ name: String\+ age: int\+ eat: void\+ sleep: voidMammal\+ warmBlooded: bool\+ nurse: voidBird\+ canFly: bool\+ layEggs: voidDog\+ breed: String\+ bark: voidCat\+ isIndoor: bool\+ purr: voidParrot\+ vocabulary: String\+ speak: void

```
┌───────────────┐
│ <<abstract>>  │
│ Animal        │
├───────────────┤
│ +name: String │
│ +age: int     │
├───────────────┤
│ +eat: void    │
│ +sleep: void  │
└───────────────┘
        △
        └──────────────────────────┐
           │                       │
┌────────────────────┐    ┌────────────────┐
│ Mammal             │    │ Bird           │
├────────────────────┤    ├────────────────┤
│ +warmBlooded: bool │    │ +canFly: bool  │
├────────────────────┤    ├────────────────┤
│ +nurse: void       │    │ +layEggs: void │
└────────────────────┘    └────────────────┘
           △                       △
         ┌─└───────────────────┐   └────────────────────┐
         │                     │                        │
┌────────────────┐    ┌─────────────────┐    ┌─────────────────────┐
│ Dog            │    │ Cat             │    │ Parrot              │
├────────────────┤    ├─────────────────┤    ├─────────────────────┤
│ +breed: String │    │ +isIndoor: bool │    │ +vocabulary: String │
├────────────────┤    ├─────────────────┤    ├─────────────────────┤
│ +bark: void    │    │ +purr: void     │    │ +speak: void        │
└────────────────┘    └─────────────────┘    └─────────────────────┘

```
