declare class localDB {
    store: any;
    constructor(isTest?: boolean);
    get: (key: string) => Promise<string | ArrayBuffer | Uint8Array | undefined>;
    set: (key: string, value: string | ArrayBuffer | Uint8Array) => Promise<void>;
}
export default localDB;
