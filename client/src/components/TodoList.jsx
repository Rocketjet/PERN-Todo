import { useContext } from 'react';
import TodoEdit from './TodoEdit';
import AppContext from '../context';

const TodoList = ({ deleteTodo, editTodo }) => {
  const ctx = useContext(AppContext);
  const { todos } = ctx;

  return (
    <>
      <table className='table mt-5 text-center'>
        <thead className='table-secondary'>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <TodoEdit todo={todo} editTodo={editTodo} />
              </td>
              <td>
                <button className='btn btn-danger' onClick={() => deleteTodo(todo.todo_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoList;
