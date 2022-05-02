import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';
import Order from './components/Order'

import './App.css';
import logo from './assets/icons/dGitIconGreen.png'


function App() {
  const rootUrl = 'https://api.trader.xyz'
  const [checked, setChecked] = React.useState();
  const [isFetched, setIsFetched] = React.useState(false);
  const [data, setData] = React.useState();
  const [filterParams, setFilterParams] = React.useState('valid=all')

  const handleChange = (event) => {
    if(event.target.checked) {
      setFilterParams('valid=valid')
    } else {
      setFilterParams('valid=all')
    }
    setChecked(event.target.checked);
  };

  // fetching data from api when checked is changing
  React.useEffect(() => {
    let isSubscribed = true;
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from API
      await fetch(`${rootUrl}/orderbook/orders?${filterParams}`)
        .then(res => res.json()).then(res => {
            if (isSubscribed) {
              setData(res)
              setIsFetched(true)
            }
          }
        )
    }
    // call the function
    fetchData()
      .catch(console.error);;
    
    // cancel any future setData
    return () => isSubscribed = false;
  }, [filterParams])
  
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
        <div className='App-Info'>
          Total Orders: {isFetched ? data.orders.length : 0 }
        </div>
      </div>
      <div className='order-container'> 
        { isFetched ? data.orders.map((item) => <Order data={item} valid = {checked ? true : false} />)
          : <p> Orderbook is empty </p>
        }
      </div>
    </div>
  );
}

export default App;
