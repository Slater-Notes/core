if (!globalThis.crypto) {
    globalThis.crypto = require('isomorphic-webcrypto');
}
import { stringToBuffer } from './utils';
const getKeyFromPassword = async (password) => {
    return await crypto.subtle.importKey('raw', stringToBuffer(password), { name: 'PBKDF2' }, false, [
        'deriveKey',
        'deriveBits',
    ]);
};
export default getKeyFromPassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0S2V5RnJvbVBhc3N3b3JkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NyeXB0by9nZXRLZXlGcm9tUGFzc3dvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7SUFDdEIsVUFBVSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztDQUNyRDtBQUNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFekMsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLEVBQUUsUUFBZ0IsRUFBRSxFQUFFO0lBQ3BELE9BQU8sTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRTtRQUMvRixXQUFXO1FBQ1gsWUFBWTtLQUNiLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLGVBQWUsa0JBQWtCLENBQUMifQ==