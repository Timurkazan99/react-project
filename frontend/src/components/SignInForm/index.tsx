import { useState } from 'react';
import isUserExist from '../../utils/isUserExist';
import Input from '../Input';
import isCorrectPswd from '../../utils/isCorrectPswd';
import setSession from '../../utils/setSession';
import { closeModal, openModal, setUser, useAppDispatch } from '../../store';
import './SignIn.scss';

function SignIn() {
  const dispatch = useAppDispatch();
  const [loginErr, setLoginErr] = useState('');
  const [loginValue, setLoginValue] = useState('');
  const [passErr, setPassErr] = useState('');
  const [passValue, setPassValue] = useState('');
  const handleSubmit = async () => {
    if (!isUserExist(loginValue)) {
      setPassValue('');
      setLoginErr('Account not found');
      return null;
    }
    const correctPswd = await isCorrectPswd(loginValue, passValue);
    if (!correctPswd) {
      setPassErr('incorrect password');
      setPassValue('');
      return null;
    }
    await setSession(loginValue);
    dispatch(setUser());
    dispatch(closeModal());
    return null;
  };

  return (
    <div className="signin__form">
      <div className="signin__title">
        authorization
      </div>
      <Input
        error={loginErr}
        value={loginValue}
        placeholder="login"
        onChange={({ target }) => setLoginValue(target.value.trim())}
        onFocus={() => setLoginErr('')}
      />
      <Input
        password
        error={passErr}
        value={passValue}
        placeholder="password"
        onChange={({ target }) => setPassValue(target.value.trim())}
        onFocus={() => setPassErr('')}
      />
      <button
        className="signin__formbutton_submit"
        onClick={handleSubmit}
        type="button"
      >
        SignIn
      </button>
      <button
        type="button"
        onClick={() => dispatch(openModal('SIGNUP'))}
        className="signin__button_redirect"
      >
        registration
      </button>
    </div>
  );
}

export default SignIn;
