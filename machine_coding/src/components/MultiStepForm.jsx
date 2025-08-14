import React, { useState } from 'react';

const Step1 = ({ next }) => {
  return (
    <div>
      <h2>Step 1</h2>
      <button onClick={next}>Next</button>
    </div>
  );
};
const Step2 = ({ next, previous }) => {
  return (
    <div>
      <h2>Step 2</h2>
      <button onClick={next}>Next</button>
      <button onClick={previous}>Previous</button>
    </div>
  );
};
const Step3 = ({ previous }) => {
  return (
    <div>
      <h2>Step 3</h2>
      <button onClick={previous}>Previous</button>
    </div>
  );
};
export const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const next = () => setCurrentStep(currentStep + 1);
  const previous = () => setCurrentStep(currentStep - 1);

  return (
    <div>
      <h1>Multi Step Form...</h1>
      {currentStep === 1 && <Step1 next={next} />}
      {currentStep === 2 && <Step2 next={next} previous={previous} />}
      {currentStep === 3 && <Step3 previous={previous} />}
    </div>
  );
};
