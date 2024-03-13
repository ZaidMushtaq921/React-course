import React from 'react';

function MyButton({ clr, onClick }) {
  return (
    <button
      className='rounded-xl p-4 m-2 items-center text-black font-bold'
      style={{ backgroundColor: clr }}
      onClick={onClick}
    >
      {clr}
    </button>
  );
}

export default MyButton;
