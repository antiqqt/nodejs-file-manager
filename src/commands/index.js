import { showInvalidInput, showOperationFailed } from '../messages/index.js';
import commandCallbacks from './commandCallbacks.js';

export const executeCommand = (input) => {
  try {
    const { command, args } = parseCommand(input);
    console.log({ command, args });

    const currentCb = commandCallbacks.has(command)
      ? commandCallbacks.get(command)
      : showInvalidInput;

    currentCb(args);
  } catch (e) {
    console.error(e);
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
