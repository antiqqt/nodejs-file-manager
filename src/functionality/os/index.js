import { EOL, homedir, arch, userInfo, cpus } from 'node:os';
import { showInvalidInput } from '../../messages/index.js';
import { appendNewLineTo } from '../../utils/index.js';

export const executeOSCommand = (args) => {
  const [arg] = args;

  switch (arg) {
    case '--EOL': {
      console.log(
        appendNewLineTo(
          `Your default system End-Of-Line is ${JSON.stringify(EOL)}`
        )
      );
      break;
    }

    case '--cpus': {
      const cpuInfo = cpus().map((cpu) => ({
        model: cpu.model,
        clockRate: convertMHzToGZ(cpu.speed),
      }));

      console.table(cpuInfo);
      console.log('');
      break;
    }

    case '--homedir': {
      console.log(appendNewLineTo(`Your home directory is ${homedir()}`));
      break;
    }

    case '--username': {
      console.log(appendNewLineTo(`Your username is ${userInfo().username}`));
      break;
    }

    case '--architecture': {
      console.log(appendNewLineTo(`Your CPU architecture is ${arch()}`));
      break;
    }

    default: {
      showInvalidInput();
      break;
    }
  }
};

const convertMHzToGZ = (MHz) => MHz / 1000;
