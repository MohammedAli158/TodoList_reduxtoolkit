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
    <form className="space-x-3 mt-12 px-4 flex justify-center items-center" onSubmit={addTodoHandler}>
      <input
        type="text"
        className="bg-yellow-100 text-stone-800 placeholder-stone-500 border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 py-2 px-4 rounded w-64"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
