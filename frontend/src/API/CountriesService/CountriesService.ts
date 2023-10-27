import {
  Country,
  FullCountry,
} from '../../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const transformCountry = (country: any): Country => ({
  ...country,
  name: {
    common: country.name.common,
    official: country.name.official,
  },
  flags: {
    png: country.flags.png,
    alt: country.flags.alt,
  },
} as Country);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const transformFullCountry = (fullCountry: any): FullCountry => ({
  ...fullCountry,
  languages: fullCountry.languages ?? {},
  capital: fullCountry.capital ?? [],
  name: {
    common: fullCountry.name.common,
    official: fullCountry.name.official,
  },
  flags: {
    png: fullCountry.flags.png,
    alt: fullCountry.flags.alt,
  },
  coatOfArms: {
    png: fullCountry.coatOfArms.png,
    alt: 'This is Coat Of Arms',
  },
});
