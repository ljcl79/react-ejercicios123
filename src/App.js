import logo from './logo.svg';
import './App.css';
import { Contacto } from './models/contacto.model';
import ComponenteA from './components/componenteA';

function App() {
  const contactoPrueba = new Contacto( 'Pedro', 'Perez', 'micorreo@pedroperez.com', false);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteA contacto={contactoPrueba} />
      </header>
    </div>
  );
}

export default App;