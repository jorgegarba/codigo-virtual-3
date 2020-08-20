import React, { useState } from "react";
import Header from "./components/Header";
import Personas from "./components/Personas";
import PersonaDetalle from "./components/PersonaDetalle";

const App = () => {
  const [personaSeleccionada, setPersonaSeleccionada] = useState(null);
  return (
    <>
      <Header />
      <main className="container-fluid">
        <div className="row mt-4">
          <Personas setPersonaSeleccionada={setPersonaSeleccionada} />
          <PersonaDetalle personaSeleccionada={personaSeleccionada} />
        </div>
      </main>
    </>
  );
};

export default App;
