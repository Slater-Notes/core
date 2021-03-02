"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNonce = exports.generateSalt = exports.base64ToString = exports.stringToBase64 = exports.base64ToUint8Array = exports.uint8ArrayToBase64 = exports.arrayBufferToString = exports.stringToArrayBuffer = exports.decode = exports.encode = void 0;
const buffer_1 = __importDefault(require("buffer"));
exports.encode = (payload) => {
    return new TextEncoder().encode(payload);
};
exports.decode = (payload) => {
    return new TextDecoder().decode(payload);
};
exports.stringToArrayBuffer = (payload) => {
    const buf = new ArrayBuffer(payload.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0, strLen = payload.length; i < strLen; i++) {
        bufView[i] = payload.charCodeAt(i);
    }
    return buf;
};
exports.arrayBufferToString = (payload) => {
    const bufView = new Uint8Array(payload);
    const length = bufView.length;
    let result = '';
    let addition = Math.pow(2, 8) - 1;
    for (let i = 0; i < length; i += addition) {
        if (i + addition > length) {
            addition = length - i;
        }
        result += String.fromCharCode.apply(null, bufView.subarray(i, i + addition));
    }
    return result;
};
exports.uint8ArrayToBase64 = (payload) => {
    return buffer_1.default.Buffer.from(payload).toString('base64');
};
exports.base64ToUint8Array = (payload) => {
    return buffer_1.default.Buffer.from(payload, 'base64');
};
exports.stringToBase64 = (payload) => {
    return buffer_1.default.Buffer.from(payload, 'utf8').toString('base64');
};
exports.base64ToString = (payload) => {
    return buffer_1.default.Buffer.from(payload, 'base64').toString('utf8');
};
exports.generateSalt = () => {
    return crypto.getRandomValues(new Uint8Array(16));
};
exports.generateNonce = () => {
    return crypto.getRandomValues(new Uint8Array(12));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY3J5cHRvL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9EQUE0QjtBQUVmLFFBQUEsTUFBTSxHQUFHLENBQUMsT0FBZSxFQUFFLEVBQUU7SUFDeEMsT0FBTyxJQUFJLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUM7QUFFVyxRQUFBLE1BQU0sR0FBRyxDQUFDLE9BQW9CLEVBQUUsRUFBRTtJQUM3QyxPQUFPLElBQUksV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQztBQUVXLFFBQUEsbUJBQW1CLEdBQUcsQ0FBQyxPQUFlLEVBQWUsRUFBRTtJQUNsRSxNQUFNLEdBQUcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN4RCxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNwQztJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBRVcsUUFBQSxtQkFBbUIsR0FBRyxDQUFDLE9BQW9CLEVBQVUsRUFBRTtJQUNsRSxNQUFNLE9BQU8sR0FBRyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQzlCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNoQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFbEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLElBQUksUUFBUSxFQUFFO1FBQ3pDLElBQUksQ0FBQyxHQUFHLFFBQVEsR0FBRyxNQUFNLEVBQUU7WUFDekIsUUFBUSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDdkI7UUFDRCxNQUFNLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO0tBQzlFO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRVcsUUFBQSxrQkFBa0IsR0FBRyxDQUFDLE9BQW1CLEVBQVUsRUFBRTtJQUNoRSxPQUFPLGdCQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFDO0FBRVcsUUFBQSxrQkFBa0IsR0FBRyxDQUFDLE9BQWUsRUFBYyxFQUFFO0lBQ2hFLE9BQU8sZ0JBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUM7QUFFVyxRQUFBLGNBQWMsR0FBRyxDQUFDLE9BQWUsRUFBVSxFQUFFO0lBQ3hELE9BQU8sZ0JBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEUsQ0FBQyxDQUFDO0FBRVcsUUFBQSxjQUFjLEdBQUcsQ0FBQyxPQUFlLEVBQVUsRUFBRTtJQUN4RCxPQUFPLGdCQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hFLENBQUMsQ0FBQztBQUVXLFFBQUEsWUFBWSxHQUFHLEdBQUcsRUFBRTtJQUMvQixPQUFPLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwRCxDQUFDLENBQUM7QUFFVyxRQUFBLGFBQWEsR0FBRyxHQUFHLEVBQUU7SUFDaEMsT0FBTyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDcEQsQ0FBQyxDQUFDIn0=