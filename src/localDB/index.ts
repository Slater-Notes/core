import localforage from 'localforage';
import memoryStorageDriver from 'localforage-memoryStorageDriver';

class localDB {
  store;

  constructor(isTest?: boolean) {
    if (isTest) {
      localforage.defineDriver(memoryStorageDriver);
    }

    this.store = localforage.createInstance({
      name: 'slater',
      driver: isTest ? memoryStorageDriver._driver : localforage.INDEXEDDB,
    });
  }

  get = async (key: string): Promise<string | ArrayBuffer | Uint8Array | undefined> => {
    return await this.store.getItem(key);
  };

  set = async (key: string, value: string | ArrayBuffer | Uint8Array) => {
    await this.store.setItem(key, value);
  };
}

export default localDB;
