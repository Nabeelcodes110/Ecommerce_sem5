import './App.css';
import Carousell from './components/Carousell';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousell/>
      <Footer />
    </div>
  );
}

export default App;
