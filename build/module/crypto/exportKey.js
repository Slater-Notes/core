import { bufferToBase64 } from './utils';
const exportKey = async (key) => {
    const rawKey = await crypto.subtle.exportKey('raw', key);
    return bufferToBase64(new Uint8Array(rawKey));
};
export default exportKey;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0S2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NyeXB0by9leHBvcnRLZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUV6QyxNQUFNLFNBQVMsR0FBRyxLQUFLLEVBQUUsR0FBYyxFQUFFLEVBQUU7SUFDekMsTUFBTSxNQUFNLEdBQUcsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekQsT0FBTyxjQUFjLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNoRCxDQUFDLENBQUM7QUFFRixlQUFlLFNBQVMsQ0FBQyJ9