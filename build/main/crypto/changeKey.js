"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const decrypt_1 = __importDefault(require("./decrypt"));
const encrypt_1 = __importDefault(require("./encrypt"));
const changeKey = async (oldKey, oldNonce, newKey, newNonce, payload) => {
    const decryptedBuffer = await decrypt_1.default(oldKey, oldNonce, payload);
    return await encrypt_1.default(newKey, newNonce, decryptedBuffer);
};
exports.default = changeKey;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlS2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NyeXB0by9jaGFuZ2VLZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBZ0M7QUFDaEMsd0RBQWdDO0FBRWhDLE1BQU0sU0FBUyxHQUFHLEtBQUssRUFDckIsTUFBaUIsRUFDakIsUUFBb0IsRUFDcEIsTUFBaUIsRUFDakIsUUFBb0IsRUFDcEIsT0FBb0IsRUFDcEIsRUFBRTtJQUNGLE1BQU0sZUFBZSxHQUFHLE1BQU0saUJBQU8sQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pFLE9BQU8sTUFBTSxpQkFBTyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDMUQsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsU0FBUyxDQUFDIn0=