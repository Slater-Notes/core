"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (!globalThis.crypto) {
    globalThis.crypto = require('isomorphic-webcrypto');
}
const utils_1 = require("./utils");
const exportKey = async (key) => {
    const rawKey = await crypto.subtle.exportKey('raw', key);
    return utils_1.bufferToBase64(new Uint8Array(rawKey));
};
exports.default = exportKey;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0S2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NyeXB0by9leHBvcnRLZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtJQUN0QixVQUFVLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0NBQ3JEO0FBQ0QsbUNBQXlDO0FBRXpDLE1BQU0sU0FBUyxHQUFHLEtBQUssRUFBRSxHQUFjLEVBQUUsRUFBRTtJQUN6QyxNQUFNLE1BQU0sR0FBRyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN6RCxPQUFPLHNCQUFjLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNoRCxDQUFDLENBQUM7QUFFRixrQkFBZSxTQUFTLENBQUMifQ==