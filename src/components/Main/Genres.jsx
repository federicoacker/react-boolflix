import useGenreContext from "../../hooks/useGenreContext";
import useGenres from "../../hooks/useGenres"

function Genres() {
  const [genres, loadingErrors] = useGenres();
  const { genreId, changeGenre } = useGenreContext();

  return (
    loadingErrors.length === 0 &&
    <div>
      <label htmlFor="genre-select" className="form-label text-danger">Genere</label>
      <select data-bs-theme="dark" className="form-select" id="genre-select" name="genre-select" value={genreId} onChange={changeGenre}>
        <option value="-1">Tutti</option>
        {genres.map(genre => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>
    </div>

  );
}

export default Genres