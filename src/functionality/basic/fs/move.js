import copy from './copy.js';
import deleteFile from './delete.js';

const move = async (args) => {
  await copy(args);
  await deleteFile(args);

  console.log('The file was moved successfully. End of moving process :)\n');
};

export default move;
