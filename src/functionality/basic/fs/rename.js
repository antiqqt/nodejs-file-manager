import { rename as fsRename, access } from 'node:fs/promises';
import { join, dirname } from 'path';

const NoEntErrorCode = 'ENOENT';

const rename = async (args) => {
  const [path, newFileName] = args;
  const pathToNew = join(dirname(path), newFileName);

  await fsRename(path, pathToNew);

  console.log('The file was renamed successfully\n');
};

export default rename;
