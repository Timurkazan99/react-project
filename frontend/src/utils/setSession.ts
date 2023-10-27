import { createToken } from '../AUTH';

async function setSession(login: string): Promise<void> {
  const passHash = localStorage.getItem(login);
  const token = await createToken({ login, password: passHash });
  localStorage.setItem('sessionStorage', token);
}

export default setSession;
