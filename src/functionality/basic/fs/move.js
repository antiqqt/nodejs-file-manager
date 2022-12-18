import copy from './copy.js';
import deleteFile from './delete.js';

const move = async (args) => {
  await copy(args);
  await deleteFile(args);
};

export default move;
