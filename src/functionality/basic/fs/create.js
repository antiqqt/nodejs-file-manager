import { writeFile } from 'node:fs/promises';
import { cwd } from 'node:process';
import { join } from 'path';

const create = async (args) => {
  const [filename] = args;
  
  const path = join(cwd(), filename);
  await writeFile(path, '', { flag: 'wx' });

  console.log('The file was created successfully\n');
};

export default create;
