import React from "react";

let letterStyle = { fontFamily: "Arial Narrow" };

function InfoPais({ resultado }) {
  let [
    pais,
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    active,
    critical
  ] = "";

  if (resultado !== undefined) {
    pais = resultado.country;
    cases = resultado.cases;
    todayCases = resultado.todayCases;
    deaths = resultado.deaths;
    todayDeaths = resultado.todayDeaths;
    recovered = resultado.recovered;
    active = resultado.active;
    critical = resultado.critical;
  }
  return (
    <div className="card-panel blue-grey darken-1 col s12 center">
      <div className="white-text" style={letterStyle}>
        <h2> {pais} </h2>
        <p className="cases"> </p>
        <p> N° de casos: </p>
        <p>{cases}</p> <p> N° de casos hoy:</p>
        <p>{todayCases} </p> <p> N° de muertes:</p>{" "}
        <p className="red-text">{deaths}</p>
        <p> N° de muertes hoy:</p> <p className="red-text">{todayDeaths}</p>{" "}
        <p> N° de recuperados:</p> <p className="green-text">{recovered} </p>
        <p> N° de casos activos: </p>
        <p>{active} </p> <p> N° casos críticos: </p>
        <p className="red-text">{critical}</p>{" "}
      </div>
    </div>
  );
}
export default InfoPais;
