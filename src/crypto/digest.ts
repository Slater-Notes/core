import { encode, uint8ArrayToBase64 } from './utils';

const digest = async (message: string) => {
  const hashBuffer = await crypto.subtle.digest('SHA-512', encode(message));
  const hashUint8Array = new Uint8Array(hashBuffer);
  const hashBase64 = uint8ArrayToBase64(hashUint8Array);

  return hashBase64;
};

export default digest;
