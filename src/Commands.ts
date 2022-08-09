import { Command } from './Command';
import { Hello } from './commands/Hello';
import { Debug } from './commands/Debug';
import { Clean } from './commands/Clean';
import { link } from './commands/Link';

export const Commands:Command[]=[Hello,Debug,Clean,link];