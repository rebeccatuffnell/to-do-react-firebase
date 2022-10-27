import React from "react";
import {AiOutlinePlus} from 'react-icons/ai';

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#3A03AC] to-[#1E90FF]`,
};

function App() {
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>To-do App</h3>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder="Add To-do" />
          <button className={style.button}><AiOutlinePlus size={30} /></button>
        </form>
      </div>
    </div>
  );
}

export default App;
