import React from 'react';
import './Input.scss';

interface Props {
  error: string
  placeholder: string
  value: string
  onClick: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
}

function Input(props: Props) {
  const {
    error, placeholder, value, onClick,
  } = props;
  const style = error ? 'Input__item_error' : 'Input__item';
  return (
    <div className="Input__container">
      <input
        value={value}
        onChange={onClick}
        type="text"
        placeholder={placeholder}
        className={style}
      />
      {error && <span className="Input__message_err">{error}</span>}
    </div>

  );
}

export default Input;
