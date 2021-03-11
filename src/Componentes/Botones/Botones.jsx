import React from "react";
import Boton from "./Boton/Boton";

const Botones = (props) => {
  const { llamando, anyadirDigito, borrarUltimoDigito } = props;
  return (
    <div>
      <div className="botones">
        <ol className="teclado">
          {
            [...[...Array(10)].map((x, i) => i).slice(1), 0].map(digito => (
              <Boton key={digito} tipo={"numero"} elementoMostrar={digito} llamando={llamando} funcionOnClick={anyadirDigito} />
            ))
          }
          <Boton tipo={"borrar"} elementoMostrar={"borrar"} llamando={llamando} funcionOnClick={borrarUltimoDigito} />
        </ol>
      </div>
    </div>
  );
};

export default Botones;
