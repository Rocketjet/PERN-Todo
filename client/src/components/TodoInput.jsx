import { useContext, useState } from 'react';
import AppContext from '../context';

const TodoInput = () => {
  const ctx = useContext(AppContext);
  const { setFetchTodos } = ctx;
  const [description, setDescription] = useState('');
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      setFetchTodos(true);
      setDescription('')
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <h1 className='text-center pt-5'>Todo List</h1>
      <form className='d-flex justify-content-center gap-3 mt-5' onSubmit={onSubmit}>
        <input
          type='text'
          className='form-control w-50'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className='btn btn-success' type='submit'>Add</button>
      </form>
    </>
  );
};

export default TodoInput;
