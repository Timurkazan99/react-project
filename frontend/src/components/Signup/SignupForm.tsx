import { useState } from 'react';
import { validateLogin, validatePassword, validateRepeatPass } from '../../utils/validate';
import isUserExist from '../../utils/isUserExist';
import useRegistration from '../../hooks/useRegistration';
import { setUser, useAppDispatch } from '../../store';
import Input from '../Input';

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
    const isValidPass = validatePassword({
      setPassValue,
      passValue,
      setPassErr,
    });
    const isValidRepeatPass = validateRepeatPass({
      passValue,
      repeatPass,
      setRepeatErr,
      setRepeatPass,
    });
    if (!isValidLogin || !isValidPass || !isValidRepeatPass) {
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
      <div className="signup__title">registration</div>
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
      <Input
        password
        error={repeatErr}
        value={repeatPass}
        placeholder="repeat password"
        onChange={({ target }) => setRepeatPass(target.value.trim())}
        onFocus={() => setRepeatErr('')}
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
