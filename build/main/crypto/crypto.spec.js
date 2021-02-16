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
ava_1.default('export key', async (t) => {
    const password = 'abc123';
    const salt = utils_1.generateSalt();
    const passKey = await getKeyFromDerivedPassword_1.default(password, salt, false, 1, true);
    const extractedKey = await exportKey_1.default(passKey);
    t.truthy(typeof extractedKey === 'string');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J5cHRvLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY3J5cHRvL2NyeXB0by5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXVCO0FBQ3ZCLHdEQUFnQztBQUNoQyxzREFBOEI7QUFDOUIsd0RBQWdDO0FBQ2hDLDREQUFvQztBQUNwQyw0RkFBb0U7QUFDcEUsbUNBT2lCO0FBRWpCLE1BQU0sUUFBUSxHQUFHLDJCQUEyQixDQUFDO0FBRTdDLGFBQUksQ0FBQyw4QkFBOEIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDL0MsTUFBTSxVQUFVLEdBQUcsb0JBQVksRUFBRSxDQUFDO0lBQ2xDLE1BQU0sV0FBVyxHQUFHLE1BQU0sbUNBQXlCLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRTFFLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDeEIsQ0FBQyxDQUFDLENBQUM7QUFFSCxhQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUN6QyxNQUFNLElBQUksR0FBRyxvQkFBWSxFQUFFLENBQUM7SUFDNUIsTUFBTSxFQUFFLEdBQUcsMEJBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFcEMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsMEJBQWtCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQyw0QkFBNEIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDN0MsTUFBTSxJQUFJLEdBQUc7UUFDWCxJQUFJLEVBQUUsTUFBTTtLQUNiLENBQUM7SUFFRixNQUFNLFVBQVUsR0FBRyxvQkFBWSxFQUFFLENBQUM7SUFDbEMsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLG1DQUF5QixDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNqRixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sS0FBSyxHQUFHLHFCQUFhLEVBQUUsQ0FBQztJQUM5QixNQUFNLGVBQWUsR0FBRyxNQUFNLGlCQUFPLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLDJCQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFNUYsTUFBTSxlQUFlLEdBQUcsTUFBTSxtQ0FBeUIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BGLE1BQU0sYUFBYSxHQUFHLE1BQU0saUJBQU8sQ0FBQyxlQUFlLEVBQUUsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzdFLE1BQU0sYUFBYSxHQUFHLDJCQUFtQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRXpELENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQy9CLE1BQU0sT0FBTyxHQUFHLHVDQUF1QyxDQUFDO0lBQ3hELE1BQU0sSUFBSSxHQUFHLE1BQU0sZ0JBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVuQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pCLENBQUMsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDN0IsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLE1BQU0sSUFBSSxHQUFHLG9CQUFZLEVBQUUsQ0FBQztJQUU1QixNQUFNLE9BQU8sR0FBRyxNQUFNLG1DQUF5QixDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRixNQUFNLFlBQVksR0FBRyxNQUFNLG1CQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFOUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLFlBQVksS0FBSyxRQUFRLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUMsQ0FBQyJ9