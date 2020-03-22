import React, { useState, useEffect } from "react";
import Axios from "axios";

const Global = () => {
  const [globalState, setGlobalState] = useState({});
  const [conectado, setConectado] = useState({ conectado: false });

  useEffect(() => {
    if (!conectado.conectado) {
      const getInfo = async () => {
        const url = " https://coronavirus-19-api.herokuapp.com/all";
        const respuesta = await Axios.get(url);
        const globalInfo = respuesta.data;
        setGlobalState(globalInfo);
        console.log(globalInfo);
      };
      getInfo();
      setConectado({ conectado: true });
    }
  }, [conectado]);

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>Numero de casos Global:{globalState.cases} </h2>
        <p className="cases"> </p>
        <p> numero de muertes: {globalState.deaths} </p>
        <p> numero de recuperados: {globalState.recovered} </p>
      </div>
    </div>
  );
};
export default Global;
