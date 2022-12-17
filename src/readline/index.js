import * as readline from 'node:readline';
import { stdin, stdout } from 'node:process';
import { promptUser, sayByeUser } from '../messages/index.js';
import { executeCommand } from '../commands/index.js';

export const createReadline = () => {
  const rl = readline.createInterface({ input: stdin, output: stdout });

  promptUser();

  rl.on('line', (input) => {
    executeCommand(input);
  });

  rl.on('SIGINT', () => {
    sayByeUser();
    process.exit();
  });

  rl.on('exit', sayByeUser);
};
