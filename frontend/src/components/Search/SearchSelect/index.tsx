import {
  useCallback,
} from 'react';
import { getEnumKeys } from '../../../utils';
import { SearchSelectTypes } from '../../../types';
import Option from '../../Option';
import { useSearchContext } from '../SearchContext';
import Select from '../../Select';

function SearchSelect() {
  const { type, setType, setResults } = useSearchContext();

  const enumKeys = getEnumKeys(SearchSelectTypes);
  const options = enumKeys.map((key) => (
    <Option key={key} value={key}>{SearchSelectTypes[key]}</Option>
  ));

  const clickHandler = useCallback((newValue: string) => {
    setResults([]);
    setType(newValue);
  }, [setType]);

  return (
    <Select onChange={clickHandler} title={SearchSelectTypes[type]}>
      {options}
    </Select>
  );
}

export default SearchSelect;
