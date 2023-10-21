import { ReactNode } from 'react';
import { Country, SearchSelectKeys } from '../../types';

export type Props = {
  children: ReactNode | ReactNode[];
};

export type Context = {
  search: string;
  setSearch: (newValue: string) => void;
  type: SearchSelectKeys;
  setType: (newValue: string) => void;
  results: Country[];
  setResults: (newValue: Country[]) => void;
};
