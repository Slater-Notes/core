"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const exportKey = async (key) => {
    const rawKey = await crypto.subtle.exportKey('raw', key);
    const rawKeyString = utils_1.arrayBufferToString(rawKey);
    return utils_1.stringToBase64(rawKeyString);
};
exports.default = exportKey;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0S2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NyeXB0by9leHBvcnRLZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBOEQ7QUFFOUQsTUFBTSxTQUFTLEdBQUcsS0FBSyxFQUFFLEdBQWMsRUFBRSxFQUFFO0lBQ3pDLE1BQU0sTUFBTSxHQUFHLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3pELE1BQU0sWUFBWSxHQUFHLDJCQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELE9BQU8sc0JBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUM7QUFFRixrQkFBZSxTQUFTLENBQUMifQ==