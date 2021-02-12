"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNonce = exports.generateSalt = exports.base64ToUint8Array = exports.uint8ArrayToBase64 = exports.arrayBufferToString = exports.stringToArrayBuffer = exports.decode = exports.encode = void 0;
const isomorphic_webcrypto_1 = __importDefault(require("isomorphic-webcrypto"));
const base_64_1 = __importDefault(require("base-64"));
exports.encode = (payload) => {
    return new TextEncoder().encode(payload);
};
exports.decode = (payload) => {
    return new TextDecoder().decode(new Uint8Array(payload));
};
exports.stringToArrayBuffer = (payload) => {
    return new TextEncoder().encode(payload).buffer;
};
exports.arrayBufferToString = (payload) => {
    return new TextDecoder().decode(new Uint8Array(payload));
};
exports.uint8ArrayToBase64 = (payload) => {
    return base_64_1.default.encode(String.fromCharCode.apply(null, payload));
    // return Array.from(payload);
};
exports.base64ToUint8Array = (payload) => {
    return new Uint8Array(base_64_1.default
        .decode(payload)
        .split('')
        .map((char) => char.charCodeAt(0)));
    // return Uint8Array.from(payload);
};
exports.generateSalt = () => {
    return isomorphic_webcrypto_1.default.getRandomValues(new Uint8Array(16));
};
exports.generateNonce = () => {
    return isomorphic_webcrypto_1.default.getRandomValues(new Uint8Array(12));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY3J5cHRvL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdGQUEwQztBQUMxQyxzREFBNkI7QUFFaEIsUUFBQSxNQUFNLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRTtJQUN4QyxPQUFPLElBQUksV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQztBQUVXLFFBQUEsTUFBTSxHQUFHLENBQUMsT0FBb0IsRUFBRSxFQUFFO0lBQzdDLE9BQU8sSUFBSSxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUMzRCxDQUFDLENBQUM7QUFFVyxRQUFBLG1CQUFtQixHQUFHLENBQUMsT0FBZSxFQUFlLEVBQUU7SUFDbEUsT0FBTyxJQUFJLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDbEQsQ0FBQyxDQUFDO0FBRVcsUUFBQSxtQkFBbUIsR0FBRyxDQUFDLE9BQW9CLEVBQUUsRUFBRTtJQUMxRCxPQUFPLElBQUksV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDM0QsQ0FBQyxDQUFDO0FBRVcsUUFBQSxrQkFBa0IsR0FBRyxDQUFDLE9BQW1CLEVBQUUsRUFBRTtJQUN4RCxPQUFPLGlCQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQy9ELDhCQUE4QjtBQUNoQyxDQUFDLENBQUM7QUFFVyxRQUFBLGtCQUFrQixHQUFHLENBQUMsT0FBZSxFQUFFLEVBQUU7SUFDcEQsT0FBTyxJQUFJLFVBQVUsQ0FDbkIsaUJBQU07U0FDSCxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ2YsS0FBSyxDQUFDLEVBQUUsQ0FBQztTQUNULEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNyQyxDQUFDO0lBQ0YsbUNBQW1DO0FBQ3JDLENBQUMsQ0FBQztBQUVXLFFBQUEsWUFBWSxHQUFHLEdBQUcsRUFBRTtJQUMvQixPQUFPLDhCQUFNLENBQUMsZUFBZSxDQUFDLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDcEQsQ0FBQyxDQUFDO0FBRVcsUUFBQSxhQUFhLEdBQUcsR0FBRyxFQUFFO0lBQ2hDLE9BQU8sOEJBQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwRCxDQUFDLENBQUMifQ==