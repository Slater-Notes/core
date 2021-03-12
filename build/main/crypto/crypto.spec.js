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
if (!globalThis.crypto) {
    globalThis.crypto = require('isomorphic-webcrypto');
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J5cHRvLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY3J5cHRvL2NyeXB0by5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXVCO0FBQ3ZCLHdEQUFnQztBQUNoQyxzREFBOEI7QUFDOUIsd0RBQWdDO0FBQ2hDLDREQUFvQztBQUNwQyw0RkFBb0U7QUFDcEUsbUNBU2lCO0FBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO0lBQ3RCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Q0FDckQ7QUFFRCxNQUFNLFFBQVEsR0FBRywyQkFBMkIsQ0FBQztBQUU3QyxhQUFJLENBQUMsOEJBQThCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQy9DLE1BQU0sVUFBVSxHQUFHLG9CQUFZLEVBQUUsQ0FBQztJQUNsQyxNQUFNLFdBQVcsR0FBRyxNQUFNLG1DQUF5QixDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUUxRSxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3hCLENBQUMsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLHVDQUF1QyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDbEQsTUFBTSxHQUFHLEdBQUcscUJBQXFCLENBQUM7SUFDbEMsTUFBTSxFQUFFLEdBQUcsc0JBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixNQUFNLGVBQWUsR0FBRyxzQkFBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRTNDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLGVBQWUsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDekMsTUFBTSxJQUFJLEdBQUcsb0JBQVksRUFBRSxDQUFDO0lBQzVCLE1B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