import React from 'react'
import Main from './components/pages/Main/Main';
import NavBar from './components/shared/NavBar/NavBar';
import { Routes, Route} from 'react-router-dom'
import Films from './components/pages/Films';
import WatchList from './components/pages/FavoriteMovies/FavoriteMovies';
import TvShows from './components/pages/TvShows/TvShows';
import PopularFilms from './components/pages/Films/PopularFilms/PopularFilms';
import BestMovies from './components/pages/Films/BestMovies/BestMovies';
import Login from './components/pages/Auth/Login';
import Registration from './components/pages/Auth/Registration';
import Movie from './components/pages/Movie/Movie';
import TvShow from './components/pages/TvShows/TvShow/TvShow';
import PersonalFilmsItems from './components/pages/Main/PersonalFilms/PersonalFilmsItems';
import PersonalSeriesItem from './components/pages/Main/PersonalSeries/PersonalSeriesItem';
import UpcomingPremiersItem from './components/pages/Main/UpcomingPremires/UpcomingPremiersItem';
import { useEffect,  } from 'react';
import { useAppDispatch, } from './hooks/redux';
import {  getAll } from './store/actions/MovieActionCreator';
import Search from './components/pages/Search/Search';
import AllFilms from './components/pages/Films/AllFilms/AllFilms';
import { checkToken } from './store/actions/UserActionCreator';
import Navigation from './components/shared/Navigation/Navigation';
import NotFound from './components/shared/NotFound/NotFound';

function App() {
  const dispatch: any = useAppDispatch()
  useEffect(()=> {
    setTimeout(() => {
      dispatch(getAll())
      dispatch(checkToken())
    }, 2000)
  }, [])
  
  return (
    <div >
        <NavBar />
      <div >
        {/* Navigation Routes */}
        <Routes>
          <Route path='*' element={<NotFound />}/>
          <Route path='/' element={<Main />} />
          <Route path='/films' element={<Films />} />
          <Route path='/watchlist' element={<WatchList />} />
          <Route path='/tvshows' element={<TvShows />} />
          <Route path='/search-page' element={<Search />}/>

        {/* Films Routes */}
          <Route path="/films/popular" element={<PopularFilms />} />
          <Route path="/films/bestmovies" element={<BestMovies />} />
          <Route path="/films/allfilms" element={<AllFilms/>} />

        {/* Login and Registration */}
          <Route path='/login' element={<Login />}/>
          <Route path='/registration' element={<Registration />}/>

        {/* Movie Page */}
          <Route path="/movie/:id" element={<Movie />}/>
          <Route path="/tv/:id" element={<TvShow />}/>

        {/* Personal Series,Movies,Premiers */}
          <Route  path='/personal-films' element={<PersonalFilmsItems />}/>
          <Route  path='/personal-series' element={<PersonalSeriesItem />}/>
          <Route  path='/upcoming-premiers' element={<UpcomingPremiersItem />}/>
        </Routes>
      </div>
      <Navigation />
    </div>
  );
}

export default App;
