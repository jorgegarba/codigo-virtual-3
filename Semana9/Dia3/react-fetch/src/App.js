import React from "react";
import Header from "./components/Header";
import Personas from "./components/Personas";

const App = () => {
  return (
    <>
      <Header />
      <main className="container-fluid">
        <div className="row">
          <Personas />
          <div className="col-md-4"></div>
        </div>
      </main>
    </>
  );
};

export default App;
