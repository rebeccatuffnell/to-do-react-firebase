import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ToDo from "./ToDo";
import {db} from './firebase';
import { query, collection, onSnapshot } from 'firebase/firestore';

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#3A03AC] to-[#1E90FF]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-green-500 text-slate-100`,
  count: `text-center p-2`,
};

function App() {
  const [todos, setTodos] = useState([]);

  // Create to-do

  // Read to-do from Firebase
useEffect(() => {
  const q = query(collection(db, 'todos'))
  const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
    let todosArr = []
    QuerySnapshot.forEach((doc) => {
      todosArr.push({...doc.data(), id: doc.id})
    });
    setTodos(todosArr)
  })
  return () => unsubscribe()
},[])

  // Update to-do in Firebase

  // Delete to-do

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>To-do List</h3>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder="Add To-do" />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <ToDo key={index} todo={todo} />
          ))}
        </ul>
        <p className={style.count}>You have 1 to-do</p>
      </div>
    </div>
  );
}

export default App;
