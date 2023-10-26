/* eslint-disable no-underscore-dangle */
import * as jose from 'jose';
import { JWTPayload } from 'jose';
import { SECRET_TOKEN, TIMER_TOKEN } from '../utils/const';

class TokenService {
  _secret: string;

  _time: string;

  constructor(secret: string, time: string) {
    this._secret = secret;
    this._time = time;
  }

  async setToken(payload: JWTPayload) {
    const alg = 'HS256';
    const jwt = await new jose.SignJWT(payload)
      .setIssuedAt()
      .setProtectedHeader({ alg })
      .setExpirationTime(this._time)
      .sign(new TextEncoder().encode(this._secret));
    return jwt;
  }
}

export default new TokenService(SECRET_TOKEN, TIMER_TOKEN);
