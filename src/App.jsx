import './App.css';
import HorizontalScroll from './components/Home';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import Slidebar from './components/Slidebar';
import { useSelector } from 'react-redux';


function App() {

  const darkMode = useSelector(state=>state.dash.darkMode)

  return (
    <div className={darkMode ? "App" : "dark"}>
     <Navbar/>
      <Slidebar/>
      <Movies/>
      <HorizontalScroll/>
     <HorizontalScroll/>
    </div>
  );
}

export default App;
