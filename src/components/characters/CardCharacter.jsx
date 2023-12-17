import React from "react";
import getCharacters from "../hooks/getCharacters";
import "./style/styleCardCharacter.css";

const CardCharacter = ({ url }) => {
  const { character } = getCharacters(url);

  const colorStatus = {
    Alive: "#058240",
    Dead: "#FA4753",
    unknown: "#7844E3",
  };

  return (
    <>
      {character && (
        <article className="card-character">
          <figure className="container-img-card">
            <img
              src={character?.image}
              alt="img-character"
              className="card-img"
            />
            <div className="container-status-character">
              <b>Estado: </b>
              <div
                className="circle-status"
                style={{ background: colorStatus[character?.status] }}
              ></div>
            </div>
          </figure>

          <section className="description-character-container">
            <h2 className="description-title">
              <b>Nombre: </b>
              {character?.name}
            </h2>
            <ul className="description-character-items">
              <li className="character-items-description">
                <b>Género: </b>
                {character?.gender}
              </li>
              <li className="character-items-description">
                <b>Especie: </b>
                {character?.species}
              </li>
              <li className="character-items-description">
                <b>Ubicación: </b>
                {character.location?.name}
              </li>
            </ul>
          </section>
        </article>
      )}
    </>
  );
};

export default CardCharacter;
