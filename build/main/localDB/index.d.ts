declare class localDB {
    store: undefined | LocalForage;
    constructor(isTest?: boolean);
    get: (key: string) => Promise<string | ArrayBuffer | undefined>;
    set: (key: string, value: string | ArrayBuffer) => Promise<void>;
}
export default localDB;
