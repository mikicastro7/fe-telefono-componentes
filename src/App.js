import { useState } from "react";
import Llamando from "./Componentes/Llamando";

const maxDigitos = 9;

let temporizador;

function App() {
  const [numero, setNumero] = useState("");
  const [llamando, setLlamando] = useState(false);
  const esNumeroCompleto = numero.length === maxDigitos;

  const anyadirDigito = digito => {
    if (numero.length < maxDigitos) {
      setNumero(numero + digito);
    }
  };
  const borrarUltimoDigito = () => setNumero(numero.slice(0, -1));
  /* const borrarNumero = () => setNumero(""); */

  const llamar = e => {
    e.preventDefault();
    if (esNumeroCompleto) {
      setLlamando(true);
      temporizador = setTimeout(() => {
        colgar();
      }, 5000);
    }
  };

  const colgar = e => {
    if (typeof e !== "undefined") {
      e.preventDefault();
    }

    setNumero("");
    setLlamando(false);
    clearTimeout(temporizador);
  };

  return (
    <div className="contenedor">
      <Llamando llamando={llamando}/>
      <main className="telefono">
        <div className="botones">
          <ol className="teclado">
            {
              [...[...Array(10)].map((x, i) => i).slice(1), 0].map(digito => (
                <li key={digito}>
                  <button disabled={llamando} onClick={() => anyadirDigito(digito)}>{digito}</button>
                </li>
              ))
            }
            <li><button disabled={llamando} className="big" onClick={borrarUltimoDigito}>borrar</button></li>
          </ol>
        </div>
        <div className="acciones">
          <span className="numero">{numero}</span>
          {
            !llamando
              ? <a
                href="llamar"
                className={`llamar${esNumeroCompleto ? " activo" : ""}`}
                onClick={llamar}
              >Llamar</a>
              : <a href="colgar" className="colgar activo" onClick={colgar}>Colgar</a>
          }
        </div>
      </main>
    </div>
  );
}

export default App;
