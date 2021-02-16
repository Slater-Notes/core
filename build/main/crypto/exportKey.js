"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isomorphic_webcrypto_1 = __importDefault(require("isomorphic-webcrypto"));
const utils_1 = require("./utils");
const exportKey = async (key) => {
    const rawKey = await isomorphic_webcrypto_1.default.subtle.exportKey('raw', key);
    const rawKeyString = utils_1.arrayBufferToString(rawKey);
    return utils_1.stringToBase64(rawKeyString);
};
exports.default = exportKey;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0S2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NyeXB0by9leHBvcnRLZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnRkFBMEM7QUFDMUMsbUNBQThEO0FBRTlELE1BQU0sU0FBUyxHQUFHLEtBQUssRUFBRSxHQUFjLEVBQUUsRUFBRTtJQUN6QyxNQUFNLE1BQU0sR0FBRyxNQUFNLDhCQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekQsTUFBTSxZQUFZLEdBQUcsMkJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakQsT0FBTyxzQkFBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQztBQUVGLGtCQUFlLFNBQVMsQ0FBQyJ9