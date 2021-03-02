import test from 'ava';
import crypto from 'isomorphic-webcrypto';
import localDB from '.';
import decrypt from '../crypto/decrypt';
import encrypt from '../crypto/encrypt';
import getKeyFromDerivedPassword from '../crypto/getKeyFromDerivedPassword';
import { arrayBufferToString, generateSalt, stringToArrayBuffer } from '../crypto/utils';

globalThis.crypto = crypto;

// - Save unencrypted notes as encrypted
test('save/load encrypted buffer data', async (t) => {
  const data = {
    some: 'data',
  };

  const password = '$ome_sTr0ng-p4ssw0rd_1234';
  const randomSalt = generateSalt();
  const passwordKeyEncrypt = await getKeyFromDerivedPassword(password, randomSalt);
  const json = JSON.stringify(data);
  const nonce = crypto.getRandomValues(new Uint8Array(12));
  const encryptedBuffer = await encrypt(passwordKeyEncrypt, nonce, stringToArrayBuffer(json));

  const db = new localDB(true);
  await db.set('teststorage', encryptedBuffer);

  const passwordKeyFull = await getKeyFromDerivedPassword(password, randomSalt, true);

  const load = (await db.get('teststorage')) as ArrayBuffer;
  const decryptedData = await decrypt(passwordKeyFull, nonce, load);
  const decryptedJson = arrayBufferToString(decryptedData);

  t.deepEqual(data, JSON.parse(decryptedJson));
});

test('loading empty key', async (t) => {
  const db = new localDB(true);
  const result = await db.get('somethingthatdoesnotexist');

  t.deepEqual(result, undefined);
});
