import './App.css';
import logo from './assets/icons/dGitIconGreen.png'

function App() {
  return (
    <div className = 'App'>
      <header className='App-header'> 
        <img className='App-logo' src = {logo} alt = 'logo' />
        <text> dGit - Orderbook v0.1.0 </text>
      </header>
      <div className='order-container'> 
        list of orders
      </div>
    </div>
  );
}

export default App;
