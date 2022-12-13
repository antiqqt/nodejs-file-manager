import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { promptUser, sayByeUser } from '../messages/index.js';

export const createReadline = () => {
  const rl = readline.createInterface({ input: stdin, output: stdout });

  promptUser();

  rl.on('line', (input) => {
    console.log(`Received: ${input}`);
  });

  rl.on('SIGINT', () => {
    sayByeUser();
    process.exit();
  });

  rl.on('exit', sayByeUser);
};
