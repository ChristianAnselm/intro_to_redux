import React from "react";

const FruitsIndex = props => {
  let fruits = props.fruits.map((fruit, idx) => {
    return <li key={idx}>{fruit}</li>;
  });
  return (
    <>
      <button onClick={props.addApple}>Add Apple</button>
      <button onClick={props.addOrange}>Add Orange</button>
      <button onClick={props.sellOut}>SELL OUT</button>
      <ul>{fruits}</ul>
    </>
  );
};

export default FruitsIndex;
