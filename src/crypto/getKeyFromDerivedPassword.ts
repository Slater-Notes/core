import crypto from 'isomorphic-webcrypto';
import getKeyFromPassword from './getKeyFromPassword';

const getKeyFromDerivedPassword = async (
  password: string,
  salt: Uint8Array,
  fullUsage = false,
  iterations = 500000,
  extractable = false,
) => {
  const passwordKey = await getKeyFromPassword(password);

  return await crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations,
      hash: { name: 'SHA-256' },
    },
    passwordKey,
    { name: 'AES-GCM', length: 256 },
    extractable,
    fullUsage ? ['encrypt', 'decrypt'] : ['encrypt'],
  );
};

export default getKeyFromDerivedPassword;
