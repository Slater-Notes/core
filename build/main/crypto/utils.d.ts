export declare const stringToBuffer: (payload: string) => Uint8Array;
export declare const bufferToString: (payload: Uint8Array) => string;
export declare const bufferToBase64: (payload: Uint8Array) => string;
export declare const base64ToBuffer: (payload: string) => Uint8Array;
export declare const stringToBase64: (payload: string) => string;
export declare const base64ToString: (payload: string) => string;
export declare const generateSalt: () => Uint8Array;
export declare const generateNonce: () => Uint8Array;
