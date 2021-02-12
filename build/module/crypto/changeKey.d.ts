declare const changeKey: (oldKey: CryptoKey, oldNonce: Uint8Array, newKey: CryptoKey, newNonce: Uint8Array, payload: ArrayBuffer) => Promise<ArrayBuffer>;
export default changeKey;
