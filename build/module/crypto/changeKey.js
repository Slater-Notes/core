import decrypt from './decrypt';
import encrypt from './encrypt';
const changeKey = async (oldKey, oldNonce, newKey, newNonce, payload) => {
    const decryptedBuffer = await decrypt(oldKey, oldNonce, payload);
    return await encrypt(newKey, newNonce, decryptedBuffer);
};
export default changeKey;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlS2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NyeXB0by9jaGFuZ2VLZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxPQUFPLE1BQU0sV0FBVyxDQUFDO0FBQ2hDLE9BQU8sT0FBTyxNQUFNLFdBQVcsQ0FBQztBQUVoQyxNQUFNLFNBQVMsR0FBRyxLQUFLLEVBQ3JCLE1BQWlCLEVBQ2pCLFFBQW9CLEVBQ3BCLE1BQWlCLEVBQ2pCLFFBQW9CLEVBQ3BCLE9BQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLGVBQWUsR0FBRyxNQUFNLE9BQU8sQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pFLE9BQU8sTUFBTSxPQUFPLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUMxRCxDQUFDLENBQUM7QUFFRixlQUFlLFNBQVMsQ0FBQyJ9