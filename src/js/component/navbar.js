import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          {store.user} {store.lastname}
        </span>
      </Link>
      <div className="ml-auto">
        <button
          className="btn btn-primary"
          onClick={() => actions.funcionDemo()}
        >
          Este es el boton de octavio
        </button>
      </div>
    </nav>
  );
};
