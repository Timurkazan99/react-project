import { Dispatch, SetStateAction } from 'react';

interface PropPass {
  passValue: string
  setPassValue: Dispatch<SetStateAction<string>>
  setPassErr: Dispatch<SetStateAction<string>>
}

interface PropRepeatPass {
  passValue: string
  repeatPass: string
  setRepeatPass: Dispatch<SetStateAction<string>>
  setRepeatErr: Dispatch<SetStateAction<string>>
}

interface PropLogin {
  loginValue: string
  setLoginValue: Dispatch<SetStateAction<string>>
  setLoginErr: Dispatch<SetStateAction<string>>
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
