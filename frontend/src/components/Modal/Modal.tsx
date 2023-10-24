import React, { ReactNode } from 'react';
import Portal from '../Portal/Portal';
import './modalStyle.scss';

interface Props {
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  children: ReactNode
  active: boolean
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Modal({ active, children, setActive } : Props) {
  if (!active) {
    return null;
  }
  return (
    <Portal setActive={setActive}>
      <div className="modal__container">
        <div className="modal__content">
          {children}
        </div>
      </div>
    </Portal>
  );
}

export default Modal;
