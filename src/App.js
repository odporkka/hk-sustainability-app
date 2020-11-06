import logo from './sausage.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Meat is murder!.
        </p>
        <a
          className="App-link"
          href="https://trello.com/b/iMJtwGJ2/todo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trello
        </a>
      </header>
    </div>
  );
}

export default App;
