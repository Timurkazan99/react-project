interface PropPass {
  passValue: string
  setPassValue: React.Dispatch<React.SetStateAction<string>>
  setPassErr: React.Dispatch<React.SetStateAction<string>>
}

interface PropRepeatPass {
  passValue: string
  repeatPass: string
  setRepeatPass: React.Dispatch<React.SetStateAction<string>>
  setRepeatErr: React.Dispatch<React.SetStateAction<string>>
}

interface PropLogin {
  loginValue: string
  setLoginValue: React.Dispatch<React.SetStateAction<string>>
  setLoginErr: React.Dispatch<React.SetStateAction<string>>
}

export function validateLogin({ loginValue, setLoginErr, setLoginValue }: PropLogin) {
  if (!loginValue) {
    setLoginErr('this field is required');
    setLoginValue('');
    return false;
  }
  if (loginValue.length < 3) {
    setLoginErr('to short, 3 characters min');
    setLoginValue('');
    return false;
  }
  setLoginErr('');
  return true;
}

export function validatePassword({
  setPassValue,
  passValue,
  setPassErr,
}: PropPass) {
  if (!passValue) {
    setPassErr('this field is required');
    setPassValue('');
    return false;
  }
  if (passValue.length < 3) {
    setPassErr('to short, 3 characters min');
    setPassValue('');
    return false;
  }
  setPassErr('');
  return true;
}

export function validateRepeatPass({
  passValue,
  repeatPass,
  setRepeatPass,
  setRepeatErr,
}: PropRepeatPass) {
  if (!repeatPass) {
    setRepeatErr('this field is required');
    setRepeatPass('');
    return false;
  }
  if (passValue !== repeatPass) {
    setRepeatErr('passwords are not identical');
    setRepeatPass('');
    return false;
  }
  setRepeatErr('');
  return true;
}