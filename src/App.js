import React from "react";

import Image from "./img/Scarecrow.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>404 NOT FOUND</h1>
      </header>
      <main className="App-main">
          <section className="App-main__img">
              <img src={Image} alt="Scarecrow image"/>
          </section>
          <section className="App-main__content">
             <h2>I have a bad news for you</h2>
             <p>The page you are looking for might be removed or is temporarily unavailable</p>
             <button>BACK TO HOMEPAGE</button>
          </section>
      </main>
      <footer className="App-footer"><p>Andres Argote @DevChallenges.io</p></footer>
    </div>
  );
}

export default App;
