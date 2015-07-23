# Jasmine Immutable Matchers [![Version](https://img.shields.io/npm/v/jasmine-immutable-matchers.svg)](https://www.npmjs.com/package/jasmine-immutable-matchers) [![Build Status](https://img.shields.io/travis/unindented/jasmine-immutable-matchers.svg)](http://travis-ci.org/unindented/jasmine-immutable-matchers) [![Dependency Status](https://img.shields.io/gemnasium/unindented/jasmine-immutable-matchers.svg)](https://gemnasium.com/unindented/jasmine-immutable-matchers) [![Coverage Status](https://img.shields.io/coveralls/unindented/jasmine-immutable-matchers.svg)](https://coveralls.io/r/unindented/jasmine-immutable-matchers)

Adds a set of custom matchers for [Immutable](https://facebook.github.io/immutable-js/) related checks.

The matchers provide custom error messages that try to be as helpful as possible, so that when things fail you can quickly pinpoint the problem.


## Installation

Just run:

```sh
$ npm install --save-dev jasmine-immutable-matchers
```


## Usage

Load these matchers in a `beforeEach` block, and then use them like any other matcher:

```js
expect(Immutable.Map()).toBeImmutable()
```


### AMD/CommonJS

If you are using AMD or CommonJS, `require` normally:

```js
var matchers = require('jasmine-immutable-matchers');

describe('My suite', function () {
  beforeEach(function () {
    jasmine.addMatchers(matchers);
  });

  it('passes if the object is immutable', function () {
    expect(Immutable.Map()).toBeImmutable()
  });

  it('passes if the immutable objects are equal', function () {
    expect(Immutable.Map({a: 1})).toEqualImmutable(Immutable.Map({a: 1}))
  });
});
```

### Global

Otherwise, use `window['jasmine-immutable-matchers']`:

```js
var matchers = window['jasmine-immutable-matchers'];

describe('My suite', function () {
  beforeEach(function () {
    jasmine.addMatchers(matchers);
  });

  it('passes if the object is immutable', function () {
    expect(Immutable.Map()).toBeImmutable();
  });

  it('passes if the immutable objects are equal', function () {
    expect(Immutable.Map({a: 1})).toEqualImmutable(Immutable.Map({a: 1}));
  });
});
```

### List of matchers

* toBeImmutable
* toEqualImmutable

If you want to see usage examples, look at [test/specs/matchers.js](https://raw.githubusercontent.com/unindented/jasmine-immutable-matchers/master/test/specs/matchers.js)


## Meta

* Code: `git clone git://github.com/unindented/jasmine-immutable-matchers.git`
* Home: <https://github.com/unindented/jasmine-immutable-matchers/>


## Contributors

* Daniel Perez Alvarez ([unindented@gmail.com](mailto:unindented@gmail.com))


## License

Copyright (c) 2015 Daniel Perez Alvarez ([unindented.org](https://unindented.org/)). This is free software, and may be redistributed under the terms specified in the LICENSE file.
