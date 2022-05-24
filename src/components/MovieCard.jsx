
export default function MovieCard(props) {
  return (
    <>
      <div className="movie_card">
        <h2 className="movie_title"><a href="#">{props.movie.name} ({props.movie.year})</a></h2>
        <div>
          <div className="content">
            <a href="#"><img className="movie_poster" src = {props.movie.poster} /></a>
              <div className="movie_info">
                <h3 className="parameter">Год выпуска: {props.movie.year}</h3>
                <h3 className="parameter">Страна: {props.movie.country}</h3>
                <h3 className="parameter">Жанр: {props.movie.genre}</h3>
                <h3 className="parameter">Продолжительность: {props.movie.duration} мин.</h3>
                <h3 className="parameter">Качество: {props.movie.quality}p</h3>
                <p className="movie_description">{props.movie.description}</p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
