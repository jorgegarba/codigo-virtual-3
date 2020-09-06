import React from "react";
import PosHeader from "../components/PosHeader";
import PosNavigation from "../components/PosNavigation";
import { PosMesas } from "../components/PosMesas";
import PosCategorias from "../components/PosCategorias";
import PosState from "../../../context/pos/posState";
import PosPlatos from "../components/PosPlatos";
import { PosComanda } from "../components/PosComanda";
// import "./../../../styles/"
const PosScreen = () => {
  return (
    <PosState>
      <PosHeader />
      <main className="container">
        <PosNavigation />
        <section className="tabla">
          <PosMesas />
          <div className="pedido">
            <div className="carta">
              <PosCategorias />
              <PosPlatos />
            </div>
            <div className="boleta">
              <h3>Pedido</h3>
              <PosComanda />
            </div>
          </div>
        </section>
      </main>
    </PosState>
  );
};

export default PosScreen;
