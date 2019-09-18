import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';

export default function CharacterList() {
  const [charList, setCharList] = useState();

  useEffect(() => {
    const getChars = () => {
      axios.get('https://rickandmortyapi.com/api/character/')
        .then(res =>{
          setCharList(res.data.results)
        })
        .catch(err => console.log('Error: ', err));
    }
    getChars()

  }, []);

  if (!charList) {
    return <p>Loading data...</p>
  }

  return (
    <section className="character-list grid-view">
      {charList.map(char => <CharacterCard char={char}/>)}
    </section>
  );
}
