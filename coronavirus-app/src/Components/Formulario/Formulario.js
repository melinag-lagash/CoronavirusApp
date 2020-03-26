import React, { useState } from "react";
let letterStyle = { fontFamily: "Arial Narrow" };
function Formulario({ datosConsulta }) {
  const [busqueda, guardarBusqueda] = useState({
    country: ""
  });

  const handleChange = e => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };

  const consultar = e => {
    e.preventDefault();
    datosConsulta(busqueda);
  };

  return (
    <div>
      <form onSubmit={consultar}>
        <div className="input-field col s12 " style={letterStyle}>
          <select onChange={handleChange} name="country">
            <option value="">Selecciona un pais</option>
            <option value="China">China</option>
            <option value="Italy">Italia</option>
            <option value="Spain">España</option>
            <option value="Iran">Iran</option>
            <option value="Germany">Alemania</option>
            <option value="USA">Estados Unidos</option>
            <option value="S. Korea">Sur Corea</option>
            <option value="Switzerland">Suiza</option>
            <option value="UK">Reino Unido</option>
            <option value="Chile">Chile</option>
          </select>
        </div>
        <div className="input-field col s12" style={letterStyle}>
          <input
            type="submit"
            className="waves-effect waves-light btn-large btn- block grey darken-2"
            value="Buscar Contagios por País"
          />
        </div>
      </form>
    </div>
  );
}
export default Formulario;
