import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './Signup.scss';
import SignupForm from './SignupForm';

function SignUp() {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(true);
  return (
    <>
      <button type="button" className="signup__button" onClick={handleClick}>SignUp</button>
      <Modal setActive={setActive} active={active}>
        <SignupForm setActive={setActive} />
      </Modal>
    </>
  );
}

export default SignUp;
