import React from "react";

const Boton = (props) => {
  const { tipo, elementoMostrar, llamando, funcionOnClick } = props;

  const tipoDeBotonCrear = () => {
    if (tipo === "numero") {
      return <button disabled={llamando} onClick={() => funcionOnClick(elementoMostrar)}>{elementoMostrar}</button>;
    } else {
      return <button className="big" disabled={llamando} onClick={() => funcionOnClick(elementoMostrar)}>{elementoMostrar}</button>;
    }
  };
  return (
    <div>
      {tipoDeBotonCrear()}
    </div>
  );
};

export default Boton;
