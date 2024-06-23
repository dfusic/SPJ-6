import React from 'react';
import Zaglavlje from './Zaglavlje';
import TrgovinaLista from './TrgovinaLista';

const App = () => (
  (
    <>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand'>
            <Zaglavlje naslov="IT SHOPING KRALJICA" />
          </a>
        </div>
      </nav>
      <div>
        <TrgovinaLista />
      </div>
    </>
  );
)

export default App;
