import './App.css';
import Main from './components/pages/Main';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom'
import Films from './components/pages/Films/Films';
import WatchList from './components/pages/FavoriteMovies';
import TvShows from './components/pages/TvShows/TvShows';
import PopularFilms from './components/pages/Films/PopularFilms';
import BestMovies from './components/pages/Films/BestMovies';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import MoviePage from './components/pages/MoviePage';

function App() {
  return (
    <>
        <NavBar />
        {/* Navigation Routes */}
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
        <Routes>
          <Route path='/films' element={<Films />} />
        </Routes>
        <Routes>
          <Route path='/watchlist' element={<WatchList />} />
        </Routes>
        <Routes>
          <Route path='/tvshows' element={<TvShows />} />
        </Routes>

        {/* Films Routes */}
        <Routes>
          <Route path="/films/popular" element={<PopularFilms />} />
        </Routes>
        <Routes>
          <Route path="/films/bestmovies" element={<BestMovies />} />
        </Routes>

        {/* Login and Registration */}
        <Routes>
          <Route path='/login' element={<Login />}/>
        </Routes>
        <Routes>
          <Route path='/registration' element={<Registration />}/>
        </Routes>

        {/* Movie Page */}
        <Routes>
          <Route path="movie/:id" element={<MoviePage />}/>
        </Routes>
    </>
  );
}

export default App;
