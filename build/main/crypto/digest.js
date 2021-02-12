"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isomorphic_webcrypto_1 = __importDefault(require("isomorphic-webcrypto"));
const utils_1 = require("./utils");
const digest = async (message) => {
    const hashBuffer = await isomorphic_webcrypto_1.default.subtle.digest('SHA-512', utils_1.encode(message));
    const hashUint8Array = new Uint8Array(hashBuffer);
    const hashBase64 = utils_1.uint8ArrayToBase64(hashUint8Array);
    return hashBase64;
};
exports.default = digest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlnZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NyeXB0by9kaWdlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnRkFBMEM7QUFDMUMsbUNBQXFEO0FBRXJELE1BQU0sTUFBTSxHQUFHLEtBQUssRUFBRSxPQUFlLEVBQUUsRUFBRTtJQUN2QyxNQUFNLFVBQVUsR0FBRyxNQUFNLDhCQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsY0FBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUUsTUFBTSxjQUFjLEdBQUcsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEQsTUFBTSxVQUFVLEdBQUcsMEJBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFdEQsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsTUFBTSxDQUFDIn0=