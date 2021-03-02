"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const digest = async (message) => {
    const hashBuffer = await crypto.subtle.digest('SHA-512', utils_1.encode(message));
    const hashUint8Array = new Uint8Array(hashBuffer);
    const hashBase64 = utils_1.uint8ArrayToBase64(hashUint8Array);
    return hashBase64;
};
exports.default = digest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlnZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NyeXB0by9kaWdlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBcUQ7QUFFckQsTUFBTSxNQUFNLEdBQUcsS0FBSyxFQUFFLE9BQWUsRUFBRSxFQUFFO0lBQ3ZDLE1BQU0sVUFBVSxHQUFHLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLGNBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzFFLE1BQU0sY0FBYyxHQUFHLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xELE1BQU0sVUFBVSxHQUFHLDBCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRXRELE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUMsQ0FBQztBQUVGLGtCQUFlLE1BQU0sQ0FBQyJ9