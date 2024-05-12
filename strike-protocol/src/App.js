import logo from './centered-no-text.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Prep <code>for</code> revolution.
        </p>
        <a
          className="App-link"
          href="https://strike-protocol.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Strike Protocol
        </a>
      </header>
      
    </div>
  );
}

export default App;
