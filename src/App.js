import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import NotFound from './notfound/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path='/movies'>
          <Route index element={<MoviePage />} />
          <Route path=':id' element={<MovieDetail />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

// 홈페이지 path="/"
// 영화전체 보여주는 페이지: 검색기능 있음 path="/movies"
// 영화 디테일 페이지 path="/movies/:id"
