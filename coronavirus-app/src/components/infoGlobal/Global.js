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
        <p className="cases"> Casos: </p> <p>{globalState.cases} </p>{" "}
        <p> Muertes:</p>
        <p className="red-text">{globalState.deaths} </p>
        <p> Recuperados:</p>{" "}
        <p className="green-text">{globalState.recovered} </p>{" "}
      </div>
    </div>
  );
};
export default Global;
