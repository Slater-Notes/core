"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isomorphic_webcrypto_1 = __importDefault(require("isomorphic-webcrypto"));
const getKeyFromPassword_1 = __importDefault(require("./getKeyFromPassword"));
const getKeyFromDerivedPassword = async (password, salt, fullUsage = false, iterations = 500000, extractable = false) => {
    const passwordKey = await getKeyFromPassword_1.default(password);
    return await isomorphic_webcrypto_1.default.subtle.deriveKey({
        name: 'PBKDF2',
        salt,
        iterations,
        hash: { name: 'SHA-256' },
    }, passwordKey, { name: 'AES-GCM', length: 256 }, extractable, fullUsage ? ['encrypt', 'decrypt'] : ['encrypt']);
};
exports.default = getKeyFromDerivedPassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0S2V5RnJvbURlcml2ZWRQYXNzd29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcnlwdG8vZ2V0S2V5RnJvbURlcml2ZWRQYXNzd29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdGQUEwQztBQUMxQyw4RUFBc0Q7QUFFdEQsTUFBTSx5QkFBeUIsR0FBRyxLQUFLLEVBQ3JDLFFBQWdCLEVBQ2hCLElBQWdCLEVBQ2hCLFNBQVMsR0FBRyxLQUFLLEVBQ2pCLFVBQVUsR0FBRyxNQUFNLEVBQ25CLFdBQVcsR0FBRyxLQUFLLEVBQ25CLEVBQUU7SUFDRixNQUFNLFdBQVcsR0FBRyxNQUFNLDRCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXZELE9BQU8sTUFBTSw4QkFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQ2xDO1FBQ0UsSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJO1FBQ0osVUFBVTtRQUNWLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7S0FDMUIsRUFDRCxXQUFXLEVBQ1gsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFDaEMsV0FBVyxFQUNYLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQ2pELENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixrQkFBZSx5QkFBeUIsQ0FBQyJ9