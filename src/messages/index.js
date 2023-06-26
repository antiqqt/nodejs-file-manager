import { appendNewLineTo, prependNewLineTo } from '../utils/index.js';
import { username } from '../user/index.js';

const { cwd } = process;

export const showCurrentDirectory = () => {
  console.log(appendNewLineTo(`You are currently in ${cwd()}`));
};

export const greetUser = () => {
  console.log(appendNewLineTo(`Welcome to the File Manager, ${username}!`));
};

export const sayByeUser = () => {
  console.log(
    prependNewLineTo(`Thank you for using File Manager, ${username}, goodbye!`)
  );
};

export const promptUser = () => {
  console.log(
    appendNewLineTo(`Give it a try and print a command!`)
  );
};

export const showInvalidInput = () => {
  console.log(`Invalid input`);
};

export const showOperationFailed = () => {
  console.log(`Operation failed`);
};
