"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (!globalThis.crypto) {
    globalThis.crypto = require('isomorphic-webcrypto');
}
const utils_1 = require("./utils");
const getKeyFromPassword = async (password) => {
    return await crypto.subtle.importKey('raw', utils_1.stringToBuffer(password), { name: 'PBKDF2' }, false, [
        'deriveKey',
        'deriveBits',
    ]);
};
exports.default = getKeyFromPassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0S2V5RnJvbVBhc3N3b3JkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NyeXB0by9nZXRLZXlGcm9tUGFzc3dvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtJQUN0QixVQUFVLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0NBQ3JEO0FBQ0QsbUNBQXlDO0FBRXpDLE1BQU0sa0JBQWtCLEdBQUcsS0FBSyxFQUFFLFFBQWdCLEVBQUUsRUFBRTtJQUNwRCxPQUFPLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLHNCQUFjLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFO1FBQy9GLFdBQVc7UUFDWCxZQUFZO0tBQ2IsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsa0JBQWtCLENBQUMifQ==