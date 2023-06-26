import { readdir } from 'node:fs/promises';
import {
  showInvalidInput
} from '../../messages/index.js';

const { chdir, cwd } = process;

const EntryTypes = {
  File: 'file',
  Directory: 'directory',
};

export const goToUppperDir = async () => {
  chdir('../');
};

export const changeDir = async (args) => {
  const [path] = args;
  if (!path) showInvalidInput();
  chdir(path);
};

export const listDir = async () => {
  const entries = await readdir(cwd(), { withFileTypes: true });

  const table = entries.filter(checkIsFileOrFolder).map(addTypeToEnt);
  const sortedByName = [...table].sort(sortEntriesByName);
  const sortedByNameAndType = [...sortedByName].sort(sortEntriesByType);

  console.table(sortedByNameAndType);
  console.log('');
};

const addTypeToEnt = (entry) => {
  if (entry.isFile()) {
    return { ...entry, type: EntryTypes.File };
  }
  if (entry.isDirectory()) {
    return { ...entry, type: EntryTypes.Directory };
  }
};

const checkIsFileOrFolder = (entry) => entry.isFile() || entry.isDirectory();

const sortEntriesByType = (entryA, entryB) =>
  entryA.type.localeCompare(entryB.type);

const sortEntriesByName = (entryA, entryB) =>
  entryA.name.localeCompare(entryB.name);
