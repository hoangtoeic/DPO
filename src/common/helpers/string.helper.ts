import { randomFillSync } from 'crypto';

export class StringHelper {
  static generatePassword = (
    length = 20,
    wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@',
  ) =>
    Array.from(randomFillSync(new Uint32Array(length)))
      .map((x: number) => wishlist[x % wishlist.length])
      .join('');
}
