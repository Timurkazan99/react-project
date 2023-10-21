import {
  useCallback,
} from 'react';
import getEnumKeys from '../../utils/getEnumKeys';
import { SearchSelectTypes } from '../../types';
import Option from '../Option';
import { useSearchContext } from '../Search/hooks';
import Select from '../Select';

function SearchSelect() {
  const { type, setType } = useSearchContext();

  const enumKeys = getEnumKeys(SearchSelectTypes);
  const options = enumKeys.map((key) => (
    <Option key={key} value={key}>{SearchSelectTypes[key]}</Option>
  ));

  const clickHandler = useCallback(setType, []);

  return (
    <Select onChange={clickHandler} title={SearchSelectTypes[type]}>
      {options}
    </Select>
  );
}

export default SearchSelect;
