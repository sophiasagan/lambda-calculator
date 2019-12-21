import React, { useState } from "react";
import SpecialButton from "./SpecialButton";
import { specials } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

export default function Specials() {
  const [specialArray, setSpecial] = useState(specials);
  // STEP 2 - add the imported data to state
  console.log(specialArray);
  return (
    <div>
      {specialArray.map((special) => (
        <SpecialButton key={special} special={special} /> 
      ))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};