import axios from "axios";
import { useEffect, useState } from "react";

const getCharacters = (resident) => {
  const [urlCharacter, setUrlCharacter] = useState([]);
  const [character, setCharacter] = useState({});

  const [nameCharacterInput, setNameCharacterInput] = useState("");

  const getCharacterByName = () => {
    const URL = `https://rickandmortyapi.com/api/character/?name=${nameCharacterInput?.toLocaleLowerCase()}`;
    axios
      .get(URL)
      .then((res) => {
        setUrlCharacter(res.data.results.map((character) => character.url));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (resident !== undefined) {
      axios
        .get(resident)
        .then((res) => {
          setCharacter(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [resident]);

  useEffect(() => {
    if (nameCharacterInput !== "") {
      getCharacterByName();
    }
  }, [nameCharacterInput]);

  return { urlCharacter, character, setNameCharacterInput, nameCharacterInput };
};

export default getCharacters;
