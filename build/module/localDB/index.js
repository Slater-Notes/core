import localforage from 'localforage';
import memoryStorageDriver from 'localforage-memoryStorageDriver';
class localDB {
    constructor(isTest) {
        this.get = async (key) => {
            return await this.store.getItem(key);
        };
        this.set = async (key, value) => {
            await this.store.setItem(key, value);
        };
        if (isTest) {
            localforage.defineDriver(memoryStorageDriver);
        }
        this.store = localforage.createInstance({
            name: 'slater',
            driver: isTest ? memoryStorageDriver._driver : localforage.INDEXEDDB,
        });
    }
}
export default localDB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbG9jYWxEQi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFdBQVcsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxtQkFBbUIsTUFBTSxpQ0FBaUMsQ0FBQztBQUVsRSxNQUFNLE9BQU87SUFHWCxZQUFZLE1BQWdCO1FBVzVCLFFBQUcsR0FBRyxLQUFLLEVBQUUsR0FBVyxFQUE2QyxFQUFFO1lBQ3JFLE9BQU8sTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUM7UUFFRixRQUFHLEdBQUcsS0FBSyxFQUFFLEdBQVcsRUFBRSxLQUEyQixFQUFFLEVBQUU7WUFDdkQsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDO1FBaEJBLElBQUksTUFBTSxFQUFFO1lBQ1YsV0FBVyxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQy9DO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsY0FBYyxDQUFDO1lBQ3RDLElBQUksRUFBRSxRQUFRO1lBQ2QsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUztTQUNyRSxDQUFDLENBQUM7SUFDTCxDQUFDO0NBU0Y7QUFFRCxlQUFlLE9BQU8sQ0FBQyJ9