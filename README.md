[![npm version](https://img.shields.io/npm/v/ts-spec-bootstrapper.svg)](https://img.shields.io/npm/v/ts-spec-bootstrapper.svg)

# TS Spec Bootstrapper

Bootstraps tests for all test-able functions in a TypeScript project. Running this script...
- generates new `.spec.ts` files for according `.ts` files, if they contain test-able functions
- adds new tests to according `.spec.ts` files for functionality in `.ts` files, that is un-tested
- adds seperate tests for *all possible branches* through a function. Deeply nested conditional statements will be considered

## Installation

1. Add package to your project

```
npm i --save-dev ts-spec-bootstrapper
```

2. Add script to your `package.json`

```
"ts-spec-bootstrapper": "ts-spec-bootstrapper --root='src/app/'"
```

## Naming convention requirements

### File naming

The name of a `.ts` file has to be matched with an according `.spec.ts` file.

*Example:*

`tab-item.component.ts`

`tab-item.component.spec.ts`

If the according `.spec.ts` does not exist, but the `.ts` contains test-able logic, a `.spec.ts` will be created automatically.

### Test naming

The name of a test-able function has to be matched in a `describe()` block of the according `.spec.ts` file.

*Example:*

```javascript
function closeAllTabItems() { /* ... */ }
```

```javascript
describe('closeAllTabItems', () => { /* ... */ })
```

If the according `describe()` block does not exist, it will be created automatically. The function name in the `describe()` block can put in *single-quotes*, *double-quotes*, or *template-strings*. Additionally, the matching will work for `fdescribe()` or `xdescribe()` blocks.

## Parameters

|Name|Type|Description|Default|
|----|----|-----------|-------|
|`root`|*string*|The root directory from where you want to have tests recursively generated.|`./`|
|`verbose`|*boolean*|Will output internal information of TS Spec Bootstrapper which might not be relevant to you.|`false`|
|`test-private`|*boolean*|Will additionally generate tests for private methods.|`false`|
|`test-protected`|*boolean*|Will additionally generate tests for protected methods.|`false`|
|`it-content`|*string*|Defines the string that will be rendered in each `xit()` block. Can be multi-line seperated by `\n`.|`// ...`|

## Features

Test bootstrapping is supported for...

- Global functions
- Arrow functions
- Public member functions
- Protected member functions
- Private member functions
- Class property arrow functions
- Branches: then
- Branches: else
- Branches: else If
- Branches: implicit else
- *(Deeply)* nested branches

Upcoming changes will add support for...

- Branch generation for switch statments
- Branch generation for ternary operator *(AST kindName ConditionalExpression)*

## Example

Given TypeScript file:

```javascript
// file: legal-stuff.ts

function isUserAllowedToBuyAlcohol(user: User): boolean {
  if (user.age >= LEGAL_DRINKING_AGE) {
    return true;
  } else {
    return false;
  }
}
```

Generated test output:

```javascript
// file: legal-stuff.spec.ts (automatically generated)

describe(`isUserAllowedToBuyAlcohol`, () => {
  describe(`when (user.age >= LEGAL_DRINKING_AGE)`, () => {
    xit(`should be implemented`, () => {
      // ...
    });
  });

  describe(`when (!(user.age >= LEGAL_DRINKING_AGE))`, () => {
    xit(`should be implemented`, () => {
      // ...
    });
  });
});
```