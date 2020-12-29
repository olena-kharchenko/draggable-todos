import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return window.removeEventListener('keydown', handleKeyDown);
  });

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.content}>{children}</div>
    </div>,
    modalRoot,
  );
}
