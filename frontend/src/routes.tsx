import Favorites from './pages/Favorites';
import Main from './pages/Main';
import OneCountry from './pages/OneCountry';
import Search from './pages/Search';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import History from './pages/History';

import {
  MAIN,
  SEARCH,
  SIGNIN,
  SIGNUP,
  ID,
  FAVORITES,
  HISTORY,
} from './utils/const';


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
    path: SIGNIN,
    Component: SignIn,
  },
  {
    path: SIGNUP,
    Component: SignUp,
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
