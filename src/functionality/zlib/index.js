import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createBrotliCompress, createBrotliDecompress } from 'node:zlib';
import { appendNewLineTo, validatePath } from '../../utils/index.js';

const compressFile = async (args) => {
  const [path, pathToDest] = args;
  await validatePath(path);

  const src = createReadStream(path);
  const brotliCompress = createBrotliCompress();
  const dest = createWriteStream(pathToDest);

  await pipeline(src, brotliCompress, dest);

  console.log(appendNewLineTo('File has been compressed successfully.'));
};

const decompressFile = async (args) => {
  const [path, pathToDest] = args;
  await validatePath(path);

  const src = createReadStream(path);
  const brotliDecompress = createBrotliDecompress();
  const dest = createWriteStream(pathToDest);

  await pipeline(src, brotliDecompress, dest);

  console.log(appendNewLineTo('File has been decompressed successfully.'));
};

export { compressFile, decompressFile };
