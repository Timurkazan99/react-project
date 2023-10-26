import Favorites from './pages/Favorites';
import Main from './pages/Main';
import OneCountry from './pages/OneCountry';
import Search from './pages/Search';
import History from './pages/History';

import {
  MAIN,
  SEARCH,
  ID,
  FAVORITES,
  HISTORY,
} from './utils';

// eslint-disable-next-line import/prefer-default-export
export const routes = [
  {
    path: MAIN,
    Component: Main,
  },
  {
    path: SEARCH,
    Component: Search,
  },
  {
    path: ID,
    Component: OneCountry,
  },
  {
    path: FAVORITES,
    Component: Favorites,
  },
  {
    path: HISTORY,
    Component: History,
  },
];
