import './App.css';
import About from './components/About';
import Curasol from './components/Curasol';
import Navbar from './components/Navbar';
import Roadmap from './components/Roadmap';
import Starter from './components/Starter';
import Teams from './components/Teams';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Timer />
      <Starter />
      <hr />
      <About />
      <hr />
      <Curasol />
      <hr />
      <Roadmap />
      <hr />
      <Teams />
    </div>
  );
}

export default App;
