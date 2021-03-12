if (!globalThis.crypto) {
  globalThis.crypto = require('isomorphic-webcrypto');
}
import { bufferToBase64 } from './utils';

const exportKey = async (key: CryptoKey) => {
  const rawKey = await crypto.subtle.exportKey('raw', key);
  return bufferToBase64(new Uint8Array(rawKey));
};

export default exportKey;
