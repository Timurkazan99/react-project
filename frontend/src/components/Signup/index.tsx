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
        <button onClick={() => setActive(false)} type="button">close</button>
        <SignupForm />
      </Modal>
    </>
  );
}

export default SignUp;
