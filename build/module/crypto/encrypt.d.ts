declare const encrypt: (key: CryptoKey, nonce: Uint8Array, payload: Uint8Array) => Promise<Uint8Array>;
export default encrypt;
