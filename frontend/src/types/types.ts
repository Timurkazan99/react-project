import { PayloadAction } from '@reduxjs/toolkit';

export interface PayloadActionWithError extends PayloadAction {
  error: string
}

export interface Image {
  png: string,
  alt: string,
}

export interface Country {
  cca3: string,
  name: {
    common: string,
    official: string
  },
  flags: Image,
  coatOfArms: Image,
  capital: string[],
  population: number
}

export interface FullCountry extends Country {
  independent: boolean,
  area: number,
  continents: string[],
  currencies: {
    [key: string]: {
      name: string,
      symbol: string
    }
  },
  languages: {
    [key: string]: string
  },
  region: string,
  subregion: string
}

export interface History {
  type: string,
  search: string,
  timestamp: number
}

export type HistoryState = History[];

export interface UserState {
  login: string
  password: string
}

export interface CountryState {
  oneCountry: FullCountry | null,
  AllCountries: Country[],
  isLoading: boolean,
  error: string,
}

export type FavoriteState = string[];
