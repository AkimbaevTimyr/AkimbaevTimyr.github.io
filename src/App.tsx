import './App.css';
import Main from './components/pages/Main/Main';
import NavBar from './components/NavBar';
import { Routes, Route, Router } from 'react-router-dom'
import Films from './components/pages/Films/Films';
import WatchList from './components/pages/FavoriteMovies';
import TvShows from './components/pages/TvShows/TvShows';
import PopularFilms from './components/pages/Films/PopularFilms';
import BestMovies from './components/pages/Films/BestMovies';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import MoviePage from './components/pages/MoviePage';
import TvShowsPage from './components/pages/TvShowsPage';
import PersonalFilmsItems from './components/pages/Main/PersonalFilms/PersonalFilmsItems';
import PersonalSeriesItem from './components/pages/Main/PersonalSeries/PersonalSeriesItem';
import UpcomingPremiers from './components/pages/Main/UpcomingPremires/UpcomingPremiers';
import UpcomingPremiersItem from './components/pages/Main/UpcomingPremires/UpcomingPremiersItem';

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
        <Routes>
          <Route path="tv/:id" element={<TvShowsPage />}/>
        </Routes>

        {/* Personal Series,Movies,Premiers */}
        <Routes>
          <Route  path='personal-films' element={<PersonalFilmsItems />}/>
        </Routes>
        <Routes>
          <Route  path='personal-series' element={<PersonalSeriesItem />}/>
        </Routes>
        <Routes>
          <Route  path='upcoming-premiers' element={<UpcomingPremiersItem />}/>
        </Routes>
    </>
  );
}

export default App;
