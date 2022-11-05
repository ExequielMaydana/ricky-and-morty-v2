import axios from 'axios'
import { useEffect, useState } from 'react';

const getCharacters = resident => {

    const [character, setCharacter] = useState();

    const [nameCharacterInput, setNameCharacterInput] = useState()

    const getCharacterByName = () => {
          const URL = `https://rickandmortyapi.com/api/character/?name=${nameCharacterInput}`
          axios.get(URL)
          .then(res => setCharacter(res.data.results.map(character => character.url)))
          .catch(err => console.log(err))
      }

    const getCharacters = () => {
      if(resident !== undefined){
        axios
        .get(resident)
        .then((res) => setCharacter(res.data))
        .catch((err) => console.log(err));
      }
    }

    useEffect(() => {
      if(nameCharacterInput !== undefined){
        getCharacterByName()
      }
    }, [nameCharacterInput])

    useEffect(() => {
      getCharacters()
    }, []);
  
    return {character, setNameCharacterInput, nameCharacterInput }
}










export default getCharacters