import Main from './components/pages/Main/Main';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route} from 'react-router-dom'
import Films from './components/pages/Films';
import WatchList from './components/pages/FavoriteMovies/FavoriteMovies';
import TvShows from './components/pages/TvShows/TvShows';
import PopularFilms from './components/pages/Films/PopularFilms/PopularFilms';
import BestMovies from './components/pages/Films/BestMovies/BestMovies';
import Login from './components/pages/Auth/Login';
import Registration from './components/pages/Auth/Registration';
import MoviePage from './components/pages/MoviePage/MoviePage';
import TvShowsPage from './components/pages/TvShowsPage/TvShowsPage';
import PersonalFilmsItems from './components/pages/Main/PersonalFilms/PersonalFilmsItems';
import PersonalSeriesItem from './components/pages/Main/PersonalSeries/PersonalSeriesItem';
import UpcomingPremiersItem from './components/pages/Main/UpcomingPremires/UpcomingPremiersItem';
import { useEffect,  } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import {  getAll } from './store/actions/MovieActionCreator';
import SearchPage from './components/pages/SearchPage/SearchPage';
import AllFilms from './components/pages/Films/AllFilms/AllFilms';
import { checkToken } from './store/actions/UserActionCreator';
import styles from './App.module.css'
import Navigation from './components/Navigation/Navigation';

function App() {
  const dispatch: any = useAppDispatch()
  const token = localStorage.getItem('token')
  const email = localStorage.getItem('email')
  useEffect(()=> {
    setTimeout(() => {
      dispatch(getAll(email))
      dispatch(checkToken([token, email]))
    }, 1000)
  }, [])
  
  return (
    <div >
        <NavBar />
      <div className={styles.container}>
        {/* Navigation Routes */}
        <Routes>
          <Route path='/moviesite' element={<Main />} />
        </Routes>
        <Routes>
          <Route path='/moviesite/films' element={<Films />} />
        </Routes>
        <Routes>
          <Route path='/moviesite/watchlist' element={<WatchList />} />
        </Routes>
        <Routes>
          <Route path='/moviesite/tvshows' element={<TvShows />} />
        </Routes>
        <Routes>
          <Route path='/moviesite/search-page' element={<SearchPage />}/>
        </Routes>

        {/* Films Routes */}
        <Routes>
          <Route path="/moviesite/films/popular" element={<PopularFilms />} />
        </Routes>
        <Routes>
          <Route path="/moviesite/films/bestmovies" element={<BestMovies />} />
        </Routes>
        <Routes>
          <Route path="/moviesite/films/allfilms" element={<AllFilms/>} />
        </Routes>

        {/* Login and Registration */}
        <Routes>
          <Route path='/moviesite/login' element={<Login />}/>
        </Routes>
        <Routes>
          <Route path='/moviesite/registration' element={<Registration />}/>
        </Routes>

        {/* Movie Page */}
        <Routes>
          <Route path="/moviesite/movie/:id" element={<MoviePage />}/>
        </Routes>
        <Routes>
          <Route path="/moviesite/tv/:id" element={<TvShowsPage />}/>
        </Routes>

        {/* Personal Series,Movies,Premiers */}
        <Routes>
          <Route  path='/moviesite/personal-films' element={<PersonalFilmsItems />}/>
        </Routes>
        <Routes>
          <Route  path='/moviesite/personal-series' element={<PersonalSeriesItem />}/>
        </Routes>
        <Routes>
          <Route  path='/moviesite/upcoming-premiers' element={<UpcomingPremiersItem />}/>
        </Routes>
      </div>
      <Navigation />
    </div>
  );
}

export default App;
