import * as React from 'react';
import Switch from '@mui/material/Switch';
import {FormControlLabel, FormGroup, Typography } from '@mui/material';
import Order from './components/Order'
import Stack from '@mui/material/Stack'

import './App.css';
import logo from './assets/icons/dGitIconGreen.png'


function App() {
  const rootUrl = 'https://api.trader.xyz'
  const [checkedVisibility, setCheckedVisibility] = React.useState(false);
  const [checkedValid, setCheckedValid] = React.useState(false);
  const [isFetched, setIsFetched] = React.useState(false);
  const [data, setData] = React.useState();
  const [filterParams, setFilterParams] = React.useState('valid=all')

  const handleValid = (event) => {
    if(event.target.checked) {
      setFilterParams('valid=valid')
    } else {
      setFilterParams('valid=all')
    }
    setCheckedValid(event.target.checked);
  };

  const handleVisibility = (event) => {
    if(event.target.checked) {
      setFilterParams('visibility=private')
    } else {
      setFilterParams('visibility=public')
    }
    setCheckedVisibility(event.target.checked);
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
              console.log(`${rootUrl}/orderbook/orders?${filterParams}`)
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
        <FormGroup sx = {{padding: '10px'}}>
          <Stack direction="row" alignItems="center" sx = {{color: '#fff'}}>
            <Typography sx = {{marginRight: '15px'}}>Public</Typography>
            <FormControlLabel 
              control = {<Switch defaultChecked size = 'medium' checked={checkedVisibility} onChange={handleVisibility} />}
              label = 'Private'
            />
          </Stack>
          
          <Stack direction="row" alignItems="center" sx = {{color: '#fff'}}>
            <Typography sx = {{marginRight: '17px'}}> Valid</Typography>
            <FormControlLabel 
              control = {<Switch defaultChecked size = 'medium' checked={checkedValid} onChange={handleValid}/>}
              label = 'Invalid'
            />
          </Stack>

        </FormGroup>
        <div className='App-Info'>
          Total Orders: {isFetched ? data.orders.length : 0 }
        </div>
      </div>
      <div className='order-container'> 
        { isFetched ? data.orders.map((item) => <Order data={item} valid = {checkedValid ? true : false} />)
          : <p> Orderbook is empty </p>
        }
      </div>
    </div>
  );
}

export default App;
