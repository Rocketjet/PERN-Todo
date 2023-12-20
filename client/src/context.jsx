import React, { useEffect, useState } from 'react';

const AppContext = React.createContext();

export const AppContextProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [fetchTodos, setFetchTodos] = useState(false);
  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos');
      setTodos(await response.json());
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();

    return () => {
      setFetchTodos(false);
    }
  }, [fetchTodos]);

  return (
    <AppContext.Provider
      value={{
        todos: todos,
        setTodos: setTodos,
        fetchTodos: fetchTodos,
        setFetchTodos: setFetchTodos,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
