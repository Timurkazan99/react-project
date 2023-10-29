import axios from 'axios';
import {
  transformCountry,
  transformFullCountry,
} from '../CountriesService';
import {
  Country,
  FullCountry,
} from '../../types';

export const getAll = async (): Promise<Country[]> => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  return response.data.map(transformCountry);
};

export const getSearchedCountries = async (type: string, search: string): Promise<Country[]> => {
  const response = await axios.get(`https://restcountries.com/v3.1/${type}/${search}`, {
    params: { fields: 'cca3,name,capital,population,flags,coatOfArms' },
  });
  return response.data.map(transformCountry);
};

export const getById = async (id: string): Promise<FullCountry> => {
  const response = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`);
  return transformFullCountry(response.data[0]);
};

export const getFavoritesCountries = async (ids: string[]): Promise<Country[]> => {
  if (ids.length === 0) {
    return [];
  }

  const response = await axios.get('https://restcountries.com/v3.1/alpha/', {
    params: {
      fields: 'cca3,name,capital,population,flags',
      codes: ids.join(','),
    },
  });
  return response.data.map(transformCountry);
};
