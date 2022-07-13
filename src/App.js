import './App.css';
import { useState } from 'react';
import { Grid, Button } from '@mui/material';

const App = () => {

  const [toggle, setToggle] = useState(false);
  function togglePic(){
    setToggle(!toggle); 
  }

  return (
    <Grid className="App">

      <header className="App-header">
      {toggle ? (<img src={"unknown.png"} alt="hi"></img>): null}        

      <Button onClick={togglePic}>enormous</Button>
      
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </Grid>
  );
};

export default App;
