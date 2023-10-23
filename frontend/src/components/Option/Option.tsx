import { Props } from './type';

function Option(props: Props) {
  const { value, children } = props;

  return (
    <li data-value={value}>
      {children}
    </li>
  );
}

export default Option;
