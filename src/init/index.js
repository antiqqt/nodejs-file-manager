import { setInitialDirectory } from '../path/index.js';
import { showCurrentDirectory, greetUser } from '../messages/index.js';
import { createReadline } from '../readline/index.js';

export default async () => {
  greetUser();
  setInitialDirectory();
  showCurrentDirectory();
  createReadline();
};
