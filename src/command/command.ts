import type { CommandType } from "./command-type";
import type { Commands } from "./commands";

export interface Command<T extends CommandType = CommandType> {
  type: T;
  payload: Commands[T];
}
