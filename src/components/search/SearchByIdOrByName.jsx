import React, { useRef } from "react";
import InputSearchCharacter from "./InputSearchCharacter";
import InputSearchLocation from "./InputSearchLocation";
import "./style/styleForm.css";

const SearchByIdOrByName = ({
  setNameLocations,
  nameLocations,
  setNameCharacterInput,
}) => {
  const openForm = useRef();

  const clickOpenForm = () => {
    openForm.current.classList.toggle("open-form");
  };

  return (
    <section className="container-form">
      <div className="form-btn-filter">
        <span>Filtros</span>
        <i className="bx bx-filter-alt icon-filter" onClick={clickOpenForm}></i>
      </div>

      <article className="form" ref={openForm}>
        <InputSearchLocation
          setNameLocations={setNameLocations}
          nameLocations={nameLocations}
        />

        <InputSearchCharacter setNameCharacterInput={setNameCharacterInput} />
      </article>
    </section>
  );
};

export default SearchByIdOrByName;
