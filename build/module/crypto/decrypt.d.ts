declare const decrypt: (key: CryptoKey, nonce: Uint8Array, encryptedBuffer: ArrayBuffer) => Promise<ArrayBuffer>;
export default decrypt;
