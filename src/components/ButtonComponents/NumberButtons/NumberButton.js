import React from "react";

const NumberButton = props => {
  console.log("NumberButton props", props);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
     <button className="num-btns" onClick={() => props.setValue(props.integer)}>{props.integer}</button>

    </>
  );
};

export default NumberButton;