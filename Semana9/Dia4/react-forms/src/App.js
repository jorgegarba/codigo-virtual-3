import React from "react";
import Formulario from "./components/Formulario";
import FormularioEz from "./components/FormularioEz";

const App = () => {
  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col">
            <Formulario />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
