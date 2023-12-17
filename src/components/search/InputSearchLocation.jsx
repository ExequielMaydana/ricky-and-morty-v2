import axios from "axios";
import React, { useEffect, useState } from "react";

const InputSearchLocation = ({ setNameLocations, nameLocations }) => {
  //? aqui almaceno el nombre de la ubicacion pasada por el input.
  const [nameLocation, setNameLocation] = useState([]);

  //? aqui guardo todas las locations
  const [locations, setLocations] = useState();

  //? esto es para que despues de filtrar una ubicacion, se resete el filter
  const [locationsChange, setLocationChange] = useState(false);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location")
      .then((res) =>
        setLocations(res.data?.results.map((location) => location.name))
      )
      .catch((err) => console.log(err));
  }, [locationsChange]);

  //? en esta funcion comparo los nombres de las ubicaciones con el que paso en el input.
  const handleChangeLocation = (e) => {
    setNameLocation(e);
    if (nameLocation.length > 0) {
      setLocations(
        locations.filter((location) => {
          const todoNameLocation = location.toLowerCase();
          const searchNameLocation = nameLocation.toLowerCase();
          return todoNameLocation.includes(searchNameLocation);
        })
      );
    } else {
      setLocationChange(!locationsChange);
    }
  };

  const selectLocationFilter = (loc) => {
    setNameLocations(loc);
    setNameLocation([]);
  };

  return (
    <div className="form-item">
      <label className="form-label-location">
        <span>Buscar ubicación por nombre </span>

        <input
          onChange={({ target }) => handleChangeLocation(target.value)}
          placeholder="EJ: Anatomy Park"
          className="form-input"
          value={nameLocations}
        />
        {nameLocations && (
          <div className="btn-reset" onClick={() => setNameLocations("")}>
            x
          </div>
        )}
      </label>
      {nameLocation.length > 0 && (
        <ul className="container-listName-ubicaciones">
          {locations?.map((location) => (
            <li
              key={location}
              onClick={() => selectLocationFilter(location)}
              className="nameList-ubicaciones"
            >
              {location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputSearchLocation;
