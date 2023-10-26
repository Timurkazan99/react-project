interface Props {
  error?: string
  placeholder: string
  value: string
  onClick: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
}

function InputDefault(props: Props) {
  const {
    error, placeholder, value, onClick,
  } = props;
  return (
    <div className="Input__container">
      <input
        type="text"
        value={value}
        onChange={onClick}
        placeholder={placeholder}
        className={error ? 'Input__item_error' : 'Input__item'}
      />
      {error && <span className="Input__message_err">{error}</span>}
    </div>
  );
}

export default InputDefault;
