import decrypt from './decrypt';
import encrypt from './encrypt';

const changeKey = async (
  oldKey: CryptoKey,
  oldNonce: Uint8Array,
  newKey: CryptoKey,
  newNonce: Uint8Array,
  payload: Uint8Array,
) => {
  const decryptedBuffer = await decrypt(oldKey, oldNonce, payload);
  return await encrypt(newKey, newNonce, decryptedBuffer);
};

export default changeKey;
