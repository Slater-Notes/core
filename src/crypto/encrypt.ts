const encrypt = async (key: CryptoKey, nonce: Uint8Array, buffer: ArrayBuffer) => {
  return await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: nonce,
    },
    key,
    buffer,
  );
};

export default encrypt;
