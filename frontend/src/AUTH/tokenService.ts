/* eslint-disable no-underscore-dangle */
import { JWTPayload, SignJWT } from 'jose';
import { SECRET_TOKEN, TIMER_TOKEN } from '../utils/const';

const timer = TIMER_TOKEN;
const secret = SECRET_TOKEN;

async function setToken(payload: JWTPayload) {
  console.log('d', secret);
  const alg = 'HS256';
  const jwt = await new SignJWT(payload)
    .setIssuedAt()
    .setProtectedHeader({ alg })
    .setExpirationTime(timer)
    .sign(new TextEncoder().encode(secret));
  return jwt;
}

export default setToken;
