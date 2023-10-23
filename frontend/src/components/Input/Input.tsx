import React from "react";

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
  return (
    <div className="Input__container">
      <input
        value={value}
        onChange={onClick}
        type="text"
        placeholder={placeholder}
        className="Input__item"
      />
      {error && <span className="Input__error">{error}</span>}
    </div>

  );
}

export default Input;
