import React from "react";
import { operators } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  console.log(operators)
  return (
    <div className="operators-div">
      {operators.map((operators) => {
        return <button>{operators.char}</button>

      })}
    </div>
  );
};

export default Operators; 