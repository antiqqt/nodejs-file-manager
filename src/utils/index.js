import { EOL } from 'node:os';
import { sayByeUser } from '../messages/index.js';
import { access } from 'node:fs/promises';

export const appendNewLineTo = (str) => `${str + EOL}`;

export const prependNewLineTo = (str) => `${EOL + str}`;

export const shutdown = () => {
  sayByeUser();
  process.exit();
};

export const validatePath = async (path) => access(path);
