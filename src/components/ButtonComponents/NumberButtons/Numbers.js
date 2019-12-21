import React, {useState} from "react";
import NumberButton from "./NumberButton";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 

import { numbers } from '../../../data' 

//Import your array data to from the provided data file

export default function Numbers(props) {
  const [numberArray, setNumber] = useState(numbers);
  // STEP 2 - add the imported data to state 
  console.log(numberArray);
  return (
    <div>
      {numberArray.map((integer) => (
        <NumberButton key={integer} integer={integer} setValue={props.setValue}/>
      ))}
    </div>
  );
};