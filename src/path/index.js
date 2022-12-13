import { homedir } from 'node:os';

const { chdir } = process;

export function setInitialDirectory() {
  try {
    chdir(homedir());
  } catch (error) {
    console.error(error);
  }
}
