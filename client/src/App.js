import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';
import Order from './components/Order'

import './App.css';
import logo from './assets/icons/dGitIconGreen.png'


function App() {
  const rootUrl = 'https://api.trader.xyz'
  const [checked, setChecked] = React.useState(false);
  const [isFetched, setIsFetched] = React.useState(false);
  const [query, setQuery] = React.useState();
  const [filter, setFilter] = React.useState('valid=all')

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  
  // fetching data from api when checked is changing
  React.useEffect(() => {
    async function fetchData () {
      if(checked) setFilter('valid=valid')
      else setFilter('valid=all')
      await fetch( `${rootUrl}/orderbook/orders?${filter}`)
      .then(res => res.json()).then( res => {
        setQuery(res)
        setIsFetched(true)
        }
      )
    }
    fetchData();
  }, [checked])
  
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
          
          label= {<Typography variant="body1" color="white"> Valid Orders (Invalid/Valid) </Typography>}
        />
      </div>
      <div className='order-container'> 
        { isFetched ? query.orders.map((item) => <Order data={item} valid = {checked ? true : false} />)
          : <p> Orderbook is empty </p>
        }
      </div>
    </div>
  );
}

export default App;
