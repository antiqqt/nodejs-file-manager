import { appendNewLineTo, insertNewLineTo } from '../utils/index.js';
import { username } from '../user/index.js';

const { cwd } = process;

export const showCurrentDirectory = () => {
  console.log(createCurrentDirectoryMsg());
};

const createCurrentDirectoryMsg = () =>
  appendNewLineTo(`You are currently in ${cwd()}`);

export const greetUser = () => {
  console.log(createGreetUserMsg());
};

const createGreetUserMsg = () =>
  appendNewLineTo(`Welcome to the File Manager, ${username}!`);

export const sayByeUser = () => {
  console.log(createByeUserMsg());
};

const createByeUserMsg = () =>
  insertNewLineTo(`Thank you for using File Manager, ${username}, goodbye!`);

export const promptUser = () => {
  console.log(createUserPromptMsg());
};

const createUserPromptMsg = () =>
  appendNewLineTo(`You can print any command to try the File Manager`);
