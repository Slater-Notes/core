declare class localDB {
    store: any;
    constructor(isTest?: boolean);
    get: (key: string) => Promise<string | ArrayBuffer | undefined>;
    set: (key: string, value: string | ArrayBuffer) => Promise<void>;
}
export default localDB;
