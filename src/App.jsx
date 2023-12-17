import "./App.css";
import LocationCard from "./components/header/LocationCard";
import getLocation from "./components/hooks/getLocation";
import backgrounHeader from "./assets/imgs/header.jpg";
import CardCharacter from "./components/characters/CardCharacter";
import Pagination from "./components/pagination/Pagination";
import { useEffect, useState } from "react";
import SearchByIdOrByName from "./components/search/SearchByIdOrByName";
import getCharacters from "./components/hooks/getCharacters";

function App() {
  const { location, setNameLocations } = getLocation();

  const { setNameCharacterInput, character } = getCharacters();

  const [currentPage, setCurrentPage] = useState(1);

  const residentPerPage = 6;

  const [arrayResidents, setArrayResidents] = useState();

  useEffect(() => {
    if (location?.residents.length < residentPerPage) {
      // aca preguntamos: si la cantidad de residentes que tiene esa location es menor que residentPerPage, se copien dentro del array
      setArrayResidents(location?.residents);
    } else {
      const lastResident = currentPage * residentPerPage;
      setArrayResidents(
        location?.residents.slice(lastResident - residentPerPage, lastResident)
      );
    }

    if (character?.length < residentPerPage) {
      setArrayResidents(character);
    } else {
      const lastResident = currentPage * residentPerPage;
      setArrayResidents(
        location?.residents.slice(lastResident - residentPerPage, lastResident)
      );
    }
  }, [location, currentPage, character]);

  let arrayPages = [];
  let quantityPages = 0;

  useEffect(() => {
    if (location) {
      quantityPages = Math.ceil(location?.residents.length / residentPerPage); //cantidad de paginas maxima
      const pagesPerBlock = 5; //cantidad de paginas por bloque
      let currentBlock = Math.ceil(currentPage / pagesPerBlock); //bloques

      // analiza si estamos en el ultimo bloque(true) o no (false)
      if (currentBlock * pagesPerBlock >= quantityPages) {
        // este if analiza si me paso de la cantidad de paginas.
        //cuando es el ultimo bloque
        for (
          let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
          i <= quantityPages;
          i++
        ) {
          arrayPages.push(i);
        }
        //cuando no es el ultimo bloque
      } else {
        for (
          let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
          i <= currentBlock * pagesPerBlock;
          i++
        ) {
          arrayPages.push(i);
        }
      }
    } else if (character) {
      quantityPages = Math.ceil(character?.length / residentPerPage); //cantidad de paginas maxima
      const pagesPerBlock = 5; //cantidad de paginas por bloque
      let currentBlock = Math.ceil(currentPage / pagesPerBlock); //bloques

      // analiza si estamos en el ultimo bloque(true) o no (false)
      if (currentBlock * pagesPerBlock >= quantityPages) {
        // este if analiza si me paso de la cantidad de paginas.
        //cuando es el ultimo bloque
        for (
          let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
          i <= quantityPages;
          i++
        ) {
          arrayPages.push(i);
        }
        //cuando no es el ultimo bloque
      } else {
        for (
          let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
          i <= currentBlock * pagesPerBlock;
          i++
        ) {
          arrayPages.push(i);
        }
      }
    }
  }, [character]);

  return (
    <div className="App">
      <header className="header">
        <img src={backgrounHeader} />
      </header>

      <LocationCard location={location} />

      <SearchByIdOrByName
        setNameLocations={setNameLocations}
        setNameCharacterInput={setNameCharacterInput}
      />

      {arrayResidents?.length > 6 ? (
        <Pagination
          arrayPages={arrayPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          quantityPages={quantityPages}
        />
      ) : null}

      <div className="container-cards">
        {arrayResidents?.map((url) => (
          <CardCharacter key={url} url={url} />
        ))}
      </div>

      {arrayResidents?.length > 6 ? (
        <Pagination
          arrayPages={arrayPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          quantityPages={quantityPages}
        />
      ) : null}
    </div>
  );
}

export default App;
