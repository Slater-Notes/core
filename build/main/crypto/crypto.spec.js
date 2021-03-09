"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const decrypt_1 = __importDefault(require("./decrypt"));
const digest_1 = __importDefault(require("./digest"));
const encrypt_1 = __importDefault(require("./encrypt"));
const exportKey_1 = __importDefault(require("./exportKey"));
const getKeyFromDerivedPassword_1 = __importDefault(require("./getKeyFromDerivedPassword"));
const utils_1 = require("./utils");
const isomorphic_webcrypto_1 = __importDefault(require("isomorphic-webcrypto"));
globalThis.crypto = isomorphic_webcrypto_1.default;
const PASSWORD = '$ome_sTr0ng-p4ssw0rd_1234';
ava_1.default('password-based key with salt', async (t) => {
    const randomSalt = utils_1.generateSalt();
    const passwordKey = await getKeyFromDerivedPassword_1.default(PASSWORD, randomSalt);
    t.truthy(passwordKey);
});
ava_1.default('convert string to Uint8Array and back', (t) => {
    const str = '👨‍💻 Hello, World!';
    const ab = utils_1.stringToBuffer(str);
    const andBackToString = utils_1.bufferToString(ab);
    t.truthy(str === andBackToString);
});
ava_1.default('convert uint8array to base64', (t) => {
    const from = utils_1.generateSalt();
    const to = utils_1.bufferToBase64(from);
    t.deepEqual(from.join(''), utils_1.base64ToBuffer(to).join(''));
});
ava_1.default('convert string to base64 and back', (t) => {
    const data = '💩 abc123';
    const encoded = utils_1.stringToBase64(data);
    t.truthy(encoded);
    const decoded = utils_1.base64ToString(encoded);
    t.deepEqual(decoded, '💩 abc123');
});
ava_1.default('encrypt/descrypt message', async (t) => {
    const data = 'This is a message! 👈🏽';
    const password = PASSWORD;
    const salt = utils_1.generateSalt();
    const nonce = utils_1.generateNonce();
    // Encryption
    const passwordKey = await getKeyFromDerivedPassword_1.default(password, salt, true);
    const encryptedData = await encrypt_1.default(passwordKey, nonce, utils_1.stringToBuffer(data));
    // JSON safe data
    const encryptedDataBase64 = utils_1.bufferToBase64(encryptedData);
    const saltBase64 = utils_1.bufferToBase64(salt);
    const nonceBase64 = utils_1.bufferToBase64(nonce);
    // Decryption
    const salt2 = utils_1.base64ToBuffer(saltBase64);
    const nonce2 = utils_1.base64ToBuffer(nonceBase64);
    const encryptedData2 = utils_1.base64ToBuffer(encryptedDataBase64);
    const passwordKey2 = await getKeyFromDerivedPassword_1.default(password, salt2, true);
    const decryptedData = await decrypt_1.default(passwordKey2, nonce2, encryptedData2);
    const data2 = utils_1.bufferToString(decryptedData);
    t.is(data, data2);
});
ava_1.default('encrypt/descrypt JSON data', async (t) => {
    const data = {
        some: 'data',
    };
    const randomSalt = utils_1.generateSalt();
    const passwordKeyEncrypt = await getKeyFromDerivedPassword_1.default(PASSWORD, randomSalt);
    const json = JSON.stringify(data);
    const nonce = utils_1.generateNonce();
    const encryptedBuffer = await encrypt_1.default(passwordKeyEncrypt, nonce, utils_1.stringToBuffer(json));
    const passwordKeyFull = await getKeyFromDerivedPassword_1.default(PASSWORD, randomSalt, true);
    const decryptedData = await decrypt_1.default(passwordKeyFull, nonce, encryptedBuffer);
    const decryptedJson = utils_1.bufferToString(decryptedData);
    t.deepEqual(data, JSON.parse(decryptedJson));
});
ava_1.default('hash message', async (t) => {
    const message = 'This is a random message to be hashes';
    const hash = await digest_1.default(message);
    t.truthy(hash);
});
ava_1.default('export key', async (t) => {
    const password = 'abc123';
    const salt = utils_1.generateSalt();
    const passKey = await getKeyFromDerivedPassword_1.default(password, salt, false, 1, true);
    const extractedKey = await exportKey_1.default(passKey);
    t.truthy(typeof extractedKey === 'string');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J5cHRvLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY3J5cHRvL2NyeXB0by5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXVCO0FBQ3ZCLHdEQUFnQztBQUNoQyxzREFBOEI7QUFDOUIsd0RBQWdDO0FBQ2hDLDREQUFvQztBQUNwQyw0RkFBb0U7QUFDcEUsbUNBU2lCO0FBQ2pCLGdGQUEwQztBQUUxQyxVQUFVLENBQUMsTUFBTSxHQUFHLDhCQUFNLENBQUM7QUFFM0IsTUFBTSxRQUFRLEdBQUcsMkJBQTJCLENBQUM7QUFFN0MsYUFBSSxDQUFDLDhCQUE4QixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUMvQyxNQUFNLFVBQVUsR0FBRyxvQkFBWSxFQUFFLENBQUM7SUFDbEMsTUFBTSxXQUFXLEdBQUcsTUFBTSxtQ0FBeUIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFMUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN4QixDQUFDLENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQyx1Q0FBdUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ2xELE1BQU0sR0FBRyxHQUFHLHFCQUFxQixDQUFDO0lBQ2xDLE1BQU0sRUFBRSxHQUFHLHNCQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsTUFBTSxlQUFlLEdBQUcsc0JBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUUzQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxlQUFlLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3pDLE1BQU0sSUFBSSxHQUFHLG9CQUFZLEVBQUUsQ0FBQztJQUM1QixNQUFNLEVBQUUsR0FBRyxzQkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWhD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