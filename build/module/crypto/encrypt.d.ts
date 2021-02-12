declare const encrypt: (key: CryptoKey, nonce: Uint8Array, buffer: ArrayBuffer) => Promise<ArrayBuffer>;
export default encrypt;
