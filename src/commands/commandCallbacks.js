import { changeDir, goToUppperDir, listDir } from '../functionality/navigation/index.js';

const callbacks = {
  up: goToUppperDir,
  cd: changeDir,
  ls: listDir,
};

export default new Map(Object.entries(callbacks));
