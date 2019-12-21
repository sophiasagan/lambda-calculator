import React, { useState } from 'react';

//import any components needed
import NumberButton from './NumberButton';
//Import your array data to from the provided data file
import { numbers } from '../../../data';

export default function Numbers(props) {
  const [numberArray] = useState(numbers);
  // STEP 2 - add the imported data to state 
  console.log(numberArray);
  return (
    <div className="btn numbers">

      {numberArray.map((number) => (
        <NumberButton key={number} number={number} setValue={props.setValue}/>
      ))}
    </div>
  );
};




// const Numbers = () => {
// 	// STEP 2 - add the imported data to state
// 	const [ numberState, setNumberState ] = useState(numbers);
// 	return (
// 		<div className="btn numbers">
// 			{/* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass it any props needed by the child component*/
// 			numbers.map((number, index) => <NumberButton key={index} number={number} />)}
// 		</div>
// 	);
// };

// export default Numbers;