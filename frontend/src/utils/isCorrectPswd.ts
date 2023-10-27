import bcrypt from 'bcryptjs-react';

async function isCorrectPswd(login: string, password: string): Promise<boolean> {
  const passHash = localStorage.getItem(login);
  if (!passHash) {
    return false;
  }
  const result = await bcrypt.compare(password, passHash);
  return result;
}

export default isCorrectPswd;
