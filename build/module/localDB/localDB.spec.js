import test from 'ava';
import crypto from 'isomorphic-webcrypto';
import localDB from '.';
import decrypt from '../crypto/decrypt';
import encrypt from '../crypto/encrypt';
import getKeyFromDerivedPassword from '../crypto/getKeyFromDerivedPassword';
import { bufferToString, generateSalt, stringToBuffer } from '../crypto/utils';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxEQi5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xvY2FsREIvbG9jYWxEQi5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sSUFBSSxNQUFNLEtBQUssQ0FBQztBQUN2QixPQUFPLE1BQU0sTUFBTSxzQkFBc0IsQ0FBQztBQUMxQyxPQUFPLE9BQU8sTUFBTSxHQUFHLENBQUM7QUFDeEIsT0FBTyxPQUFPLE1BQU0sbUJBQW1CLENBQUM7QUFDeEMsT0FBTyxPQUFPLE1BQU0sbUJBQW1CLENBQUM7QUFDeEMsT0FBTyx5QkFBeUIsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvRSxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUUzQix3Q0FBd0M7QUFDeEMsSUFBSSxDQUFDLGlDQUFpQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNsRCxNQUFNLElBQUksR0FBRztRQUNYLElBQUksRUFBRSxNQUFNO0tBQ2IsQ0FBQztJQUVGLE1BQU0sUUFBUSxHQUFHLDJCQUEyQixDQUFDO0lBQzdDLE1BQU0sVUFBVSxHQUFHLFlBQVksRUFBRSxDQUFDO0lBQ2xDLE1BQU0sa0JBQWtCLEdBQUcsTUFBTSx5QkFBeUIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDakYsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekQsTUFBTSxlQUFlLEdBQUcsTUFBTSxPQUFPLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRXZGLE1BQU0sRUFBRSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFFN0MsTUFBTSxlQUFlLEdBQUcsTUFBTSx5QkFBeUIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXBGLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFlLENBQUM7SUFDekQsTUFBTSxhQUFhLEdBQUcsTUFBTSxPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRSxNQUFNLGFBQWEsR0FBRyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFcEQsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNwQyxNQUFNLEVBQUUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixNQUFNLE1BQU0sR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUV6RCxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNqQyxDQUFDLENBQUMsQ0FBQyJ9