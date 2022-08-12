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
import { useEffect,  } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import {  getAll } from './store/actions/MovieActionCreator';
import SearchPage from './components/pages/SearchPage/SearchPage';
import AllFilms from './components/pages/Films/AllFilms/AllFilms';
import { checkToken } from './store/actions/UserActionCreator';

function App() {
  const dispatch = useAppDispatch()
  const {user} = useAppSelector(state=> state.user)
  const token = localStorage.getItem('token')
  const email = localStorage.getItem('email')
  useEffect(()=> {
    setTimeout(() => {
      dispatch(getAll(user.email))
      dispatch(checkToken([token, email]))
    }, 1000)
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
