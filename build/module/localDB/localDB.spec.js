import test from 'ava';
if (!globalThis.crypto) {
    globalThis.crypto = require('isomorphic-webcrypto');
}
import localDB from '.';
import decrypt from '../crypto/decrypt';
import encrypt from '../crypto/encrypt';
import getKeyFromDerivedPassword from '../crypto/getKeyFromDerivedPassword';
import { bufferToString, generateSalt, stringToBuffer } from '../crypto/utils';
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
    const encryptedBuffer = await encrypt(passwordKeyEncrypt, nonce, stringToBuffer(json));
    const db = new localDB(true);
    await db.set('teststorage', encryptedBuffer);
    const passwordKeyFull = await getKeyFromDerivedPassword(password, randomSalt, true);
    const load = (await db.get('teststorage'));
    const decryptedData = await decrypt(passwordKeyFull, nonce, load);
    const decryptedJson = bufferToString(decryptedData);
    t.deepEqual(data, JSON.parse(decryptedJson));
});
test('loading empty key', async (t) => {
    const db = new localDB(true);
    const result = await db.get('somethingthatdoesnotexist');
    t.deepEqual(result, undefined);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxEQi5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xvY2FsREIvbG9jYWxEQi5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sSUFBSSxNQUFNLEtBQUssQ0FBQztBQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtJQUN0QixVQUFVLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0NBQ3JEO0FBQ0QsT0FBTyxPQUFPLE1BQU0sR0FBRyxDQUFDO0FBQ3hCLE9BQU8sT0FBTyxNQUFNLG1CQUFtQixDQUFDO0FBQ3hDLE9BQU8sT0FBTyxNQUFNLG1CQUFtQixDQUFDO0FBQ3hDLE9BQU8seUJBQXlCLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0Usd0NBQXdDO0FBQ3hDLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDbEQsTUFBTSxJQUFJLEdBQUc7UUFDWCxJQUFJLEVBQUUsTUFBTTtLQUNiLENBQUM7SUFFRixNQUFNLFFBQVEsR0FBRywyQkFBMkIsQ0FBQztJQUM3QyxNQUFNLFVBQVUsR0FBRyxZQUFZLEVBQUUsQ0FBQztJQUNsQyxNQUFNLGtCQUFrQixHQUFHLE1BQU0seUJBQXlCLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2pGLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pELE1BQU0sZUFBZSxHQUFHLE1BQU0sT0FBTyxDQUFDLGtCQUFrQixFQUFFLEtBQUssRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUV2RixNQUFNLEVBQUUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBRTdDLE1BQU0sZUFBZSxHQUFHLE1BQU0seUJBQXlCLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVwRixNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBZSxDQUFDO0lBQ3pELE1BQU0sYUFBYSxHQUFHLE1BQU0sT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEUsTUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRXBELENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDcEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFFekQsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDLENBQUMifQ==