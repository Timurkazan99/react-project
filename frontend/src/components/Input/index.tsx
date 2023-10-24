import React, { useState } from 'react';
import './Input.scss';
import IconEyeClosed from '../Icons/IconEyeClosed';
import IconEye from '../Icons/IconEye';

interface Props {
  error?: string
  placeholder: string
  value: string
  onClick: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
  password?: boolean
}

function Input(props: Props) {
  const {
    error, placeholder, value, onClick, password,
  } = props;
  const [isPassword, setIsPassword] = useState(true);
  const style = error ? 'Input__item_error' : 'Input__item';
  const icon = isPassword ? <IconEye /> : <IconEyeClosed />;
  const type = isPassword ? 'password' : 'text';
  function togglePass() {
    setIsPassword(!isPassword);
  }
  return (
    <div className="Input__container">
      { password && (
        <button
          className="input__container_button"
          type="button"
          onClick={togglePass}
        >
          {icon}
        </button>
      )}
      <input
        type={type}
        value={value}
        onChange={onClick}
        placeholder={placeholder}
        className={style}
      />
      {error && <span className="Input__message_err">{error}</span>}
    </div>

  );
}

export default Input;
