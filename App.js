import logo from './logo.svg';
import './App.css';
import {PrimerComponente} from "./components/PrimerComponente";
import {SegundoComponente} from "./components/SegundoComponente";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Esto es un repaso de react</p>
        <PrimerComponente></PrimerComponente>
        <SegundoComponente></SegundoComponente>
        <SegundoComponente></SegundoComponente> 
        {/* se puede llamar a un componente tantas veces como quiera */}

      </header>
    </div>
  );
}

export default App;
