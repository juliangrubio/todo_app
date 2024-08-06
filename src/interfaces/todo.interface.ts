import { TodoActionType } from '../reducers/todos.reducer';

export interface Todo {
  id: string;
  title: string;
  finished: boolean;
}

export interface todoReducerProps {
  data: {
    todo: Todo;
    dispatch: React.Dispatch<TodoActionType>;
  };
}

export enum pickScreen {
  login = 'login',
  register = 'register',
  todos = 'todos',
}
