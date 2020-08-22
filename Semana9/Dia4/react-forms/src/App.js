import React from "react";
import Formulario from "./components/Formulario";
import FormularioEz from "./components/FormularioEz";
import FormCrearPlato from "./components/FormCrearPlato";

const App = () => {
  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col">
            <FormCrearPlato />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
