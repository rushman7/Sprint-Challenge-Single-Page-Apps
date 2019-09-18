import React from "react";
import { Image } from 'semantic-ui-react';

export default function CharacterCard(props) {
  const { image, name } = props.char
  
  return (
    <div className="card">
      <img src={image} alt={name}/>
    </div>
  )
}
