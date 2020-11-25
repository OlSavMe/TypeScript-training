import React, {useState} from 'react';
import './App.css';
import Right from './day2/Right';
import Left from './day2/Left';


function App() {
 const [nimi, setNimi] = useState('');
  return (
    <div className="App">
      <section className="left-right">
      <Right nimi={nimi} />
      <Left setNimi={setNimi} />
      </section>

    </div>
  );
}

export default App;