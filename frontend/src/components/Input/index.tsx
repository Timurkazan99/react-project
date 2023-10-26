import React from 'react';
import InputPswd from './InputPswd';
import InputDefault from './InputDefault';
import './Input.scss';

interface Props {
  error: string
  placeholder: string
  value: string
  onClick: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
  password?: boolean
}

function Input(props: Props) {
  const {
    password, error, placeholder, value, onClick,
  } = props;
  return !password ? (
    <InputDefault
      error={error}
      placeholder={placeholder}
      value={value}
      onClick={onClick}
    />
  ) : (
    <InputPswd
      error={error}
      placeholder={placeholder}
      value={value}
      onClick={onClick}
      password={password}
    />
  );
}

export default Input;
