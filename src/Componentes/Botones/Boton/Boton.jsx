import React from "react";

const Boton = (props) => {
  const { tipo, elementoMostrar, llamando, funcionOnClick } = props;

  return (
    <div>
      <button className={tipo === "numero" ? "" : "big"} disabled={llamando} onClick={() => funcionOnClick(elementoMostrar)}>{elementoMostrar}</button>
    </div>
  );
};

export default Boton;
