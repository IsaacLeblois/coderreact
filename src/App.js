import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/itemListContainer';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
