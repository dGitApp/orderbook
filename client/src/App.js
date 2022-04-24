import './App.css';
import logo from './assets/icons/dGitIconGreen.png'
import { Box, ChakraProvider } from '@chakra-ui/react'



function App() {
  return (
    <ChakraProvider>
    <div className = 'App'>
      <header className='App-header'> 
        <img className='App-logo' src = {logo} alt = 'logo' />
        <text> dGit - Orderbook v0.1.0 </text>
      </header>
      <Box className='App-Search'>
      </Box>
      <div className='order-container'> 
        list of orders
      </div>
    </div>
    </ChakraProvider>
  );
}

export default App;
