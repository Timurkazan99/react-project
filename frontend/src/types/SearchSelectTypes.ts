export enum SearchSelectTypes {
  name = 'Полное имя',
  alpha = 'Код',
  currency = 'Валюта',
  lang = 'Язык',
  capital = 'Столица',
  region = 'Регион',
  subregion = 'Субрегион',
  translation = 'Переводы',
}

export type SearchSelectKeys = keyof typeof SearchSelectTypes;
