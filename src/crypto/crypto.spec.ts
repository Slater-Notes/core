import test from 'ava';
import decrypt from './decrypt';
import digest from './digest';
import encrypt from './encrypt';
import exportKey from './exportKey';
import getKeyFromDerivedPassword from './getKeyFromDerivedPassword';
import {
  bufferToString,
  base64ToString,
  generateNonce,
  generateSalt,
  stringToBuffer,
  stringToBase64,
  bufferToBase64,
  base64ToBuffer,
} from './utils';
import crypto from 'isomorphic-webcrypto';

globalThis.crypto = crypto;

const PASSWORD = '$ome_sTr0ng-p4ssw0rd_1234';

test('password-based key with salt', async (t) => {
  const randomSalt = generateSalt();
  const passwordKey = await getKeyFromDerivedPassword(PASSWORD, randomSalt);

  t.truthy(passwordKey);
});

test('convert string to Uint8Array and back', (t) => {
  const str = '👨‍💻 Hello, World!';
  const ab = stringToBuffer(str);
  const andBackToString = bufferToString(ab);

  t.truthy(str === andBackToString);
});

test('convert uint8array to base64', (t) => {
  const from = generateSalt();
  const to = bufferToBase64(from);

  t.deepEqual(from.join(''), base64ToBuffer(to).join(''));
});

test('convert string to base64 and back', (t) => {
  const data = '💩 abc123';
  const encoded = stringToBase64(data);
  t.truthy(encoded);

  const decoded = base64ToString(encoded);
  t.deepEqual(decoded, '💩 abc123');
});

test('encrypt/descrypt message', async (t) => {
  const data = 'This is a message! 👈🏽';
  const password = PASSWORD;
  const salt = generateSalt();
  const nonce = generateNonce();

  // Encryption
  const passwordKey = await getKeyFromDerivedPassword(password, salt, true);
  const encryptedData = await encrypt(passwordKey, nonce, stringToBuffer(data));

  // JSON safe data
  const encryptedDataBase64 = bufferToBase64(encryptedData);
  const saltBase64 = bufferToBase64(salt);
  const nonceBase64 = bufferToBase64(nonce);

  // Decryption
  const salt2 = base64ToBuffer(saltBase64);
  const nonce2 = base64ToBuffer(nonceBase64);
  const encryptedData2 = base64ToBuffer(encryptedDataBase64);
  const passwordKey2 = await getKeyFromDerivedPassword(password, salt2, true);
  const decryptedData = await decrypt(passwordKey2, nonce2, encryptedData2);

  const data2 = bufferToString(decryptedData);

  t.is(data, data2);
});

test('encrypt/descrypt JSON data', async (t) => {
  const data = {
    some: 'data',
  };

  const randomSalt = generateSalt();
  const passwordKeyEncrypt = await getKeyFromDerivedPassword(PASSWORD, randomSalt);
  const json = JSON.stringify(data);
  const nonce = generateNonce();
  const encryptedBuffer = await encrypt(passwordKeyEncrypt, nonce, stringToBuffer(json));

  const passwordKeyFull = await getKeyFromDerivedPassword(PASSWORD, randomSalt, true);
  const decryptedData = await decrypt(passwordKeyFull, nonce, encryptedBuffer);
  const decryptedJson = bufferToString(decryptedData);

  t.deepEqual(data, JSON.parse(decryptedJson));
});

test('hash message', async (t) => {
  const message = 'This is a random message to be hashes';
  const hash = await digest(message);

  t.truthy(hash);
});

test('export key', async (t) => {
  const password = 'abc123';
  const salt = generateSalt();

  const passKey = await getKeyFromDerivedPassword(password, salt, false, 1, true);
  const extractedKey = await exportKey(passKey);

  t.truthy(typeof extractedKey === 'string');
});
