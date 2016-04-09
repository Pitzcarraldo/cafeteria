var cafeteria = require('../index');
var expect = require('chai').expect;
describe('cafeteria', function () {
  it('should returns assertion functions.', function () {
    expect(cafeteria).have.keys(
      ['assert', 'chai', 'expect', 'mock', 'sandbox', 'should', 'sinon', 'spy', 'stub']
    );
  })
});