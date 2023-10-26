import { JWTPayload, decodeJwt } from 'jose';
import setToken from './tokenService';

export async function createToken(payload: JWTPayload): Promise<string> {
  const jwt = await setToken(payload);
  return jwt;
}

type DecodeJWT = JWTPayload & { login: string, password: string };
export function decodeToken(jwt: string): DecodeJWT { return decodeJwt(jwt) as DecodeJWT; }
