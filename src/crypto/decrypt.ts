const decrypt = async (key: CryptoKey, nonce: Uint8Array, encryptedBuffer: ArrayBuffer) => {
  const decryptedBuffer = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: nonce,
    },
    key,
    encryptedBuffer,
  );

  return decryptedBuffer;
};

export default decrypt;
