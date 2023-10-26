import React, { ReactNode, useEffect } from 'react';
import './Modal.scss';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';

interface Props {
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  children: ReactNode
  active: boolean
}
function Modal({ active, children, setActive } : Props) {
  const { pathname } = useLocation();
  useEffect(() => setActive(false), [pathname]);
  const portal = document.getElementById('portal');

  if (!active || !portal) {
    return null;
  }

  return (createPortal(
    <div className="modal__container">
      <div className="modal__content">
        <button
          className="modal__button_close"
          onClick={() => setActive(false)}
          type="button"
        >
          &#10006;
        </button>
        {children}
      </div>
    </div>,
    portal,
  ));
}

export default Modal;
