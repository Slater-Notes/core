"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const decrypt_1 = __importDefault(require("./decrypt"));
const digest_1 = __importDefault(require("./digest"));
const encrypt_1 = __importDefault(require("./encrypt"));
const getKeyFromDerivedPassword_1 = __importDefault(require("./getKeyFromDerivedPassword"));
const utils_1 = require("./utils");
const PASSWORD = '$ome_sTr0ng-p4ssw0rd_1234';
ava_1.default('password-based key with salt', async (t) => {
    const randomSalt = utils_1.generateSalt();
    const passwordKey = await getKeyFromDerivedPassword_1.default(PASSWORD, randomSalt);
    t.truthy(passwordKey);
});
ava_1.default('convert uint8array to base64', (t) => {
    const from = utils_1.generateSalt();
    const to = utils_1.uint8ArrayToBase64(from);
    t.deepEqual(from, utils_1.base64ToUint8Array(to));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J5cHRvLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY3J5cHRvL2NyeXB0by5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXVCO0FBQ3ZCLHdEQUFnQztBQUNoQyxzREFBOEI7QUFDOUIsd0RBQWdDO0FBQ2hDLDRGQUFvRTtBQUNwRSxtQ0FPaUI7QUFFakIsTUFBTSxRQUFRLEdBQUcsMkJBQTJCLENBQUM7QUFFN0MsYUFBSSxDQUFDLDhCQUE4QixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUMvQyxNQUFNLFVBQVUsR0FBRyxvQkFBWSxFQUFFLENBQUM7SUFDbEMsTUFBTSxXQUFXLEdBQUcsTUFBTSxtQ0FBeUIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFMUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN4QixDQUFDLENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3pDLE1BQU0sSUFBSSxHQUFHLG9CQUFZLEVBQUUsQ0FBQztJQUM1QixNQUFNLEVBQUUsR0FBRywwQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVwQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSwwQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLDRCQUE0QixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUM3QyxNQUFNLElBQUksR0FBRztRQUNYLElBQUksRUFBRSxNQUFNO0tBQ2IsQ0FBQztJQUVGLE1BQU0sVUFBVSxHQUFHLG9CQUFZLEVBQUUsQ0FBQztJQUNsQyxNQUFNLGtCQUFrQixHQUFHLE1BQU0sbUNBQXlCLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2pGLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsTUFBTSxLQUFLLEdBQUcscUJBQWEsRUFBRSxDQUFDO0lBQzlCLE1BQU0sZUFBZSxHQUFHLE1BQU0saUJBQU8sQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsMkJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUU1RixNQUFNLGVBQWUsR0FBRyxNQUFNLG1DQUF5QixDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEYsTUFBTSxhQUFhLEdBQUcsTUFBTSxpQkFBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDN0UsTUFBTSxhQUFhLEdBQUcsMkJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFekQsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDL0IsTUFBTSxPQUFPLEdBQUcsdUNBQXVDLENBQUM7SUFDeEQsTUFBTSxJQUFJLEdBQUcsTUFBTSxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRW5DLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakIsQ0FBQyxDQUFDLENBQUMifQ==