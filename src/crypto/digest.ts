if (!globalThis.crypto) {
  globalThis.crypto = require('isomorphic-webcrypto');
}
import { bufferToBase64, stringToBuffer } from './utils';

const digest = async (message: string) => {
  const hashBuffer = await crypto.subtle.digest('SHA-512', stringToBuffer(message));
  const hashUint8Array = new Uint8Array(hashBuffer);
  const hashBase64 = bufferToBase64(hashUint8Array);

  return hashBase64;
};

export default digest;
