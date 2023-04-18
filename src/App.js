import React from "react";
//Impotamos nuestro custom hook
import { useFetch } from "./useFetch";

export const App = () => {
  const BASE_URL = "https://scratchya.com.ar/react/datos.php";
  const { data, loading, error } = useFetch(BASE_URL); // Guardamos las variables que nos retorna nuestro custom hook, pasanadole como parametro la url de la api, el mensaje del error es opcional

  function mostrarTabla() {
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Código</th>
              <th>Descripción</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {data.map((art) => {
              return (
                <tr key={art.codigo}>
                  <td>{art.codigo}</td>
                  <td>{art.descripcion}</td>
                  <td>{art.precio}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  if (loading) return "Loading ...";
  if (error) return `Error ${error}`;
  return mostrarTabla();
};
