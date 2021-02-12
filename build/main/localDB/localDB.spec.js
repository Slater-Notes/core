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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxEQi5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xvY2FsREIvbG9jYWxEQi5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXVCO0FBQ3ZCLGdGQUEwQztBQUMxQyx5Q0FBd0I7QUFDeEIsZ0VBQXdDO0FBQ3hDLGdFQUF3QztBQUN4QyxvR0FBNEU7QUFDNUUsMkNBQXlGO0FBRXpGLHdDQUF3QztBQUN4QyxhQUFJLENBQUMsaUNBQWlDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ2xELE1BQU0sSUFBSSxHQUFHO1FBQ1gsSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDO0lBRUYsTUFBTSxRQUFRLEdBQUcsMkJBQTJCLENBQUM7SUFDN0MsTUFBTSxVQUFVLEdBQUcsb0JBQVksRUFBRSxDQUFDO0lBQ2xDLE1BQU0sa0JBQWtCLEdBQUcsTUFBTSxtQ0FBeUIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDakYsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxNQUFNLEtBQUssR0FBRyw4QkFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pELE1BQU0sZUFBZSxHQUFHLE1BQU0saUJBQU8sQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsMkJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUU1RixNQUFNLEVBQUUsR0FBRyxJQUFJLFVBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBRTdDLE1BQU0sZUFBZSxHQUFHLE1BQU0sbUNBQXlCLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVwRixNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBZ0IsQ0FBQztJQUMxRCxNQUFNLGFBQWEsR0FBRyxNQUFNLGlCQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRSxNQUFNLGFBQWEsR0FBRywyQkFBbUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUV6RCxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxhQUFJLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3BDLE1BQU0sRUFBRSxHQUFHLElBQUksVUFBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLE1BQU0sTUFBTSxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBRXpELENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQyxDQUFDIn0=