import crypto from 'isomorphic-webcrypto';
import { encode } from './utils';

const getKeyFromPassword = async (password: string) => {
  return await crypto.subtle.importKey('raw', encode(password), { name: 'PBKDF2' }, false, [
    'deriveKey',
    'deriveBits',
  ]);
};

export default getKeyFromPassword;
