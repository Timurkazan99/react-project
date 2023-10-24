import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './signupStyle.scss';

function Signup() {
  const [active, setActive] = useState(false);
  console.log('active', active);
  const handleClick = () => setActive(true);
  return (
    <>
      <button type="button" className="signup__button" onClick={handleClick}>SignUp</button>
      <Modal setActive={setActive} active={active}>
        <div>
          <button onClick={() => setActive(false)} type="button">close</button>
        </div>
      </Modal>
    </>
  );
}

export default Signup;
