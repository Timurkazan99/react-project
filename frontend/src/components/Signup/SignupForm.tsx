import { useState } from 'react';
import Input from '../Input';
import { validateLogin, validatePasswordWhitRepeat } from '../../utils/validate';
import isUserExist from '../../utils/isUserExist';
import useRegistration from '../../hooks/useRegistration';
import { setUser, useAppDispatch } from '../../store';

type Prop = { setActive: React.Dispatch<React.SetStateAction<boolean>> };

function SignupForm({ setActive }: Prop) {
  const dispatch = useAppDispatch();
  const [loginErr, setLoginErr] = useState('');
  const [loginValue, setLoginValue] = useState('');
  const [passErr, setPassErr] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const [passValue, setPassValue] = useState('');
  const [repeatErr, setRepeatErr] = useState('');
  const handleSubmit = async () => {
    const isValidLogin = validateLogin({
      loginValue,
      setLoginErr,
      setLoginValue,
    });
    const isValidPass = validatePasswordWhitRepeat({
      setPassValue,
      setRepeatPass,
      passValue,
      setPassErr,
      repeatPass,
      setRepeatErr,
    });
    if (!isValidLogin || !isValidPass) {
      return null;
    }
    if (isUserExist(loginValue)) {
      setLoginErr('this user already exists');
      return null;
    }
    await useRegistration(loginValue, passValue);
    dispatch(setUser());
    setActive(false);
    return null;
  };

  return (
    <div className="signup__form">
      <Input
        error={loginErr}
        value={loginValue}
        placeholder="login"
        onClick={({ target }) => setLoginValue(target.value)}
      />
      <Input
        password
        error={passErr}
        value={passValue}
        placeholder="password"
        onClick={({ target }) => setPassValue(target.value)}
      />
      <Input
        password
        error={repeatErr}
        value={repeatPass}
        placeholder="repeat password"
        onClick={({ target }) => setRepeatPass(target.value)}
      />
      <button
        className="signup__formbutton_submit"
        onClick={handleSubmit}
        type="button"
      >
        SignUp
      </button>
    </div>
  );
}

export default SignupForm;
