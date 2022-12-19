import { EOL } from 'node:os';
import { sayByeUser } from '../messages/index.js';

export const appendNewLineTo = (str) => `${str + EOL}`;

export const insertNewLineTo = (str) => `${EOL + str}`;

export const shutdown = () => {
  sayByeUser();
  process.exit();
};