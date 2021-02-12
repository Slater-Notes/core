declare const getKeyFromDerivedPassword: (password: string, salt: Uint8Array, fullUsage?: boolean, iterations?: number) => Promise<CryptoKey>;
export default getKeyFromDerivedPassword;
