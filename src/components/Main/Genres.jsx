import useGenreContext from "../../hooks/useGenreContext";
import useGenres from "../../hooks/useGenres"

function Genres() {
  const [genres, loadingErrors] = useGenres();
  const {genreId, changeGenre} = useGenreContext();

  return (
    <ul>
      {loadingErrors.length === 0 && 
      <select name="genre-select" value={genreId} onChange={changeGenre}>
        <option value="-1">Tutti</option>
        {genres.map(genre => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>
      }
    </ul>
  );
}

export default Genres