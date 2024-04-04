import  React, {useState} from "react";
import Button from './Button';
import styled from '@emotion/styled';
import "./counter.css"

const Success = styled.span `
  color: #09fd11;
`
const Error = styled.span`
  color: #a31837;
`

const Counter = () => {
  const [counterState, setCounterState] = useState(0);

  return (
		<>
			<div className="Counter-container">
        <h1>
          Counter: {" "}
          {counterState < 0 ? <Error>{counterState}</Error> : <Success>{counterState}</Success>}
        </h1>
        <Button onClick={() => setCounterState(counterState + 1)} text="+1"></Button>
        <Button onClick={() => setCounterState(counterState - 1)} text="-1"></Button>
      </div>
		</>
	);
}

export default Counter;