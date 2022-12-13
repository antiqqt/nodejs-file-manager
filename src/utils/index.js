import { EOL } from 'node:os';

export const appendNewLineTo = (str) => `${str + EOL}`;

export const insertNewLineTo = (str) => `${EOL + str}`;
