/* eslint-disable react/no-unused-prop-types */
import { useState } from 'react';
import { IconEye, IconEyeClosed } from '../Icons';

interface Props {
  error: string
  placeholder: string
  value: string
  onClick: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
  password: boolean
}

function InputPwd(props: Props) {
  const {
    error, placeholder, value, onClick,
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
        onChange={onClick}
        placeholder={placeholder}
        className={style}
      />
      {error && <span className="Input__message_err">{error}</span>}
    </div>
  );
}

export default InputPwd;
