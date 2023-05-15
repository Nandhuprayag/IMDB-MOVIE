import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import PageNotFound from './Components/pageNotFound/PageNotFound';
import Footer from './Components/Footer/Footer';
function App() 
{
  
  return (
    <div className="App">
          <Header/>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movie/:imdbID' element={<MovieDetails/>}/>
          <Route path='*'  element={<PageNotFound/>}/>
          </Routes>
          <Footer/>
          
    </div>
  );
}

export default App;
