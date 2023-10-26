/* eslint-disable no-underscore-dangle */
import { JWTPayload, SignJWT } from 'jose';
import { SECRET_TOKEN, TIMER_TOKEN } from '../utils/const';

async function setToken(payload: JWTPayload) {
  const alg = 'HS256';
  const jwt = await new SignJWT(payload)
    .setIssuedAt()
    .setProtectedHeader({ alg })
    .setExpirationTime(TIMER_TOKEN)
    .sign(new TextEncoder().encode(SECRET_TOKEN));
  return jwt;
}

export default setToken;
