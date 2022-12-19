const { argv } = process;

export const username = argv[2].replace('--username=', '');
