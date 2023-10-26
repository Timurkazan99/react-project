// eslint-disable-next-line import/no-extraneous-dependencies
import bcrypt from 'bcryptjs-react';
import { createToken } from '../AUTH';

const useRegistration = async (login: string, password: string) => {
  const passHash = await bcrypt.hash(password, 10);
  localStorage.setItem(login, passHash);// сохранение в БД
  const token = await createToken({ login, password: passHash });
  localStorage.setItem('sessionStorage', token);
};

export default useRegistration;
