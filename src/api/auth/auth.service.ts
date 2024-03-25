import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async userSignIn(
    email: string,
    password: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    return {
      accessToken: '123',
      refreshToken: '12345',
    };
  }
}
