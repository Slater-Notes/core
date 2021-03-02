import buffer from 'buffer';

export const encode = (payload: string) => {
  return new TextEncoder().encode(payload);
};

export const decode = (payload: ArrayBuffer) => {
  return new TextDecoder().decode(payload);
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
  const bufView = new Uint8Array(payload);
  const length = bufView.length;
  let result = '';
  let addition = Math.pow(2, 8) - 1;

  for (let i = 0; i < length; i += addition) {
    if (i + addition > length) {
      addition = length - i;
    }
    result += String.fromCharCode.apply(null, bufView.subarray(i, i + addition));
  }

  return result;
};

export const uint8ArrayToBase64 = (payload: Uint8Array): string => {
  return buffer.Buffer.from(payload).toString('base64');
};

export const base64ToUint8Array = (payload: string): Uint8Array => {
  return buffer.Buffer.from(payload, 'base64');
};

export const stringToBase64 = (payload: string): string => {
  return buffer.Buffer.from(payload, 'utf8').toString('base64');
};

export const base64ToString = (payload: string): string => {
  return buffer.Buffer.from(payload, 'base64').toString('utf8');
};

export const generateSalt = () => {
  return crypto.getRandomValues(new Uint8Array(16));
};

export const generateNonce = () => {
  return crypto.getRandomValues(new Uint8Array(12));
};
