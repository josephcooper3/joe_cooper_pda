var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('should be able to add two numbers', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 5);
  });

  it('should be able to subtract a number', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
  });

  it('should be able to multiply two numbers', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 15);
  });

  it('should be able to divide two numbers', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3);
  });

  it('should concatenate multiple number button clicks', function(){
    calculator.numberClick(5);
    calculator.numberClick(5);
    assert.strictEqual(calculator.runningTotal, 55);
  });

  it('should be able to chain multiple operations together', function(){
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('-');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 20);
  });


  // calculator.operatorClick() - chain multiple operations together
  // calculator.clearClick() - clear the running total without affecting the calculation

});
