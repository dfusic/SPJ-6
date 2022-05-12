import React from 'react';
import Zaglavlje from './Zaglavlje';
import image from "./reakt.png"
import TrgovinaArtikla from './TrgovinaArtikla';
import artikli from './aritkli.json';
import TrgovinaLista from './TrgovinaLista';
function App() {
  return (
  <>
  <nav className='navbar navbar-dark bg-dark'>
    <div className='container-fluid'>
      <a className='navbar-brand'>
      <Zaglavlje naslov = "IT SHOPING KRALJICA" />
      </a>
    </div>
  </nav>
  <div>
  <TrgovinaLista />
  </div>
  
  </>
  );
}

export default App;
