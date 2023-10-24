interface PropPassWithRepeat {
  passValue: string
  repeatPass: string
  setPassErr: React.Dispatch<React.SetStateAction<string>>
  setRepeatErr: React.Dispatch<React.SetStateAction<string>>
}

interface PropLogin {
  loginValue: string
  setLoginErr: React.Dispatch<React.SetStateAction<string>>
}

export function validateLogin({ loginValue, setLoginErr }: PropLogin) {
  if (!loginValue) {
    setLoginErr('this field is required');
    return false;
  }
  if (loginValue.length < 3) {
    setLoginErr('to short, 3 characters min');
    return false;
  }
  setLoginErr('');
  return true;
}

export function validatePasswordWhitRepeat({
  passValue,
  setPassErr,
  repeatPass,
  setRepeatErr,
}: PropPassWithRepeat) {
  if (!passValue) {
    setPassErr('this field is required');
    return false;
  }
  if (passValue.length < 3) {
    setPassErr('to short, 3 characters min');
    return false;
  }
  setPassErr('');
  if (passValue !== repeatPass) {
    setRepeatErr('passwords are not identical');
    return false;
  }
  setRepeatErr('');
  return true;
}
