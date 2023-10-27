import React from 'react';
import InputPswd from './InputPswd';
import InputDefault from './InputDefault';
import './Input.scss';

interface Props {
  error: string
  placeholder: string
  value: string
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
  password?: boolean
  onFocus?: ({ target }: React.FocusEvent<HTMLInputElement>) => void
}

function Input(props: Props) {
  const {
    password, error, placeholder, value, onChange, onFocus,
  } = props;
  return !password ? (
    <InputDefault
      error={error}
      placeholder={placeholder}
      value={value}
      onFocus={onFocus}
      onChange={onChange}
    />
  ) : (
    <InputPswd
      error={error}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      password={password}
    />
  );
}

export default Input;
