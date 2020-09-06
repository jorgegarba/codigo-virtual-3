import React, { useContext } from "react";
import PropTypes from "prop-types";
import PosContext from "../../../context/pos/posContext";
const PosMesa = ({ objMesa }) => {
  const { global_mesa_id, setMesaActual } = useContext(PosContext);

  return (
    // <li className="mesas__mesa active">
    <li
      className={
        global_mesa_id === +objMesa.mesa_id
          ? "mesas__mesa active"
          : "mesas_mesa"
      }
      onClick={() => setMesaActual(objMesa.mesa_id)}
    >
      <span className="mesas__titulo">Mesa</span>
      <span className="mesas__numero">{objMesa.mesa_nro}</span>
    </li>
  );
};

PosMesa.propTypes = {
  objMesa: PropTypes.object.isRequired,
};

export default PosMesa;
