import React, { useState } from "react";
import Header from "./componentes/Header";

const App = () => {
  const titulo = "REACT - CodiGo";
  const [contador, setContador] = useState(50);

  const restar = (e) => {
    // console.log(e);
    setContador(contador - 1);
  };
  const sumar = (e) => {
    // console.log(e);
    console.log(contador);
    setContador(contador + 1);
  };

  console.log("dibujando App =)");
  return (
    <>
      <Header></Header>
      <main>
        <h1> {titulo}</h1>
        <button onClick={restar}>-1</button>
        <span>{contador}</span>

        <button onClick={sumar}>+1</button>
      </main>
    </>
  );
};

export default App;
