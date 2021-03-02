"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encrypt = async (key, nonce, buffer) => {
    return await crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv: nonce,
    }, key, buffer);
};
exports.default = encrypt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jcnlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcnlwdG8vZW5jcnlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sT0FBTyxHQUFHLEtBQUssRUFBRSxHQUFjLEVBQUUsS0FBaUIsRUFBRSxNQUFtQixFQUFFLEVBQUU7SUFDL0UsT0FBTyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUNoQztRQUNFLElBQUksRUFBRSxTQUFTO1FBQ2YsRUFBRSxFQUFFLEtBQUs7S0FDVixFQUNELEdBQUcsRUFDSCxNQUFNLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGtCQUFlLE9BQU8sQ0FBQyJ9