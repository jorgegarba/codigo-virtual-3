import React from "react";

const PosMesas = () => {
  return (
    <div className="mesas">
      <ul className="mesas__lista">
        <li className="mesas__mesa">
          <span className="mesas__titulo">Mesa</span>
          <span className="mesas__numero">01</span>
        </li>
        <li className="mesas__mesa">
          <span className="mesas__titulo">Mesa</span>
          <span className="mesas__numero">02</span>
        </li>
        <li className="mesas__mesa activo">
          <span className="mesas__titulo">Mesa</span>
          <span className="mesas__numero">02</span>
        </li>
        <li className="mesas__mesa">
          <span className="mesas__titulo">Mesa</span>
          <span className="mesas__numero">02</span>
        </li>
        <li className="mesas__mesa">
          <span className="mesas__titulo">Mesa</span>
          <span className="mesas__numero">02</span>
        </li>
        <li className="mesas__mesa">
          <span className="mesas__titulo">Mesa</span>
          <span className="mesas__numero">02</span>
        </li>
        <li className="mesas__mesa">
          <span className="mesas__titulo">Mesa</span>
          <span className="mesas__numero">02</span>
        </li>
        <li className="mesas__mesa">
          <span className="mesas__titulo">Mesa</span>
          <span className="mesas__numero">02</span>
        </li>
      </ul>
      <div className="mesas__info"></div>
    </div>
  );
};

export default PosMesas;
