import { getIsAuth, useAppSelector } from '../store';

const UseGetAuth = () => useAppSelector(getIsAuth);

export default UseGetAuth;
