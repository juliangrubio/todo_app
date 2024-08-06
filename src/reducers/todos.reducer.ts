import { Todo } from '../interfaces/todo.interface';

export interface TodoState {
  todos: Todo[];
  // completedTodos: Todo[];
  completedTodos: boolean;
}

export type TodoActionType =
  | { type: '[TODO] - GetAllTodo' }
  | { type: '[TODO] - GetCompletedTodo' }
  | { type: '[TODO] - PostTodo'; payload: Todo[] }
  | { type: '[TODO] - UpdateTodo'; payload: Todo }
  | { type: '[TODO] - DeleteTodo'; payload: Todo }
  | { type: '[TODO] - DeleteCompletedTodo' };

export const todoReducer = (state: TodoState, action: TodoActionType): TodoState => {
  switch (action.type) {
    case '[TODO] - GetAllTodo':
      return {
        ...state,
        // todos: [...state.todos],
        // todos: state.allTodos ? [...state.allTodos] : [...state.todos],
        completedTodos: false,
      };

    case '[TODO] - GetCompletedTodo':
      return {
        ...state,
        completedTodos: true,
        // todos: [...state.todos.filter((todo) => todo.finished === true)],
      };

    case '[TODO] - PostTodo':
      return {
        ...state,
        completedTodos: false,
        todos: [...action.payload, ...state.todos],
      };

    case '[TODO] - UpdateTodo': {
      const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload.id);
      if (todoIndex !== -1) {
        const todos = [...state.todos];
        todos[todoIndex] = action.payload;
        return { ...state, completedTodos: false, todos };
      }
      return state;
    }

    case '[TODO] - DeleteTodo':
      return {
        ...state,
        completedTodos: false,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload.id)],
      };

    case '[TODO] - DeleteCompletedTodo':
      console.log();
      return {
        ...state,
        completedTodos: false,
        todos: [...state.todos.filter((todo) => todo.finished === false)],
      };

    default:
      return state;
  }
};
