import React, { useState } from "react";


function UserInput(props) {

  const [userInput, setUserInput] = useState({
    'current-savings': 1000,
    'yearly-contribution': 10000,
    'expected-return': 300,
    'duration': 5,
  });


  const submitHandler = (event) => {
    event.preventDefault();
    console.log(userInput);

    props.calculateHandler(userInput);
  };

  const resetHandler = () => {
    setUserInput({
      'current-savings': 1000,
      'yearly-contribution': 10000,
      'expected-return': 300,
      'duration': 5,
    });
  }

  const inputChangeHandler = (input, value) => {
    setUserInput((prev) => {
      return {
        ...prev, [input]: value,

      };

    });
  };


  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input value={userInput['current-savings']} onChange={(event) => inputChangeHandler('current-savings', event.target.value)} type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input value={userInput['yearly-contribution']} onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)} type="number" id="yearly-contribution" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input value={userInput['expected-return']} onChange={(event) => inputChangeHandler('expected-return', event.target.value)} type="number" id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input value={userInput['duration']} onChange={(event) => inputChangeHandler('duration', event.target.value)} type="number" id="duration" />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default UserInput;