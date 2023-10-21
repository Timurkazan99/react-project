import { Country, SearchSelectTypes } from '../../types';

export type SearchSelectKeys = keyof typeof SearchSelectTypes;

export type Context = {
  search: string;
  setSearch: (newValue: string) => void;
  type: SearchSelectKeys;
  setType: (newValue: string) => void;
  results: Country[];
  setResults: (newValue: Country[]) => void;
};
