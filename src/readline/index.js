import * as readline from 'node:readline';
import { stdin, stdout } from 'node:process';
import { promptUser, sayByeUser, showCurrentDirectory } from '../messages/index.js';
import { executeCommand } from '../commands/index.js';
import { shutdown } from '../utils/index.js';

export const createReadline = () => {
  const rl = readline.createInterface({ input: stdin, output: stdout });

  promptUser();

  rl.on('line', async (input) => {
    await executeCommand(input);
    showCurrentDirectory();
  });

  rl.on('SIGINT', () => {
    shutdown();
  });

  rl.on('exit', sayByeUser);
};
