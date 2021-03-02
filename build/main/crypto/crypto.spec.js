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
ava_1.default('convert string to ArrayBuffer and back', (t) => {
    const str = 'Hello, World!';
    const ab = utils_1.stringToArrayBuffer(str);
    const andBackToString = utils_1.arrayBufferToString(ab);
    t.truthy(str === andBackToString);
});
ava_1.default('convert uint8array to base64', (t) => {
    const from = utils_1.generateSalt();
    const to = utils_1.uint8ArrayToBase64(from);
    t.deepEqual(from.join(''), utils_1.base64ToUint8Array(to).join(''));
});
ava_1.default('convert string to base64 and back', (t) => {
    const data = 'abc123';
    const encoded = utils_1.stringToBase64(data);
    t.truthy(encoded);
    const decoded = utils_1.base64ToString(encoded);
    t.deepEqual(decoded, 'abc123');
});
ava_1.default('encrypt/descrypt JSON data', async (t) => {
    const data = {
        some: 'data',
    };
    const randomSalt = utils_1.generateSalt();
    const passwordKeyEncrypt = await getKeyFromDerivedPassword_1.default(PASSWORD, randomSalt);
    const json = JSON.stringify(data);
    const nonce = utils_1.generateNonce();
    const encryptedBuffer = await encrypt_1.default(passwordKeyEncrypt, nonce, utils_1.stringToArrayBuffer(json));
    const passwordKeyFull = await getKeyFromDerivedPassword_1.default(PASSWORD, randomSalt, true);
    const decryptedData = await decrypt_1.default(passwordKeyFull, nonce, encryptedBuffer);
    const decryptedJson = utils_1.arrayBufferToString(decryptedData);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J5cHRvLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY3J5cHRvL2NyeXB0by5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXVCO0FBQ3ZCLHdEQUFnQztBQUNoQyxzREFBOEI7QUFDOUIsd0RBQWdDO0FBQ2hDLDREQUFvQztBQUNwQyw0RkFBb0U7QUFDcEUsbUNBU2lCO0FBQ2pCLGdGQUEwQztBQUUxQyxVQUFVLENBQUMsTUFBTSxHQUFHLDhCQUFNLENBQUM7QUFFM0IsTUFBTSxRQUFRLEdBQUcsMkJBQTJCLENBQUM7QUFFN0MsYUFBSSxDQUFDLDhCQUE4QixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUMvQyxNQUFNLFVBQVUsR0FBRyxvQkFBWSxFQUFFLENBQUM7SUFDbEMsTUFBTSxXQUFXLEdBQUcsTUFBTSxtQ0FBeUIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFMUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN4QixDQUFDLENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQyx3Q0FBd0MsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ25ELE1BQU0sR0FBRyxHQUFHLGVBQWUsQ0FBQztJQUM1QixNQUFNLEVBQUUsR0FBRywyQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxNQUFNLGVBQWUsR0FBRywyQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVoRCxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxlQUFlLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3pDLE1BQU0sSUFBSSxHQUFHLG9CQUFZLEVBQUUsQ0FBQztJQUM1QixNQUFNLEVBQUUsR0FBRywwQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVw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