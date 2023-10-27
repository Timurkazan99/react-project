import { useState } from 'react';
import SigninForm from './SigninForm';
import Modal from '../Modal/Modal';
import './Signin.scss';

function Signin() {
  const [active, setActive] = useState(false);
  const handleClick = () => setActive(true);
  return (
    <>
      <button type="button" className="signin__button" onClick={handleClick}>SignIn</button>
      <Modal setActive={setActive} active={active}>
        <SigninForm setActive={setActive} />
      </Modal>
    </>
  );
}

export default Signin;
