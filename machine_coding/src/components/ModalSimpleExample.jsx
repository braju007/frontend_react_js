import React, { useState } from 'react';

export const ModalSimpleExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div style={{ textAlign: 'center', padding: '50px', height: '100vh' }}>
      <h1>Modal Popup</h1>
      <button
        onClick={handleOpen}
        style={{ padding: '10px', cursor: 'pointer' }}
      >
        Open Modal
      </button>
      {isOpen && (
        <div
          data-testid="modal-backdrop"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseDown={handleClose}
        >
          <div
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '10px',
              textAlign: 'center',
              minWidth: '300px',
              boxShadow: '0px 4px 6px rgbs(0,0,0,0.2)',
            }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <h2>Modal Header</h2>
            <p>This is the modal body</p>
            <button
              onClick={handleClose}
              style={{ padding: '10px', cursor: 'pointer' }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
