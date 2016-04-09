# Cafeteria

[![npm version](https://img.shields.io/npm/v/cafeteria.svg?style=flat-square)](https://www.npmjs.com/package/reduxible)
[![npm downloads](https://img.shields.io/npm/dm/cafeteria.svg?style=flat-square)](https://www.npmjs.com/package/reduxible)


> Dumb wrapper of chai, sinon friends.

## Install

```sh
$ npm install --save-dev mocha cafeteria
```

## Dependencies

* [chai](https://github.com/chaijs/chai)
* [sinon](https://github.com/sinonjs/sinon)
* [sinon-chai](https://github.com/domenic/sinon-chai)
* [dirty-chai](https://github.com/prodatakey/dirty-chai): To support eslint rule [`no-unused-expressions `](https://github.com/eslint/eslint/issues/2102). 

## Usage

```js
import { expect } from 'cafeteria';

const foo = () => 'bar';
const foos = ['bar'];

describe('foo', function () {
  it('should returns bar.', function () {
    expect(foo()).equal('bar');
  })
});

describe('foos', function () {
  it('should not be empty.', function () {
    expect(foos).not.to.be.empty(); // already applied dirty-chai
  })
});
```

## API

**cafeteria.chai**: Same with chai.
**cafeteria.assert**: Same with chai's.
**cafeteria.expect**: Same with chai's.
**cafeteria.should**: Same with chai's. Should run as function. e.g. `should()`.
**cafeteria.sinon**: Same with sinon.
**cafeteria.sandbox**: Same with sinon's.
**cafeteria.spy**: Same with sinon's.
**cafeteria.stub**: Same with sinon's.
**cafeteria.mock**: Same with sinon's.

## Useful links

 * [Mocha Cheat Sheets](http://ricostacruz.com/cheatsheets/mocha.html)
 * [Chai Cheat Sheets](http://ricostacruz.com/cheatsheets/chai.html)
 * [Sinon Cheat Sheets](http://ricostacruz.com/cheatsheets/sinon.html)
 * [Sinon Chai Cheat Sheets](http://ricostacruz.com/cheatsheets/sinon-chai.html)
 