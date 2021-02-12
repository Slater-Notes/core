"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const localforage_1 = __importDefault(require("localforage"));
const localforage_memoryStorageDriver_1 = __importDefault(require("localforage-memoryStorageDriver"));
class localDB {
    constructor(isTest) {
        this.get = async (key) => {
            return await this.store.getItem(key);
        };
        this.set = async (key, value) => {
            await this.store.setItem(key, value);
        };
        if (isTest) {
            localforage_1.default.defineDriver(localforage_memoryStorageDriver_1.default);
        }
        this.store = localforage_1.default.createInstance({
            name: 'slater',
            driver: isTest ? localforage_memoryStorageDriver_1.default._driver : localforage_1.default.INDEXEDDB,
        });
    }
}
exports.default = localDB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbG9jYWxEQi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhEQUFzQztBQUN0QyxzR0FBa0U7QUFFbEUsTUFBTSxPQUFPO0lBR1gsWUFBWSxNQUFnQjtRQVc1QixRQUFHLEdBQUcsS0FBSyxFQUFFLEdBQVcsRUFBNkMsRUFBRTtZQUNyRSxPQUFPLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDO1FBRUYsUUFBRyxHQUFHLEtBQUssRUFBRSxHQUFXLEVBQUUsS0FBMkIsRUFBRSxFQUFFO1lBQ3ZELE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQztRQWhCQSxJQUFJLE1BQU0sRUFBRTtZQUNWLHFCQUFXLENBQUMsWUFBWSxDQUFDLHlDQUFtQixDQUFDLENBQUM7U0FDL0M7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFXLENBQUMsY0FBYyxDQUFDO1lBQ3RDLElBQUksRUFBRSxRQUFRO1lBQ2QsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMseUNBQW1CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxxQkFBVyxDQUFDLFNBQVM7U0FDckUsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQVNGO0FBRUQsa0JBQWUsT0FBTyxDQUFDIn0=