import crypto from 'isomorphic-webcrypto';
import base64 from 'base-64';

export const encode = (payload: string) => {
  return new TextEncoder().encode(payload);
};

export const decode = (payload: ArrayBuffer) => {
  return new TextDecoder().decode(new Uint8Array(payload));
};

export const stringToArrayBuffer = (payload: string): ArrayBuffer => {
  const buf = new ArrayBuffer(payload.length);
  const bufView = new Uint8Array(buf);
  for (let i = 0, strLen = payload.length; i < strLen; i++) {
    bufView[i] = payload.charCodeAt(i);
  }
  return buf;
};

export const arrayBufferToString = (payload: ArrayBuffer): string => {
  return String.fromCharCode.apply(null, new Uint8Array(payload));
};

export const uint8ArrayToBase64 = (payload: Uint8Array) => {
  return base64.encode(String.fromCharCode.apply(null, payload));
  // return Array.from(payload);
};

export const base64ToUint8Array = (payload: string) => {
  return new Uint8Array(
    base64
      .decode(payload)
      .split('')
      .map((char) => char.charCodeAt(0)),
  );
  // return Uint8Array.from(payload);
};

export const generateSalt = () => {
  return crypto.getRandomValues(new Uint8Array(16));
};

export const generateNonce = () => {
  return crypto.getRandomValues(new Uint8Array(12));
};
