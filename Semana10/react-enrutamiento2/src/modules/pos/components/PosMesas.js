import React from "react";
import PosMesaItem from "./PosMesaItem";
import { useFetch } from "../../../hooks/useFetch";
import PosCargando from "./PosCargando";

const PosMesas = () => {
  const { result, loading } = useFetch("/mesa");

  return (
    <div className="mesas">
      <ul className="mesas__lista">
        {loading && <PosCargando />}
        {!loading && <PosMesaItem />}
      </ul>
      <div className="mesas__info"></div>
    </div>
  );
};

export default PosMesas;
