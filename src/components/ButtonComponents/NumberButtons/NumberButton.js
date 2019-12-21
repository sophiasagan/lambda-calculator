import React from 'react';

const NumberButton = props => {
	return (
    <>
		
		<button className="button" onClick={() => props.setValue(props.number)}>{props.number}</button>
    </>
	);
};

export default NumberButton;