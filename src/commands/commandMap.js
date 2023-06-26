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

import { compressFile, decompressFile } from '../functionality/zlib/index.js';

import { shutdown } from '../utils/index.js';

const commands = {
  up: { argCount: 0, callback: goToUppperDir },
  cd: { argCount: 1, callback: changeDir },
  ls: { argCount: 0, callback: listDir },
  cat: { argCount: 1, callback: readFile },
  add: { argCount: 1, callback: createFile },
  rn: { argCount: 2, callback: renameFile },
  cp: { argCount: 2, callback: copyFile },
  mv: { argCount: 2, callback: moveFile },
  rm: { argCount: 1, callback: deleteFile },
  os: { argCount: 1, callback: executeOSCommand },
  hash: { argCount: 1, callback: calculateHash },
  compress: { argCount: 2, callback: compressFile },
  decompress: { argCount: 2, callback: decompressFile },
  '.exit': { argCount: 0, callback: shutdown },
};

const commandMap = new Map(Object.entries(commands));

export default commandMap;
