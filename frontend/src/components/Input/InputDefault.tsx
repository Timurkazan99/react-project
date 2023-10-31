import { ChangeEvent, FocusEvent } from 'react';

interface Props {
  error?: string
  placeholder: string
  value: string
  onFocus?: ({ target }: FocusEvent<HTMLInputElement>) => void
  onChange: ({ target }: ChangeEvent<HTMLInputElement>) => void
}

function InputDefault(props: Props) {
  const {
    error, placeholder, value, onChange, onFocus,
  } = props;
  return (
    <div className="Input__container">
      <input
        onFocus={onFocus}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={error ? 'Input__item_error' : 'Input__item'}
      />
      {error && <span className="Input__message_err">{error}</span>}
    </div>
  );
}

export default InputDefault;
