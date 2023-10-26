// path of router
export const MAIN = '/';
export const SEARCH = '/search';
export const ID = ':id';
export const FAVORITES = '/favorites';
export const HISTORY = '/history';

// Limit pagination
export const LIMIT = Number(process.env.LIMIT) || 20;

export const INPUT_DELAY = 500; // delay in ms
export const SECRET_TOKEN = process.env.REACT_APP_SECRET;
export const TIMER_TOKEN = process.env.REAC_APP_TIMER_TOKEN || '24h';
