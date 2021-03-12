"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
if (!globalThis.crypto) {
    globalThis.crypto = require('isomorphic-webcrypto');
}
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
    const nonce = crypto.getRandomValues(new Uint8Array(12));
    const encryptedBuffer = await encrypt_1.default(passwordKeyEncrypt, nonce, utils_1.stringToBuffer(json));
    const db = new _1.default(true);
    await db.set('teststorage', encryptedBuffer);
    const passwordKeyFull = await getKeyFromDerivedPassword_1.default(password, randomSalt, true);
    const load = (await db.get('teststorage'));
    const decryptedData = await decrypt_1.default(passwordKeyFull, nonce, load);
    const decryptedJson = utils_1.bufferToString(decryptedData);
    t.deepEqual(data, JSON.parse(decryptedJson));
});
ava_1.default('loading empty key', async (t) => {
    const db = new _1.default(true);
    const result = await db.get('somethingthatdoesnotexist');
    t.deepEqual(result, undefined);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxEQi5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xvY2FsREIvbG9jYWxEQi5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXVCO0FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO0lBQ3RCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Q0FDckQ7QUFDRCx5Q0FBd0I7QUFDeEIsZ0VBQXdDO0FBQ3hDLGdFQUF3QztBQUN4QyxvR0FBNEU7QUFDNUUsMkNBQStFO0FBRS9FLHdDQUF3QztBQUN4QyxhQUFJLENBQUMsaUNBQWlDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ2xELE1BQU0sSUFBSSxHQUFHO1FBQ1gsSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDO0lBRUYsTUFBTSxRQUFRLEdBQUcsMkJBQTJCLENBQUM7SUFDN0MsTUFBTSxVQUFVLEdBQUcsb0JBQVksRUFBRSxDQUFDO0lBQ2xDLE1BQU0sa0JBQWtCLEdBQUcsTUFBTSxtQ0FBeUIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDakYsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekQsTUFBTSxlQUFlLEdBQUcsTUFBTSxpQkFBTyxDQUFDLGtCQUFrQixFQUFFLEtBQUssRUFBRSxzQkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFdkYsTUFBTSxFQUFFLEdBQUcsSUFBSSxVQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUU3QyxNQUFNLGVBQWUsR0FBRyxNQUFNLG1DQUF5QixDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFcEYsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQWUsQ0FBQztJQUN6RCxNQUFNLGFBQWEsR0FBRyxNQUFNLGlCQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRSxNQUFNLGFBQWEsR0FBRyxzQkFBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRXBELENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDcEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxVQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFFekQsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDLENBQUMifQ==