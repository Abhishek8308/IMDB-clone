import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from '../src/components/movieList/MovieList';
import Movie from './pages/movieDetail/Movie.jsx';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/movie/:id' element ={<Movie/>}/>
          <Route path='/movies/:type' element ={<MovieList/>}/>
          <Route path='/*' element ={<h1>404 not found</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
