import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
export const Home = () => {
  // Deestructurar en {store, actions}
  // Declaramos un estado vacio
  const { store, actions } = useContext(Context);
  console.log(store.characters);
  // Estados locales
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    actions.addTodo(todo);
  };

  return (
    // Meterle un usuario desde el store
    <div className="text-center mt-5">
      <h1>Hola usuario</h1>
      <div className="d-flex justify-content-center">
        <input
          placeholder="tarea"
          value={todo}
          onChange={(event) => handleChange(event)}
        />
        <button onClick={() => handleClick()}>Agregar</button>
      </div>
      <div className="my-5 border">
        {store.todoList.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
      </div>
    </div>
  );
};
