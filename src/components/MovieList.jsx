import { useState, useEffect } from 'react';
import { getMovies } from '../api/movies';
import MovieCard from './MovieCard';
import MoviePage from './MoviePage';

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (movies.length > 0) {
      setMovie(movies[0]);
    }
  }, [movies]);

  useEffect(() => {
    getMovies()
      .then((movies) => setMovies(movies))
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <div className="container">
      {/* {movie && <MoviePage movie={movie}/>} */}
      <div className="movie_list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        {/* {movies.map((movie) => (
          <MoviePage key={movie.id} movie={movie} />
        ))} */}
      </div>
    </div>
  );
}

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numsPlusOne = nums.map(num => addOneToNum(num));

// function addOneToNum(num) {
//     return num + 1;
// }

// const names = ['Alice', 'Bob', 'Charlie'];
// const namesInPragraphs = names.map(name => <p>{name}</p>);

// console.log(numsPlusOne, namesInPragraphs);
