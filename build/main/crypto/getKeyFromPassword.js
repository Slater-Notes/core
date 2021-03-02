"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const getKeyFromPassword = async (password) => {
    return await crypto.subtle.importKey('raw', utils_1.encode(password), { name: 'PBKDF2' }, false, [
        'deriveKey',
        'deriveBits',
    ]);
};
exports.default = getKeyFromPassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0S2V5RnJvbVBhc3N3b3JkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NyeXB0by9nZXRLZXlGcm9tUGFzc3dvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBaUM7QUFFakMsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLEVBQUUsUUFBZ0IsRUFBRSxFQUFFO0lBQ3BELE9BQU8sTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsY0FBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRTtRQUN2RixXQUFXO1FBQ1gsWUFBWTtLQUNiLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLGtCQUFlLGtCQUFrQixDQUFDIn0=