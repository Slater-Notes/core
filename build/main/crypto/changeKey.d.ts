declare const changeKey: (oldKey: CryptoKey, oldNonce: Uint8Array, newKey: CryptoKey, newNonce: Uint8Array, payload: Uint8Array) => Promise<Uint8Array>;
export default changeKey;
