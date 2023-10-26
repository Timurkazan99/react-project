import { JWTPayload } from 'jose';
import * as jose from 'jose';
import tokenService from './tokenService';

export async function createToken(payload: JWTPayload): Promise<string> {
  const jwt = await tokenService.setToken(payload);
  return jwt;
}

type DecodJWT = JWTPayload & { login: string, password: string };
export function decodeToken(jwt: string): DecodJWT { return jose.decodeJwt(jwt) as DecodJWT; }
