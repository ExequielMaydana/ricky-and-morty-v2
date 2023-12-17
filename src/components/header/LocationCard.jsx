import React from "react";
import "./style/styleHeader.css";

const LocationCard = ({ location }) => {
  const date = new Date(location?.created);
  const dateFormatted = date.toLocaleString();

  return (
    <article className="card-location">
      <section className="location-text">
        <h1 className="text-title">{location?.name}</h1>
        <p className="text-date">
          <b>Creado: </b>
          {dateFormatted}
        </p>
      </section>
      <ul className="description-container-items">
        <li className="item-description">
          <b>Tipo: </b>
          {location?.type}
        </li>
        <li className="item-description">
          <b>Dimensión: </b>
          {location?.dimension}
        </li>
        <li className="item-description">
          <b>Poblaciones: </b>
          {location?.residents.length}
        </li>
      </ul>
    </article>
  );
};

export default LocationCard;
