import React from "react";

const Display = props => {
  console.log("Display props" ,props)
  return <div className="display">{props.value}</div>;
};

export default Display