import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';
import { searchOrderbook } from "@traderxyz/nft-swap-sdk/dist/sdk/v4/orderbook";

import './App.css';
import logo from './assets/icons/dGitIconGreen.png'


function App() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const params =  {
    status: 'open'
  }
  
  async () => {const fetchResults = await searchOrderbook({status: 'open'})
  
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
        {fetchResults}
      </div>
    </div>
  );
}

export default App;
