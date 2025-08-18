import { useState } from 'react';
import './../css/UndoRedoTextExample.css';

export const UndoRedoTextExample = () => {
  const [text, setText] = useState('');
  const [history, setHistory] = useState(['']);
  const [currentStep, setCurrentStep] = useState(0);

  function handleChange(e) {
    const newValue = e.target.value;

    const updateHistory = history.slice(0, currentStep + 1);
    setHistory([...updateHistory, newValue]);
    setCurrentStep(updateHistory.length);
    setText(newValue);
  }

  function handleRedo() {
    if (currentStep < history.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setText(history[currentStep + 1]);
    }
  }

  function handleUndo() {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setText(history[currentStep - 1]);
    }
  }

  return (
    <div className="undoRedo">
      <h1>Undo Redo History</h1>

      <div className="container">
        <textarea
          className="textarea"
          onChange={handleChange}
          data-testid="textarea"
          value={text}
        />

        <div className="buttons">
          <button
            onClick={handleRedo}
            data-testid="redo-button"
            disabled={currentStep === history.length - 1}
          >
            Redo
          </button>
          <button
            onClick={handleUndo}
            data-testid="undo-button"
            disabled={currentStep === 0}
          >
            Undo
          </button>
        </div>
      </div>
    </div>
  );
};
