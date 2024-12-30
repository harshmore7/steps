import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [steps, setSteps] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const handlePrevious = () => steps > 1 && setSteps((s) => s - 1);
  const handleNext = () => steps < 3 && setSteps((s) => s + 1);
  return (
    <>
      <button className="close" onClick={() => setIsOpen((prev) => !prev)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={steps >= 1 && "active"}>1</div>
            <div className={steps >= 2 && "active"}>2</div>
            <div className={steps >= 3 && "active"}>3</div>
          </div>
          <p className="message">
            {" "}
            Step {steps} : {messages[steps - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
