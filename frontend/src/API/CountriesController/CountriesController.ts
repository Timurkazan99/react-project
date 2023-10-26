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

export const getSearchedCountries = async (service: string, search: string): Promise<Country[]> => {
  const response = await axios.get(`https://restcountries.com/v3.1/${service}/${search}`, {
    params: { fields: 'cca3,name,capital,population,flags,coatOfArms' },
  });
  return response.data.map(transformCountry);
};

export const getCountryByID = async (id: string): Promise<FullCountry> => {
  const response = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`);
  return transformFullCountry(response.data[0]);
};
