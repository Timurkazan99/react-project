interface Props {
  error?: string
  placeholder: string
  value: string
  onFocus?: ({ target }: React.FocusEvent<HTMLInputElement>) => void
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
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
