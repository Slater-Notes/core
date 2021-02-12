"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isomorphic_webcrypto_1 = __importDefault(require("isomorphic-webcrypto"));
const decrypt = async (key, nonce, encryptedBuffer) => {
    const decryptedBuffer = await isomorphic_webcrypto_1.default.subtle.decrypt({
        name: 'AES-GCM',
        iv: nonce,
    }, key, encryptedBuffer);
    return decryptedBuffer;
};
exports.default = decrypt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjcnlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcnlwdG8vZGVjcnlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdGQUEwQztBQUUxQyxNQUFNLE9BQU8sR0FBRyxLQUFLLEVBQUUsR0FBYyxFQUFFLEtBQWlCLEVBQUUsZUFBNEIsRUFBRSxFQUFFO0lBQ3hGLE1BQU0sZUFBZSxHQUFHLE1BQU0sOEJBQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUNqRDtRQUNFLElBQUksRUFBRSxTQUFTO1FBQ2YsRUFBRSxFQUFFLEtBQUs7S0FDVixFQUNELEdBQUcsRUFDSCxlQUFlLENBQ2hCLENBQUM7SUFFRixPQUFPLGVBQWUsQ0FBQztBQUN6QixDQUFDLENBQUM7QUFFRixrQkFBZSxPQUFPLENBQUMifQ==