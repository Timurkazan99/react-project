import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './signupStyle.scss';
import SignupForm from './SignupForm';

function SignUp() {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(true);
  return (
    <>
      <button type="button" className="signup__button" onClick={handleClick}>SignUp</button>
      <Modal setActive={setActive} active={active}>
        <SignupForm />
      </Modal>
    </>
  );
}

export default SignUp;
