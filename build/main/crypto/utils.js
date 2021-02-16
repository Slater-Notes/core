"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNonce = exports.generateSalt = exports.stringToBase64 = exports.base64ToUint8Array = exports.uint8ArrayToBase64 = exports.arrayBufferToString = exports.stringToArrayBuffer = exports.decode = exports.encode = void 0;
const isomorphic_webcrypto_1 = __importDefault(require("isomorphic-webcrypto"));
const base_64_1 = __importDefault(require("base-64"));
exports.encode = (payload) => {
    return new TextEncoder().encode(payload);
};
exports.decode = (payload) => {
    return new TextDecoder().decode(new Uint8Array(payload));
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
    return String.fromCharCode.apply(null, new Uint8Array(payload));
};
exports.uint8ArrayToBase64 = (payload) => {
    return base_64_1.default.encode(String.fromCharCode.apply(null, payload));
};
exports.base64ToUint8Array = (payload) => {
    return new Uint8Array(base_64_1.default
        .decode(payload)
        .split('')
        .map((char) => char.charCodeAt(0)));
    // return Uint8Array.from(payload);
};
exports.stringToBase64 = (payload) => {
    return base_64_1.default.encode(payload);
};
exports.generateSalt = () => {
    return isomorphic_webcrypto_1.default.getRandomValues(new Uint8Array(16));
};
exports.generateNonce = () => {
    return isomorphic_webcrypto_1.default.getRandomValues(new Uint8Array(12));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY3J5cHRvL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdGQUEwQztBQUMxQyxzREFBNkI7QUFFaEIsUUFBQSxNQUFNLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRTtJQUN4QyxPQUFPLElBQUksV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQztBQUVXLFFBQUEsTUFBTSxHQUFHLENBQUMsT0FBb0IsRUFBRSxFQUFFO0lBQzdDLE9BQU8sSUFBSSxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUMzRCxDQUFDLENBQUM7QUFFVyxRQUFBLG1CQUFtQixHQUFHLENBQUMsT0FBZSxFQUFlLEVBQUU7SUFDbEUsTUFBTSxHQUFHLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLE1BQU0sT0FBTyxHQUFHLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDeEQsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDcEM7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQztBQUVXLFFBQUEsbUJBQW1CLEdBQUcsQ0FBQyxPQUFvQixFQUFVLEVBQUU7SUFDbEUsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNsRSxDQUFDLENBQUM7QUFFVyxRQUFBLGtCQUFrQixHQUFHLENBQUMsT0FBbUIsRUFBRSxFQUFFO0lBQ3hELE9BQU8saUJBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDakUsQ0FBQyxDQUFDO0FBRVcsUUFBQSxrQkFBa0IsR0FBRyxDQUFDLE9BQWUsRUFBRSxFQUFFO0lBQ3BELE9BQU8sSUFBSSxVQUFVLENBQ25CLGlCQUFNO1NBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUNmLEtBQUssQ0FBQyxFQUFFLENBQUM7U0FDVCxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDckMsQ0FBQztJQUNGLG1DQUFtQztBQUNyQyxDQUFDLENBQUM7QUFFVyxRQUFBLGNBQWMsR0FBRyxDQUFDLE9BQWUsRUFBVSxFQUFFO0lBQ3hELE9BQU8saUJBQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDaEMsQ0FBQyxDQUFDO0FBRVcsUUFBQSxZQUFZLEdBQUcsR0FBRyxFQUFFO0lBQy9CLE9BQU8sOEJBQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwRCxDQUFDLENBQUM7QUFFVyxRQUFBLGFBQWEsR0FBRyxHQUFHLEVBQUU7SUFDaEMsT0FBTyw4QkFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyJ9