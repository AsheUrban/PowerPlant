export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const stateControl = storeState();

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

export const feed = changeState("soil");
export const blueFood = changeState("soil")(5);
export const greenFood = changeState("soil")(10);
export const yuckyFood = changeState("soil")(-5);

export const hydrate = changeState("water");
export const qualityHydrate = changeState("water")(5);
export const dirtyHydrate = changeState("water")(-5);

export const directLight = changeState("light")(10);
export const filteredLight = changeState("light")(5);
export const noLight = changeState("light")(-10);
export const sunBurn = changeState("light")(-5);








// Reference Examples: 

//const feed = (soil) => {
//   return (5) => {
//     return (plant) => ({
//       ...plant,
//       [soil]: (plant[soil] || 0) + 5
//     })
//   }
// }

// const heal = changeState("HP");
// heal(5)(player);