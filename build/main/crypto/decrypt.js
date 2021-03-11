"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isomorphic_webcrypto_1 = __importDefault(require("isomorphic-webcrypto"));
const decrypt = async (key, nonce, payload) => {
    const data = await isomorphic_webcrypto_1.default.subtle.decrypt({
        name: 'AES-GCM',
        iv: nonce,
    }, key, payload);
    return new Uint8Array(data);
};
exports.default = decrypt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjcnlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcnlwdG8vZGVjcnlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdGQUEwQztBQUUxQyxNQUFNLE9BQU8sR0FBRyxLQUFLLEVBQUUsR0FBYyxFQUFFLEtBQWlCLEVBQUUsT0FBbUIsRUFBRSxFQUFFO0lBQy9FLE1BQU0sSUFBSSxHQUFHLE1BQU0sOEJBQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUN0QztRQUNFLElBQUksRUFBRSxTQUFTO1FBQ2YsRUFBRSxFQUFFLEtBQUs7S0FDVixFQUNELEdBQUcsRUFDSCxPQUFPLENBQ1IsQ0FBQztJQUVGLE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsT0FBTyxDQUFDIn0=