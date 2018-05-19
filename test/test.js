'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');
describe('getPlural function test', () => {
    it('should return connected to Poe', () => {
        var result = index.Poe('localhost');
        expect(result).to.equal('connected to Poe');
    });
});
