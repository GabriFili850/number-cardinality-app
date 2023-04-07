import React, { useState } from "react";
import "./NumberCardinality.css";

function number_cardinality(n) {
  if (n % 10 === 0) {
    return "zero";
  } else if (n % 10 === 5) {
    return "five";
  } else if (n % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

function NumberCardinality() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    const number = parseInt(input);
    if (!isNaN(number)) {
      const cardinality = number_cardinality(number);
      setResult(cardinality);
    } else {
      setResult("Invalid input, please enter an integer");
    }
  };

  return (
    <div className='NumberCardinality'>
      <h1>Number Cardinality</h1>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter a number'
      />
      <button onClick={handleSubmit}>Submit</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
}

export default NumberCardinality;
