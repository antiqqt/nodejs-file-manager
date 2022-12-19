import { unlink } from 'node:fs/promises';

const deleteFile = async (args) => {
  const [path] = args;

  await unlink(path);

  console.log('The file was removed successfully\n');
};

export default deleteFile;
