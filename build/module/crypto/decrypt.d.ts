declare const decrypt: (key: CryptoKey, nonce: Uint8Array, payload: Uint8Array) => Promise<Uint8Array>;
export default decrypt;
