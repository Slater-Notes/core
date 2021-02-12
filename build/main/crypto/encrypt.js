"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isomorphic_webcrypto_1 = __importDefault(require("isomorphic-webcrypto"));
const encrypt = async (key, nonce, buffer) => {
    return await isomorphic_webcrypto_1.default.subtle.encrypt({
        name: 'AES-GCM',
        iv: nonce,
    }, key, buffer);
};
exports.default = encrypt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jcnlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcnlwdG8vZW5jcnlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdGQUEwQztBQUUxQyxNQUFNLE9BQU8sR0FBRyxLQUFLLEVBQUUsR0FBYyxFQUFFLEtBQWlCLEVBQUUsTUFBbUIsRUFBRSxFQUFFO0lBQy9FLE9BQU8sTUFBTSw4QkFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQ2hDO1FBQ0UsSUFBSSxFQUFFLFNBQVM7UUFDZixFQUFFLEVBQUUsS0FBSztLQUNWLEVBQ0QsR0FBRyxFQUNILE1BQU0sQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsa0JBQWUsT0FBTyxDQUFDIn0=