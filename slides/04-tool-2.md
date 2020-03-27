# 🏷️ TypeScript / Flow

## Obvious benefits of working with types

- Living documentation
- IDE autocomplete
- IDE / compile time errors instead of runtime errors
  => Shorten "Code to Bug discovery"-feedback loop

## Not so obvious benefits of working with types

- Leverage Type-driven development to let your types check for **FUNCTIONAL** errors.

  - => Your types are tiny unit tests
  - => Let your IDE tell you your implementation is wrong

_DISCLAIMER: This doesn't mean your code will be bug free!_
_Just as unit tests, types won't check if your user flows are correct._

How?

- Type your function arguments and return types
- Use "Opaque" types

TypeScript has a _structural_ type system:

```typescript
type User = { id: number };
type Post = { id: number };

console.log(user.id === post.id); // true
```

We can make it behave like a _nominal_ type system:

```typescript
type Opaque<Id, T> = T & { __TYPE__: Id };

type User = { id: Opaque<"user", number> };
type Post = { id: Opaque<"post", number> };

console.log(user.id === post.id); // false
```
