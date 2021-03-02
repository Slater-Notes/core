"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decrypt = async (key, nonce, encryptedBuffer) => {
    const decryptedBuffer = await crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv: nonce,
    }, key, encryptedBuffer);
    return decryptedBuffer;
};
exports.default = decrypt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjcnlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcnlwdG8vZGVjcnlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sT0FBTyxHQUFHLEtBQUssRUFBRSxHQUFjLEVBQUUsS0FBaUIsRUFBRSxlQUE0QixFQUFFLEVBQUU7SUFDeEYsTUFBTSxlQUFlLEdBQUcsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDakQ7UUFDRSxJQUFJLEVBQUUsU0FBUztRQUNmLEVBQUUsRUFBRSxLQUFLO0tBQ1YsRUFDRCxHQUFHLEVBQ0gsZUFBZSxDQUNoQixDQUFDO0lBRUYsT0FBTyxlQUFlLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsT0FBTyxDQUFDIn0=