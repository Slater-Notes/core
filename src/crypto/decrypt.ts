const decrypt = async (key: CryptoKey, nonce: Uint8Array, payload: Uint8Array) => {
  const data = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: nonce,
    },
    key,
    payload,
  );

  return new Uint8Array(data);
};

export default decrypt;
