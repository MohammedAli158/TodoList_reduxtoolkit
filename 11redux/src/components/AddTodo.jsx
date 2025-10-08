import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from "../features/todoSlice.js";

function AddTodo() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="mt-12 px-4 flex justify-center items-center gap-3"
    >
      <input
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-[#0b1b33] border border-blue-600 focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400 py-2 px-4 rounded w-64 shadow-inner shadow-blue-950/60"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold px-6 py-2 rounded-lg shadow shadow-blue-900/50 transition-transform duration-150 active:scale-95"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
