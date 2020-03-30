# ✨ Prettier

- Prettier is an **automatic** code formatter

## Obvious benefits

- Enforce consistent code style across the whole codebase

In combination with:

- IDE plugin: Automatically format your code on save
- Husky & pretty-quick: Automatically format your code on commit
- _Lightweight_ ESLint rules: Don't let ESLint get in the way of your development speed.

## Less obvious benefits of working with types

- If it can't be prettified, your code is broken!
  => Shorten "Code to Bug discovery"-feedback loop

- Get used to writing code without taking care of code style yourself!
  Let the tool work for you!
  => Improve code writing speed

### Configuration

```shell
yarn add prettier pretty-quick husky
```

package.json

```json
"scripts": {
  "format:all": "prettier --write \"src/**/*.js*|ts*\""
},
"husky": {
  "hooks": {
    "pre-commit": "pretty-quick --staged"
  }
},
```

.prettierrc

```json
{
  "singleQuote": true,
  "trailingComma": "es5"
}
```
