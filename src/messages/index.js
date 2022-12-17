import { appendNewLineTo, insertNewLineTo } from '../utils/index.js';
import { username } from '../user/index.js';

const { cwd } = process;

export const showCurrentDirectory = () => {
  console.log(createCurrentDirectoryMsg());
};

export const greetUser = () => {
  console.log(createGreetUserMsg());
};

export const sayByeUser = () => {
  console.log(createByeUserMsg());
};

export const promptUser = () => {
  console.log(createUserPromptMsg());
};

export const showInvalidInput = () => {
  console.log(createInvalidInputMsg());
};

export const showOperationFailed = () => {
  console.log(createOperationFailedMsg());
};

const createCurrentDirectoryMsg = () =>
  appendNewLineTo(`You are currently in ${cwd()}`);

const createGreetUserMsg = () =>
  appendNewLineTo(`Welcome to the File Manager, ${username}!`);

const createByeUserMsg = () =>
  insertNewLineTo(`Thank you for using File Manager, ${username}, goodbye!`);

const createUserPromptMsg = () =>
  appendNewLineTo(`You can print any command to try the File Manager`);

const createInvalidInputMsg = () => appendNewLineTo(`Invalid input`);

const createOperationFailedMsg = () => appendNewLineTo(`Operation failed`);
