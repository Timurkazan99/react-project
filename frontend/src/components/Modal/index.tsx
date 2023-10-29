import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  closeModal, getModal, useAppDispatch, useAppSelector,
} from '../../store';
import Portal from '../Portal';
import modalPages from './ModalPages';
import './Modal.scss';

function Modal() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const name = useAppSelector(getModal);
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

export default Modal;
