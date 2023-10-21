import { Country, FullCountry } from '../types/types';

export const getAll = async (): Promise<Country[]> => [];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getById = async (id: string): Promise<FullCountry> => ({} as FullCountry);
