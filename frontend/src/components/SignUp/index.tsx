import { useState } from 'react';
import Modal from '../Modal/Modal';
import './SignUp.scss';
import SignUpForm from './SignUpForm';

function SignUp() {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(true);
  return (
    <>
      <button type="button" className="signup__button" onClick={handleClick}>SignUp</button>
      <Modal setActive={setActive} active={active}>
        <SignUpForm setActive={setActive} />
      </Modal>
    </>
  );
}

export default SignUp;
