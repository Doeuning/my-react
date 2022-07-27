import { useEffect, useState } from "react";
function Movie(props) {
  const [data, setData] = useState(null);
  const apiKey = "c79521c72b6690785c671f45832e339b";
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(function (res) {
        return res.json();
      })
      .then(function (datas) {
        setData(datas.results);
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }, []);
  return (
    <>
      <ul className="movie-list">
        {data ? (
          data.map((el) => (
            <li key={el.id} className={props.name}>
              <img
                src={`https://image.tmdb.org/t/p/original${el.poster_path}`}
                alt={el.original_title}
              />
              <h4>{el.original_title}</h4>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </>
  );
}

export default Movie;
