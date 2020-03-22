import React, { useState, useEffect, Fragment } from "react";
import Header from "./Components/Header/Header";
import Formulario from "./Components/Formulario/Formulario";
import Axios from "axios";
import Error from "./Components/Error";
import InfoPais from "./Components/InfoPais/InfoPais";
import Global from "./Components/Global";

function App() {
  //state Principal

  const [country, guardarPais] = useState("");
  const [error, guardarError] = useState(false);
  const [resultado, guardarResultado] = useState();

  useEffect(() => {
    if (country === "") return;

    const getPaises = async () => {
      const url = "https://coronavirus-19-api.herokuapp.com/countries";
      const respuesta = await Axios.get(url);
      console.log(respuesta);
      const resultado = await respuesta.data.find(a => {
        return a.country === country;
      });
      console.log("resultado.data", resultado);
      guardarResultado(resultado);
      console.log("Casos de resultado", resultado.cases);
    };
    getPaises();
  }, [country]);

  const datosConsulta = data => {
    console.log(data);
    if (data.country === "") {
      guardarError(true);
      return;
    }
    guardarPais(data.country);
    console.log(data.country);
    guardarError(false);
  };

  let componente = <Global />;
  if (error) {
    componente = <Error mensaje="Seleccione país en búsqueda" />;
  }
  if (resultado) {
    console.log(resultado);
    componente = <InfoPais resultado={resultado} />;
  }

  return (
    <Fragment>
      <div className="App light-blue" style={{ height: "700px" }}>
        <Header titulo="Coronavirus Global" />
        <div className="Contenedor-form " style={{ marginTop: "80px" }}>
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <Formulario datosConsulta={datosConsulta} />
              </div>
              <div className="col s12 m6">{componente}</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
