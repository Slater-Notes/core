"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const _1 = require(".");
ava_1.default('exports localDB', (t) => {
    t.truthy(new _1.localDB());
});
ava_1.default('exports note interfaces', (t) => {
    const folder = {
        id: 'testfolder',
        title: 'Test Folder',
        created: 1234,
        updated: 1234,
    };
    t.truthy(folder);
});
ava_1.default('exports crypto functions', (t) => {
    t.truthy(_1.decrypt);
    t.truthy(_1.encrypt);
    t.truthy(_1.getKeyFromDerivedPassword);
    t.truthy(_1.getKeyFromPassword);
    t.truthy(_1.digest);
    t.truthy(_1.exportKey);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXVCO0FBQ3ZCLHdCQVNXO0FBRVgsYUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDNUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLFVBQU8sRUFBRSxDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFDLENBQUM7QUFFSCxhQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUNwQyxNQUFNLE1BQU0sR0FBZTtRQUN6QixFQUFFLEVBQUUsWUFBWTtRQUNoQixLQUFLLEVBQUUsYUFBYTtRQUNwQixPQUFPLEVBQUUsSUFBSTtRQUNiLE9BQU8sRUFBRSxJQUFJO0tBQ2QsQ0FBQztJQUVGLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUM7QUFFSCxhQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUNyQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQU8sQ0FBQyxDQUFDO0lBQ2xCLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBTyxDQUFDLENBQUM7SUFDbEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyw0QkFBeUIsQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQWtCLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUMsTUFBTSxDQUFDLFNBQU0sQ0FBQyxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBUyxDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFDLENBQUMifQ==