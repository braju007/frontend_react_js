import React, { useState } from 'react';

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const getColor = () => {
    if (progress >= 80) return 'green';
    if (progress >= 40) return 'orange';
    return 'red';
  };

  const updateProgress = (delta) => {
    setProgress((prev) => Math.max(0, Math.min(100, prev + delta)));
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: '#f0f0f0',
          width: '400px',
          height: '25px',
          position: 'relative',
        }}
      >
        <div
          style={{
            height: '100%',
            backgroundColor: getColor(),
            width: `${progress}%`,
          }}
          id="testBgColor"
        />
      </div>
      <span>{progress}%</span>
      <div style={{ padding: '10px' }}>
        <button onClick={() => updateProgress(-10)} disabled={progress === 0}>
          -10%
        </button>
        <button onClick={() => updateProgress(+10)} disabled={progress === 100}>
          +10%
        </button>
      </div>
    </div>
  );
};
