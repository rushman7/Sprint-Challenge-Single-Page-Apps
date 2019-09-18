import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path="/home" component={WelcomePage}/>
    </main>
  );
}
