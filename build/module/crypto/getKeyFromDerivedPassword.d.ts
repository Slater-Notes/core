declare const getKeyFromDerivedPassword: (password: string, salt: Uint8Array, fullUsage?: boolean, iterations?: number, extractable?: boolean) => Promise<CryptoKey>;
export default getKeyFromDerivedPassword;
