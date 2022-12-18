import { unlink } from 'node:fs/promises';

const deleteFile = async (args) => {
  const [path] = args;
  
  await unlink(path);
};

export default deleteFile;
