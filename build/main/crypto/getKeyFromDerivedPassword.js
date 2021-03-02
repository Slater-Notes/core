"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getKeyFromPassword_1 = __importDefault(require("./getKeyFromPassword"));
const getKeyFromDerivedPassword = async (password, salt, fullUsage = false, iterations = 500000, extractable = false) => {
    const passwordKey = await getKeyFromPassword_1.default(password);
    return await crypto.subtle.deriveKey({
        name: 'PBKDF2',
        salt,
        iterations,
        hash: { name: 'SHA-256' },
    }, passwordKey, { name: 'AES-GCM', length: 256 }, extractable, fullUsage ? ['encrypt', 'decrypt'] : ['encrypt']);
};
exports.default = getKeyFromDerivedPassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0S2V5RnJvbURlcml2ZWRQYXNzd29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcnlwdG8vZ2V0S2V5RnJvbURlcml2ZWRQYXNzd29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhFQUFzRDtBQUV0RCxNQUFNLHlCQUF5QixHQUFHLEtBQUssRUFDckMsUUFBZ0IsRUFDaEIsSUFBZ0IsRUFDaEIsU0FBUyxHQUFHLEtBQUssRUFDakIsVUFBVSxHQUFHLE1BQU0sRUFDbkIsV0FBVyxHQUFHLEtBQUssRUFDbkIsRUFBRTtJQUNGLE1BQU0sV0FBVyxHQUFHLE1BQU0sNEJBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFdkQsT0FBTyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUNsQztRQUNFLElBQUksRUFBRSxRQUFRO1FBQ2QsSUFBSTtRQUNKLFVBQVU7UUFDVixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0tBQzFCLEVBQ0QsV0FBVyxFQUNYLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQ2hDLFdBQVcsRUFDWCxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUNqRCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsa0JBQWUseUJBQXlCLENBQUMifQ==