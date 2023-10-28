import { useState } from 'react';
import Modal from '../Modal/Modal';
import './SignIn.scss';
import SignInForm from './SignInForm';

function SignIn() {
  const [active, setActive] = useState(false);
  const handleClick = () => setActive(true);
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
