import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// The modal-root element from public/index.html
const modalRoot = document.getElementById('modal-root');

// 1. The Modal Component using a Portal
const Modal = ({ children, onClose }) => {
  // Create a div that will be the container for the modal content
  const el = document.createElement('div');

  useEffect(() => {
    // Append the element to the modal root
    modalRoot.appendChild(el);

    // Lock the body scroll
    document.body.style.overflow = 'hidden';

    // Cleanup function
    return () => {
      modalRoot.removeChild(el);
      // Unlock the body scroll
      document.body.style.overflow = 'unset';
    };
  }, [el]);

  // Use createPortal to render children into the modal root
  return ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>,
    el
  );
};


// 2. The main component for the task
const Task14_PortalsForModals = () => {
  const [showModal, setShowModal] = useState(false);

  // Add Escape key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };

    if (showModal) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [showModal]);

  return (
    <div>
      <h2>Task 14: Portals for Modals</h2>
      <button onClick={() => setShowModal(true)}>Show Modal</button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h3>Modal Dialog</h3>
          <p>This modal is rendered into a different DOM node (`#modal-root`) using a React Portal.</p>
          <p>This is useful for breaking out of a parent component's stacking context or overflow properties.</p>
          <ul>
            <li>Click the "Close" button, click the backdrop, or press the 'Escape' key to close me.</li>
            <li>When the modal is open, the background body scroll is locked.</li>
          </ul>
        </Modal>
      )}

      <div className="description">
        <p>React Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.</p>
        <p>This is a perfect use case for modals, tooltips, and other UI elements that need to appear on top of everything else.</p>
      </div>
    </div>
  );
};

export default Task14_PortalsForModals;
