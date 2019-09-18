import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import LocationList from './components/LocationsList';

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route path="/home" component={WelcomePage}/>
      <Route path="/characters" component={CharacterList}/>
      <Route path="/locations" component={LocationList}/>
    </main>
  );
}
