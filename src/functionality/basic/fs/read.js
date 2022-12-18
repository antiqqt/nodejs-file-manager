import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const { stdout } = process;

const read = async (args) => {
  const [path] = args;
  
  await pipeline(createReadStream(path), stdout);
};

export default read;
