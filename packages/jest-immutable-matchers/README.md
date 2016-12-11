# jest-immutable-matchers [![Version](https://img.shields.io/npm/v/jest-immutable-matchers.svg)](https://www.npmjs.com/package/jest-immutable-matchers)


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
