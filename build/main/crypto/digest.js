"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isomorphic_webcrypto_1 = __importDefault(require("isomorphic-webcrypto"));
const utils_1 = require("./utils");
const digest = async (message) => {
    const hashBuffer = await isomorphic_webcrypto_1.default.subtle.digest('SHA-512', utils_1.stringToBuffer(message));
    const hashUint8Array = new Uint8Array(hashBuffer);
    const hashBase64 = utils_1.bufferToBase64(hashUint8Array);
    return hashBase64;
};
exports.default = digest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlnZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NyeXB0by9kaWdlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnRkFBMEM7QUFDMUMsbUNBQXlEO0FBRXpELE1BQU0sTUFBTSxHQUFHLEtBQUssRUFBRSxPQUFlLEVBQUUsRUFBRTtJQUN2QyxNQUFNLFVBQVUsR0FBRyxNQUFNLDhCQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsc0JBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLE1BQU0sY0FBYyxHQUFHLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xELE1BQU0sVUFBVSxHQUFHLHNCQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFbEQsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsTUFBTSxDQUFDIn0=