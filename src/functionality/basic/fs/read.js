import { createReadStream } from 'node:fs';

const read = async (args) => {
  const [path] = args;

  return new Promise((resolve, reject) => {
    const rs = createReadStream(path, { encoding: 'utf-8' });

    rs.on('data', (data) => {
      console.log(data);
    });

    rs.on('error', (error) => {
      reject(error);
    });

    rs.on('end', () => {
      console.log('The file was read successfully\n');
      resolve();
    });
  });
};

export default read;
