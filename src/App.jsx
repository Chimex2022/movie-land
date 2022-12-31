import { useEffect, useState } from 'react'
import './App.css'
import MovieCard from './MovieCard';
import searchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=1a4f40e2';
const movie1 = {
    "Title": "Superman/Batman: Apocalypse",
    "Year": "2010",
    "imdbID": "tt1673430",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
}

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
   setMovies(data.Search)
  }
  useEffect(() => {
    searchMovies('Superman')
  }, [])
  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className="search">
        <input placeholder='Search for movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={searchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
    
      </div>
      {
         
        movies?.length > 0 ? (
        <div className="container">
            {movies.map((movie) => (
               <MovieCard movie={movie} />
            ) )}
          </div>
          
        ) : (
            <div className='empty'>
               <h2>No movies found</h2>
            </div>
           
        )
          
       
      }
      
    </div>
  )
}

export default App
