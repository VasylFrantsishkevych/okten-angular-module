import {ITodos} from "./todos.interface";

export interface ITodosDetails extends ITodos {
  userId: number;
  completed: boolean;
}
