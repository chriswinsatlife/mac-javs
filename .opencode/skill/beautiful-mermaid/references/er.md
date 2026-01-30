## ER: Basic Relationship

A simple one-to-many relationship between two entities.

```
erDiagram
  CUSTOMER ||--o{ ORDER : places
```

CUSTOMER(no attributes)ORDER(no attributes)places

```
┌──────────┐places┌───────┐
│ CUSTOMER │║───o╟│ ORDER │
└──────────┘      └───────┘

```

## ER: Entity with Attributes

An entity with typed attributes and `PK`/`FK`/`UK` key badges.

```
erDiagram
  CUSTOMER {
    int id PK
    string name
    string email UK
    date created_at
  }
```

CUSTOMERPKintidstringnameUKstringemaildatecreated_at

```
┌────────────────────┐
│ CUSTOMER           │
├────────────────────┤
│ PK int id          │
│    string name     │
│ UK string email    │
│    date created_at │
└────────────────────┘

```

## ER: Attribute Keys (PK, FK, UK)

All three key constraint types rendered as badges.

```
erDiagram
  ORDER {
    int id PK
    int customer_id FK
    string invoice_number UK
    decimal total
    date order_date
    string status
  }
```

ORDERPKintidFKintcustomer_idUKstringinvoice_numberdecimaltotaldateorder_datestringstatus

```
┌──────────────────────────┐
│ ORDER                    │
├──────────────────────────┤
│ PK int id                │
│ FK int customer_id       │
│ UK string invoice_number │
│    decimal total         │
│    date order_date       │
│    string status         │
└──────────────────────────┘

```

## ER: Exactly One to Exactly One (\|\|--\|\|)

One-to-one mandatory relationship.

```
erDiagram
  PERSON ||--|| PASSPORT : has
```

PERSON(no attributes)PASSPORT(no attributes)has

```
┌────────┐ has  ┌──────────┐
│ PERSON │║────║│ PASSPORT │
└────────┘      └──────────┘

```

## ER: Exactly One to Zero-or-Many (\|\|--o{)

Classic one-to-many optional relationship (crow's foot).

```
erDiagram
  CUSTOMER ||--o{ ORDER : places
```

CUSTOMER(no attributes)ORDER(no attributes)places

```
┌──────────┐places┌───────┐
│ CUSTOMER │║───o╟│ ORDER │
└──────────┘      └───────┘

```

## ER: Zero-or-One to One-or-Many (\|o--\|{)

Optional on one side, at-least-one on the other.

```
erDiagram
  SUPERVISOR |o--|{ EMPLOYEE : manages
```

SUPERVISOR(no attributes)EMPLOYEE(no attributes)manages

```
┌────────────┐manage┌──────────┐
│ SUPERVISOR │o║───╟│ EMPLOYEE │
└────────────┘      └──────────┘

```

## ER: One-or-More to Zero-or-Many (}\|--o{)

At-least-one to zero-or-many relationship.

```
erDiagram
  TEACHER }|--o{ COURSE : teaches
```

TEACHER(no attributes)COURSE(no attributes)teaches

```
┌─────────┐teache┌────────┐
│ TEACHER │╟───o╟│ COURSE │
└─────────┘      └────────┘

```

## ER: All Cardinality Types

Every cardinality combination in one diagram.

```
erDiagram
  A ||--|| B : one-to-one
  C ||--o{ D : one-to-many
  E |o--|{ F : opt-to-many
  G }|--o{ H : many-to-many
```

A(no attributes)B(no attributes)C(no attributes)D(no attributes)E(no attributes)F(no attributes)G(no attributes)H(no attributes)one-to-oneone-to-manyopt-to-manymany-to-many

```
┌───┐one-to┌───┐      ┌───┐
│ A │║────║│ B │      │ C │
└───┘      └───┘      └───┘
                        ║
  ─────────────────────── one-to-many
  │                     │
 o╟                     │
┌───┐      ┌───┐opt-to┌───┐
│ D │      │ E │o║───╟│ F │
└───┘      └───┘      └───┘

┌───┐many-t┌───┐
│ G │╟───o╟│ H │
└───┘      └───┘

```

## ER: Identifying (Solid) Relationship

Solid line indicating an identifying relationship (child depends on parent for identity).

```
erDiagram
  ORDER ||--|{ LINE_ITEM : contains
```

ORDER(no attributes)LINE_ITEM(no attributes)contains

```
┌───────┐contai┌───────────┐
│ ORDER │║────╟│ LINE_ITEM │
└───────┘      └───────────┘

```

## ER: Non-Identifying (Dashed) Relationship

Dashed line indicating a non-identifying relationship.

```
erDiagram
  USER ||..o{ LOG_ENTRY : generates
  USER ||..o{ SESSION : opens
```

USER(no attributes)LOG_ENTRY(no attributes)SESSION(no attributes)generatesopens

```
┌──────┐genera┌───────────┐
│ USER │║╌╌╌o╟│ LOG_ENTRY │
└──────┘      └───────────┘
    ║
    ╌╌opens
    ┊┊
    o╟
┌─────────┐
│ SESSION │
└─────────┘

```

## ER: Mixed Identifying & Non-Identifying

Both solid and dashed lines in the same diagram.

```
erDiagram
  ORDER ||--|{ LINE_ITEM : contains
  ORDER ||..o{ SHIPMENT : ships-via
  PRODUCT ||--o{ LINE_ITEM : includes
  PRODUCT ||..o{ REVIEW : receives
```

ORDER(no attributes)LINE_ITEM(no attributes)SHIPMENT(no attributes)PRODUCT(no attributes)REVIEW(no attributes)containsships-viaincludesreceives

```
┌───────┐contai┌─ships-via─┐      ┌──────────┐
│ ORDER │║╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌o╟│ SHIPMENT │
└───────┘      └───────────┘      └──────────┘
                    o╟
     ───────────────── includes
     │               │
     ║               │
┌─────────┐receiv┌────────┐
│ PRODUCT │║╌╌╌o╟│ REVIEW │
└─────────┘      └────────┘

```

## ER: E-Commerce Schema

Full e-commerce database schema with customers, orders, products, and line items.

```
erDiagram
  CUSTOMER {
    int id PK
    string name
    string email UK
  }
  ORDER {
    int id PK
    date created
    int customer_id FK
  }
  PRODUCT {
    int id PK
    string name
    float price
  }
  LINE_ITEM {
    int id PK
    int order_id FK
    int product_id FK
    int quantity
  }
  CUSTOMER ||--o{ ORDER : places
  ORDER ||--|{ LINE_ITEM : contains
  PRODUCT ||--o{ LINE_ITEM : includes
```

CUSTOMERPKintidstringnameUKstringemailORDERPKintiddatecreatedFKintcustomer_idPRODUCTPKintidstringnamefloatpriceLINE_ITEMPKintidFKintorder_idFKintproduct_idintquantityplacescontainsincludes

```
┌─────────────────┐      ┌────────────────────┐
│ CUSTOMER        │      │ ORDER              │
├─────────────────┤places├────────────────────┤
│ PK int id       │║───o╟│ PK int id          │
│    string name  │      │    date created    │
│ UK string email │      │ FK int customer_id │
└─────────────────┘      └────────────────────┘
                                    ║
                                  ─── contains
                                  │ │
                                  ╟ │
┌────────────────┐      ┌───────────────────┐
│ PRODUCT        │      │ LINE_ITEM         │
├────────────────┤includ├───────────────────┤
│ PK int id      │║───o╟│ PK int id         │
│    string name │      │ FK int order_id   │
│    float price │      │ FK int product_id │
└────────────────┘      │    int quantity   │
                        └───────────────────┘

```

## ER: Blog Platform Schema

Blog system with users, posts, comments, and tags.

```
erDiagram
  USER {
    int id PK
    string username UK
    string email UK
    date joined
  }
  POST {
    int id PK
    string title
    text content
    int author_id FK
    date published
  }
  COMMENT {
    int id PK
    text body
    int post_id FK
    int user_id FK
    date created
  }
  TAG {
    int id PK
    string name UK
  }
  USER ||--o{ POST : writes
  USER ||--o{ COMMENT : authors
  POST ||--o{ COMMENT : has
  POST }|--o{ TAG : tagged-with
```

USERPKintidUKstringusernameUKstringemaildatejoinedPOSTPKintidstringtitletextcontentFKintauthor_iddatepublishedCOMMENTPKintidtextbodyFKintpost_idFKintuser_iddatecreatedTAGPKintidUKstringnamewritesauthorshastagged-with

```
┌────────────────────┐      ┌───────────────────┐
│ USER               │      │ POST              │
├────────────────────┤      ├───────────────────┤
│ PK int id          │writes│ PK int id         │
│ UK string username │║───o╟│    string title   │
│ UK string email    │      │    text content   │
│    date joined     │      │ FK int author_id  │
└────────────────────┘      │    date published │
           ║                └───────────────────┘
           │                          ╟
         ────────────────────────────── tagged-with
         │ │                      │   │
        o╟ │                     o╟   │
┌─────────────────┐      ┌────────────────┐
│ COMMENT         │      │ TAG            │
├─────────────────┤      ├────────────────┤
│ PK int id       │      │ PK int id      │
│    text body    │      │ UK string name │
│ FK int post_id  │      └────────────────┘
│ FK int user_id  │
│    date created │
└─────────────────┘

```

## ER: School Management Schema

School system with students, teachers, courses, and enrollments.

```
erDiagram
  STUDENT {
    int id PK
    string name
    date dob
    string grade
  }
  TEACHER {
    int id PK
    string name
    string department
  }
  COURSE {
    int id PK
    string title
    int teacher_id FK
    int credits
  }
  ENROLLMENT {
    int id PK
    int student_id FK
    int course_id FK
    string semester
    float grade
  }
  TEACHER ||--o{ COURSE : teaches
  STUDENT ||--o{ ENROLLMENT : enrolled
  COURSE ||--o{ ENROLLMENT : has
```

STUDENTPKintidstringnamedatedobstringgradeTEACHERPKintidstringnamestringdepartmentCOURSEPKintidstringtitleFKintteacher_idintcreditsENROLLMENTPKintidFKintstudent_idFKintcourse_idstringsemesterfloatgradeteachesenrolledhas

```
┌─────────────────┐      ┌──────────────────────┐
│ STUDENT         │      │ TEACHER              │
├─────────────────┤      ├──────────────────────┤
│ PK int id       │      │ PK int id            │
│    string name  │      │    string name       │
│    date dob     │      │    string department │
│    string grade │      └──────────────────────┘
└─────────────────┘                  ║
         ║                           │
         ──enrolled────────────────────teaches
         ││                          ││
         │╟                          o╟
┌───────────────────┐      ┌────────────────────┐
│ COURSE            │      │ ENROLLMENT         │
├───────────────────┤      ├────────────────────┤
│ PK int id         │ has  │ PK int id          │
│    string title   │║───o╟│ FK int student_id  │
│ FK int teacher_id │      │ FK int course_id   │
│    int credits    │      │    string semester │
└───────────────────┘      │    float grade     │
                           └────────────────────┘

```
