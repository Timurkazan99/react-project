import React, { ReactNode } from 'react';
import './modalStyle.scss';
import { createPortal } from 'react-dom';

interface Props {
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  children: ReactNode
  active: boolean
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Modal({ active, children, setActive } : Props) {
  const portal = document.getElementById('portal');

  if (!active || !portal) {
    return null;
  }

  return (createPortal(
    <div className="modal__container">
      <div className="modal__content">
        {children}
      </div>
    </div>,
    portal,
  ));
}

export default Modal;
