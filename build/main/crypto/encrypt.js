"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encrypt = async (key, nonce, payload) => {
    const data = await crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv: nonce,
    }, key, payload);
    return new Uint8Array(data);
};
exports.default = encrypt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jcnlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcnlwdG8vZW5jcnlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sT0FBTyxHQUFHLEtBQUssRUFBRSxHQUFjLEVBQUUsS0FBaUIsRUFBRSxPQUFtQixFQUFFLEVBQUU7SUFDL0UsTUFBTSxJQUFJLEdBQUcsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDdEM7UUFDRSxJQUFJLEVBQUUsU0FBUztRQUNmLEVBQUUsRUFBRSxLQUFLO0tBQ1YsRUFDRCxHQUFHLEVBQ0gsT0FBTyxDQUNSLENBQUM7SUFFRixPQUFPLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlCLENBQUMsQ0FBQztBQUVGLGtCQUFlLE9BQU8sQ0FBQyJ9