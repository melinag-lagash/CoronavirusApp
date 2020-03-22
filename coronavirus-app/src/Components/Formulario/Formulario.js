import React, { useState } from "react";

function Formulario({ datosConsulta }) {
  const [busqueda, guardarBusqueda] = useState({
    country: ""
  });

  const handleChange = e => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
    console.log("al cambiar pais", busqueda.country);
  };

  const consultar = e => {
    e.preventDefault();
    datosConsulta(busqueda);
  };

  return (
    <div>
      <form onSubmit={consultar}>
        <div className="input-field col s12">
          <select onChange={handleChange} name="country">
            <option value="">Selecciona un país</option>
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
        <div className="input-field col s12">
          <input
            type="submit"
            className="waves-effect waves-light btn-large btn- block yellow accent-4"
            value="Buscar Contagios por País"
            // onClick={buscarData}
          />
        </div>
      </form>
    </div>
  );
}
export default Formulario;
