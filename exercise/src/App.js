import logo from "./logo.svg";
import "./App.css";
import ButtonBuilder from "./components/ButtonComponents";
import ImgClass from "./components/ImgComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://images.unsplash.com/photo-1700413473936-81b281f88715?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="App-logo"
          alt="logo"
        />
        <p>Ciao</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ButtonBuilder buttonText="Sono un bottone" />
        <ImgClass
          src="https://images.unsplash.com/photo-1702838834569-bf20a161824c?q=80&w=1302&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="ragazza seduta"
        />
        <ImgClass
          src="https://images.unsplash.com/photo-1699976103128-ae05b6257fab?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="vaso con foglie secche"
        />
      </header>
    </div>
  );
}

export default App;
