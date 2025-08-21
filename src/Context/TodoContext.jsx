import { createContext, useContext, useEffect, useReducer } from "react";
import { todoReducer, initialstate } from "../Reducer/todoReducer";
import { data } from "../data/data";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todostate, todoDispatch] = useReducer(todoReducer, initialstate);

  const getData = () => {
    todoDispatch({
      type: "All_TODOS",
      payload: data,
    });
  };

  useEffect(() => {
    console.log("Fetching initial data...");
    getData();
  }, []);

  return (
    <TodoContext.Provider value={{ todostate, todoDispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
