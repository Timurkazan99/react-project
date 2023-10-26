import React, { useState } from 'react';
import Input from '../Input';

function SignupForm() {
  const [loginErr, setLoginErr] = useState('kjhk');
  const [loginValue, setLoginValue] = useState('');
  const [passErr, SetPassErr] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const [passValue, setPassValue] = useState('');
  const handleSubmit = () => {
    setLoginErr('das');
    SetPassErr('dasd');
  };
  return (
    <div className="signup__form">
      <div className="signup__title">
        registration
      </div>
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
        error={passErr}
        value={repeatPass}
        placeholder="repeat password"
        onClick={({ target }) => setRepeatPass(target.value)}
      />
      <button onClick={handleSubmit} type="button">SignUp</button>
    </div>

  );
}

export default SignupForm;
