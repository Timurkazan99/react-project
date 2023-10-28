import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  closeModal, getModalState, useAppDispatch, useAppSelector,
} from '../../store';
import Portal from '../Portal';
import modalPages from './ModalPages';
import './Modal.scss';

function Modal2() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const name = useAppSelector(getModalState);
  useEffect(() => {
    dispatch(closeModal());
  }, [location]);

  if (!name) {
    return null;
  }
  const Component = modalPages[name];
  return (
    <Portal>
      <div className="modal__container">
        <div className="modal__content">
          <button
            className="modal__button_close"
            onClick={() => dispatch(closeModal())}
            type="button"
          >
            &#10006;
          </button>
          <Component />
        </div>
      </div>
    </Portal>
  );
}

export default Modal2;
