"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (!globalThis.crypto) {
    globalThis.crypto = require('isomorphic-webcrypto');
}
const encrypt = async (key, nonce, payload) => {
    const data = await crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv: nonce,
    }, key, payload);
    return new Uint8Array(data);
};
exports.default = encrypt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jcnlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcnlwdG8vZW5jcnlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO0lBQ3RCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Q0FDckQ7QUFFRCxNQUFNLE9BQU8sR0FBRyxLQUFLLEVBQUUsR0FBYyxFQUFFLEtBQWlCLEVBQUUsT0FBbUIsRUFBRSxFQUFFO0lBQy9FLE1BQU0sSUFBSSxHQUFHLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQ3RDO1FBQ0UsSUFBSSxFQUFFLFNBQVM7UUFDZixFQUFFLEVBQUUsS0FBSztLQUNWLEVBQ0QsR0FBRyxFQUNILE9BQU8sQ0FDUixDQUFDO0lBRUYsT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUM7QUFFRixrQkFBZSxPQUFPLENBQUMifQ==