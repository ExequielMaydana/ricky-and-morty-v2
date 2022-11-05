import axios from "axios";
import React, { useEffect, useState } from "react";

const InputSearchCharacter = ({ setNameCharacterInput }) => {


  //? aqui almaceno el nombre del character pasado por el input.
  const [nameCharacter, setNameCharacter] = useState("");

  //? aqui almaceno todos los nombres de los characters.
  const [characters, setCharacters] = useState();

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) =>
        setCharacters(res.data?.results.map((character) => character.name))
      )
      .catch((err) => console.log(err));
  }, []);

  const handleChangeCharacter = (e) => {
    setNameCharacter(e);
    if(nameCharacter.length > 0){
        setCharacters(characters.filter(character => {
        const todoNameCharacter = character.toLowerCase();
          const searchNameLocation = nameCharacter.toLowerCase();
          return todoNameCharacter.includes(searchNameLocation);
        }))
    }
  };

  return (
    <div className="form-item">
      <label className="form-label">
        <span>Search character by name</span>
        <input
          onChange={({ target }) => handleChangeCharacter(target.value)}
          placeholder="Serch character"
          className="form-input"
        />
      </label>
      <button
        onClick={() => setNameCharacterInput(nameCharacter)}
        className="form-item-btn"
      >
        Search
      </button>
    </div>
  );
};

export default InputSearchCharacter;
