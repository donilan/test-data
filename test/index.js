var Generator = require('../src/');
var expect = require('chai').expect;

describe('TestData', function () {
  describe('#load', function(){
    it('load provinces', function(){
      expect(Generator.load('address').data.address.length).to.be.above(0);
    });
  });
  describe('#random', function(){
    it('generate with random', function(){
      var data = Generator.load('address').random();
      expect(data.address.id).to.be.a('number');
      expect(data.address.name).to.be.a('string');
    });
  });
});
