import React, { useState } from "react";

const InputSearchCharacter = ({ setNameCharacterInput }) => {
  const [nameCharacter, setNameCharacter] = useState("");

  const handleChangeCharacter = (e) => {
    setNameCharacter(e);
  };

  return (
    <div className="form-item">
      <label className="form-label">
        <span>Buscar personaje por nombre</span>
        <input
          onChange={({ target }) => handleChangeCharacter(target.value)}
          placeholder="EJ: Melissa"
          className="form-input"
        />
      </label>
      <button
        onClick={() => setNameCharacterInput(nameCharacter)}
        className="form-item-btn"
      >
        Buscar
      </button>
    </div>
  );
};

export default InputSearchCharacter;
