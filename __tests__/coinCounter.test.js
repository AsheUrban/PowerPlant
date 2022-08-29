import { difference, coinCounter, reset, quarters, dimes, nickels, pennies } from './../src/coinCounter.js';

describe('difference', () => {
  test('Should return the difference between the input and the next greatest whole number, times 100', () => {
    const change = difference(4.99); 
    expect(change).toEqual(1); 
  });
});

describe('coinCounter', () => {

  afterEach(() => {
    reset();
  });

  test('Should return coinArray if change is equal to zero', () => {
    let changeArray = coinCounter(0);
    expect(changeArray).toEqual([0,0,0,0]);
  });

  test('Should add 1 to changeArray[0] if change is equal to 25', () => {
    let changeArray = coinCounter(25);
    expect(changeArray).toEqual([1,0,0,0]);
  });
  
  test('Should add 1 to changeArray[1] if change is equal to 10', () => {
    let changeArray = coinCounter(10);
    expect(changeArray).toEqual([0,1,0,0]);
  });

  test('Should add 1 to changeArray[2] if change is equal to 5', () => {
    let changeArray = coinCounter(5);
    expect(changeArray).toEqual([0,0,1,0]);
  });

  test('Should add 1 to changeArray[3] if change is equal to 1', () => {
    let changeArray = coinCounter(1);
    expect(changeArray).toEqual([0,0,0,1]);
  });

  test('Should add 1 to each index of changeArray if change is equal to 41', () => {
    let changeArray = coinCounter(41);
    expect(changeArray).toEqual([1,1,1,1]);
  });

});

describe('coins', () => {

  test('Should return 1 if change is 25', () => {
    const change = 25;
    expect(quarters(change)).toEqual(1);
  });

  test('should return 1 if change is 10', () => {
    const change = 10;
    expect(dimes(change)).toEqual(1);
  });

  test('should return 1 if change is 5', () => {
    const change = 5;
    expect(nickels(change)).toEqual(1);
  });

  test('should return 1 if change is 1', () => {
    const change = 1;
    expect(pennies(change)).toEqual(1);
  });

});