export const initialstate = {
  todos: [],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "All_TODOS": {
      return {
        ...state,
        todos: action.payload,
      };
    }
    case "ADD_TODO": {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }
    case "TOGGLE_TODO": {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    }
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...action.payload } : todo
        ),
      };
    default: {
      return state;
    }
  }
};
