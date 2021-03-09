"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNonce = exports.generateSalt = exports.base64ToString = exports.stringToBase64 = exports.base64ToBuffer = exports.bufferToBase64 = exports.bufferToString = exports.stringToBuffer = void 0;
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
    return crypto.getRandomValues(new Uint8Array(16));
};
exports.generateNonce = () => {
    return crypto.getRandomValues(new Uint8Array(12));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY3J5cHRvL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9EQUE0QjtBQUVmLFFBQUEsY0FBYyxHQUFHLENBQUMsT0FBZSxFQUFjLEVBQUU7SUFDNUQsT0FBTyxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3ZELENBQUMsQ0FBQztBQUVXLFFBQUEsY0FBYyxHQUFHLENBQUMsT0FBbUIsRUFBVSxFQUFFO0lBQzVELE9BQU8sZ0JBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0RCxDQUFDLENBQUM7QUFFVyxRQUFBLGNBQWMsR0FBRyxDQUFDLE9BQW1CLEVBQVUsRUFBRTtJQUM1RCxPQUFPLGdCQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFDO0FBRVcsUUFBQSxjQUFjLEdBQUcsQ0FBQyxPQUFlLEVBQWMsRUFBRTtJQUM1RCxPQUFPLGdCQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDekQsQ0FBQyxDQUFDO0FBRVcsUUFBQSxjQUFjLEdBQUcsQ0FBQyxPQUFlLEVBQVUsRUFBRTtJQUN4RCxPQUFPLGdCQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hFLENBQUMsQ0FBQztBQUVXLFFBQUEsY0FBYyxHQUFHLENBQUMsT0FBZSxFQUFVLEVBQUU7SUFDeEQsT0FBTyxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoRSxDQUFDLENBQUM7QUFFVyxRQUFBLFlBQVksR0FBRyxHQUFHLEVBQUU7SUFDL0IsT0FBTyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDcEQsQ0FBQyxDQUFDO0FBRVcsUUFBQSxhQUFhLEdBQUcsR0FBRyxFQUFFO0lBQ2hDLE9BQU8sTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyJ9