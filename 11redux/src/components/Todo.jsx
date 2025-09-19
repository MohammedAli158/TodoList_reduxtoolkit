import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, editTodo } from "../features/todoSlice.js";

function Todo() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const handleEditClick = () => {
    setIsTodoEditable(prev => !prev);
  };

  return (
    <div className="mt-10 space-y-4 px-4">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="list-none bg-yellow-100 border-l-4 border-yellow-700 shadow-md rounded-xl p-4 flex items-center justify-between"
        >
          <input
            type="text"
            readOnly={!isTodoEditable}
            value={todo.text}
            onChange={(e) =>
              dispatch(editTodo({ text: e.target.value, id: todo.id }))
            }
            className={`bg-yellow-50 w-full text-brown-800 outline-none px-3 py-1 rounded ${
              isTodoEditable ? 'border border-yellow-500' : ''
            }`}
          />
          <div className="ml-4 flex gap-2">
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-4 py-1 rounded shadow"
            >
              Remove
            </button>
            <button
              onClick={handleEditClick}
              className="bg-yellow-500 hover:bg-yellow-600 text-brown-900 font-semibold px-4 py-1 rounded shadow"
            >
              {isTodoEditable ? 'Save' : 'Edit'}
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}

export default Todo;
