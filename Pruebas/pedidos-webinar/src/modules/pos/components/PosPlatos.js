import React, { useEffect, useState, useContext } from "react";
import PosPlato from "./PosPlato";
import { getPlatosPorCategoria } from "../../../services/platos";
import PosContext from "../../../context/pos/posContext";

/**
 * calories: 30
    category: 2
    description: "Inca Kola es una bebida gaseosa peruana. Aunque es consumida principalmente en el Perú, también es comercializada en los Estados Unidos, Argentina, Ecuador, Chile y otras partes del mundo. Tiene un sabor dulce y un color amarillo-dorado"
    id: 3
    ingredients: ""
    name: "Inka Kola"
    photo: "https://api-order-tpv.herokuapp.com/media/item/inca-kola-calada_34.png"
    price: "4.50"
    state: true
 */
const PosPlatos = () => {
  const [platosPorCategoria, setPlatosPorCategoria] = useState([]);
  const { global_categoria_id } = useContext(PosContext);

  useEffect(() => {
    getPlatosPorCategoria(global_categoria_id)
      .then(({ item }) => {
        setPlatosPorCategoria(item);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [global_categoria_id]);

  return global_categoria_id === 0 ? (
    <span>Seleccione una categoría</span>
  ) : (
    <div className="carta__platos">
      {platosPorCategoria.map((objPlato) => (
        <PosPlato objPlato={objPlato} key={objPlato.id} />
      ))}
    </div>
  );
};

export default PosPlatos;
