/* eslint-disable react/no-unused-prop-types */
import { useState, ChangeEvent, FocusEvent } from 'react';
import { IconEye, IconEyeClosed } from '../Icons';

interface Props {
  error: string
  placeholder: string
  value: string
  onChange: ({ target }: ChangeEvent<HTMLInputElement>) => void
  onFocus?: ({ target }: FocusEvent<HTMLInputElement>) => void
  password: true
}

function InputPswd(props: Props) {
  const {
    error, placeholder, value, onChange, onFocus,
  } = props;
  const [isVisible, setIsVisible] = useState(false);
  const icon = !isVisible ? <IconEye /> : <IconEyeClosed />;
  const type = !isVisible ? 'password' : 'text';
  const style = error ? 'Input__item_error' : 'Input__item';

  return (
    <div className="Input__container">
      <button
        className="input__container_button"
        type="button"
        onClick={() => setIsVisible(!isVisible)}
      >
        {icon}
      </button>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        className={style}
      />
      {error && <span className="Input__message_err">{error}</span>}
    </div>
  );
}

export default InputPswd;
