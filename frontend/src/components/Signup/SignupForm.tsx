import { useState } from 'react';
import * as jose from 'jose';
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
    const login = localStorage.getItem(loginValue);
    if (login) {
      return null; // такой уже есть!
    }
    async function auth() {
      const secret = new TextEncoder().encode(
        'mama',
      );
      console.log(typeof secret);
      const alg = 'HS256';
      const jwt = await new jose.SignJWT({ stas: 'tovch' })
        .setProtectedHeader({ alg })
        .setExpirationTime('2h')
        .sign(secret);
      console.log(jwt);
      const claims = jose.decodeJwt(jwt);
      console.log(claims);
    }
    auth();
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
