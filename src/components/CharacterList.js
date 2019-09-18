import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charList, setCharList] = useState();

  useEffect(() => {
    const getChars = () => {
      axios.get('https://rickandmortyapi.com/api/character/')
        .then(res =>{
          console.log(res.data.results)
          setCharList(res.data.results)
        })
        .catch(err => console.log('Error: ', err));
    }
    getChars()
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  console.log(charList);

  if (!charList) {
    return <p>Loading data...</p>
  }

  return (
    <section className="character-list grid-view">
      {charList.map(char => <CharacterCard char={char}/>)}
    </section>
  );
}
