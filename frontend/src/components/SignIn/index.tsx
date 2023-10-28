import { useState } from 'react';
import Modal from '../Modal/Modal';
import './SignIn.scss';
import SignInForm from './SignInForm';
import { openModal, useAppDispatch } from '../../store';

function SignIn() {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(false);
  const handleClick = () => dispatch(openModal('signin'));
  return (
    <>
      <button type="button" className="signin__button" onClick={handleClick}>SignIn</button>
      <Modal setActive={setActive} active={active}>
        <SignInForm setActive={setActive} />
      </Modal>
    </>
  );
}

export default SignIn;
