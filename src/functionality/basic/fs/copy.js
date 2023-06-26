import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { basename, join } from 'path';
import { validatePath } from '../../../utils/index.js';

const copy = async (args) => {
  const [path, pathToNewDir] = args;
  await validatePath(path);
  await validatePath(pathToNewDir);

  const pathToNewFile = join(pathToNewDir, basename(path));

  const rs = createReadStream(path);
  const ws = createWriteStream(pathToNewFile);

  await pipeline(rs, ws);

  console.log('The file was copied successfully\n');
};

export default copy;
