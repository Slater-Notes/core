export declare const encode: (payload: string) => Uint8Array;
export declare const decode: (payload: ArrayBuffer) => string;
export declare const stringToArrayBuffer: (payload: string) => ArrayBuffer;
export declare const arrayBufferToString: (payload: ArrayBuffer) => string;
export declare const uint8ArrayToBase64: (payload: Uint8Array) => string;
export declare const base64ToUint8Array: (payload: string) => Uint8Array;
export declare const generateSalt: () => Uint8Array;
export declare const generateNonce: () => Uint8Array;
