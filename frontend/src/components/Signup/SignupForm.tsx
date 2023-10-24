import { useState } from 'react';
import Input from '../Input';
import { validateLogin, validatePasswordWhitRepeat } from '../../utils/validate';

function SignupForm() {
  const [loginErr, setLoginErr] = useState('');
  const [loginValue, setLoginValue] = useState('');
  const [passErr, setPassErr] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const [passValue, setPassValue] = useState('');
  const [repeatErr, setRepeatErr] = useState('');
  const handleSubmit = () => {
    const isValidLogin = validateLogin({ loginValue, setLoginErr });
    const isValidPass = validatePasswordWhitRepeat({
      passValue,
      setPassErr,
      repeatPass,
      setRepeatErr,
    });
    if (!isValidLogin || !isValidPass) {
      return null;
    }
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
