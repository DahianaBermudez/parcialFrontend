import React, { useState } from "react";
import Card from "./Card";

const Form = ({ }) => {
  const [pet, setPet] = useState({
    name: "",
    like: "",
  });

  const [error, setError] = useState(false);
  const [complited, setComplited] = useState(false);
  
  const handleName = (e) => {
    setPet({ ...pet, name: e.target.value });
  };
  const handleLike = (e) => {
    setPet({ ...pet, like: e.target.value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", pet)
    if (
      pet.name.trim().length >= 3 &&
      !pet.name.startsWith(" ") &&
      pet.like.trim().length >= 6 
    ) {
      setError(false);
      setComplited(true)
    } else {
      setError(true);
      setComplited(false)
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre de tu mascota: </label>
        <input type="text" onChange={handleName} />
        <label>Que aman mas hacer juntos: </label>
        <input type="text" onChange={handleLike} />
        <button>Enviar</button>
      </form>
      {error ? (
        <h4 style={{ color: "red" }}>Por favor chequea que la información sea correcta</h4>
      ) : null}
       {complited ? (
        <Card{...pet} ></Card>
      ) : null}
    </div>
  );
};

export default Form;