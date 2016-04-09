'use strict';
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var dirtyChai = require('dirty-chai');

chai.use(sinonChai);
chai.use(dirtyChai);

module.exports = module.exports.default = {
  chai: chai,
  assert: chai.assert,
  expect: chai.expect,
  should: chai.should,
  sinon: sinon,
  sandbox: sinon.sandbox,
  spy: sinon.spy,
  stub: sinon.stub,
  mock: sinon.mock
};
module.exports.chai = chai;
module.exports.assert = chai.assert;
module.exports.expect = chai.expect;
module.exports.should = chai.should;
module.exports.sinon = sinon.sinon;
module.exports.sandbox = sinon.sandbox;
module.exports.spy = sinon.spy;
module.exports.stub = sinon.stub;
module.exports.mock = sinon.mock;
