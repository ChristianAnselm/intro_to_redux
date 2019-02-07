import React from 'react';

const RandomColor = (WrappedComponent) => {
  const colors = ["red", "orange", "green", "blue", "pink", "purple"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  return (props) => {
    return(
      <div style={{color: randomColor}}>
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default RandomColor;
