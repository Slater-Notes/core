import buffer from 'buffer';

export const stringToBuffer = (payload: string): Uint8Array => {
  return buffer.Buffer.from(payload, 'utf8').valueOf();
};

export const bufferToString = (payload: Uint8Array): string => {
  return buffer.Buffer.from(payload).toString('utf8');
};

export const bufferToBase64 = (payload: Uint8Array): string => {
  return buffer.Buffer.from(payload).toString('base64');
};

export const base64ToBuffer = (payload: string): Uint8Array => {
  return buffer.Buffer.from(payload, 'base64').valueOf();
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
