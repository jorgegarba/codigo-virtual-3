import React from "react";
import Header from "./components/Header";
import Mapa from "./components/Mapa";
import "./styles/estilos.css";
const App = () => {
  return (
    <>
      <Header />
      <main className="container-fluid">
        <div className="row">
          <div className="col-md-4">BOTONES DE ACCIÓN</div>
          <div className="col-md-8">
            <Mapa />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
