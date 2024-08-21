import logo from './logo.svg';
import './App.css';
import { ArtistList } from './Components/ArtistsList/ArtistsList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { HomePage } from './Components/HomePage/HomePage';


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element ={<HomePage />} />
        <Route path="/artists" element ={<ArtistList />} />
     </Routes>
     </Router>
      
    </div>
  );
}

export default App;
