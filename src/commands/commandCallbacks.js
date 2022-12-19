import {
  createFile,
  deleteFile,
  moveFile,
  renameFile,
  copyFile,
  readFile,
} from '../functionality/basic/index.js';

import calculateHash from '../functionality/hash/index.js';

import {
  changeDir,
  goToUppperDir,
  listDir,
} from '../functionality/navigation/index.js';

import { executeOSCommand } from '../functionality/os/index.js';

import {
  compressFile,
  decompressFile,
} from '../functionality/zlib/index.js';

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
  os: executeOSCommand,
  hash: calculateHash,
  compress: compressFile,
  decompress: decompressFile,
};

export default new Map(Object.entries(callbacks));
