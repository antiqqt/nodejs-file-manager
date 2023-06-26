import { showInvalidInput, showOperationFailed } from '../messages/index.js';
import commandMap from './commandMap.js';

export const executeCommand = async (input) => {
  try {
    const parsed = parseCommand(input);

    if (!commandMap.has(parsed.command)) {
      showInvalidInput();
      return;
    }
    const command = commandMap.get(parsed.command);

    const isValidArgCount = parsed.args.length === command.argCount;
    if (!isValidArgCount) {
      showInvalidInput();
      return;
    }

    await command.callback(parsed.args);
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
