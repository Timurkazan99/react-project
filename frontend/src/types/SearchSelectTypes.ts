export enum SearchSelectTypes {
  name = 'Full name',
  currency = 'Currency',
  lang = 'Language',
  capital = 'Capital',
  region = 'Region',
  subregion = 'Subregion',
  translation = 'Translation',
}

export type SearchSelectKeys = keyof typeof SearchSelectTypes;
