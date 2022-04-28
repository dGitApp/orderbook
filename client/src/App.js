import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';

import './App.css';
import logo from './assets/icons/dGitIconGreen.png'


function App() {
  const [checked, setChecked] = React.useState(true);
  const [isFetched, setIsFetched] = React.useState(false);
  const [query, setQuery] = React.useState([]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const params =  {
    status: 'open'
  }
  
  React.useEffect(() => {
    async function fetchData () {
      await fetch(`https://api.trader.xyz/orderbook/orders?status=open`)
      .then(res => res.json()).then( res => {
        setQuery(JSON.stringify(res.orders))
        setIsFetched(true)
        }
      )
    }
    fetchData();
  }, [])
  
  return (
    <div className = 'App'>
      <header className='App-header'> 
        <img className='App-logo' src = {logo} alt = 'logo' />
        <text> dGit - Orderbook v0.1.0 </text>
      </header>
      <div className='App-Search'>
        <FormControlLabel
          control={
            <Switch
              size="large"
              color = 'info'
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />}
          
          label= {<Typography variant="body1" color="white"> Status Orders (Invalid/Valid) </Typography>}
        />
      </div>
      <div className='order-container'> 
        { isFetched ? <p className="fs-12"> {query} </p> 
          : <p> Orderbook is empty </p>
        }
      </div>
    </div>
  );
}

export default App;
