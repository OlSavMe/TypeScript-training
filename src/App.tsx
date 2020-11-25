import React, {useState} from 'react';
import './App.css';
import Right from './day2/Right';
import Left from './day2/Left';


function App() {
 const [nimi, setNimi] = useState('');
  return (
    <div className="App">
      <section className="left-right">
      <Right setName={setNimi} />
<Left name={nimi}/>
      </section>

    </div>
  );
}

export default App;