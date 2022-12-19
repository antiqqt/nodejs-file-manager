import { createReadStream, createWriteStream } from 'node:fs';
import { join, basename } from 'path';
import { pipeline } from 'node:stream/promises';
import { unlink } from 'node:fs/promises';

const copy = async (args) => {
  const [path, pathToNewDir] = args;

  const rs = createReadStream(path);
  const pathToNewFile = join(pathToNewDir, basename(path));
  const ws = createWriteStream(pathToNewFile);

  const cleanup = async () => {
    unlink(pathToNewFile);
  };

  try {
    await pipeline(rs, ws);

    console.log('The file was copied successfully\n');
  } catch (error) {
    await cleanup();
    throw error;
  }
};

export default copy;
