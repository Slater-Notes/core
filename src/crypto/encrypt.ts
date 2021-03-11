import crypto from 'isomorphic-webcrypto';

const encrypt = async (key: CryptoKey, nonce: Uint8Array, payload: Uint8Array) => {
  const data = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: nonce,
    },
    key,
    payload,
  );

  return new Uint8Array(data);
};

export default encrypt;
