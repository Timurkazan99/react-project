import axios from 'axios';
import {
  transformCountry,
  transformFullCountry,
} from '../CountriesService';
import {
  Country,
  FullCountry,
} from '../../types';

const countryFields = 'cca3,name,flags,capital,population';
const fullCountryFields = `${countryFields},independent,area,continents,currencies,languages,region,subregion,coatOfArms`;

export const getAll = async (): Promise<Country[]> => {
  const response = await axios.get('https://restcountries.com/v3.1/all', {
    params: { fields: countryFields },
  });
  return response.data.map(transformCountry);
};

export const getSearchedCountries = async (type: string, search: string): Promise<Country[]> => {
  const response = await axios.get(`https://restcountries.com/v3.1/${type}/${search}`, {
    params: { fields: countryFields },
  });
  return response.data.map(transformCountry);
};

export const getById = async (id: string): Promise<FullCountry> => {
  const response = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`, {
    params: { fields: fullCountryFields },
  });
  return transformFullCountry(response.data);
};

export const getFavoritesCountries = async (ids: string[]): Promise<Country[]> => {
  if (ids.length === 0) {
    return [];
  }

  const response = await axios.get('https://restcountries.com/v3.1/alpha/', {
    params: {
      fields: countryFields,
      codes: ids.join(','),
    },
  });
  return response.data.map(transformCountry);
};
