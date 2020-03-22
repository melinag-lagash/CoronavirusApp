import React from "react";

function Global({ globalInfo }) {
  let cases = "0";
  let deaths = "0";
  let recovered = "0";
  if (globalInfo !== undefined) {
    deaths = globalInfo.deaths;
    cases = globalInfo.cases;
    recovered = globalInfo.recovered;
  }
  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>Numero de casos Global:{cases} </h2>
        <p className="cases"> </p>
        <p> numero de muertes: {deaths} </p>
        <p> numero de recuperados: {recovered} </p>
      </div>
    </div>
  );
}
export default Global;
