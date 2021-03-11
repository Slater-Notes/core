import crypto from 'isomorphic-webcrypto';
import { stringToBuffer } from './utils';

const getKeyFromPassword = async (password: string) => {
  return await crypto.subtle.importKey('raw', stringToBuffer(password), { name: 'PBKDF2' }, false, [
    'deriveKey',
    'deriveBits',
  ]);
};

export default getKeyFromPassword;
