import { createBrotliCompress, createBrotliDecompress } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { unlink } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import { appendNewLineTo } from '../../utils/index.js';

const compressFile = async (args) => {
  const [path, pathToDest] = args;

  try {
    const src = createReadStream(path);
    const brotliCompress = createBrotliCompress();
    const dest = createWriteStream(pathToDest);

    await pipeline(src, brotliCompress, dest);

    console.log(appendNewLineTo('File has been compressed successfully.'));
  } catch (error) {
    await cleanup(pathToDest);
    throw error;
  }
};

const decompressFile = async (args) => {
  const [path, pathToDest] = args;

  try {
    const src = createReadStream(path);
    const brotliDecompress = createBrotliDecompress();
    const dest = createWriteStream(pathToDest);

    await pipeline(src, brotliDecompress, dest);

    console.log(appendNewLineTo('File has been decompressed successfully.'));
  } catch (error) {
    await cleanup(pathToDest);
    throw error;
  }
};

const cleanup = async (path) => {
  unlink(path);
};

export { compressFile, decompressFile };
