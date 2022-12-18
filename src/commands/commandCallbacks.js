import {
  createFile,
  deleteFile,
  moveFile,
  renameFile,
  copyFile,
  readFile,
} from '../functionality/basic/index.js';

import {
  changeDir,
  goToUppperDir,
  listDir,
} from '../functionality/navigation/index.js';

const callbacks = {
  up: goToUppperDir,
  cd: changeDir,
  ls: listDir,
  cat: readFile,
  add: createFile,
  rn: renameFile,
  cp: copyFile,
  mv: moveFile,
  rm: deleteFile,
};

export default new Map(Object.entries(callbacks));
