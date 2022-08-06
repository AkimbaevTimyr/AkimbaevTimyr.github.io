import './App.css';
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
import { useEffect, useLayoutEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { getBestMovies, getPersonalSeries, getUpcomingPremiers,  getPopularMovies, getPersonalMovies, getFavoriteMovies, getAllMovies } from './store/actions/MovieActionCreator';
import SearchPage from './components/pages/SearchPage/SearchPage';
import AllFilms from './components/pages/Films/AllFilms/AllFilms';
import { getTvShows } from './store/actions/TvShowActionCreator';

function App() {
  const dispatch = useAppDispatch()
  const {user} = useAppSelector(state=> state.user)
  useEffect(()=> {
    dispatch(getBestMovies(1))
    dispatch(getPopularMovies(1))
    dispatch(getPersonalMovies())
    dispatch(getPersonalSeries())
    dispatch(getUpcomingPremiers())
    dispatch(getTvShows(1))
    dispatch(getFavoriteMovies(user.email))
    dispatch(getAllMovies(1))
  }, [])
  
  return (
    <div className='container'>
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
        <Routes>
          <Route path='/search-page' element={<SearchPage />}/>
        </Routes>

        {/* Films Routes */}
        <Routes>
          <Route path="/films/popular" element={<PopularFilms />} />
        </Routes>
        <Routes>
          <Route path="/films/bestmovies" element={<BestMovies />} />
        </Routes>
        <Routes>
          <Route path="/films/allfilms" element={<AllFilms/>} />
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
    </div>
  );
}

export default App;
