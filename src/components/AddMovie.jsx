
export default function AddMovie() {
  return (
    <form  className="add-form">
      <h2>Add new film</h2>
      <input
        name="title"
        type="text"
        placeholder="Movie title"
      />
      <input
        name="year"
        type="text"
        placeholder="Year"
      />
      <input
        name="genre"
        type="text"
        placeholder="Genre"
      />
      <input
        name="duration"
        type="number"
        placeholder="Duration"
      />
      <textarea
        name="description"
        placeholder="Movie description"
      ></textarea>
      <input
        name="country"
        type="text"
        placeholder="Country"
      />
      <input
        name="actors"
        type="text"
        placeholder="Actors"
      />
      <input
        name="director"
        type="text"
        placeholder="Director"
      />
      <input
        name="poster"
        type="text"
        placeholder="Poster"
      />
      <input
        name="trailer"
        type="text"
        placeholder="Trailer"
      />
      <input
        name="rating"
        type="number"
        placeholder="Rating"
        min="1" max="10"
      />
      <select name="cars" id="cars" form="carform">
        <option name="type">Cartoon</option>
        <option name="type">Movie</option>
        <option name="type">Series</option>
      </select>
      <input
        name="watched"
        type="checkbox"
      />
      <input
        name="favourite"
        type="checkbox"
      />
      <input
        name="comingSoon"
        type="checkbox"
        placeholder="Trailer"
      />
      <textarea
        name="comment"
        placeholder="Comment"
      ></textarea>



      <button type="submit">Add todo</button>
    </form>
  );
}
