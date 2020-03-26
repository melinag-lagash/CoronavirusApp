import React, { useState, useEffect } from "react";
import Axios from "axios";

let letterStyle = { fontFamily: "Arial Narrow" };

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
    <div className="card blue-grey darken-1" style={letterStyle}>
      <div className="card-content white-text">
        <h2>Global covid-19 Data </h2>
        <p className="cases"> Casos: </p>
        <h3>{globalState.cases} </h3>
        <p> Muertes:</p>
        <h3 className="red-text">{globalState.deaths} </h3>
        <p> Recuperados:</p>{" "}
        <h3 className="green-text">{globalState.recovered} </h3>{" "}
      </div>
    </div>
  );
};
export default Global;
