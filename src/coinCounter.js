// example of a coin counter with recursion
// [0] -> Quarters, [1] -> Dimes, [2] -> Nickels, [3] -> Pennies
let changeArray = [0,0,0,0]; 
 
export const reset = () => {
  changeArray = [0,0,0,0]; 
}

export const difference = (total) => {
  const remainder = (total * 100) % 100;
  const change = 100 - remainder;
  return change;
}

export const coinCounter = (change) => {
  if (change <= 0) {
    return changeArray;
  }
  else if ((change - 25) >= 0) {
    changeArray[0]++;
    change -= 25;
  }
  else if ((change - 10) >= 0) {
    changeArray[1]++;
    change -= 10;
  }
  else if ((change - 5) >= 0) {
    changeArray[2]++;
    change -= 5;
  }
  else if ((change - 1) >= 0) {
    changeArray[3]++;
    change -= 1;
  }
  return coinCounter(change);
}

// example of a coin counter with closure
const coins = (coinValue) => {
  return (change) => {
    let coinCount = Math.floor(change / coinValue);
    return coinCount;
  }
}
export const quarters = coins(25);
export const dimes = coins(10);
export const nickels = coins(5);
export const pennies = coins(1);

const change = (change) => {
  let changeArray = [0,0,0,0];
 
  changeArray[0] = quarters(change);
  change -= changeArray[0]*25;
  changeArray[1] = dimes(change);
  change -= changeArray[1]*10;
  changeArray[2] = nickels(change);
  change -= changeArray[2]*5;
  changeArray[3] = pennies(change);
 
  return changeArray;
}

// using nested functions to create a "curry'd function"
const curriedChange = (change) => {
  const quarter = quarters(change);
  change -= quarter*25;
  return function() {
    const dime = dimes(change);
    change -= dime*10;
    return function() {
      const nickel = nickels(change);
      change -= nickel*5;
      return function() {
        const penny = pennies(change);
        return [quarter, dime, nickel, penny];
      }
    }
  }
}