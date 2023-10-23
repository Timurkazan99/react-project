import React, { useState } from 'react';
import Input from '../components/Input/Input';

function SignIn() {
  const [login, setLogin] = useState('');
  const handleLogin = ({ target }: React.ChangeEvent<HTMLInputElement>) => setLogin(target.value);
  return (
    <Input error="" value={login} placeholder="login" onClick={handleLogin} />
  );
}

export default SignIn;
