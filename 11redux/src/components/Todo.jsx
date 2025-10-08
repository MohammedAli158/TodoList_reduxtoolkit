import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, editTodo } from "../features/todoSlice.js";

function Todo() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const handleEditClick = () => setIsTodoEditable(prev => !prev);

  return (
    <div className="mt-10 space-y-4 px-4">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="list-none bg-gradient-to-r from-[#0a1a2f] to-[#142d4c] border-l-4 border-blue-400 shadow-lg shadow-blue-900/40 rounded-xl p-4 flex items-center justify-between transition-all duration-200 hover:shadow-blue-700/60"
        >
          <input
            type="text"
            readOnly={!isTodoEditable}
            value={todo.text}
            onChange={(e) =>
              dispatch(editTodo({ text: e.target.value, id: todo.id }))
            }
            className={`w-full text-white placeholder-gray-400 px-3 py-1 rounded bg-transparent focus:outline-none ${
              isTodoEditable
                ? 'border border-blue-400 shadow-inner shadow-blue-700/50'
                : ''
            }`}
          />
          <div className="ml-4 flex gap-2">
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white font-semibold px-4 py-1 rounded-lg shadow shadow-blue-900/60 transition-transform duration-150 active:scale-95"
            >
              Remove
            </button>
            <button
              onClick={handleEditClick}
              className={`${
                isTodoEditable
                  ? 'bg-gradient-to-r from-emerald-500 to-green-600'
                  : 'bg-gradient-to-r from-blue-500 to-indigo-600'
              } hover:opacity-90 text-white font-semibold px-4 py-1 rounded-lg shadow shadow-blue-800/50 transition-transform duration-150 active:scale-95`}
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
