import React, { useState } from 'react'
import { Container, Prevoius, Current, Screen, Button } from './styles'

export default function Calculator() {
  const [present, setPresent] = useState('');
  const [operator, setOperator] = useState('');
  const [previous, setPrevious] = useState('');
  const allclearHandler = () => {
    setPresent("");
    setOperator("");
    setPrevious("");
  };
  const deleteHandler = () => {
    setPresent(String(present).slice(0, -1));
  };

  const chooseOperationHandler = (e) => { 
    if (present === "") return;
    if (previous !== "") {
      let value = compute();
      setPrevious(value);
    } else {
      setPrevious(present);
    }
    setPresent("");
    setOperator(e.target.getAttribute("data"));
  };
  const valueHandler = (e) => {
    const value = e.target.getAttribute("data");
    if (value === "." && present.includes(".")) return;
    setPresent(present + value);
  };

  const chooseHandler = (e) => { 
    if (present === "") return;
    if (previous !== "") {
      let value = compute();
      setPrevious(value);
    } else {
      setPrevious(present);
    }
    setPresent("");
    setOperator(e.target.getAttribute("data"));
  };

  const equalHandler = () => {
    let value = compute();
    if (value === undefined || value == null) return;
    setPresent(value);
    setPrevious("");
    setOperator("");
  };

  const compute = () => {
    let result;
    let previousNumber = parseFloat(previous);
    let presentNumber = parseFloat(present);
    if (isNaN(previousNumber) || isNaN(presentNumber)) return;
    switch (operator) {
      case "÷":
        result = previousNumber / presentNumber;
        break;
      case "x":
        result = previousNumber * presentNumber;
        break;
      case "+":
        result = previousNumber + presentNumber;
        break;
      case "-":
        result = previousNumber - presentNumber;
        break;
      default:
        return;
    }
    return result;
  };

  return (
    <div>
        <Container>
            <Screen>
              <Prevoius>
                {previous} {operator}
              </Prevoius>
              <Current>{present}</Current>
            </Screen>
            <Button gridSpan={2} control onClick={allclearHandler}>
          AC
        </Button>
        <Button onClick={deleteHandler}>DEL</Button>
        <Button data={"÷"} onClick={chooseOperationHandler} operation>÷</Button>
        <Button data={7} onClick={(e)=>valueHandler(e)}>7</Button>
        <Button data={8} onClick={(e)=>valueHandler(e)}>8</Button>
        <Button data={9} onClick={(e)=>valueHandler(e)}>{" "}9</Button>
        <Button data={"x"} operation onClick={chooseHandler}>x</Button>
        <Button data={4} onClick={(e)=>valueHandler(e)}>4</Button>
        <Button data={5} onClick={(e)=>valueHandler(e)}>5</Button>
        <Button data={6} onClick={(e)=>valueHandler(e)}>6</Button>
        <Button data={"+"} operation onClick={chooseHandler}>+</Button>
        <Button data={1} onClick={(e)=>valueHandler(e)}>1</Button>
        <Button data={2} onClick={(e)=>valueHandler(e)}>2</Button>
        <Button data={3} onClick={(e)=>valueHandler(e)}>3</Button>
        <Button data={"-"} operation onClick={chooseHandler}>-</Button>
        <Button data={"."} onClick={(e)=>valueHandler(e)} decimal>.</Button>
        <Button data={0} onClick={(e)=>valueHandler(e)}>0</Button>
        <Button gridSpan={2} equals onClick={equalHandler}>=</Button>
        </Container>
    </div>
  )
}
