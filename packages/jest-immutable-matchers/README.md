# jest-immutable-matchers [![Version](https://img.shields.io/npm/v/jest-immutable-matchers.svg)](https://www.npmjs.com/package/jest-immutable-matchers)


## List of matchers

* toBeImmutable
* toBeIterableImmutable
* toBeKeyedImmutable
* toBeIndexedImmutable
* toBeAssociativeImmutable
* toBeOrderedImmutable
* toBeImmutableList
* toBeImmutableMap
* toBeImmutableOrderedMap
* toBeImmutableSet
* toBeImmutableOrderedSet
* toBeImmutableStack
* toBeImmutableSeq
* toEqualImmutable


## Installation

Just run:

```sh
$ npm install --save-dev jest-immutable-matchers
```


## Usage

Load these matchers in a `beforeEach` block, and then use them like any other matcher:

```js
expect(Immutable.Map()).toBeImmutable()
```

### TypeScript

This package includes the necessary declarations for TypeScript. Just make sure they get loaded in your project, for example by adding the package name to the `types` field in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "types": [
      "jest",
      "jest-immutable-matchers"
    ]
  }
}
```

Then just load the matchers at runtime in your tests:

```js
import * as matchers from 'jest-immutable-matchers';

describe('My suite', function () {
  beforeEach(function () {
    jest.addMatchers(matchers);
  });

  it('passes if the object is immutable', function () {
    expect(Immutable.Map()).toBeImmutable();
  });

  it('passes if the immutable objects are equal', function () {
    expect(Immutable.Map({a: 1})).toEqualImmutable(Immutable.Map({a: 1}));
  });
});
```

### ES2015

If you are using the new module syntax, `import` all exported matchers:

```js
import * as matchers from 'jest-immutable-matchers';

describe('My suite', function () {
  beforeEach(function () {
    jest.addMatchers(matchers);
  });

  it('passes if the object is immutable', function () {
    expect(Immutable.Map()).toBeImmutable();
  });

  it('passes if the immutable objects are equal', function () {
    expect(Immutable.Map({a: 1})).toEqualImmutable(Immutable.Map({a: 1}));
  });
});
```

Note that `jest-immutable-matchers` does not have a default export!

### AMD/CommonJS

If you are using AMD or CommonJS, `require` normally:

```js
var matchers = require('jest-immutable-matchers');

describe('My suite', function () {
  beforeEach(function () {
    jest.addMatchers(matchers);
  });

  it('passes if the object is immutable', function () {
    expect(Immutable.Map()).toBeImmutable();
  });

  it('passes if the immutable objects are equal', function () {
    expect(Immutable.Map({a: 1})).toEqualImmutable(Immutable.Map({a: 1}));
  });
});
```

### Global

Otherwise, use `window['jest-immutable-matchers']`:

```js
var matchers = window['jest-immutable-matchers'];

describe('My suite', function () {
  beforeEach(function () {
    jest.addMatchers(matchers);
  });

  it('passes if the object is immutable', function () {
    expect(Immutable.Map()).toBeImmutable();
  });

  it('passes if the immutable objects are equal', function () {
    expect(Immutable.Map({a: 1})).toEqualImmutable(Immutable.Map({a: 1}));
  });
});
```
