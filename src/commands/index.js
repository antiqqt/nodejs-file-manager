import {
  showCurrentDirectory,
  showInvalidInput,
  showOperationFailed
} from '../messages/index.js';
import commandCallbacks from './commandCallbacks.js';

export const executeCommand = async (input) => {
  try {
    const { command, args } = parseCommand(input);

    const currentCb = commandCallbacks.has(command)
      ? commandCallbacks.get(command)
      : showInvalidInput;

    await currentCb(args);
  } catch {
    showOperationFailed();
  }
};

const parseCommand = (input) => {
  const [command, ...args] = input.match(/("[^"]+"|[^"\s]+)/g);

  const trimmedArgs = args.map((a) =>
    a.startsWith('"') || a.startsWith("'") ? a.slice(1, -1) : a
  );

  return {
    command,
    args: trimmedArgs,
  };
};
