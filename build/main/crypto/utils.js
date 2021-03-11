"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNonce = exports.generateSalt = exports.base64ToString = exports.stringToBase64 = exports.base64ToBuffer = exports.bufferToBase64 = exports.bufferToString = exports.stringToBuffer = void 0;
const isomorphic_webcrypto_1 = __importDefault(require("isomorphic-webcrypto"));
const buffer_1 = __importDefault(require("buffer"));
exports.stringToBuffer = (payload) => {
    return buffer_1.default.Buffer.from(payload, 'utf8').valueOf();
};
exports.bufferToString = (payload) => {
    return buffer_1.default.Buffer.from(payload).toString('utf8');
};
exports.bufferToBase64 = (payload) => {
    return buffer_1.default.Buffer.from(payload).toString('base64');
};
exports.base64ToBuffer = (payload) => {
    return buffer_1.default.Buffer.from(payload, 'base64').valueOf();
};
exports.stringToBase64 = (payload) => {
    return buffer_1.default.Buffer.from(payload, 'utf8').toString('base64');
};
exports.base64ToString = (payload) => {
    return buffer_1.default.Buffer.from(payload, 'base64').toString('utf8');
};
exports.generateSalt = () => {
    return isomorphic_webcrypto_1.default.getRandomValues(new Uint8Array(16));
};
exports.generateNonce = () => {
    return isomorphic_webcrypto_1.default.getRandomValues(new Uint8Array(12));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY3J5cHRvL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdGQUEwQztBQUMxQyxvREFBNEI7QUFFZixRQUFBLGNBQWMsR0FBRyxDQUFDLE9BQWUsRUFBYyxFQUFFO0lBQzVELE9BQU8sZ0JBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN2RCxDQUFDLENBQUM7QUFFVyxRQUFBLGNBQWMsR0FBRyxDQUFDLE9BQW1CLEVBQVUsRUFBRTtJQUM1RCxPQUFPLGdCQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEQsQ0FBQyxDQUFDO0FBRVcsUUFBQSxjQUFjLEdBQUcsQ0FBQyxPQUFtQixFQUFVLEVBQUU7SUFDNUQsT0FBTyxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3hELENBQUMsQ0FBQztBQUVXLFFBQUEsY0FBYyxHQUFHLENBQUMsT0FBZSxFQUFjLEVBQUU7SUFDNUQsT0FBTyxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3pELENBQUMsQ0FBQztBQUVXLFFBQUEsY0FBYyxHQUFHLENBQUMsT0FBZSxFQUFVLEVBQUU7SUFDeEQsT0FBTyxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNoRSxDQUFDLENBQUM7QUFFVyxRQUFBLGNBQWMsR0FBRyxDQUFDLE9BQWUsRUFBVSxFQUFFO0lBQ3hELE9BQU8sZ0JBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEUsQ0FBQyxDQUFDO0FBRVcsUUFBQSxZQUFZLEdBQUcsR0FBRyxFQUFFO0lBQy9CLE9BQU8sOEJBQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwRCxDQUFDLENBQUM7QUFFVyxRQUFBLGFBQWEsR0FBRyxHQUFHLEVBQUU7SUFDaEMsT0FBTyw4QkFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyJ9