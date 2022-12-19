import { rename as fsRename, access } from 'node:fs/promises';
import { join, dirname } from 'path';

const NoEntErrorCode = 'ENOENT';

const rename = async (args) => {
  const [path, newFileName] = args;
  const pathToNew = join(dirname(path), newFileName);

  try {
    const newFileNameExists = !(await access(pathToNew));
    if (newFileNameExists) throw new Error();
  } catch (e) {
    if (e.code === NoEntErrorCode) {
      await fsRename(path, pathToNew);

      console.log('The file was renamed successfully\n');

      return;
    }
    throw e;
  }
};

export default rename;
