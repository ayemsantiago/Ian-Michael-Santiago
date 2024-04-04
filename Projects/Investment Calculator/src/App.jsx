import Header from "./Components/Header";
import Results from "./Components/Results";
import UserInput from "./Components/User Input";
import { useState } from "react"

export default function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration > 0 && userInput.initialInvestment > 0 && userInput.annualInvestment > 0 && userInput.expectedReturn > 0;

  function handleChange(valueIdentifier, newValue) {
    setUserInput(previousUserInput => {
      return {
        ...previousUserInput,
        [valueIdentifier]: +newValue
      }
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {inputIsValid ? <Results userInput={userInput} /> :
        <>
          <h3 className="center">Invalid input data detected</h3>
          <p className="center">Please enter a number greater than 0 for all fields</p>
        </>}
    </>
  )
}
