import './App.css';
import { Grid, Button } from '@mui/material';

const App = () => {
  let showpic = false;
  function togglePic(){
    console.log("iamhere"); 
    showpic = !showpic; 
    console.log(showpic); 
  } 
  return (
    <Grid className="App">
      <header className="App-header">
        {/* {showpic ? <img src={"unknown.png"} alt="hi"></img>: null} */}
        {showpic ? (<p>hello</p>): null}
        <Button onClick={togglePic}>enormous</Button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </Grid>
  );
};

export default App;
