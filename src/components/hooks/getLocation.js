import axios from "axios";
import { useEffect, useState } from "react";

const getLocation = () => {
  //? en este estado guardo todas las ubicaciones.
  const [location, setLocation] = useState();

  //? ubicacion random
  const randomLocation = Math.ceil(Math.random() * 126);

  //? este estado recibe una id de ubicacion random, que viene en la variable randomLocation.
  const [idLocation, setIdLocation] = useState(randomLocation);

  //? aqui viene el nombre que introduzco en el input de buscar por nombre
  const [nameLocations, setNameLocations] = useState("");

  //? renderizar una ubicacion por ID
  const getLocationById = () => {
    if (idLocation >= 1 && idLocation <= 126) {
      const URL = `https://rickandmortyapi.com/api/location/${idLocation}`;
      axios
        .get(URL)
        .then((res) => setLocation(res.data))
        .catch((err) => console.log(err));
    }
  };

  //? renderizar una ubicacion por name
  const getLocationByName = () => {
    const URL = `https://rickandmortyapi.com/api/location/?name=${nameLocations}`;
    axios
      .get(URL)
      .then((res) => setLocation(res.data.results[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (nameLocations?.length > 0) {
      getLocationByName();
    }
  }, [nameLocations]);

  useEffect(() => {
    getLocationById();
  }, [idLocation]);

  return { location, setNameLocations, nameLocations };
};

export default getLocation;
