export const ADD_FRUIT = "ADD_FRUIT"
export const SELL_OUT = "SELL_OUT"

export const addFruit = (fruit) => {
  return {
    type: ADD_FRUIT,
    fruit
  }
}

export const sellOut = () => {
  return {
    type: SELL_OUT
  }
}
