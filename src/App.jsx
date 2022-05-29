import './App.css';
import AddMovie from './components/AddMovie';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <>
      <Header />
      <AddMovie/>
      <MovieList/>
    </>
  );
}

export default App;
