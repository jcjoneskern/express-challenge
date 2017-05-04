const fib = require('../fib');

describe("fibonacci sequencer", function(){
  it("calculates 0 index", function() {
    expect(fib(0)).toBe(0);
  });
  it("calculates 1 index", function() {
    expect(fib(1)).toBe(1);
  });
  it("calculates 2 index", function() {
    expect(fib(2)).toBe(1);
  });
  it("calculates 3 index", function() {
    expect(fib(3)).toBe(2);
  });
  it("calculates 4 index", function() {
    expect(fib(4)).toBe(3);
  });
  it("calculates 5 index", function() {
    expect(fib(5)).toBe(5);
  });
  it("calculates 10 index", function() {
    expect(fib(10)).toBe(55);
  });
  it("calculates 49 index", function() {
    expect(fib(49)).toBe(7778742049);
  });
  it("calculates 99 index", function() { //testing performance
    expect(fib(99)).toBe(218922995834555169026);
  });
});
