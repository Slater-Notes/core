import { bufferToBase64, stringToBuffer } from './utils';
const digest = async (message) => {
    const hashBuffer = await crypto.subtle.digest('SHA-512', stringToBuffer(message));
    const hashUint8Array = new Uint8Array(hashBuffer);
    const hashBase64 = bufferToBase64(hashUint8Array);
    return hashBase64;
};
export default digest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlnZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NyeXB0by9kaWdlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFekQsTUFBTSxNQUFNLEdBQUcsS0FBSyxFQUFFLE9BQWUsRUFBRSxFQUFFO0lBQ3ZDLE1BQU0sVUFBVSxHQUFHLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLE1BQU0sY0FBYyxHQUFHLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xELE1BQU0sVUFBVSxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUVsRCxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDLENBQUM7QUFFRixlQUFlLE1BQU0sQ0FBQyJ9