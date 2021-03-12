"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (!globalThis.crypto) {
    globalThis.crypto = require('isomorphic-webcrypto');
}
const utils_1 = require("./utils");
const digest = async (message) => {
    const hashBuffer = await crypto.subtle.digest('SHA-512', utils_1.stringToBuffer(message));
    const hashUint8Array = new Uint8Array(hashBuffer);
    const hashBase64 = utils_1.bufferToBase64(hashUint8Array);
    return hashBase64;
};
exports.default = digest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlnZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NyeXB0by9kaWdlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtJQUN0QixVQUFVLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0NBQ3JEO0FBQ0QsbUNBQXlEO0FBRXpELE1BQU0sTUFBTSxHQUFHLEtBQUssRUFBRSxPQUFlLEVBQUUsRUFBRTtJQUN2QyxNQUFNLFVBQVUsR0FBRyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxzQkFBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbEYsTUFBTSxjQUFjLEdBQUcsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEQsTUFBTSxVQUFVLEdBQUcsc0JBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUVsRCxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDLENBQUM7QUFFRixrQkFBZSxNQUFNLENBQUMifQ==