import { useState } from 'react';

const TodoEdit = ({ todo, editTodo }) => {
  const [description, setDescription] = useState(todo.description);

  return (
    <>
      <button
        type='button'
        className='btn btn-warning'
        data-bs-toggle='modal'
        data-bs-target={`#editModal${todo.todo_id}`}
      >
        Edit
      </button>

      <div
        className='modal'
        tabIndex='-1'
        id={`editModal${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Edit Todo</h5>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              <input
                type='text'
                className='form-control'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-warning'
                data-bs-dismiss='modal'
                onClick={(e) => editTodo(e, todo, description)}
              >
                Save
              </button>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoEdit;
