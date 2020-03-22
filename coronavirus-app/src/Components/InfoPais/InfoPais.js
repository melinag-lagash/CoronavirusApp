import React from "react";
function InfoPais({ resultado }) {
  let pais = "";
  let cases = "0";
  if (resultado !== undefined) {
    pais = resultado.country;
    cases = resultado.cases;
  }
  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>Pais:{pais} </h2>
        <p className="cases"> </p>
        <p> numero de casos: {cases} </p>
      </div>
    </div>
  );
}
export default InfoPais;