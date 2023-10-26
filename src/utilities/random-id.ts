import crypto from 'node:crypto';

export const randomId = () => crypto.randomUUID();
