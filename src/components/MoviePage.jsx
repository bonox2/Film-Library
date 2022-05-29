export default function MoviePage(props) {
  return (
    <>
      <div className="movie_page">
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
                <div>Режиссер: {props.movie.director}</div>
                <div>Актеры: {props.movie.actors}</div>
              </div>
          </div>
        </div>
        <p className="movie_about"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vero doloribus quia voluptatem esse tempore eaque facere debitis quis libero ab incidunt, excepturi nobis. Quasi molestiae culpa aspernatur fugiat! Quasi assumenda numquam ducimus quo nobis totam cum nesciunt ipsam sapiente, tempora porro quidem quisquam alias deserunt! Voluptatum adipisci, natus exercitationem laboriosam commodi optio, quibusdam quia possimus odio consequatur dolorum corporis delectus rerum repudiandae velit nisi earum quae debitis rem iure quidem. Pariatur velit quibusdam ea natus perspiciatis, reprehenderit alias! Itaque dignissimos, voluptatem veniam minus cumque perspiciatis esse nostrum repellendus. Dolore eligendi explicabo aliquam nemo? Itaque dolorem perspiciatis at eligendi commodi.</p>
        <iframe className="movie_trailer"  width="640" height="400" src={props.movie.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </>
  )
}
