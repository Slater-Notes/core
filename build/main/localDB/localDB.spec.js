"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const isomorphic_webcrypto_1 = __importDefault(require("isomorphic-webcrypto"));
const _1 = __importDefault(require("."));
const decrypt_1 = __importDefault(require("../crypto/decrypt"));
const encrypt_1 = __importDefault(require("../crypto/encrypt"));
const getKeyFromDerivedPassword_1 = __importDefault(require("../crypto/getKeyFromDerivedPassword"));
const utils_1 = require("../crypto/utils");
globalThis.crypto = isomorphic_webcrypto_1.default;
// - Save unencrypted notes as encrypted
ava_1.default('save/load encrypted buffer data', async (t) => {
    const data = {
        some: 'data',
    };
    const password = '$ome_sTr0ng-p4ssw0rd_1234';
    const randomSalt = utils_1.generateSalt();
    const passwordKeyEncrypt = await getKeyFromDerivedPassword_1.default(password, randomSalt);
    const json = JSON.stringify(data);
    const nonce = isomorphic_webcrypto_1.default.getRandomValues(new Uint8Array(12));
    const encryptedBuffer = await encrypt_1.default(passwordKeyEncrypt, nonce, utils_1.stringToArrayBuffer(json));
    const db = new _1.default(true);
    await db.set('teststorage', encryptedBuffer);
    const passwordKeyFull = await getKeyFromDerivedPassword_1.default(password, randomSalt, true);
    const load = (await db.get('teststorage'));
    const decryptedData = await decrypt_1.default(passwordKeyFull, nonce, load);
    const decryptedJson = utils_1.arrayBufferToString(decryptedData);
    t.deepEqual(data, JSON.parse(decryptedJson));
});
ava_1.default('loading empty key', async (t) => {
    const db = new _1.default(true);
    const result = await db.get('somethingthatdoesnotexist');
    t.deepEqual(result, undefined);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxEQi5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xvY2FsREIvbG9jYWxEQi5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXVCO0FBQ3ZCLGdGQUEwQztBQUMxQyx5Q0FBd0I7QUFDeEIsZ0VBQXdDO0FBQ3hDLGdFQUF3QztBQUN4QyxvR0FBNEU7QUFDNUUsMkNBQXlGO0FBRXpGLFVBQVUsQ0FBQyxNQUFNLEdBQUcsOEJBQU0sQ0FBQztBQUUzQix3Q0FBd0M7QUFDeEMsYUFBSSxDQUFDLGlDQUFpQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNsRCxNQUFNLElBQUksR0FBRztRQUNYLElBQUksRUFBRSxNQUFNO0tBQ2IsQ0FBQztJQUVGLE1BQU0sUUFBUSxHQUFHLDJCQUEyQixDQUFDO0lBQzdDLE1BQU0sVUFBVSxHQUFHLG9CQUFZLEVBQUUsQ0FBQztJQUNsQyxNQUFNLGtCQUFrQixHQUFHLE1BQU0sbUNBQXlCLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2pGLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsTUFBTSxLQUFLLEdBQUcsOEJBQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RCxNQUFNLGVBQWUsR0FBRyxNQUFNLGlCQUFPLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLDJCQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFNUYsTUFBTSxFQUFFLEdBQUcsSUFBSSxVQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUU3QyxNQUFNLGVBQWUsR0FBRyxNQUFNLG1DQUF5QixDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFcEYsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQWdCLENBQUM7SUFDMUQsTUFBTSxhQUFhLEdBQUcsTUFBTSxpQkFBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEUsTUFBTSxhQUFhLEdBQUcsMkJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFekQsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLG1CQUFtQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNwQyxNQUFNLEVBQUUsR0FBRyxJQUFJLFVBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixNQUFNLE1BQU0sR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUV6RCxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNqQyxDQUFDLENBQUMsQ0FBQyJ9