import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { appendNewLineTo } from '../../utils/index.js';

const calculateHash = async (args) => {
  const [path] = args;

  const fileContents = await readFile(path);
  const hash = createHash('sha256').update(fileContents).digest('hex');

  console.log(appendNewLineTo(`The hash for this file is ${hash}`));;
};

export default calculateHash;
