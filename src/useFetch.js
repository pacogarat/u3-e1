import { useState, useEffect } from "react";

export const useFetch = (
  BASE_URL = "",
  error_msg = "An error has ocurred getting the data"
) => {
  const [fetch_data, setFetchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      //Pedimos los datos a la api
      try {
        const response = await window.fetch(BASE_URL);
        if (!response.ok) {
          throw new Error(`Http status ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setFetchData(data);
      } catch (error) {
        //Si hay un errorss ...
        console.error(error.message);
        setError(error_msg);
      }
      setLoading(false);
    };
    fetchData();
  }, [BASE_URL, error_msg]); //Hacer enfasis en la url
  //Retornamos nuestro fetch_data como data, nuestro loading y error
  return { data: fetch_data, loading, error };
};
