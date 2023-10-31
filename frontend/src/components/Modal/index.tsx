import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  closeModal, getModal, openModal, useAppDispatch, useAppSelector,
} from '../../store';
import Portal from '../Portal';
import modalPages from './ModalPages';
import './Modal.scss';

function Modal() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const name = useAppSelector(getModal);

  useEffect(() => {
    if (location.state?.modalOpen) {
      dispatch(openModal('SIGNIN'));
      window.history.replaceState({}, document.title);
    } else if (name !== 'CLOSE') {
      dispatch(closeModal());
    }
  }, [location]);

  const Component = modalPages[name];
  if (!Component) {
    return null;
  }
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
