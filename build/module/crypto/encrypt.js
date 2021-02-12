import crypto from 'isomorphic-webcrypto';
const encrypt = async (key, nonce, buffer) => {
    return await crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv: nonce,
    }, key, buffer);
};
export default encrypt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jcnlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcnlwdG8vZW5jcnlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxzQkFBc0IsQ0FBQztBQUUxQyxNQUFNLE9BQU8sR0FBRyxLQUFLLEVBQUUsR0FBYyxFQUFFLEtBQWlCLEVBQUUsTUFBbUIsRUFBRSxFQUFFO0lBQy9FLE9BQU8sTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDaEM7UUFDRSxJQUFJLEVBQUUsU0FBUztRQUNmLEVBQUUsRUFBRSxLQUFLO0tBQ1YsRUFDRCxHQUFHLEVBQ0gsTUFBTSxDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixlQUFlLE9BQU8sQ0FBQyJ9