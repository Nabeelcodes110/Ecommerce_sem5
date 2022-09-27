import './App.css';
import Carousell from './components/Carousell';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousell/>
      <Grid />
      <Footer />
    </div>
  );
}

export default App;
