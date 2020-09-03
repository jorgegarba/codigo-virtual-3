import React, { useContext } from "react";
import PosMesas from "../components/PosMesas";
import PosCategorias from "../components/PosCategorias";
import PosPlatos from "../components/PosPlatos";
import PosComandaLista from "../components/PosComandaLista";
import PosContext from "../../../context/pos/posContext";

const Pos = () => {
  const localPosContext = useContext(PosContext);
  const { globalObjMesa, globalPagar } = localPosContext;

  return (
    <section className="tabla">
      <PosMesas />
      <div className="pedido">
        <div className="carta">
          <PosCategorias />
          <PosPlatos />
        </div>
        <div className="boleta">
          <h3>Pedido</h3>
          <div className="comanda">
            {globalObjMesa ? (
              <>
                <h4 className="comanda__mesa">Mesa {globalObjMesa.mesa_nro}</h4>
                <p className="comanda__usuario">Carlos Jimenez</p>
                <hr />
                <PosComandaLista />
                <button
                  className="boton boton-success boton-block"
                  onClick={() => {
                    globalPagar();
                  }}
                >
                  PAGAR
                </button>
              </>
            ) : (
              <strong>No hay ninguna mesa seleccionada 😪</strong>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pos;
