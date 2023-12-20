import { useContext } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import AppContext from './context';

function App() {
  const ctx = useContext(AppContext);
  const { todos, setTodos, setFetchTodos } = ctx;

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
      });
      console.log(response);
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const editTodo = async (e, todo, description) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      setFetchTodos(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <TodoInput />
      <TodoList deleteTodo={deleteTodo} editTodo={editTodo} />
    </>
  );
}

export default App;
