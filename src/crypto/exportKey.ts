import crypto from 'isomorphic-webcrypto';
import { arrayBufferToString, stringToBase64 } from './utils';

const exportKey = async (key: CryptoKey) => {
  const rawKey = await crypto.subtle.exportKey('raw', key);
  const rawKeyString = arrayBufferToString(rawKey);
  return stringToBase64(rawKeyString);
};

export default exportKey;
