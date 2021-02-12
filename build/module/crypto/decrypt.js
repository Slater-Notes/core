import crypto from 'isomorphic-webcrypto';
const decrypt = async (key, nonce, encryptedBuffer) => {
    const decryptedBuffer = await crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv: nonce,
    }, key, encryptedBuffer);
    return decryptedBuffer;
};
export default decrypt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjcnlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcnlwdG8vZGVjcnlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxzQkFBc0IsQ0FBQztBQUUxQyxNQUFNLE9BQU8sR0FBRyxLQUFLLEVBQUUsR0FBYyxFQUFFLEtBQWlCLEVBQUUsZUFBNEIsRUFBRSxFQUFFO0lBQ3hGLE1BQU0sZUFBZSxHQUFHLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQ2pEO1FBQ0UsSUFBSSxFQUFFLFNBQVM7UUFDZixFQUFFLEVBQUUsS0FBSztLQUNWLEVBQ0QsR0FBRyxFQUNILGVBQWUsQ0FDaEIsQ0FBQztJQUVGLE9BQU8sZUFBZSxDQUFDO0FBQ3pCLENBQUMsQ0FBQztBQUVGLGVBQWUsT0FBTyxDQUFDIn0=